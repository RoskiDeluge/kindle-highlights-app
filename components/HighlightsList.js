import HighlightItem from "./HighlightItem";
import highlightStyles from "../styles/Highlight.module.css";

const HighlightsList = ({ article }) => {
  return (
    <div className={highlightStyles.grid}>
      {article.highlights.map((art) => (
        <HighlightItem key={art.location.value} art={art} />
      ))}
    </div>
  );
};

export default HighlightsList;
