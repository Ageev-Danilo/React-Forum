import styles from "../main/main.module.css"
import { ReactNode } from "react"


interface MainProps {
    children: ReactNode
}

export function Main(props: MainProps){
    return <main className={styles.mainBlock}>
            {props.children}
        </main>
}