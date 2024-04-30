const { v4: uuidv4 } = require('uuid');
const HttpError = require('./../models/http-error');

const getAllExpenses = () => {

};

const createExpense = async (req, res, next) => {
    const { title, amount, date } = req.body;

    const createdExpense = {
        id: uuidv4(),
        title,
        amount,
        date
    };

    res.status(201).json({ expense: createdExpense });
};

const updateExpense = (req, res, next) => {
    const { title, amount } = req.body;

    const expenseId = req.params.pid;
};

const deleteExpense = (req, res, next) => {
    const deleteExpenseId = req.params.id;
};

exports.getAllExpenses = getAllExpenses;
exports.createExpense = createExpense;
exports.updateExpense = updateExpense;
exports.deleteExpense = deleteExpense;
