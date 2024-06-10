import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components'
import axios from 'axios'

function Post() {
    let {id} = useParams()
    const [postObject, setPostObject] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((resp) => {
          setPostObject(resp.data);
        })
    }, [])

    return (
      <div>
        <Navbar />
      <div className="postB-container">
        <div className="postB-box">
          <div className="left-box">
            <h2>{postObject.title}</h2>
            <div className='picB'> </div>
            <div>{postObject.postText}</div>
            <p>{postObject.username}</p>
            {/* Placeholder for image */}
          </div>
          <div className="right-box">
            {/* Placeholder for comment section */}
          </div>
        </div>
      </div>
      </div>
    );
}

export default Post