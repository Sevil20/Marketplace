import React from "react";
import {useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "../../features/counter/counterSlice";
import "./Buycrypto.css";

export default function Buycrypto() {
  const count = useSelector((state) => {
    // console.log(state)
    return state.counter.value;
  });
  const dispatch = useDispatch();

  return (
    <div id="buycrypto">
      <h1>{count}</h1>
      <table>
        <tbody>
        <tr className="table-row">
          <th id="crypto-name">Name</th>
          <th>Last Price</th>
          <th>24h Change</th>
          <th>Market Cap</th>
          <th>Exchange</th>
        </tr>
        <tr className="table-row">
          <td>Binance Coin BNB</td>
          <td>$289.7</td>
          <td>+0.10%</td>
          <td>$45,789M</td>

          <td>
            <button onClick={() => dispatch(increment())} className="buy-button">Buy</button>
            <button onClick={() => dispatch(decrement())} className="sell-button">Sell</button>
          </td>
        </tr>
        <tr className="table-row">
          <td>Bitcoin BTC</td>
          <td>$22,329</td>
          <td>-0.25%</td>
          <td>$431,134M</td>
          <td>
            <button onClick={() => dispatch(increment())} className="buy-button">Buy</button>
            <button onClick={() => dispatch(decrement())} className="sell-button">Sell</button>
          </td>
        </tr>
        <tr className="table-row">
          <td>Ethereum ETH</td>
          <td>$1.584</td>
          <td>-0.25%</td>
          <td>$191,434M</td>
          <td>
            <button onClick={() => dispatch(increment())} className="buy-button">Buy</button>
            <button onClick={() => dispatch(decrement())} className="sell-button">Sell</button>
          </td>
        </tr>
        <tr className="table-row">
          <td>Galxe GAL</td>
          <td>$1.65</td>
          <td>-3.84%</td>
          <td>$90M</td>
          <td>
            <button onClick={() => dispatch(increment())} className="buy-button">Buy</button>
            <button onClick={() => dispatch(decrement())} className="sell-button">Sell</button>
          </td>
        </tr>
        <tr className="table-row">
          <td>Green Metaverse Token GMT</td>
          <td>$0.389</td>
          <td>-1.99%</td>
          <td>$233M</td>
          <td>
            <button onClick={() => dispatch(increment())} className="buy-button">Buy</button>
            <button onClick={() => dispatch(decrement())} className="sell-button">Sell</button>
          </td>
        </tr>

        <tr className="table-row">
          <td>Tether USDT</td>
          <td>$1.00</td>
          <td>+0.12%</td>
          <td>$71,359.12M</td>
          <td>
            <button onClick={() => dispatch(increment())} className="buy-button">Buy</button>
            <button onClick={() => dispatch(decrement())} className="sell-button">Sell</button>
          </td>
        </tr>

        <tr className="table-row">
          <td>Dogecoin DOGE</td>
          <td>$0.07541000</td>
          <td>-1.17%</td>
          <td>$10,004.70M</td>
          <td>
            <button onClick={() => dispatch(increment())} className="buy-button">Buy</button>
            <button onClick={() => dispatch(decrement())} className="sell-button">Sell</button>
          </td>
        </tr>

        <tr className="table-row">
          <td>Litecoin LTC</td>
          <td>$89.54</td>
          <td>-0.17%</td>
          <td>$6,483.51M</td>
          <td>
            <button onClick={() => dispatch(increment())} className="buy-button">Buy</button>
            <button onClick={() => dispatch(decrement())} className="sell-button">Sell</button>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
    
  );
}
