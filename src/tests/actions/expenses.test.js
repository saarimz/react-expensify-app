import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startSetExpenses, setExpenses, startAddExpense, addExpense, startRemoveExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const expenseToDelete = expenses[0];
    store.dispatch(startRemoveExpense(expenseToDelete)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: expenseToDelete.id
        });
        return database.ref(`expenses/${expenseToDelete.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
})

test('should setup edit expense action object', () => {
    const action = editExpense('420id',{
        note: 'This is a personal expense',
        amount: 1000
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '420id',
        updates: {
            note: 'This is a personal expense',
            amount: 1000
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to db and store', (done) => {

    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        createdAt: 20000,
        note: 'This one is better'
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: { 
                id: expect.any(String),
                ...expenseData 
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done();
    });
});

test('should add expenses with defaults to db and store', (done) => {
    const store = createMockStore({});
    const defaultExpenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultExpenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpenseData);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});