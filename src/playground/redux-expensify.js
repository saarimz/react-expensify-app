
// store creation



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'rent',
    createdAt: 1000,
    amount: 100
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'coffee',
    createdAt: -1000,
    amount: 400
}));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

const demoState = {
    expenses: [
        {
            id: 'xyz',
            description: 'jan rent',
            note: 'this was the final payment for address',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'date', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};




