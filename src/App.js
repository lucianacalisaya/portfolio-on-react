
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Index from './components/Index/Index';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';
import {LanguageContextProvider} from './context/LanguageContext'


function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <BrowserRouter>
        <header className="App-header">
          <Header/>
        </header>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/portfolio' element={<PortfolioContainer/>}/>
        </Routes>
        </BrowserRouter>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
