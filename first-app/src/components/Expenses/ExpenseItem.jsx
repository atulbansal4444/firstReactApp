import React from 'react';
import DateComponent from './DateComponent';

import '../componentStyling/ExpenseItem.css';

const ExpenseItem = (props) => {
    const {
        date,
        title,
        amount,
        id,
        updateExpensesFunc
    } = props;
	return (
		<div className='expense-item'>
			<DateComponent date={date} />
			<div className='expense-item__description'>
				<h2> {title} </h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '19px',
                width: '15%'
            }}>
                <i
                    class='fa-regular fa-pen-to-square fa-2xl'
                    style={{ color: '#ffffff' }}
                    onClick={() => { }} />
                <i
                    class='fa-regular fa-trash-can fa-2xl'
                    style={{ color: '#ffffff' }}
                    onClick={() => { updateExpensesFunc('delete', id) }} />
            </div>
		</div>
	);
};

export default ExpenseItem;
