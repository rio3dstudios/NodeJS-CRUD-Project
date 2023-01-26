
import { Form,Button,Container,Row,Col } from 'react-bootstrap';
import{ChangeEvent, useState,useRef} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'; // import do hook


export function LoginForm()
{

    
   const API_URL = "http://localhost:3000/api/user/auth";

   const initialState = {
     email: '',
     password: ''
    }


     // initial state
     const [{ email, password}, setFieldState] = useState(initialState)



     const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
         const { name, value } = event.target
         setFieldState((prevState) => ({ ...prevState, [name]: value }))
       }
   
     const clearState = () => setFieldState({ ...initialState })// os tres pontinhos 
                                                                 //atualiza o valor corrente
                                                                 // para os valor4s de inicial state
 
 
     const navigate = useNavigate();  
 
     const handleSubmit = (e:any) => {
    
       e.preventDefault()
   
        // set configurations
        const configuration = {
         method: "post",
         url: API_URL,
         data: {
           email,
           password
         },
       };
       // make the API call
       axios(configuration)
       .then((response) => {
         console.log(response);
         if (response.data.accessToken) {
           localStorage.setItem("user", JSON.stringify(response.data));
         }
 
         navigate('/dashboard'); //uso do hook para ir para a página /dashboard
         
       
         window.location.reload();
       
       })
       .catch((error) => {console.log(error);})
      
     }


    return(
       
      <div>
         <h2>Login</h2>
        <Form>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email" 
            value={email}
            onChange={handleChange}
            />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
           name="password"
           type="password"
           placeholder="Password"
           value={password}
           onChange={handleChange}
            />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary"
         type="submit"
         onClick={(e) => handleSubmit(e)}
         >
          Submit
        </Button>
      </Form>
      <div className="text-center">
              Not registered yet?{" "}
              <span  className="link-primary" >
               <a href="/register"> Sign Up</a> 
              </span>
            </div>
      </div>
    )
}