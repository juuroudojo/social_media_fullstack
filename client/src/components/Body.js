import axios from 'axios';
import {useState, useEffect} from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';

const Body = () => {
    const [listOfPosts, setListOfPosts] = useState([]);
    let navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((result) => {
        setListOfPosts(result.data)
        });
    }, []);

    return (
          <div className='container mx-auto'>
            
                <div className='add-post-container'>
                <Link to="/createpost">
                    <CiCirclePlus className='add-post-icon' onClick={() => { /* Handle click to add new post */ }} />
                    </Link >
                </div>
            
              {listOfPosts.map((value, key) => (
                  <div key={key} className='post-container' onClick={() => {navigate(`/posts/${value.id}`)}}>
                      <div className='post-wrapper'>
                          <div className='PostTop'>
                              <div className='post-title'>{value.title}</div>
                          </div>
                          <div className='Text'>
                              <div className='username'>{value.username}</div>
                              <div className='post-content'>{value.postText}</div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
  );
}

export default Body;