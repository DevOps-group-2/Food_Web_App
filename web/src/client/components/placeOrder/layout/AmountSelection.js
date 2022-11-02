import React from 'react'
import css from './Style.module.css';

let AmountSelection;
AmountSelection = React.forwardRef((props, ref) => {

    return (
        <>
            <div className={css.input}>
                <label htmlFor={props.input.id}> {props.label} </label>
                <input ref={ref} {...props.input} />
            </div>
        </>
    )
});

export default AmountSelection;