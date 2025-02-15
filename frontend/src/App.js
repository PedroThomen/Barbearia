import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Agendamento from './pages/Agendamento';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route 
        path="/agendamento" 
        element={
          <PrivateRoute>
            <Agendamento />
          </PrivateRoute>
        } 
      />
    </Routes>
  );
}

export default App; 