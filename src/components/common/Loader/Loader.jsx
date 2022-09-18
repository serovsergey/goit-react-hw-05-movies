import React from 'react'
import { ThreeDots } from 'react-loader-spinner';
// import PropTypes from 'prop-types'
import s from './Loader.module.scss'

function Loader(props) {
  return (
    <div className={s.loader}>
      <ThreeDots color="#032541" />
    </div>
  )
}

// Loader.propTypes = {}

export default Loader
