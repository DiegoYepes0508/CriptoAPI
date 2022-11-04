import CoinRows from "../components/CoinRows";

const titles = ["#", "Name", "Price", "Price Change", "24h Volume "];
function TableCoins({ coins, search }) {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table table-dark mt-5">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRows key={coin.index} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}

export default TableCoins;
