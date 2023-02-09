import logo from './logo.svg';
import './App.css';
import FetchApi from './FetchApi';
import { Pagination } from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <FetchApi /> */}
      <Pagination />
    </div>
  );
}

export default App;
