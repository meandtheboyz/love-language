    import { UPDATE_RADIO_INPUT, UPDATE_CHECKBOX_INPUT, UPDATE_TEXT_INPUT, UPDATE_INPUT } from "./actionTypes";

export const updateInput = content => ({
    type: UPDATE_INPUT,
    payload: {...content }
});
