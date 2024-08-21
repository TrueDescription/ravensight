import { Login } from "@/pages/login";
import { OptionPage } from "@/pages/optionPage";
import { StockPage } from "@/pages/stockPage";
import Image from "next/image";

export default function Home() {
  return (
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    <main >
      {/* <Login/> */}
      {/* <StockPage/> */}
      <OptionPage/>
    </main>
  );
}
