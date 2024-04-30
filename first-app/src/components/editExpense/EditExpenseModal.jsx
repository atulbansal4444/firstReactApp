import React, { useState } from 'react';
import Modal from 'react-modal';

import './EditExpenseModal.css';

Modal.setAppElement('#root');

const EditExpenseModal = ({ isOpen, closeModal, title, amount, id, updateExpensesFunc }) => {
    const [refTitle, setTitleValue] = useState(title);
    const [refAmount, setAmountValue] = useState(amount);

    const updateExpenseAndCloseModal = () => {
        if (refTitle === '') {
            alert('Please set some value to title');
            return;
        }

        updateExpensesFunc('update', id, { amount: refAmount, title: refTitle })
        closeModal();
    };

    const amountHandler = (event) => {
        setAmountValue(event.target.value);
        const elem = document.getElementById('edit-expense-field');
        if (event.target.value < 0) {
            elem.style.borderColor = 'red';
        } else {
            elem.style.borderColor = 'lightgreen';
        }
    }

    const titleChangeHandler = (event) => {
        setTitleValue(event.target.value);
        const elem = document.getElementById('title-field');
        if (event.target.value === '') {
            elem.style.borderColor = 'red';
        } else {
            elem.style.borderColor = 'lightgreen';
        }
    };

    return (
        <Modal isOpen={isOpen} contentLabel='Edit Expenses'>
            <h1>Edit Expense</h1>
            <div className='form-edit-expense'>
                <div>
                    <h3>Expense Title: </h3>
                    <input
                        id='title-field'
                        type='text'
                        onChange={titleChangeHandler}
                        value={refTitle} />
                </div>
                <div>
                    <h3>Expense Ampunt: </h3>
                    <input
                        id='edit-expense-field'
                        type='number'
                        min='0.00'
                        step='0.01'
                        value={refAmount}
                        onChange={amountHandler} />
                </div>
                <div>
                    <button onClick={() => updateExpenseAndCloseModal()}>
                        Update
                    </button>
                    <button onClick={() => closeModal()}>
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default EditExpenseModal;
