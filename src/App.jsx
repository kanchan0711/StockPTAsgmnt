import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import ClassList from './Components/ClassList';
import { AuthProvider } from './store/AuthContext' ;
import PrivateRoute from './Components/PrivateRoute'; // Import the PrivateRoute component

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />
          
          {/* Private Route */}
          <Route
            path="/live-classes"
            element={
              <PrivateRoute>
                <ClassList />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
