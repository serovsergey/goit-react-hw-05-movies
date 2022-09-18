import React, { Suspense } from 'react';
import { NavLink, Outlet } from "react-router-dom";
// import PropTypes from 'prop-types';

import s from './SharedLayout.module.scss';

export const SharedLayout = (props) => {
  const getLinkClassName = ({ isActive }) => s.link + (isActive ? " " + s.active : "");

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.logo}>
          The Movie DB Search engine
        </div>
        <nav>
          <NavLink to='/' className={getLinkClassName} end>Home</NavLink>
          <NavLink to='/movies' className={getLinkClassName}>Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading chunk...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
};

// SharedLayout.propTypes = {};
