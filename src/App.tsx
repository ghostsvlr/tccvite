import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from './components/PostPage.tsx';
import PostList from './components/PostList.tsx';
import AuthLogin from './components/Auth/Login.tsx';
import AuthRegister from './components/Auth/Register.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
            path="/login"
            element={<AuthLogin onSwitchToRegister={() => {}} />}
          />
          <Route
            path="/register"
            element={<AuthRegister onSwitchToLogin={() => {}} />}
          />
        <Route path="/" element={<PostPage />} />
        <Route path="/posts" element={<PostList posts={[]} />} />
      </Routes>
    </Router>
  );
};

export default App;
