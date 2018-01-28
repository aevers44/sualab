import React from 'react';
import { Link, Route } from 'react-router-dom';

import Navbar from './navbar';
import styles from './header.scss';

const Header = () => 
    <header className={styles.header}>
        <div className={styles.innerContainer}>
            <div className={styles.logoImage}>
                <Link to="/">
                    <img src="https://d3rqapinkc8b8p.cloudfront.net/mainPage/sualab-logo@2x.png" alt=""/>
                </Link>
            </div>

            <div className={styles.menuWrapper}>
                <Link className={styles.menuItem} to="/company">Company</Link>
                <Link className={styles.menuItem} to="/">Product</Link>
                <Link className={styles.menuItem} to="/">News</Link>
                <Link className={styles.menuItem} to="/">Career</Link>
                <Link className={styles.menuItem} to="/">Blog</Link>
                <Link className={styles.menuItem} to="/">Contact</Link>
            </div>
        </div>

        <Route path="/company" component={Navbar} />
    </header>;

export default Header;