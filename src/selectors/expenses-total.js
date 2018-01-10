const getExpensesTotal = (expenses) => (expenses.reduce((acc,{amount}) => acc + amount, 0));

export default getExpensesTotal;