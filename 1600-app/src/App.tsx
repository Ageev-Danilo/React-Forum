export function App(){
    return <div>
        <header>
            <button>NewsBoard</button>
            <div id = 'header-icon-and-buttons'>
                <img src="" alt="profile icon" />
                <div id = 'header links'>
                    <button>All Posts</button>
                    <button>Create Post</button>
                    <button>Select Language</button>
                </div>
            </div>
        </header>
        <main>
            <div id = 'technical-part'>
                <div className = 'content-header'><p>Technical Part</p></div>
                <div id = 'backend'>
                    <p className = 'description-header'>Backend</p>
                    <p className="description">
                        Used technologies:- Typescript- Prisma - JWT Token
                    </p>
                </div>
                <div id = 'frontend'>
                    <p className="description-header">Frontend</p>
                    <p className="description">
                        Used technologies: - React - html / css
                    </p>
                </div>
            </div>
            <div id = 'project-description'>
                <div className = 'content-header'><p>Project Description</p> </div>
                <div id = 'forum-project'>
                    <p className = 'description-header'>Forum Project</p>
                    <p className="description">
                        This site allows you to share your thoughts, communicate with other users, and also view other people's publications
                    </p>
                </div>
            </div>
        </main>
        <footer>
            <div id = 'date and links'>
                <button>Creation date: 22/11/25</button>
                <img src="" alt="telegram" />
                <img src="" alt="instagram" />
            </div>
            <button>Copyright c 2025 by Danilo Ageev</button>
        </footer>
    </div>
}