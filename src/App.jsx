import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme/Theme';
import Users from 'Pages/Users/Users';
import { LangProvider } from './context/context';
import { Navigation } from 'components/Navigation/Navigation';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from 'Pages/Home/Home';
import { Post } from './Pages/Post/Post';
import Posts from 'Pages/Posts/Posts';
import { SignUp } from 'Pages/SignUp/SignUp';

function App() {
  return (
    <LangProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<Post />} />
            <Route path="/users" element={<Users />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </ThemeProvider>
    </LangProvider>
  );
}

export default App;
