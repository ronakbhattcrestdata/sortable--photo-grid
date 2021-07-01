import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Home from '../pages/Home';

function home() {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}

export default home;