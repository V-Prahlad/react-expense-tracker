const ExpenseData = [
  {
    type: false,
    amount: 200,
    remark: 'Purchased a Bag',
    time: new Date().toLocaleDateString(),
  },
  {
    type: true,
    amount: 200,
    remark: 'Credited from Paytm Cashback',
    time: new Date().toLocaleDateString(),
  },
  {
    type: false,
    amount: 500,
    remark: 'Invested in Crypto',
    time: new Date().toLocaleDateString(),
  },
  {
    type: true,
    amount: 200,
    remark: 'Credited to HDFC ',
    time: new Date().toLocaleDateString(),
  },
  {
    type: false,
    amount: 200,
    remark: 'Purcahesd a bathing shop',
    time: new Date().toLocaleDateString(),
  },
  {
    type: true,
    amount: 200,
    remark: 'Returned by Akhil',
    time: new Date().toLocaleDateString(),
  },
];

module.exports = ExpenseData;
