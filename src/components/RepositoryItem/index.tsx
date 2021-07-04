import "./styles.scss";

interface RepositoryItemProps {
  repository: {
    name: String;
    description: String;
    html_url: String;
  };
}

const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <li>
      <strong className="cap">{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href="/">{props.repository.html_url}</a>
    </li>
  );
};

export default RepositoryItem;
