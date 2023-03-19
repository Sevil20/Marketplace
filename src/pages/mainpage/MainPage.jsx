import React from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css'


export default function MainPage() {
  return (
    <div id='MainPage'>
      <div style={{ display: "flex", padding: "120px" }} className="upside">
        <h1>Buy, trade, and donate cryptocurrencies on CryptoCell</h1>
        <Link to={"buycrypto"}><button className="MainPage-start"> Get Started </button></Link>
      </div>

      <div className="MainPage-crypto-block">
        <div style={{ color: "orange" }}><i className="fa-brands fa-bitcoin"></i>Bitcoin BTC <br /> $22,329</div>
        <div style={{ color: "blue" }}><i className="fa-brands fa-ethereum"></i>Ethereum ETH <br /> $1.586</div>
        <div style={{ color: "green" }}><i className="fa-solid fa-t"></i>Tether USDT <br /> $1.00</div>
        <div style={{ color: " rgb(251, 198, 66)" }}><i className="fa-solid fa-earth-americas"></i>Binance Coin BNB <br />$289.10</div>
      </div>
    </div>
  )
}
