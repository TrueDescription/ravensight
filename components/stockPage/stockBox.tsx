import React from "react";

function StockBox() {
    return (
        <main>
            <div>
                <h1>MSFT</h1>
                <h2>Microsoft Corp.</h2>
                <h1>87.11 USD</h1>
                <h1>Today's Change</h1>
                <h2>Up +$1.25Up +0.98%</h2>
                <img src="/stockGraph.png"/>

            </div>
        </main>
        
    );
}

export {StockBox};