import './App.css';
import axios from 'axios';

function App() {
  const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/photos`,
  });
  return (
    <div className="App">
      <h1>React Axios and React Redux !</h1>
    </div>
  );
}

export default App;
