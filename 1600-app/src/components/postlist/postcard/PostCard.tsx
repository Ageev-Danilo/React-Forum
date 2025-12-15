import styles from "./postcard.module.css"
import { PostCardProps } from "./postcard.types"

export function PostCard(props: PostCardProps){
    return     <div className={styles.postCard}>
                <p className={styles.postName}>ewewewe</p>
                <img src="" alt="post pic" className={styles.postImg} />
                <div className={styles.postInfo}>
                    <p className={styles.postTheme}>asdasd</p>
                    <p className={styles.postDescription}>asdasd</p>
                </div>
                <div className={styles.postInteractions}>
                    <img src="" alt="likes" />
                    <img src="" alt="comment" />
                </div>
                <div className={styles.postTags}>
                    <p className={styles.postSingleTag}>wewe </p>
                    <p className={styles.postSingleTag}>wewewe</p>
                </div>
            </div>
}