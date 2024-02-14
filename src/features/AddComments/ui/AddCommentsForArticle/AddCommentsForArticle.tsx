import { memo, useCallback } from 'react';
import { DynamicReducerLoad, ReducersList } from 'shared/lib/hooks/DynamicReducerLoad';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { CommentForm, CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { getArticleCommentsIsLoading } from 'features/AddComments/model/selectors/getArticleCommentsData';
import { CommentListSkeletons } from 'entities/Comment/ui/CommentList/CommentListSkeletons';
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

    return (
        <DynamicReducerLoad reducers={reducers}>
            <CommentForm
                text={text}
                onChangeComment={changeCommentTextHandler}
                onSendComment={sendCommentFormHandler}
            />
            { comments?.length === 0
                ? <CommentListSkeletons />
                : <CommentList loading={isLoading} comments={comments} />}
        </DynamicReducerLoad>
    );
});

export default AddCommentsForArticle;
