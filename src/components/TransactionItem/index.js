// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, deleteTransaction} = props
  const {id, title, amount, type} = transaction
  const onClickDelete = () => {
    deleteTransaction(id)
  }
  return (
    <tr className="history-list">
      <td className="item-width">{title}</td>
      <td className="item-width">{amount}</td>
      <td className="item-width">{type}</td>
      <button
        type="button"
        id="delete"
        className="delete-button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </tr>
  )
}

export default TransactionItem
