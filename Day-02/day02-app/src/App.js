import 'bootstrap/dist/css/bootstrap.css';
import CreateUser from './CreateUser';
import Form from './Form';
import { Link, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <nav> 
            <Link to ="/"> Home </Link> || 
            <Link to ="/cart"> Cart </Link>
       </nav> 
       <Routes> 
          {/* <Route path ={["/"]} element= {<Form />}/>  */}
          {['/', '/home'].map(path => <Route path={path} element={<Form />} />)}
          <Route path ="/cart" element= {<CreateUser />}/> 
          <Route path ="*" element= {<NotFound />}/> 
       </Routes> 
    </div>
  );
}

export default App;
