import someFn from './test'
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./app/App";
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';

someFn(123);

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
