import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: 'INCOME',
    transactionsList: [],
  }

  onTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmountInput = event => {
    this.setState({amountInput: parseInt(event.target.value)})
  }

  onTypeInput = event => {
    this.setState({typeInput: event.target.value})
  }

  createTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput, transactionsList} = this.state
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: typeInput,
    }
    const newTransactionsList = [...transactionsList, newTransaction]
    this.setState({
      titleInput: '',
      amountInput: '',
      typeInput,
      transactionsList: newTransactionsList,
    })
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionsList = transactionsList.filter(
      each => each.id !== id,
    )
    this.setState({
      transactionsList: updatedTransactionsList,
    })
  }

  render() {
    const {titleInput, amountInput, transactionsList} = this.state
    return (
      <div className="container">
        <div className="money-manager-header">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="money-manager-title">Money Manager</span>
          </p>
        </div>
        <MoneyDetails transactionsList={transactionsList} />
        <div className="money-manager-footer">
          <div className="transaction-box">
            <form onSubmit={this.createTransaction}>
              <h3>Add Transaction</h3>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                type="text"
                id="title"
                onChange={this.onTitleInput}
                placeholder="TITLE"
                className="input-element"
                value={titleInput}
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                type="text"
                id="amount"
                onChange={this.onAmountInput}
                placeholder="AMOUNT"
                className="input-element"
                value={amountInput}
              />
              <br />
              <label htmlFor="type">TYPE</label>
              <br />
              <select
                id="type"
                onChange={this.onTypeInput}
                className="input-element"
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId}>{each.displayText}</option>
                ))}
              </select>
              <br />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="history-box">
            <table>
              <h3>History</h3>
              <tr className="list-type">
                <th className="width">Title</th>
                <th className="width">Amount</th>
                <th className="width">Type</th>
                <button type="button" className="fake-delete-button">
                  <p>fb</p>
                </button>
              </tr>
              {transactionsList.map(each => (
                <TransactionItem
                  transaction={each}
                  key={each.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
