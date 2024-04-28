import React, { useState } from 'react';
import ExpensesChartComponent from './ExpensesChartComponent';
import ExpensesFilter from './ExpenseFilter';
import ExpenseListComponent from './ExpenseListComponent';

import '../componentStyling/ExpensesComponent.css';

const ExpensesComponent = (props) => {
    const [year, setYear] = useState('');

    const setFilteredYear = (filteredYear) => {
        setYear(filteredYear);
    };

    const filteredList = props.expenses.filter(expense => {
        if (year === '') {
            return props.expenses;
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
                updateExpensesFunc={props.updateExpensesFunc} />
        </div>
    );
}

export default ExpensesComponent;
