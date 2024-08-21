import React from "react";

function InfoBox() {
    return (
        <main>
            <div>
            <table style={{border : 1}}>
                <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Bid</td>
                    <td>$87.10 x 1,400</td>
                </tr>
                <tr>
                    <td>Ask</td>
                    <td>$87.12 x 100</td>
                </tr>
                <tr>
                    <td>Last sale</td>
                    <td>$87.11 x 213</td>
                </tr>
                <tr>
                    <td>Open</td>
                    <td>$86.65</td>
                </tr>
                <tr>
                    <td>High</td>
                    <td>$87.19</td>
                </tr>
                <tr>
                    <td>Low</td>
                    <td>$86.05</td>
                </tr>
                <tr>
                    <td>Exchange</td>
                    <td>NASDAQ</td>
                </tr>
                <tr>
                    <td>Market cap</td>
                    <td>$9.68B</td>
                </tr>
                <tr>
                    <td>P/E ratio</td>
                    <td>60.31</td>
                </tr>
                <tr>
                    <td>52-week high</td>
                    <td>$92.40</td>
                </tr>
                <tr>
                    <td>52-week low</td>
                    <td>$65.39</td>
                </tr>
                <tr>
                    <td>Volume</td>
                    <td>551.84K</td>
                </tr>
                <tr>
                    <td>Average volume</td>
                    <td>2.84M</td>
                </tr>
                <tr>
                    <td>Yield</td>
                    <td>1.39%</td>
                </tr>
                </table>
            </div>
        </main>
        
    );
}

export {InfoBox};