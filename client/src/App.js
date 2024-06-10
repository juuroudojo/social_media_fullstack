import './App.css'

import { Homepage, CreatePost, Post } from  './pages';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/posts/:id" element={<Post />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App;
