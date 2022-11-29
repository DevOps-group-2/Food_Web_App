import { useRef } from 'react';
import css from './Style.module.css';

export default function ConfirmSendOrder(props) {
    const commentInputs = useRef(), sendHandler = (event) => {
        event.preventDefault();
        const typedComment = commentInputs.current;

        props.onConfirm({
            comment: typedComment
        });
    };

    return (
        <form onSubmit={sendHandler}>
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