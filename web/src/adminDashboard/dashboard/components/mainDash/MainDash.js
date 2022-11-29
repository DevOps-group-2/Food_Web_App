
import "./MainDash.css"
import Orders from "../appendingOrders/Orders";



function MainDash(){
    return(
        <>
            <div className="mainDash">
                <h1>Orders</h1>
                <Orders />
            </div>
        </>
    )
}

export default MainDash;