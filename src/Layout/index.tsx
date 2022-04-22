import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';

const Layout = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<AboutMe />} />
      <Route path={'/projects/*'} element={<Projects />} />
      <Route path={'/experience/*'} element={<Experience />} />
      <Route path={'/communication/*'} element={<AboutMe />} />
      <Route path={'/contact/*'} element={<Contact />} />
    </Routes>
  );
};

export default Layout;
