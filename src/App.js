import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-design-icons/font/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/Main/Main';
import { UseSignInProvider } from './Hooks/useSignIn';
import Home from './Pages/Home/Home';

function App() {
  return (
    <UseSignInProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='titio' element={<h1>Titio</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UseSignInProvider>
  );
}

export default App;
