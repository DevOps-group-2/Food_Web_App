import React, {useContext} from 'react';
import axios from 'axios';
import foodProduct from "./menu/FoodProduct";
import Context from "./basket/Context";

const Test = () => {

    const cartCtx = useContext(Context);

    const [formValue, setformValue] = React.useState({
        id: cartCtx.foodProducts.id,
        menu: cartCtx.foodProducts.menu,
        amount: cartCtx.foodProducts.amount,
        price: cartCtx.foodProducts.price
    });

    const handleSubmit = async() => {
        const formData = new FormData();
        formData.append("id", formValue.id)
        formData.append("menu", formValue.menu)
        formData.append("amount", formValue.amount)
        formData.append("price", formValue.price)

        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: "http://localhost:8080/api/orders",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch(error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Order Form</p>
            <input
                type="number"
                name="id"
                placeholder="enter an id"
                value={formValue.id}
                onChange={handleChange}
            />
            <input
                type="text"
                name="menu"
                placeholder="enter a menu"
                value={formValue.menu}
                onChange={handleChange}
            />
            <input
                type="number"
                name="amount"
                placeholder="enter amount"
                value={formValue.amount}
                onChange={handleChange}
            />
            <input
                type="number"
                name="price"
                placeholder="enter a price"
                value={formValue.price}
                onChange={handleChange}
            />
            <button
                type="submit"
            >
                Send Order
            </button>
        </form>
    )
};

export default Test;