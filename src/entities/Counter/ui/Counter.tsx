import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    const increment = () => {
        dispatch(counterActions.increment());
    };

    return (
        <div data-testid="counter">
            <h1 data-testid="counter-value">{counterValue}</h1>
            <button
                type="button"
                data-testid="increment-btn"
                onClick={increment}
            />
            <button
                type="button"
                data-testid="decrement-btn"
                onClick={decrement}
            />
        </div>
    );
};
