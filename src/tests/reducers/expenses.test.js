import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined,{ type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if ID does not exist', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses]);
});

test('should add an expense', () => {
    const expense = {
        id: '4200',
        description: 'internet bill',
        note: '',
        amount: 2000,
        createdAt: 10000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

test('should edit an expense', () => {
    const id = expenses[0].id;
    const updates = {
        description: 'updated expense - gum',
        note: 'I updated the expense'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([{
        ...expenses[0],
        ...updates
    },expenses[1],expenses[2]]);
});

test('should not edit any expense if ID not found', () => {
    const id = 'aabbccdd';
    const updates = {
        description: 'updated this with ID aabbccdd',
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[0],expenses[1]]
    };
    const state = expensesReducer(undefined,action);
    expect(state).toEqual([expenses[0],expenses[1]]);
});