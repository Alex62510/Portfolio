import React from 'react';
import style from './RemoteWork.module.css';
import styleContainer from './../common/styles/Container.module.css'

const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <h1 className={style.title}>looking for remote work options</h1>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
};

export default RemoteWork;