import { useState } from 'react';

function ProjectForm() {
  const [title, setTitle] = useState('');
  const [tech, setTech] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === '' || tech.trim() === '') return;

    try {
      const response = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, tech: tech }),
      });

      const newProject = await response.json();
      setMessage('Proiect adaugat: ' + newProject.title);
      setTitle('');
      setTech('');
    } catch (err) {
      setMessage('Eroare: ' + err.message);
    }
  }

  return (
    <div>
      <h2>Proiect Nou</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titlu proiect"
        />
        <input
          type="text"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          placeholder="Tehnologie"
        />
        <button type="submit">Adauga</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ProjectForm;