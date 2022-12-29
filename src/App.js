import "./App.css";
import Statistics from "./components/Statistics/Statistics";
import data from "./data/data.json";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/Theme";
import Basket from "components/Basket/Basket";
import Users from "Users/Users";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Users />
        <Statistics title="Main Statistics" stats={data} />
        <hr></hr>
        <Statistics stats={data} />
        <Basket />
      </div>
    </ThemeProvider>
  );
}

export default App;
