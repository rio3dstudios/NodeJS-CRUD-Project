import { Navigation } from './Navigation'
import { useState, useEffect } from "react";



export function Dashboard()
{

  
  const [currentUser, setCurrentUser] = useState(undefined);

  
  useEffect(() => {
    
    const user =  JSON.parse(localStorage.getItem('user') || '{}');
    

    if (JSON.stringify(user)!='{}') {
      setCurrentUser(user);
      
      console.log("data: "+user.user.username);
      
    
    }
  }, []);


    return(
       
      <div>
        <Navigation component = "Dashboard"/>
        <h1>Dashboard</h1>
        {currentUser ? (<>Bem vindo {currentUser.user.username}</>):(<></>)}
       

      </div>
    )
}