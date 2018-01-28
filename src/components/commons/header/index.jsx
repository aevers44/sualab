import React from 'react';
import { Link, Route } from 'react-router-dom';

import Navbar from './navbar';
import styles from './header.scss';

const Header = () => {
    const curPath = window.location.pathname.split('/')[1];
    
    return (
        <header className={styles.header}>
            <div className={styles.innerContainer}>
                <div className={styles.logoImage}>
                    <Link to="/">
                        <img src="https://d3rqapinkc8b8p.cloudfront.net/mainPage/sualab-logo@2x.png" alt=""/>
                    </Link>
                </div>

                <div className={styles.menuWrapper}>
                    <Link 
                        className={`${styles.menuItem} ${curPath === 'company' ? styles.active : ''}`} 
                        to="/company"
                    >
                        Company
                    </Link>
                    <Link 
                        className={`${styles.menuItem} ${curPath === 'product' ? styles.active : ''}`} 
                        to="/"
                    >
                        Product
                    </Link>
                    <Link 
                        className={`${styles.menuItem} ${curPath === 'news' ? styles.active : ''}`} 
                        to="/"
                    >
                        News
                    </Link>
                    <Link 
                        className={`${styles.menuItem} ${curPath === 'career' ? styles.active : ''}`} 
                        to="/"
                    >
                        Career
                    </Link>
                    <Link 
                        className={`${styles.menuItem} ${curPath === 'blog' ? styles.active : ''}`} 
                        to="/"
                    >
                        Blog
                    </Link>
                    <Link 
                        className={`${styles.menuItem} ${curPath === 'contact' ? styles.active : ''}`} 
                        to="/"
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <Route path="/:page/:subpage" component={Navbar} />
        </header>
    );
}

export default Header;