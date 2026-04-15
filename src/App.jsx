import Card from './Card';
import './App.css';
import QuickNote from './QuickNote';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import Clock from './Clock';
import ProjectList from './ProjectList';

function App() {
  return (
    <div className="wingdings-text">
      <Clock />
      <QuickNote />
      <TodoList />
      <ContactForm />
      <h1>Dashboard</h1>
      <ProjectList />
    </div>
  );
}

export default App;