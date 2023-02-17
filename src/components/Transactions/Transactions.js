import PropTypes from 'prop-types';
import { Table } from './Transactions.styled';

export const TransactionHistory = ({items}) => (
    <Table>
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
    </Table>
)

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
    
}