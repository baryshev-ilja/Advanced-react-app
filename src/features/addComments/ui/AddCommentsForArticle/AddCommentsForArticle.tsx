import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormSelectors';
import { getArticleCommentsIsLoading } from '../../model/selectors/getArticleCommentsData';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { sendComment } from '../../model/services/sendCommentByArticleId/sendComment';
import { articleCommentsReducer } from '../../model/slice';
import { addCommentFormActions } from '../../model/slice/addCommentFormSlice/addCommentFormSlice';
import { getArticleCommentsList } from '../../model/slice/articleCommentsSlice/articleCommentsSlice';

import { CommentForm, CommentList, CommentListSkeletons } from '@/entities/comment';
import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

interface AddCommentsForArticleProps {
    id: string;
}

const reducers: ReducersList = {
    articleComments: articleCommentsReducer,
};

const AddCommentsForArticle = memo((props: AddCommentsForArticleProps) => {
    const { id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const text = useSelector(getAddCommentFormText);
    const comments = useSelector(getArticleCommentsList.selectAll);
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
        contentComments = (
            <ToggleFeatures
                name="isAppRedesigned"
                on={<TextRedesigned ui={t('Комментарии не найдены')} variant="ui" />}
                off={<TextDeprecated description={t('Комментарии не найдены')} />}
            />
        );
    }

    if (isLoading) {
        contentComments = <CommentListSkeletons />;
    }

    if (comments?.length > 0) {
        contentComments = <CommentList loading={isLoading} comments={comments} />;
    }

    return (
        <DynamicReducerLoad reducers={reducers}>
            <ToggleFeatures
                name="isAppRedesigned"
                on={(
                    <VStack gap="16" max data-testid="ArticleCommentsForm">
                        <TextRedesigned
                            title={t('Комментарии')}
                            size="sizeL"
                            fontWeight="semiBold"
                        />
                        <CommentForm
                            text={text}
                            onChangeComment={changeCommentTextHandler}
                            onSendComment={sendCommentFormHandler}
                        />
                        {contentComments}
                    </VStack>
                )}
                off={(
                    <VStack gap="16" max data-testid="ArticleCommentsForm">
                        <TextDeprecated title={t('Комментарии')} size={TextSize.L} />
                        <CommentForm
                            text={text}
                            onChangeComment={changeCommentTextHandler}
                            onSendComment={sendCommentFormHandler}
                        />
                        {contentComments}
                    </VStack>
                )}
            />
        </DynamicReducerLoad>
    );
});

export default AddCommentsForArticle;
