import "./App.css";


// import { Layout } from "./components/Layout";
// import Login from "./components/Login";
// import RolesPage from "./components/Role";
import Welcomepage from "./components/Welcomepage";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Roles from './components/Roles'
import Users from "./components/Users";
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Adjust path if necessary


const  App: React.FC = ()=> {
  return (
    // <div>
    //   <Login/>

    //   <Layout>
    //    <Welcomepage />
    //     <RolesPage />
    //   </Layout>
    // </div>
    <Provider store={store} >

   
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Navbar />
          
          {/* Dynamic content */}
          <div className="p-6 flex-grow">
            <Routes>
              <Route path="/roles" element={<Roles/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/" element={<Welcomepage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
