import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from 'next-sanity-image';
import { client } from "../utils/sanityClient";
import { urlFor } from "../utils/sanityImageUrl";

const PostCard = (props) => {
    const post = props.data;
    const slug = post.slug.current;

    const imageProps = useNextSanityImage(
        client,
        post.mainImage
    );


    return (
        <div className="h-full space-y-8 md:grid md:grid-cols-1 md:items-baseline md:space-y-4 md:max-w-5xl md:mx-auto shadow-lg p-8">

            <article className="space-y-2 md:grid md:grid-cols-4 md:items-center md:space-y-0 md:space-x-5">
                <div>
                    {post.mainImage && (
                        // <img src={post.mainImage} alt="" />
                        <Image src={urlFor(post.mainImage).url()}
                            alt="Image"
                            className="rounded-lg"
                            width={400}
                            height={400}
                            layout="intrinsic" />
                    )}
                </div>

                <Link
                    href={`/blog/${post.slug.current}`}
                    prefetch
                    className="space-y-3 md:col-span-3"
                >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 capitalize">
                            {post.title}
                        </h3>
                        <p className="text-sm font-medium leading-6 text-teal-500 mb-2">
                            {new Date(post._createdAt).toISOString().split("T")[0]}
                        </p>
                    </div>

                    <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                        {post.excerpt}
                    </p>
                </Link>
            </article>
        </div>
    );
};

export default PostCard;