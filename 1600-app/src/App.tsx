import styles from "../src/css/app.css"

export function App(){
    return <div>
        <header className={styles.header}>
            <button id="mainButton">NewsBoard</button>
            <div className="headerIconAndButtons">
                <div className="headerLinks">
                    <button>All Posts</button>
                    <button>Create Post</button>
                    <button className="selectButton">Select Language <img src="" alt="mark" /></button>
                </div>
                <img src="/media/profile-icon.png" alt="profile" />
            </div>
        </header>
        <main>
            <div id = 'technicalPart'>
                <div className = 'contentHeader'><p>Technical Part</p></div>
                <div className="descriptionDiv" id="backendDiv">
                    <p className = 'descriptionHeader'>Backend</p>
                    <p className="description">
                        Used technologies:<br></br>- Typescript<br></br>- Prisma<br></br> - JWT Token
                    </p>
                </div>
                <div className="descriptionDiv">
                    <p className="descriptionHeader">Frontend</p>
                    <p className="description">
                        Used technologies:<br></br> - React<br></br> - html / css
                    </p>
                </div>
            </div>
            <div id = 'projectDescription'>
                <div className = 'contentHeader'><p>Project Description</p> </div>
                <div className="descriptionDiv" id = 'forumProject'>
                    <p className = 'descriptionHeader'>Forum Project</p>
                    <p className="description">
                        This site allows you to share your thoughts,<br></br> communicate with other users,<br></br> and also view other people's publications
                    </p>
                </div>
            </div>
        </main>
        <footer>
            <div className="dateAndLinks">
                <button>Creation date: 22/11/25</button>
                <img src="" alt="telegram" />
                <img src="" alt="instagram" />
            </div>
            <button>Copyright c 2025 by Danilo Ageev</button>
        </footer>
    </div>
    
}