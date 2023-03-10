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
import Login from 'Pages/Login/Login';
import { SignUp } from 'Pages/SignUp/SignUp';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { useEffect } from 'react';
import { currentUser } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <LangProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<Post />} />
            <Route element={<PrivateRoute />}>
              <Route path="/users" element={<Users />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </ThemeProvider>
    </LangProvider>
  );
}

export default App;
