import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



const RegisterForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [name,setName]= useState('')
  const [role,setRole]= useState('admin')

  const [createUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { data } = await createUser({ variables: {name, password, email, role} });
      Auth.login(data.createUser.token);
      props.onSuccess();

      console.log('User created successfully:', data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (

    <Form className='mt-4' onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
