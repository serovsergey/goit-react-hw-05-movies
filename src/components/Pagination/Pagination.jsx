import React from 'react';
import PropTypes from 'prop-types';

import s from './Pagination.module.scss';

export const Pagination = ({ page, total_pages, onNavigate }) => {
  const handleNavigate = (evt) => {
    onNavigate(evt.target.value);
  }

  if (total_pages <= 1) {
    return;
  }

  return (
    <ul className={s.pagList}>
      {total_pages > 1 && <li><button disabled={page === 1} value={page - 1} onClick={handleNavigate}>{'\u2B9C'}</button></li>}
      {page > 1 && <li><button value={1} onClick={handleNavigate}>1</button></li>}
      {page > 4 && <li><span>...</span></li >}
      {page > 3 && <li><button value={page - 2} onClick={handleNavigate}>{page - 2}</button></li >}
      {page > 2 && <li><button value={page - 1} onClick={handleNavigate}>{page - 1}</button></li >}
      <li><button className={s.active}>{page}</button></li>
      {total_pages - 1 > page && <li><button value={page + 1} onClick={handleNavigate}>{page + 1}</button></li >}
      {total_pages - 2 > page && <li><button value={page + 2} onClick={handleNavigate}>{page + 2}</button></li >}
      {total_pages - 3 > page && <li><span>...</span></li>}
      {total_pages > page && <li><button value={total_pages} onClick={handleNavigate}>{total_pages}</button></li >}
      {total_pages > 1 && <li><button disabled={page === total_pages} value={page + 1} onClick={handleNavigate}>{'\u2B9E'}</button></li >}
    </ul>
  )
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired,
};
