import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Slug = ({ myBlog }) => {
	const [data, setData] = useState(myBlog);
	// const router = useRouter();
	// const { slug } = router.query;
	// useEffect(() => {
	// 	fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data));
	// }, [slug]);
	return (
		<div className="h-[80vh] flex flex-col justify-center items-center mx-56">
			<h2 className="text-2xl font-bold my-10"> {data.title}</h2>
			<p>{data.content}</p>
		</div>
	);
};
// server side rendering
export async function getServerSideProps(context) {
    const { slug } = context.query;
    const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    const myBlog = await data.json();
	return {
		props: { myBlog }, // will be passed to the page component as props
	};
}

export default Slug