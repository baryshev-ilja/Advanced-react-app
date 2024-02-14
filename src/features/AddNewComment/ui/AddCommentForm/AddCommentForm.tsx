import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { ReducersList, useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from 'features/AddNewComment/model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addNewCommentFormSlice';
import cls from './AddCommentForm.module.scss';

interface AddNewCommentFormProps {
    className?: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddNewCommentFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);

    useDynamicReducerLoad({
        reducers,
        removeAfterUnmount: true,
    });

    const onChangeComment = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.addCommentForm, {}, [className])}>
            <Input
                labelElement={t('Введите сообщение')}
                value={text}
                onChange={onChangeComment}
            />
            <Button>{t('Отправить')}</Button>
        </div>
    );
});

export default AddCommentForm;
