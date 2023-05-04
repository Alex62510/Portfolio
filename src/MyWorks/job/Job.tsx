import React from 'react';
import style from './Job.module.css';

type JobPropsType = {
    title: string
    description:string
}
const Job = (props: JobPropsType) => {
    return (
        <div className={style.job}>
            <div className={style.image}></div>
            <h3 >{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Job;