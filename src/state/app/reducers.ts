import { ActionPayload } from '../helpers/actions';
import { AppState } from './state';
import AppActionTypes from './actionTypes';

const initialState: AppState = {
    propertyName: ''
};

export default (state = initialState, action: ActionPayload<unknown>): AppState => {
    switch (action.type) {
        case AppActionTypes.ActionTypeName: {
            return {
                ...state,
                propertyName: action.payload as string
            };
        }
        default:
            return state;
    }
};
