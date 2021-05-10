import highlightStyles from "../styles/Highlight.module.css";

const HighlightItem = ({ art }) => {
  return (
    <div className={highlightStyles.card}>
      <p>{art.text}</p>
      <br />
      <p>{art.location.value}</p>
    </div>
  );
};

export default HighlightItem;
