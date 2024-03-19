import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

import { initArticlesList } from './initArticlesList';

import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';

jest.mock('../fetchArticleList/fetchArticleList');

describe('initArticlesList.test', () => {
    test('success inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesList, {
            articlesPage: {
                page: 1,
                hasMore: true,
                ids: [],
                entities: {},
                isLoading: false,
                _inited: false,
            },
        });

        const searchParams = new URLSearchParams();

        const action = await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalled();
    });

    test('initArticlesList was inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesList, {
            articlesPage: {
                page: 1,
                hasMore: true,
                ids: [],
                entities: {},
                isLoading: false,
                _inited: true,
            },
        });

        const searchParams = new URLSearchParams();

        const action = await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
