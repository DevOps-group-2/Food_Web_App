import { useRef } from 'react';
import css from './Style.module.css';

export default function ConfirmSendOrder(props) {
    const commentInputs = useRef(), sendHandler = (event) => {
        event.preventDefault();
        const typedComment = commentInputs.current;

        props.onConfirm({
            comment: typedComment
        });
    }, comment = `${css.check}`;

    return (
        <form onSubmit={sendHandler}>
            {/*<div className={comment}>
                Comments:<div></div>
                <input type='text' id='text'/>
            </div>*/}
            <h4>You can now go to the checkout for payment.</h4>
            <div className={css.styles}>
                <button onClick={props.onClose}>
                    Close
                </button>
                <button className={css.send}>Checkout</button>
            </div>
        </form>
    );
};