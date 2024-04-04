import React from 'react';
import './Card.css'

//一个容器
const Card = (props) => {
    return (
        //有可能需要添加外部属性传进来的样式
        //多个className也会自动展开分割空格
        <div className={`card ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Card;