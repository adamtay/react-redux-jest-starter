import { action } from 'typesafe-actions';

const ActionWithoutPayload = () => action('APP/ACTION_WITHOUT_PAYLOAD');
const ActionWithPayload = (payload: string) => action('APP/ACTION_WITH_PAYLOAD', { payload });

export default {
    ActionWithoutPayload,
    ActionWithPayload
};
