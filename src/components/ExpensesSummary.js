import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesTotal, expensesCount}) => (
    <div>
        <p>Viewing {expensesCount} {expensesCount == 1 ? 'expense' : 'expenses'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    return {
        expensesTotal: getExpensesTotal(visibleExpenses),
        expensesCount: visibleExpenses.length
    }
};

export default connect(mapStateToProps)(ExpensesSummary);