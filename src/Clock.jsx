import { useState } from "react";
import { useEffect } from "react";

function Clock(){
const [time, setTime] = useState(new Date());
 

useEffect(() => {
    
    const intervalId = setInterval(() => { setTime(new Date());  }, 1000);
    return () => clearInterval(intervalId);
    }, 
  );

return(  

<div>
      <h2>Ora curentă</h2>
    
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
)
}
export default Clock;