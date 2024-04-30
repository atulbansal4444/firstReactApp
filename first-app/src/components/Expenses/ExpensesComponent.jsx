import React, { useState } from 'react';
import ExpensesChartComponent from './ExpensesChartComponent';
import ExpensesFilter from './ExpenseFilter';
import ExpenseListComponent from './ExpenseListComponent';

import '../componentStyling/ExpensesComponent.css';

const ExpensesComponent = ({ expenses, updateExpensesFunc }) => {
    const [year, setYear] = useState('');

    const setFilteredYear = (filteredYear) => {
        setYear(filteredYear);
    };

    const filteredList = expenses.filter(expense => {
        if (year === '') {
            return expenses;
        }
        return expense.date.getFullYear().toString() === year;
    });
    
    return (
        <div className="expenses">
            <ExpensesFilter
                selectedYear={year}
                onSelectYear={setFilteredYear} />
            <ExpensesChartComponent expenses={filteredList} />
            <ExpenseListComponent
                expenses={filteredList}
                updateExpensesFunc={updateExpensesFunc} />
        </div>
    );
}

export default ExpensesComponent;
