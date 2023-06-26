import { createStore } from 'redux';
export interface AppState {
  inputValue: string;
  isNumeric: boolean;
  isKeyboardVisible: boolean;
}
// Define initial state
const initialState = {
  inputValue: '',
  isNumeric: false,
  isKeyboardVisible: false,
};

// Define actions
export const setInputValue = (value: string) => ({
  type: 'SET_INPUT_VALUE',
  payload: value,
});

export const setIsNumeric = (isNumeric: boolean) => ({
  type: 'SET_IS_NUMERIC',
  payload: isNumeric,
});

export const setIsKeyboardVisible = (isVisible: boolean) => ({
  type: 'SET_IS_KEYBOARD_VISIBLE',
  payload: isVisible,
});

// Define reducer
const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload,
      };
    case 'SET_IS_NUMERIC':
      return {
        ...state,
        isNumeric: action.payload,
      };
    case 'SET_IS_KEYBOARD_VISIBLE':
      return {
        ...state,
        isKeyboardVisible: action.payload,
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

export default store;
