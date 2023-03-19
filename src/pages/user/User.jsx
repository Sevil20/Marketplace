import React from 'react'
import userphoto from './userphoto.png'
import './User.css'
export default function () {
  return (
    <div>
        <div className='user-container'>
            <div className='container'>
                <div >
                    <img className='pp-user' src={userphoto}></img>
                </div>
                <div className='user-info'>
                 <h3 className='user-name'>UserName</h3>
                 <br></br>
                 <div ><i className="fa-brands fa-bitcoin"></i>    Bitcoin BTC <br /></div>
        <div ><i className="fa-brands fa-ethereum"></i>     Ethereum ETH <br /></div>
        <div ><i className="fa-solid fa-t"></i>    Tether USDT <br /></div>
        <div >  <i className="fa-solid fa-earth-americas"></i>   B inance Coin BNB <br /></div>
        <p className='bonus'>🎃 Bonus</p>
        
            <button className='btn-reset'>Reset</button>
         
                </div>
            </div>
        </div>
    </div>
  )
}
