import React from "react";

function CalcOutput() {
    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', maxWidth: '400px' }}>
          <h2>Estimated Returns</h2>
          <p>As at 21st Aug 2024 (MSFT $423.00)</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><strong>Entry cost:</strong> $8,685.00 <a href="#">see details</a></li>
            <li><strong>Maximum risk:</strong> $8,685.00 (at MSFT $420.00)</li>
            <li><strong>Maximum return:</strong> infinite (on upside)</li>
            <li><strong>Max return on risk:</strong> N/A</li>
            <li><strong>Breakevens at expiry:</strong> $506.85</li>
            <li><strong>Probability of profit:</strong> 27.4% <span title="Explanation of probability of profit">?</span></li>
          </ul>
          <img src={"/optionGraph.png"}/>
        </div>
      );
}

export { CalcOutput }