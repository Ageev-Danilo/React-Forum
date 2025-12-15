import styles from "../textblock/textblock.module.css"

export function TextBlock(){
    return <div>
         <div id = {styles.technicalPart}>
                <div className = {styles.contentHeader}><p>Technical Part</p></div>
                <div className={styles.descriptionDiv} id="backendDiv">
                    <p className = {styles.descriptionHeader}>Backend</p>
                    <p className={styles.description}>
                        Used technologies:<br></br>- Typescript<br></br>- Prisma<br></br> - JWT Token
                    </p>
                </div>
                <div className={styles.descriptionDiv}>
                    <p className={styles.descriptionHeader}>Frontend</p>
                    <p className={styles.description}>
                        Used technologies:<br></br> - React<br></br> - html / css
                    </p>
                </div>
            </div>
            <div id = {styles.projectDescription}>
                <div className = {styles.contentHeader}><p>Project Description</p> </div>
                <div className={styles.descriptionDiv} id = 'forumProject'>
                    <p className = {styles.descriptionHeader}>Forum Project</p>
                    <p className={styles.description}>
                        This site allows you to share your thoughts,<br></br> communicate with other users,<br></br> and also view other people's publications
                    </p>
                </div>
            </div> 
    </div>
}