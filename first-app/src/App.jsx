import React, { useState } from 'react';
import AddExpenseComponent from './components/addExpense/AddExpenseComponent.jsx';
import ExpensesComponent from './components/Expenses/ExpensesComponent.jsx';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

    const updateExpenses = (op, id) => {
        if (op === 'delete') {
            setExpenses(prevExpenses => {
                const filteredExpenses = prevExpenses.filter(exp => exp.id !== id);
                return filteredExpenses;
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
