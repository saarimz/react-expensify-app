import { AddExpensePage } from '../../components/AddExpensePage';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>);
});

test('should render add expense page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});