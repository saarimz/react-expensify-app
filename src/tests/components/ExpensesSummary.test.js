import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render component with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={420}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render component correctly with 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={5000.23}/>);
    expect(wrapper).toMatchSnapshot();
});