import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import { AddExpense, addExpense}  from '../actions/expenses'
const AddExpensePage = (props) => (
    <div>
     <h1>
       Add Expense
     </h1>
     <ExpenseForm
      onSubmit={(expense) => {
       props.dispatch(addExpense(expense))
       props.history.push('/')
      }}
     />
    </div>
  )

  export default connect()(AddExpensePage);