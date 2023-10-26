import someFn from './test'
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

someFn(123);

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)
