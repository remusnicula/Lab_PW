import { useState } from 'react';
function ContactForm(){
const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');
 function submit(){
if(name.trim() === '' || email.trim() ==='' || message.trim() === ''){
setFeedback('oh no no')
}
else{
setFeedback('wow so nice')
}
}
  
return(
    <div>
<input 
        placeholder="Nume" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email"
        
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      <input 
        type="mesaj"
    
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />

      <button onClick={submit}>Submit</button>

      <p>{feedback}</p>
    </div>
 
);
}
export default ContactForm;