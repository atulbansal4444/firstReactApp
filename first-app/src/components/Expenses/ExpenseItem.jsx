import React, { useState } from 'react';
import DateComponent from './DateComponent';
import EditExpenseModal from '../editExpense/EditExpenseModal';

import '../componentStyling/ExpenseItem.css';

const ExpenseItem = (props) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    
    const {
        date,
        title,
        amount,
        id,
        updateExpensesFunc
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    }

	return (
        <div className='expense-item'>
            <EditExpenseModal
                isOpen={isOpen}
                closeModal={closeModal}
                style={customStyles}
                title={title}
                amount={amount}
                id={id}
                updateExpensesFunc={updateExpensesFunc} />
			<DateComponent date={date} />
			<div className='expense-item__description'>
				<h2> {title} </h2>
				<div className='expense-item__price'>₹ {amount}</div>
			</div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '19px',
                width: '15%'
            }}>
                <i
                    className='fa-regular fa-pen-to-square fa-2xl'
                    style={{ color: '#ffffff' }}
                    onClick={() => setIsOpen(true)} />
                <i
                    className='fa-regular fa-trash-can fa-2xl'
                    style={{ color: '#ffffff' }}
                    onClick={() => updateExpensesFunc('delete', id)} />
            </div>
		</div>
	);
};

export default ExpenseItem;
