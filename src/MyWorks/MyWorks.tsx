import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Job from "./job/Job";

const MyWorks = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.work}>
                    <Job title={"Project_1"} description={"Customize the user flow replay experience with the latest Recorder extension API."}/>
                    <Job title={"Project_2"} description={"Explore options to customize your recorder experience"}/>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;