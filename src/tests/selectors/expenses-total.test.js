import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    expect(getExpensesTotal([])).toBe(0);
});

test('should correctly add up one expense', () => {
    const expense = expenses[0];
    expect(getExpensesTotal([expense])).toBe(expense.amount);
});

test('should correctly add up multiple expenses', () => {
    const expectedTotal = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    expect(getExpensesTotal(expenses)).toBe(expectedTotal);
})