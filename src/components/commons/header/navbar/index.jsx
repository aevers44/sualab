import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.scss';

const marginList = {
    'company': 275,
};

const linkItem = {
    'company': [
        {'name': 'About us', 'link': 'about-us'},
        {'name': 'People', 'link': 'people'}
    ]
};

const makeLinks = (path) => {
    let result = [];

    for (let idx in linkItem[path]) {
        const item = linkItem[path][idx];
        
        result.push(<Link key={item.link} className={styles.linkItem} to={item.link}>{item.name}</Link>);
    }

    return result;
}

const Navbar = ({ match }) => {
    const currentPath = match.path.split('/')[1];
    const linkItems = makeLinks(currentPath);

    return (
        <nav className={styles.navbar}>
            <div className={styles.innerContainer}>
                <div 
                    className={styles.linkWrapper} 
                    style={{marginRight: `${marginList[currentPath]}px`}}
                >
                    {linkItems}         
                </div>
            </div>
        </nav>
    );

};

export default Navbar;
