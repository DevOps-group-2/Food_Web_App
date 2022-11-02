import React from 'react';
import ReactDOM from 'react-dom';
import css from './Style.module.css';

const Backdrop = () => {
    return (
        <div className={css.backdrop}></div>
    )
}, ModalOverlay = props => {
    return (
        <div className={css.basketbox}>
            <div className={css.content}> {props.children} </div>
        </div>
    )
}, Element = document.getElementById('overlays'), BasketBox = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, Element)}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, Element)}
        </>
    )
};


export default BasketBox;