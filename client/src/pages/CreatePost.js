import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navbar } from '../components';
import * as yup from 'yup';
import axios from 'axios'
import '../App.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };
  
  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    postText: yup.string().required("Post text is required"),
    username: yup.string().min(3, "Username must be at least 3 characters").max(15, "Username must not exceed 15 characters").required("Username is required")
  })

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((res) => {
        navigate('/')
    })
  }

  const navigate = useNavigate()
  return (
    <div className='CRPostPage'>
    <Navbar />
      <h2>Create a New Post</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" type="text" placeholder="Enter title" />
            <ErrorMessage name="title" component="span" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="postText">Post Text</label>
            <Field id="postText" name="postText" as="textarea" placeholder="Enter post text" />
            <ErrorMessage name="postText" component="span" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" type="text" placeholder="Enter your username" />
            <ErrorMessage name="username" component="span" className="error-message" />
          </div>
          <button type="submit" className="btn-submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
