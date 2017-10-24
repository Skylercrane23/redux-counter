// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const initialState = {
  currentValue: 0
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment(amount){
  return {
    amount: amount,
    type: INCREMENT
  }
}

export function decrement(amount){
  return {
    amount: amount,
    type: DECREMENT
  }
}

export default function counter(state = initialState, action){
  switch (action.type) {
    case INCREMENT:
      return { currentValue: state.currentValue + action.amount };
    case DECREMENT:
      return { currentValue: state.currentValue - action.amount };
    default:
			return state;
  }
}
