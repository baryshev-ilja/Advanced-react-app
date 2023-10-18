import someFn from './test'
import {render} from "react-dom";
import {Counter} from "./components/Counter";

someFn(123);

render(
    <div>
        <Counter/>
    </div>,
    document.getElementById('root')
)
