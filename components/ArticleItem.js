import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.asin}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <h4>{article.authors}</h4>
        {/* <p>{article.excerpt}</p> */}
      </a>
    </Link>
  );
};

export default ArticleItem;
