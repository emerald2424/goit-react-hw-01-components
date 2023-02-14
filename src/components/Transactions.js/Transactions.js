import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => (
    <table class="transaction-history">
    <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>

    <tbody>
    {items.map(({id, type, amount, currency}) => (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    ))}    
        
        
    </tbody>
    </table>
)

TransactionHistory.PropsTypes = {
    transactions: PropTypes.array,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.string,
}