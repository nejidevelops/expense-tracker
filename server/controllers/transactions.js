// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send('Get transactions');
}

// @desc Add transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransactions = (req, res, next) => {
  res.send('New transactions');
}

// @desc Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransactions = (req, res, next) => {
  res.send('DELETE transactions');
}