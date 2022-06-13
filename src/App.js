import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom" ; 
import { Home } from './Components/home';
import { Company } from './Components/company';
import { Employee } from './Components/employee';
import { EmployeeID } from './Components/employeeID';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/company" element = {<Company/>}/>
        <Route path = "/employee" element = {<Employee/>}/>
        <Route path = "/employee/:id" element = {<EmployeeID/>}/>
     </Routes>
    </div>
  );
}

export default App;
