import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/Greeting';
// import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { /*Componente propio Greeting.jsx*/}
        {/* <Greeting name="Martin"></Greeting>   */}
        { /*Componente de ejemplo funcional*/}
        {/* <GreetingF name="Martin"></GreetingF> */}
        { /*Componente de Listado de tareas*/}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
