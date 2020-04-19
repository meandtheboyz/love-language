import { UPDATE_RADIO_INPUT, UPDATE_CHECKBOX_INPUT, UPDATE_TEXT_INPUT, UPDATE_INPUT } from "../actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

/*
a = {
    "test1": {"option1": "value"},
    test1: {option1: 'option1'},
    test1: {option1: 'option1'},
    test1: {option1: 'option1'},
    test1: {option1: 'option1'},
}
*/