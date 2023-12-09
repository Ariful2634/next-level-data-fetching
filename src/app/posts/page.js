import Link from "next/link";
import styles from './Posts.module.css'


const page = async() => {

    const res = await fetch("http://localhost:5000/posts",{
        // initially store the data
        // cache:"force-cache" 

        // next:{
        //     revalidate:5,
        // }

        // not storing the data, if user go any route then render the data
        cache:"no-store"
        
    })
    const posts = await res.json()
    // console.log(posts)

    return (
        <div>
            <h2 className={styles.header_text}>Total Posts: {posts.length}</h2>
            {
                posts.map(post=>(<div key={post.id} className="card w-[70%] mx-auto my-5 bg-gray-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.description}</p>
                  <p>Likes: {post.likesCount}</p>
                  <div className="card-actions justify-end">
                    <Link href={`/posts/${post.id}`}><button className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white">See More</button></Link>
                  </div>
                </div>
              </div>))
            }
        </div>
    );
};

export default page;