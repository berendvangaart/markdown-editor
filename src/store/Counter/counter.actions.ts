import { CounterAction } from "../../interfaces/counter-types";
import {INCREMENT, DECREMENT} from "./counter.types";

export const increaseCounter = (amount: number): CounterAction => {
    return {
        type: INCREMENT,
        payload: amount
    };
};

export const decreaseCounter = (amount: number): CounterAction => {
    return {
        type: DECREMENT,
        payload: amount
    };
};
