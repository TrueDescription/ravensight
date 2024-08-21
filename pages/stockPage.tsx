import { BuyBox } from "@/components/stockPage/buyBox";
import { InfoBox } from "@/components/stockPage/inforBox";
import { StockBox } from "@/components/stockPage/stockBox";
import React from "react";

function StockPage() {
    return (
        <main>
            <StockBox/>
            <BuyBox/>
            <InfoBox/>
        </main>
    );
}

export {StockPage};