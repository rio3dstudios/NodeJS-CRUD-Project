
import { Form,Button } from 'react-bootstrap';
import{ChangeEvent, useState,useRef} from "react";
import axios from "axios";

const initialState = {
  username: '',
  email: '',
  password: '',
  bio: '',
  image: ''
}

export function Register()
{

    // initial state
  const [{username, email, password,bio,image }, setFieldState] = useState(initialState)

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFieldState((prevState) => ({ ...prevState, [name]: value }))
    }

  const clearState = () => setFieldState({ ...initialState })// os tres pontinhos 
                                                              //atualiza o valor corrente
                                                              // para os valor4s de inicial state
  
  const handleSubmit = (e:any) => {
 
    e.preventDefault()

     // set configurations
     const configuration = {
      method: "post",
      url: "http://localhost:3000/api/user",
      data: {
        username,
        email,
        password,
        bio,
        image
      },
    };
    // make the API call
    axios(configuration)
    .then((result) => {console.log(result);})
    .catch((error) => {console.log(error);})
   
  }

    return(
      <div>
         <h2>Sign up</h2>
        <Form onSubmit={(e)=>handleSubmit(e)}>
            {/* username */}
        <Form.Group controlId="formBasicUsername">
          <Form.Label>username</Form.Label>
          <Form.Control
            name="username"
            placeholder="Enter user name" 
            value={username}
            onChange={handleChange}
            
            />
        </Form.Group>

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

        <Form.Group controlId="formBio">
          <Form.Label>bio</Form.Label>
          <Form.Control
            name="bio"
            placeholder="Enter user bio" 
            value={bio}
            onChange={handleChange}
            />
        </Form.Group>

        
        <Form.Group controlId="formImage">
          <Form.Label>image</Form.Label>
          <Form.Control
            name="image"
            placeholder="Enter user image" 
            value={image}
            onChange={handleChange}
            />
        </Form.Group>

        {/* submit button */}
        <Button
         variant="primary"
         type="submit"
         onClick={(e) => handleSubmit(e)}
         >
          Submit
        </Button>
      </Form>
      </div>
       
    )


}