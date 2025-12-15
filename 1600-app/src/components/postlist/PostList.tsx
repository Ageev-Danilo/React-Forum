import { Filter } from "../filters/Filter";

import { PostCard } from "./postcard";
import styles from "../postlist/postlist.module.css"
import postImg from "../../assets/postImg.png"
import { useEffect, useState } from "react";

const posts = [
    {
      id: 1,
    title: "first post",
    image: "https//:kon.com",
    theme: "lol",
    description: "poniatno",
    likes: 101,
    tagsId: 1,
    },
    {
      id: 2,
    title: "2 post",
    image: "https//:kon.com",
    theme: "lolnepon",
    description: "neponiatno",
    likes: 1,
    tagsId: 1
    },
    {
      id: 3,
    title: "3 post",
    image: "https//:kon.com",
    theme: "loooool",
    description: "tipoponiatno",
    likes: 111,
    tagsId: 1
    },
]

const tags = [
    {
        id:1,
        title: "firsttag"
    },
    {
        id:2,
        title: "firsttag"
    },
    {
        id:3,
        title: "firsttag"
    },
]

export function PostList(){
    const[searchValue, setSearchValue] = useState("")
    const[likesMinimumValue, setLikesMinimumValue] = useState(Number)
    const[selectedTags, setSelectedTags] = useState([Number])
    const[filteredPosts, setFilteredPosts] = useState(posts)
    const[selectedTagsId, setSelectedTagsId] = useState<"None" | number>("None")

    
	useEffect(()=>{
        const searchedPosts = posts.filter((post) => {
            return post.title.toLowerCase().startsWith(searchValue.toLowerCase())
        })
        if (selectedTagsId === "None") {
			setFilteredPosts(searchedPosts);
			return;
		}
        let newFilteredPosts = searchedPosts.filter(
			(post) => post.tagsId === selectedTagsId
		);
        if (likesMinimumValue === 0) {
			setFilteredPosts(searchedPosts);
			return;
		}
        newFilteredPosts = searchedPosts.filter(
			(product) => product.likes >= likesMinimumValue
		);
        setFilteredPosts(newFilteredPosts)}, [searchValue, selectedTagsId, likesMinimumValue])

    return  <div className={styles.postList}>
            return <div className={styles.filtersDiv}>
                <p className={styles.filtersP}>filters</p>
                <div className={styles.tagsFilter}>
                        <p className={styles.filtrationTypeP}>Tag Filtration</p>
                        <div className={styles.searchDiv}>
                            <p className={styles.searchP}>Search</p>
                            <input 
                                type="text"
						        placeholder="Search posts"
						        value={searchValue}
						        className={styles.searchInput}
						        onChange={(event) => {
							    setSearchValue(event.target.value);
						}}
                            />
                            <button><img src="" alt="loupe icon" /></button>
                        </div>
                        <p className={styles.filtrationTypeP}>Popular Tags</p>
                        <div className={styles.popularTagsDiv}>
                                {tags.map((tag) => {
						return (
							<label
								className={styles.labelSelectCategory}
								key={tag.id}
							>
								<input
									type="checkbox"
									name="tag"
									checked={tag.id === selectedTagsId}
									onChange={() => {
										setSelectedTagsId(tag.id);
									}}
								/>
								{tag.title}
							</label>
						);
					})}
                        </div>
                </div>
                <div className={styles.likesFilter}>
                        <p className={styles.filtrationTypeP}>Likes Filtration</p>
                         <label className={styles.labelSelectCategory}>
						<input
							type="radio"
							name="likescount"
							checked={0 === likesMinimumValue}
							onChange={() => {
								setLikesMinimumValue(0);
							}}
						/>
						0 likes
					</label>
                     <label className={styles.labelSelectCategory}>
						<input
							type="radio"
							name="likescount"
							checked={0 === likesMinimumValue}
							onChange={() => {
								setLikesMinimumValue(0);
							}}
						/>
						50 likes
					</label>
                     <label className={styles.labelSelectCategory}>
						<input
							type="radio"
							name="likescount"
							checked={0 === likesMinimumValue}
							onChange={() => {
								setLikesMinimumValue(0);
							}}
						/>
						100 likes
					</label>
                </div>
            </div>
            {filteredPosts.map((post) => {
						return (
							<PostCard
								title={post.title}
								image={post.image}
                                theme={post.theme}
                                description={post.description}
                                likes={post.likes}
								key={post.id}
							></PostCard>
						);
					})}
        </div>

    
}