import { login, logout } from '../../actions/auth';

test('should generate login object', () => {
    const action = login('1x2y3z');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '1x2y3z'
    });
});

test('should generate logout object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});