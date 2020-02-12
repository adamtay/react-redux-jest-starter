import { ActionPayload } from '../helpers/actions';
import AppActionTypes from './actionTypes';

export default {
    ActionWithPayload: (value: string): ActionPayload<string> => ({
        type: AppActionTypes.ActionTypeName,
        payload: value
    })
};
