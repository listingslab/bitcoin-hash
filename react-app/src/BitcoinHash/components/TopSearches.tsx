import { useQuery, gql } from '@apollo/client';

const TOP_SEARCHES_QUERY = gql`
  query GetTopSearches {
    bitcoin {
      topHolders: address(
        limit: 5
        options: { desc: "balance" }
      ) {
        address
        balance
      }
      topTransactions: transactions(
        limit: 5
        options: { desc: "count" }
      ) {
        count
        sender {
          address
        }
        receiver {
          address
        }
      }
    }
  }
`;

function TopSearches(): JSX.Element {
  const { loading, error, data } = useQuery(TOP_SEARCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const topHolders = data.bitcoin.topHolders;
  const topTransactions = data.bitcoin.topTransactions;

  return (
    <div>
      <h2>Top Searched Addresses:</h2>
      <ul>
        {topHolders.map((holder: any) => (
          <li key={holder.address}>
            <p>Address: {holder.address}</p>
            <p>Balance: {holder.balance}</p>
          </li>
        ))}
      </ul>

      <h2>Top Searched Transactions:</h2>
      <ul>
        {topTransactions.map((transaction: any) => (
          <li key={transaction.count}>
            <p>Sender: {transaction.sender.address}</p>
            <p>Receiver: {transaction.receiver.address}</p>
            <p>Count: {transaction.count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopSearches;
