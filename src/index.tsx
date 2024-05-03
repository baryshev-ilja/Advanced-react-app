import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

import { StoreProvider } from '@/app/providers/StoreProvider';
import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';
import { ForceUpdateProvider } from '@/shared/render/forceUpdate';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден, и react приложение не может быть вмонтировано!');
}
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <App />
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
