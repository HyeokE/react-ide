import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Devfest from './Devfest';
import GdscDju from './GDSC-DJU';
import GdscTechBlog from './GDSC-Tech-Blog';
import Ozet from './OZET';

const Projects = () => {
  return (
    <Routes>
      <Route path={'/Devfest.tsx'} element={<Devfest />} />
      <Route path={'/GDSC-DJU.tsx'} element={<GdscDju />} />
      <Route path={'/GDSC-Tech-Blog.tsx'} element={<GdscTechBlog />} />
      <Route path={'/OZET.tsx'} element={<Ozet />} />
    </Routes>
  );
};

export default Projects;
