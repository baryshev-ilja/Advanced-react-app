import someFn from './test'
import {render} from "react-dom";
import App from "./App";

someFn(123);

render(
    <App/>,
    document.getElementById('root')
)
