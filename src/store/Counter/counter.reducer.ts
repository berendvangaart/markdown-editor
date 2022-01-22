import { CounterAction, CountState } from '../../interfaces/counter-types';
import {INCREMENT, DECREMENT} from './counter.types';

const INITIAL_STATE: CountState = {
    count: 0,
};

const reducer = (state = INITIAL_STATE, action: CounterAction) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
