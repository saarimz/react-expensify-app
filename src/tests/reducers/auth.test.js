import authReducer from '../../reducers/auth';

test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set state on log in', () => {
    const action = {
        type: 'LOGIN',
        uid: '123xy'
    };
    const state = authReducer({},action);
    expect(state.uid).toBe(action.uid);
});

test('should set state on log out', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid: '123' }, action);
    expect(state).toEqual({});
});