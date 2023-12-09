import Link from "next/link";


export async function generateStaticParams() {

    const res = await fetch('http://localhost:5000/posts')
    const posts = await res.json()
    const ids = posts.map(post=>{
        return{
            id:post.id + ""
        }
    })
    // console.log(ids)

    return ids
  }

const DetailsPage =async ({params}) => {

    // console.log(params.id)

    const res = await fetch(`http://localhost:5000/posts/${params.id}`)
    const post = await res.json()

    return (
        <div>
            <div key={post.id} className="card w-[70%] mx-auto my-5 bg-gray-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.description}</p>
                  <p>Likes: {post.likesCount}</p>
                  <div className="card-actions justify-end">
                    <Link href='/posts'><button className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white">Back</button></Link>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default DetailsPage;