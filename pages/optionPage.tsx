
import { CalcOutput } from "@/components/optionPage/calcOutput";
import { ContractTable } from "@/components/optionPage/contractTable";
import { InfoInput } from "@/components/optionPage/infoInput";
import React from "react";

function OptionPage() {
    return (
        <main>
            <InfoInput/>
            <ContractTable/>
            <CalcOutput/>
        </main>
    );
}

export {OptionPage};