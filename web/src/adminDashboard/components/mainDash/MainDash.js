import Cards from "../cards/Cards"
import AppendingOrders from "../appendingOrders/AppendingOrders";

function MainDash(){
    return(
        <>
            <div className="mainDash">
                <h1>Cards</h1>
                <Cards  />
                <h1>Appending Orders</h1>
                <AppendingOrders />
            </div>
        </>
    )
}

export default MainDash;