import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import './app.css';

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          other pages
        </div>
      </div>
    </div>
  );
}

export default App;
