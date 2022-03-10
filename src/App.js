import './App.css';
import {Routes, Route,UseNavigate } from 'react-router-dom'
import Login from './components/Login';
import Home from './container/Home';
import {ThemeProvider} from './components/themeContext';


function App() {
  return (
    <ThemeProvider>

      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
