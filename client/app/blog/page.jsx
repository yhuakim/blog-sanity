import PostCard from "../components/PostCard"
import { client } from "../utils/sanityClient";

async function getData() {
    const query = `*[_type == "post"]`
    const data = client.fetch(query);
    return data
}

async function Blog() {
    const posts = await getData()

    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700 p-8 md:max-w-5xl md:mx-auto">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    All Posts
                </h1>
            </div>

            <div className="py-4">
                {posts &&
                    posts.length &&
                    posts.map((post, index) => (
                        <PostCard data={post} key={index} />
                    ))}
            </div>
        </div>
    );
};

// export const getServerSideProps = async (context) => {

//     const query = encodeURIComponent(`*[ _type == "post" ]`);
//     const url = `${process.env.SANITY_URL}query=${query}`;

//     // console.log(url);

//     const data = await fetch(url).then((res) => res.json());
//     const posts = data.result;

//     if (!posts || !posts.length === 0) {
//         return {
//             props: {
//                 posts: [],
//             },
//         };
//     } else {
//         return {
//             props: {
//                 posts,
//             },
//         };
//     }
// };

export default Blog;