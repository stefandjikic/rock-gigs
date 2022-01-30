const { gigs } = require("./data.json");

export default function handler(req, res) {
  const gig = gigs.filter((g) => g.slug === req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(gig);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
