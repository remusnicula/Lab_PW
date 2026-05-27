import { NavLink } from 'react-router';
import mascotGif from '../src/pages/robin-robin-hsr.gif';

function Navbar() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px' }}>
      
      {}
      <div style={{ display: 'flex', gap: '15px' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Proiecte</NavLink>
        <NavLink to="/projects/new">Proiect Nou</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
   
      </div>

  
      <img 
        src={mascotGif} 
        alt="Navbar Mascot" 
        style={{ width: '64px', height: '64px', objectFit: 'contain' }} 
      />
      
    </nav>
  );
}

export default Navbar;