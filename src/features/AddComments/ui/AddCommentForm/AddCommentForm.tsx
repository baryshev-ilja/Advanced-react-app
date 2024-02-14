import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { DynamicReducerLoad, ReducersList } from 'shared/lib/hooks/DynamicReducerLoad';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { CommentForm, CommentList } from 'entities/Comment';
import {
    articleCommentsReducer,
    getArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/getArticleCommentsData';
import { CommentListSkeletons } from 'entities/Comment/ui/CommentList/CommentListSkeletons';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addNewCommentFormSlice';

interface AddNewCommentFormProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleCommentsReducer,
};

const AddCommentForm = memo((props: AddNewCommentFormProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const changeCommentHandler = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    return (
        <DynamicReducerLoad reducers={reducers}>
            <CommentForm text={text} onChangeComment={changeCommentHandler} />
            { comments?.length === 0
                ? <CommentListSkeletons />
                : <CommentList loading={isLoading} comments={comments} />}
        </DynamicReducerLoad>
    );
});

export default AddCommentForm;
