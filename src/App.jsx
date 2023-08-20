import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Images from './components/Images';
import NavBar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const [progress, setProgress] = useState(0);
  const [activeLink, setActiveLink] = useState('nature');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  let apiKey = import.meta.env.VITE_IMAGES_APP


  return (
    <>
      <LoadingBar
        color='#1D4ED8'
        progress={progress}
        height={4}
        loaderSpeed={1000}
        shadow={true}

      />
      <NavBar activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
      <Routes>
        <Route path='/' element={<Images setProgress={setProgress} apiKey={apiKey} category='nature' />} />
        <Route path='/city' element={<Images setProgress={setProgress} apiKey={apiKey} category='city' />} />
        <Route path='/technology' element={<Images setProgress={setProgress} apiKey={apiKey} category='technology' />} />
        <Route path='/food' element={<Images setProgress={setProgress} apiKey={apiKey} category='food' />} />
        <Route path='/still_life' element={<Images setProgress={setProgress} apiKey={apiKey} category='still_life' />} />
        <Route path='/abstract' element={<Images setProgress={setProgress} apiKey={apiKey} category='abstract' />} />
        <Route path='/wildlife' element={<Images setProgress={setProgress} apiKey={apiKey} category='wildlife' />} />
      </Routes>
    </>
  )
}

export default App;

