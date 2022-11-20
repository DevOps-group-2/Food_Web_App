import React from 'react';
import css from './Style.module.css';
import BasketButtonHeader from './/BasketButtonHeader';

const Header = (props) => {
  return (
    <>
      <header className={css.header}>
         <h1></h1>
       <BasketButtonHeader onClick={props.onOpen} />
      </header>
    </> 
  )
};

export default Header;