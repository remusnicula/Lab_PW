import './App.css';

function Card(props) {
  return (
    <div className="wingdings-text">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.done ? '👍👍👍gata sefan' : '💀💀💀💀e rau'}</p>
      <button onClick={props.onToggle}>
        {props.done ? 'mark gata' : 'mark not done'}
      </button>
    </div>
  );
}

export default Card;