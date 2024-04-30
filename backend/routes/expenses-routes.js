const express = require('express');
const router = express.Router();

const expensesController = require('./../controllers/expenses-controller');

router.get('/', expensesController.getAllExpenses);

router.post('/', expensesController.createExpense);

router.post('/:id', expensesController.updateExpense);

router.delete('/:id', expensesController.deleteExpense);

module.exports = router;
