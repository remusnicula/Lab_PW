import Card from './Card';
import './App.css';
import QuickNote from './QuickNote';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import Clock from './Clock';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Navbar from './Navbar';
import NotFound from './pages/NotFound';
import About from './pages/About';


function Home() {
  return (
    <div className="wingdings-text">
      <Clock />
      <QuickNote />
      <TodoList />
      <h1>Dashboard</h1>
      <ProjectList />
    </div>
  );
}

function Projects() {
  return <ProjectList />;
}

function Contact() {
  return <ContactForm />;
}

function NewProject() {
  return <ProjectForm />;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;