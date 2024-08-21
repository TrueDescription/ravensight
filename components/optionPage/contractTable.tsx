
import React from "react";

function ContractTable() {
    return (
        <main>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Bid</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mid</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ask</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Strike</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Bid</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mid</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ask</th>
                    </tr>
                </thead>
                <tbody>
                    {/* In the Money */}
                    <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.90</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.95</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$80.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.70</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.75</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.80</td>
                    </tr>
                    <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.60</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.65</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.70</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$82.50</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.90</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.95</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.00</td>
                    </tr>
                    <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.30</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.35</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.40</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$85.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.10</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.15</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.20</td>
                    </tr>
                    <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.05</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.10</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$87.50</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.30</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.35</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.40</td>
                    </tr>
                    <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.80</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.85</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.90</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$90.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.50</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.55</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.60</td>
                    </tr>
                    
                    {/* Out of the Money */}
                    <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.50</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.55</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.60</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$92.50</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.70</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.75</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.80</td>
                    </tr>
                    <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.40</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.45</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.50</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$95.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.90</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$1.95</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.00</td>
                    </tr>
                    <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.30</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.35</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.40</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$97.50</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.10</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.15</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.20</td>
                    </tr>
                    <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.20</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.25</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.30</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$100.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.30</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.35</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.40</td>
                    </tr>
                    <tr>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.10</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.15</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$0.20</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$102.50</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.50</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.55</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>$2.60</td>
                    </tr>
                </tbody>
                </table>
        </main>
    );
}

export {ContractTable};