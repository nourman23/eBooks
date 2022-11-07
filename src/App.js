import './App.css';
import Header from './component/Header';
import NoPage from './component/NoPage';
import Home from './component/Home';
// import TourDetails from './component/TourDetails';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return ( 
    <>
     <Header />
    <div className="App">

  <Routes>
<Route exact path='/' element={< Home />}></Route>
<Route path="*" element={<NoPage />} />

</Routes>
  

    </div><Footer /></>
  );
}

export default App;
