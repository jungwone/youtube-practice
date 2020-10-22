import React, { useState } from "react";
import styles from "./header.module.css";
import Logo from "../images/logo.png";
import Search from "../images/search.png";

function Header(props) {
  const [keyword, setKeyword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("search keyword : ", keyword);
    setKeyword(""); // Reset keyword
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <figure>
          <img
            src={Logo}
            alt="logo"
            align="center"
            className={styles.logoImage}
          />
        </figure>
        <span className={styles.logoText}>Youtube</span>
      </div>
      <div className={styles.search}>
        <form className={styles.form} onSubmit={onSubmit}>
          <input
            placeholder="Search.."
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <button>
            <img src={Search} alt="search" />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
