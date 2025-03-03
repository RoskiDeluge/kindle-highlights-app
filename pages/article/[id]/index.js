import { server } from "../../../config";
import Link from "next/link";
// import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import HighlightsList from "../../../components/HighlightsList";

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <Link href="/">Go Back</Link>
      {/* <p>{article.authors}</p> */}
      <HighlightsList article={article} />
      <br />
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const asins = articles.map((article) => article.asin);
  const paths = asins.map((asin) => ({ params: { id: asin.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article;
