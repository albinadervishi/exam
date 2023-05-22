import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/main';
import Details from './components/Details';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Details />} path="/thing/:id"/>
          <Route element={<Update />} path="/thing/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
