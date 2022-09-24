import { Image } from 'primereact/image';
import shawarmaLam from '../../../assets/menu/shawarmaLam.jpg';
import Picture from "../../components/Image/Picture";

function Menu() {
    return(
        <div>
                <Picture image={fakeLamb.image}/>
                <div className="Description">
                        <b>{fakeLamb.text}</b>
                        <p>{fakeLamb.price}</p>
                </div>
                <Picture image={premiumFakeLamb.image}/>
                <div className="Description">
                        <b>{premiumFakeLamb.text}</b>
                        <p>{premiumFakeLamb.price}</p>
                </div>
                <Picture image={realLamb.image}/>
                <div className="Description">
                        <b>{realLamb.text}</b>
                        <p>{realLamb.price}</p>
                </div>
                <Picture image={premiumRealLamb.image}/>
                <div className="Description">
                        <b>{premiumRealLamb.text}</b>
                        <p>{premiumRealLamb.price}</p>
                </div>

        </div>
    )

}
const fakeLamb = {
        image: {
                src: shawarmaLam,
                width: 250,
                height: 200,
                alt: "shawarma fake lamb"
        },
        text: "Shawarma with fake lamb",
        price: "Price: 50 kr."
}
const premiumFakeLamb = {
        image: {
                src: shawarmaLam,
                width: 250,
                height: 200,
                alt: "shawarma premium fake lamb"
        },
        text: "Shawarma with premium fake lamb",
        price: "Price: 70 kr."
}
const realLamb = {
        image: {
                src: shawarmaLam,
                width: 250,
                height: 200,
                alt: "shawarma real lamb"
        },
        text: "Shawarma with real lamb",
        price: "Price: 100 kr."
}
const premiumRealLamb = {
        image: {
                src: shawarmaLam,
                width: 250,
                height: 200,
                alt: "shawarma premium real lamb"
        },
        text: "Shawarma with premium real lamb",
        price: "Price: 120 kr."
}

export default Menu;