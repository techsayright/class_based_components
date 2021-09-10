import './App.css';
import Toggle from './components/Toggle';
import UserContext from './store/user-context'

let Data = [
  {
    id: 1,
    name: "darshan",
  },
  {
    id: 2,
    name: "mayank",
  },
  {
    id: 3,
    name: "dev",
  },
];

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{
        data: Data
      }}>
        <Toggle/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
