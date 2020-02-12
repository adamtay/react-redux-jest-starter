export interface Action {
    type: string;
}

export interface ActionPayload<P> extends Action {
    payload: P;
}
