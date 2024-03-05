import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticlesPage.test', () => {
    test('success fetching', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 1,
                hasMore: true,
                ids: [],
                entities: {},
                isLoading: false,
            },
        });

        const action = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalled();
    });

    test('fetchNextArticlesPage not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 1,
                hasMore: false,
                ids: [],
                entities: {},
                isLoading: false,
            },
        });

        const action = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });

    test('fetchNextArticlesPage is loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 1,
                hasMore: false,
                ids: [],
                entities: {},
                isLoading: true,
            },
        });

        const action = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
