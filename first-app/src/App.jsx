import React, { useState } from 'react';
import AddExpenseComponent from './components/addExpense/AddExpenseComponent.jsx';
import ExpensesComponent from './components/Expenses/ExpensesComponent.jsx';
import { DUMMY_EXPENSES } from './components/helperFunc/helper.js';

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

    const updateExpenses = (op, id, expenseData) => {
        if (op === 'delete') {
            setExpenses(prevExpenses => {
                const filteredExpenses = prevExpenses.filter(exp => exp.id !== id);
                return filteredExpenses;
            });
        } else if (op === 'update') {
            setExpenses(prevExpenses => {
                return prevExpenses.map(obj => {
                    if (obj.id === id) {
                        return {
                            ...obj,
                            title: expenseData.title,
                            amount: expenseData.amount
                        };
                    }
                    return obj;
                });
            });
        }
    };

    return (
        <>
            <AddExpenseComponent
                onAddExpense={addExpenseHandler}
                showForm={false}/>
            <ExpensesComponent expenses={expenses} updateExpensesFunc={updateExpenses} />
        </>
    );
}

export default App;
