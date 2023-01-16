// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {transactionsList} = props
  let totalBalance = 0
  let totalIncome = 0
  let totalExpenses = 0
  transactionsList.map(each => {
    const {type, amount} = each
    if (type === 'INCOME') {
      totalIncome += amount
    }
    return totalIncome
  })
  transactionsList.map(each => {
    const {type, amount} = each
    if (type === 'EXPENSES') {
      totalExpenses += amount
    }
    return totalExpenses
  })
  totalBalance = totalIncome - totalExpenses
  return (
    <div className="md-container">
      <div className="balance box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-size"
        />
        <div className="stats">
          <p>Your Balance</p>
          <p className="amount">Rs. {totalBalance}</p>
        </div>
      </div>
      <div className="income box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-size"
        />
        <div className="stats">
          <p>Your Income</p>
          <p id="incomeAmount" className="amount">
            Rs. {totalIncome}
          </p>
        </div>
      </div>
      <div className="expenses box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-size"
        />
        <div className="stats">
          <p>Your Expenses</p>
          <p id="expensesAmount" className="amount">
            Rs. {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
