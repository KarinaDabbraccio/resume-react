
import './App.css';
import Navigation from './components/layout/Navigation'
import EducationPage from './pages/Eductaion'
import ExperiencePage from './pages/Experience'
import PersonalPage from './pages/Personal'
import { Route, Routes } from 'react-router-dom'
import React from 'react';

const isShowWelcome = true;

function App() {
  return (
      <div className="App">
          <Navigation />
         
          <Routes>
              <Route path='/resume' exact element={<ExperiencePage />} />
              <Route path='/education' element={<EducationPage />} />
              <Route path='/personal-info' element={<PersonalPage />} />
          </Routes>


    </div>
  );
}

export default App;
export { isShowWelcome };
