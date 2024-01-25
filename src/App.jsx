import GitFinder from "./GitFinder.jsx";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
       <div className='title'>      
          <h1>RepoHunterHub</h1>              
      </div >
       <GitFinder />
    </div>
  );
}

export default App;
