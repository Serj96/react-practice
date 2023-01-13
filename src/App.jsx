import './App.css';
import Statistics from './components/Statistics/Statistics';
import data from './data/data.json';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme/Theme';
import Basket from 'components/Basket/Basket';
import Users from 'Pages/Users/Users';
// import Posts from 'components/Posts/Posts';
import AuthForm from 'components/AuthForm/AuthForm';
import { LangProvider } from './context/context';
import { Navigation } from 'components/Navigation/Navigation';

function App() {
  const onSubmitHandler = state => {
    console.log(state);
  };
  return (
    <LangProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navigation />
          <AuthForm onSubmit={onSubmitHandler} />
          {/* <Posts /> */}
          <Users />
          <Statistics title="Statistics" stats={data} />
          <hr></hr>
          {/* <Statistics stats={data} /> */}
          <Basket />
        </div>
      </ThemeProvider>
    </LangProvider>
  );
}

export default App;
