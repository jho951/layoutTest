import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <input type="text" style={{ width: "30%" }}></input>
      </div>
      <div>
        <input type="text" style={{ width: "30vw" }}></input>
      </div>
      <div>
        <input type="text" style={{ width: "30vh" }}></input>
      </div>
      <div>
        <input type="text" style={{ width: "30rem" }}></input>
      </div>
      <div>
        <input type="text" style={{ width: "30em" }}></input>
      </div>
      <div>
        <input type="text" style={{ width: "30px" }}></input>
      </div>
    </>
  );
}
