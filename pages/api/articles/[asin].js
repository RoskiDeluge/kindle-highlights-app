import { articles } from "../../../data";

export default function handler({ query: { asin } }, res) {
  const filtered = articles.filter((article) => article.asin === asin);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Book with the asin of ${asin} is not found` });
  }
}
