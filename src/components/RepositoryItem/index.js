import "./styles.scss";

const RepositoryItem = (props) => {
  return (
    <li>
      <strong className="cap">{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href="/">{props.repository.html_url}</a>
    </li>
  );
};

export default RepositoryItem;
