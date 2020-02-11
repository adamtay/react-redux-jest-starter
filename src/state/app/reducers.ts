import { createReducer } from 'typesafe-actions';
import AppActions from './actions';
import { AppState } from './state';

export default createReducer('')
    .handleAction(AppActions.ActionWithoutPayload)
    .handleAction(AppActions.ActionWithPayload, (state: AppState, payload: string) => ({
        ...state,
        propertyName: payload
    }));
