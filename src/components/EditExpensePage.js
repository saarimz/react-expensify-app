import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    constructor(props){
        super(props);
        this.onRemove= this.onRemove.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onRemove(){
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    onSubmit(expense){
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    action="Edit Expense"
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return ({
        editExpense: (id,expense) => {
            dispatch(editExpense(id,expense));
        },
        startRemoveExpense: (data) => {
            dispatch(startRemoveExpense(data));
        }
    });
};

const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => (expense.id == props.match.params.id))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);