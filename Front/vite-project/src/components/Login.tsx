import { Form,Button } from 'react-bootstrap';
import{ChangeEvent, useState,useRef} from "react";

const initialState = {
  email: '',
  password: '',
}

export function Login()
{

  const [{ email, password}, setFieldsState] = useState(initialState)
    return(
      <div>
         <h2>Login</h2>
        <Form>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
       
    )

}