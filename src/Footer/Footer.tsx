import React from 'react';
import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.FooterBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>

            </div>
        </div>
    );
};

export default Footer;