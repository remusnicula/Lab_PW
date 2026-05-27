import { useState, useEffect } from 'react';
import Card from './Card';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editTech, setEditTech] = useState('');

  useEffect(function() {
    fetch('http://localhost:3000/api/projects')
      .then(function(response) { return response.json(); })
      .then(function(data) {
        setProjects(data);
        setLoading(false);
      });
  }, []);

 
  function startEditing(project) {
    setEditingId(project._id);
    setEditTitle(project.title);
    setEditTech(project.tech);
  }

 
  function cancelEditing() {
    setEditingId(null);
    setEditTitle('');
    setEditTech('');
  }

async function handleDelete(id) {
  await fetch('http://localhost:3000/api/projects/' + id, {
    method: 'DELETE',
  });
  setProjects(projects.filter(p => p._id !== id));
}
  async function handleSave(id) {
    const response = await fetch('http://localhost:3000/api/projects/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title: editTitle, 
        tech: editTech 
      }),
    });
    
    if (response.ok) {
      const updatedProject = await response.json();
      
      setProjects(projects.map(p => p._id === id ? updatedProject : p));
     
      cancelEditing();
    }
  }

  async function handleToggle(id, currentDone) {
    const response = await fetch('http://localhost:3000/api/projects/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !currentDone }),
    });
    const updatedProject = await response.json();
    setProjects(projects.map(p => p._id === id ? updatedProject : p));
  }

  if (loading) return <p>se incarca...</p>;

  return (
    <div>
      <h3>Proiecte</h3>
      {projects.map((project) => {
        
        if (editingId === project._id) {
          return (
            <div key={project._id}  >
              <h4>editeaza proiectul</h4>
              <div>
                <label>Titlu: </label>
                <input 
                  type="text" 
                  value={editTitle} 
                  onChange={(e) => setEditTitle(e.target.value)} 
                />
              </div>
              <div style={{ marginTop: '5px' }}>
                <label>Tehnologie: </label>
                <input 
                  type="text" 
                  value={editTech} 
                  onChange={(e) => setEditTech(e.target.value)} 
                />
              </div>
              <button onClick={() => startEditing(project)} style={{ marginTop: '5px' }}>
                   editeaza
                        </button>
                          <button onClick={() => handleDelete(project._id)} style={{ marginLeft: '5px' }}>
                            sterge
                        </button>
              <div style={{ marginTop: '10px' }}>
                <button onClick={() => handleSave(project._id)}>Salvează</button>
                <button onClick={cancelEditing} style={{ marginLeft: '5px' }}>Anulează</button>
              </div>
            </div>

            
          );
        }

    
        return (
          <div key={project._id} style={{ margin: '10px 0' }}>
            <Card
              title={project.title}
              description={project.tech}
              done={project.done}
              onToggle={() => handleToggle(project._id, project.done)}
            />
            <button onClick={() => startEditing(project)} style={{ marginTop: '5px' }}>
              editeaza
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;