// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//localhost:3000/api/getblog?slug=html

import * as fs from "fs";
export default function handler(req, res) {
	fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
		if (err) return res.status(500).json({ error: "No such blog found" });
		console.log(req.query.slug);
		res.status(200).json(JSON.parse(data));
	});
}
