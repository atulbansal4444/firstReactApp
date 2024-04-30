import React, { useState } from 'react'
import '../componentStyling/AddForm.css';

const CreateExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        const elem = document.getElementById('name-field');
        if (event.target.value === '') {
            elem.style.borderColor = 'red';
        } else {
            elem.style.borderColor = 'lightgreen';
        }
    };

    const amountHandler = (event) => {
        setAmount(event.target.value);
        const elem = document.getElementById('expense-field');
        if (event.target.value < 0) {
            elem.style.borderColor = 'red';
        } else {
            elem.style.borderColor = 'lightgreen';
        }
    }

    const dateHandler = (event) => {
        setDate(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title) {
            alert('Please enter expense name');
            return;
        }

        if (!amount) {
            alert('Please enter expense amount');
            return;
        }

        if (!date) {
            alert('Please enter expense date');
            return;
        }

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };

        console.log(expenseData);

        props.onSaveExpanseData(expenseData);
        resetToDefaultValues();
        props.onCancelClick();
    }

    const resetToDefaultValues = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        id='name-field'
                        type='text'
                        onChange={titleChangeHandler}
                        value={title} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        id='expense-field'
                        type='number'
                        min='0.00'
                        step='0.01'
                        value={amount}
                        onChange={amountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2024-12-31'
                        value={date}
                        onChange={dateHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancelClick}> Cancel </button>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'> Add Expense </button>
                </div>
            </div>
        </form>
    )
}

export default CreateExpenseForm;
