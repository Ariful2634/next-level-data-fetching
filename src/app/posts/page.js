

const page = async() => {

    const res = await fetch("http://localhost:5000/posts",{
        // initially store the data
        cache:"force-cache" 
        
    })
    const posts = await res.json()
    console.log(posts)

    return (
        <div>
            <h2 className="text-2xl text-center mt-8">Total Post: {posts.length}</h2>
            {
                posts.map(post=>(<div key={post.id} className="card w-[70%] mx-auto my-5 bg-gray-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.description}</p>
                  <p>{post.likesCount}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See More</button>
                  </div>
                </div>
              </div>))
            }
        </div>
    );
};

export default page;