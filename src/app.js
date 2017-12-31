import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
    description: "Water bill",
    amount: 4200
}));

store.dispatch(addExpense({
    description: "Gas bill",
    amount: 6900,
    createdAt: 100
}));

store.dispatch(addExpense({
    description: "Rent",
    amount: 129500, 
    createdAt: 50
}));

store.subscribe(() => (console.log(getVisibleExpenses(store.getState().expenses,store.getState().filters))));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById("app"));