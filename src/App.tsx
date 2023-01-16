
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Content />
      </Router>

    </div>
  );
}

export default App;
