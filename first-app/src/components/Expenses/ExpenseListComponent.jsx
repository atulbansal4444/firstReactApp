import React from 'react';
import ExpenseItem from './ExpenseItem';

import '../componentStyling/ExpenseList.css';

const ExpenseListComponent = (props) => {

    if (props.expenses.length === 0) {
        return (<h2 className='expenses-list__fallback'>Found no expenses.</h2>);
    }
    
    return (
        <ul className='expenses-list'>
            {
                props.expenses
                    .sort((a, b) => b.amount - a.amount)
                    .map(expense =>
                        <ExpenseItem
                            title={expense.title}
                            id={expense.id}
                            key={expense.id}
                            amount={expense.amount}
                            date={expense.date}
                            updateExpensesFunc={props.updateExpensesFunc} />)
            }
        </ul>
    )
}

export default ExpenseListComponent;
