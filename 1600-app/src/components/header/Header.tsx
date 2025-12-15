import styles from "../header/header.module.css"

export function Header(){
    return <header className={styles.header}>
            <button id={styles.mainButton}>NewsBoard</button>
            <div className={styles.headerIconAndButtons}>
                <div className={styles.headerLinks}>
                    <button>All Posts</button>
                    <button>Create Post</button>
                    <button className={styles.selectButton}>Select Language <img src="" alt="mark" /></button>
                </div>
                <img className={styles.ProfilePic} src="/media/profile-icon.png" alt="profile" />
            </div>
        </header>
}