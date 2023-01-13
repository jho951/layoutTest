import Image from "next/image"
import {Inter} from "@next/font/google"
import styles from "./page.module.css"

const inter = Inter({subsets: ["latin"]})

export default function Home() {
  return (
    <>
      <div>
        <input style={{width: "30vw"}} type='text'></input>
      </div>
      <div>
        <input style={{width: "30vh"}} type='text'></input>
      </div>
      <div>
        <input style={{width: "30%"}} type='text'></input>
      </div>
    </>
  )
}
