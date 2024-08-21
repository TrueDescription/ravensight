
import React from "react";

function InfoInput() {
    return (
        <main>
            <div style={{display : 'grid'}}>
                <h1>Underlying stock symbol</h1>
                <label>Symbol:</label> <input value={"MSFT"}/>
                <label>Current Price:</label> <input value={1111} type="currency"/>
            </div>
            <div style={{display : 'grid'}}>
                <h1>Option</h1>
                <select name="orderType">
                    <option value="">Contract Type</option>
                    <option value="dog">Call</option>
                    <option value="dog">Put</option>
                </select>
                <select name="orderType">
                    <option value="">Order Type</option>
                    <option value="dog">Buy</option>
                    <option value="dog">Write</option>
                </select>
            </div>
        </main>
    );
}

export {InfoInput};