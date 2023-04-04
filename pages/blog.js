import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Blog = ({allBlogs}) => {
    const [data, setData] = useState(allBlogs);
	console.log(data);
  return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              {
                  data?.map(item =>{ return <div key={item.title} className="overflow-hidden transition-shadow duration-300 bg-white rounded">
										<Link href="/" aria-label="Article">
											
										</Link>
										<div className="py-5">
											
											<Link
												href={`/blogpost/${item.slug}`}
												aria-label="Article"
												className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
												<p className="text-2xl font-bold leading-5">
													{item.title}
												</p>
											</Link>
											<p className="mb-4 text-gray-700">
												{item.content.substr(0,300)}...
											</p>
											
										</div>
									</div>}
                    )
                }
			</div>
		</div>
	);
}
// serrver side rendering
export async function getServerSideProps() {
	const data = await fetch(`http://localhost:3000/api/blog`);
	const allBlogs = await data.json();
	return {
		props: { allBlogs }, // will be passed to the page component as props
	};
}
export default Blog