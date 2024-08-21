import React from "react";

function BuyBox() {
    return (
        <main>
            <div style={{display : 'grid'}}>
                <select name="orderType">
                    <option value="">Order Type</option>
                    <option value="dog">Buy</option>
                    <option value="dog">Sell</option>
                </select>
                <input value={"Shares"}></input>
                <input value={"Amount Per Share"}></input>
                <select name="account">
                    <option value="">Account</option>
                    <option value="dog">Non-Registered</option>
                    <option value="dog">TFSA</option>
                </select>
                <h1>Available Cash: $100,000</h1>
                <button>Review</button>
            </div>
        </main>
        
    );
}

export {BuyBox};