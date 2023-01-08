import React from "react";
import Searchbar from './Searchbar/Searchbar';
import styles from './Header.module.css';

function Header() {
  return (
    <header className= {`${styles.header} container`}>
      <div>
        <Searchbar />
      </div>
    </header>
  )
}

export default Header;