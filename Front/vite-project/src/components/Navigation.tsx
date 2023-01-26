
import{Navbar,Nav,Container} from 'react-bootstrap';

import { useState, useEffect } from "react";

type NavProps=
{
  component: string
}

export function Navigation(props: NavProps)
{
    const [pageData, setPageData] = useState({});//pageData== vetor, setPageData == funcão para carregar o vetor
    useEffect(() => {
     // setPageData(JsonData);
    }, []);

    const [currentUser, setCurrentUser] = useState(undefined);

  
    useEffect(() => {
      
      const user =  JSON.parse(localStorage.getItem('user') || '{}');
      console.log("user: "+JSON.stringify(user));
  
      if (JSON.stringify(user)!='{}') {
        setCurrentUser(user);
      }
    }, []);
  


    const logOut = () => {
        localStorage.removeItem("user");
      };

    return(

        
<div>

<div>
   <>
  

  <Navbar  collapseOnSelect fixed = 'top' expand='sm' className='navbar-default '>
    <Container>
        <Navbar.Brand >React Landing Page</Navbar.Brand>
        <Navbar.Toggle className='navbar-toggle' aria-controls ='responsive-navbar-nav' />

        <Navbar.Collapse id = 'responsive-navbar-nav'   className="justify-content-end" >
         <Nav defaultActiveKey="/" as="ul">
         <Nav.Item>
           <Nav.Link href="/home" className="nav-links" >Home</Nav.Link>
         </Nav.Item>

         {currentUser ? (
         <Nav.Item>
         <Nav.Link href="/login" className="nav-links" onClick={logOut}>Logout</Nav.Link>
       </Nav.Item>
        ) : (
          {
            'Login': <> <Nav.Item>
                      <Nav.Link href="/register" className="nav-links" >Sign up</Nav.Link>
                       </Nav.Item></>,
            'Register': <> <Nav.Item>
                        <Nav.Link href="/login" className="nav-links" >Login</Nav.Link>
                        </Nav.Item></>,
            'Dashboard': <></>,
            'Home':      <>
                        <Nav.Item>
                       <Nav.Link href="/login" className="nav-links" >Login</Nav.Link>
                       </Nav.Item>
  
                       <Nav.Item>
                       <Nav.Link href="/register" className="nav-links" >Sign up</Nav.Link>
                       </Nav.Item>
                       </>
          }[props.component]

         
      
 )}

          
         
         </Nav>
        </Navbar.Collapse>
    
  
    </Container>
  </Navbar>

  
 
</>
</div>


</div>


  )
}