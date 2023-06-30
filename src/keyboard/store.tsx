import { createStore } from 'redux';
export interface AppState {
  inputValue1: string;
  inputValue2: string;
  inputValue3: string;
  isNumeric: boolean;
  isKeyboardVisible: boolean;
}
// Define initial state
const initialState = {
  inputValue1: '',
  inputValue2: '',
  inputValue3: '',
  isNumeric: false,
  isKeyboardVisible: false,
};

// Define actions
export const setInputValue1 = (value: string) => ({
  type: 'SET_INPUT_VALUE1',
  payload: value,
});
export const setInputValue2 = (value: string) => ({
  type: 'SET_INPUT_VALUE2',
  payload: value,
});
export const setInputValue3 = (value: string) => ({
  type: 'SET_INPUT_VALUE3',
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
    case 'SET_INPUT_VALUE1':
      return {
        ...state,
        inputValue1: action.payload,
      };
    case 'SET_INPUT_VALUE2':
      return {
        ...state,
        inputValue2: action.payload,
      };
    case 'SET_INPUT_VALUE3':
      return {
        ...state,
        inputValue3: action.payload,
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
