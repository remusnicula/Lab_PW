 import './App.css';
function Card(props) {
 return (
 <div className="wingdings-text">
 <h3>{props.title}</h3>
 <p>{props.description}</p>
 </div>
 
 );
 
}
export default Card;
 