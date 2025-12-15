import styles from "../footer/footer.module.css"

export function Footer(){
    return <footer>
            <div className={styles.dateAndLinks}>
                <button>Creation date: 22/11/25</button>
                <img src="" alt="telegram" />
                <img src="" alt="instagram" />
            </div>
            <button className={styles.copyrightButton}>Copyright c 2025 by Danilo Ageev</button>
        </footer>
}