import './App.css';
import Header from './components/Header/Header';
import Main from './containers/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="name-and-date">
        26/07/21 - Yariv Shenkar
      </div>

      <Header/>
      <Main/>
      
    </div>
  );
}

export default App;
