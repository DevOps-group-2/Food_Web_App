import Cards from "../cards/Cards"
import "./MainDash.css"
import AppendingOrders from "../appendingOrders/AppendingOrders";
import ReactApexCharts from 'react-apexcharts'
import {Options} from "../../../data/Data";


function MainDash(){
    return(
        <>
            <div className="mainDash">
                <h1>Cards</h1>
                <Cards  />
                <h1>Chart</h1>
                    <div className="chart">
                        <ReactApexCharts
                            series = {Options.series}
                            type = 'bar'
                            options = {Options.options}
                            height={350}
                        />
                    </div>
                <h1>Appending Orders</h1>
                <AppendingOrders />
            </div>
        </>
    )
}

export default MainDash;