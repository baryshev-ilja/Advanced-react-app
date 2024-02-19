import { memo, useCallback } from 'react';
import { DynamicReducerLoad, ReducersList } from 'shared/lib/HOC/DynamicReducerLoad';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { CommentForm, CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { getArticleCommentsIsLoading } from 'features/AddComments/model/selectors/getArticleCommentsData';
import { CommentListSkeletons } from 'entities/Comment/ui/CommentList/CommentListSkeletons';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {
    articleCommentsReducer,
    getArticleComments,
} from '../../model/slice/articleCommentsSlice/articleCommentsSlice';
import { sendComment } from '../../model/services/sendCommentByArticleId/sendComment';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice/addCommentFormSlice';

interface AddCommentsForArticleProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
    articleComments: articleCommentsReducer,
};

const AddCommentsForArticle = memo((props: AddCommentsForArticleProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const text = useSelector(getAddCommentFormText);
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const changeCommentTextHandler = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const sendCommentFormHandler = useCallback(() => {
        dispatch(sendComment(text || ''));
        changeCommentTextHandler('');
    }, [dispatch, text, changeCommentTextHandler]);

    let contentComments;

    if (comments?.length === 0) {
        contentComments = <Text description={t('Комментарии не найдены')} />;
    }

    if (isLoading) {
        contentComments = <CommentListSkeletons />;
    }

    if (comments?.length > 0) {
        contentComments = <CommentList loading={isLoading} comments={comments} />;
    }

    return (
        <DynamicReducerLoad reducers={reducers}>
            <CommentForm
                text={text}
                onChangeComment={changeCommentTextHandler}
                onSendComment={sendCommentFormHandler}
            />
            {contentComments}
        </DynamicReducerLoad>
    );
});

export default AddCommentsForArticle;
