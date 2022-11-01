import './sideBar.css'
import { SidebarData} from "../../data/Data";
import {useState} from "react";
//import {UilSignOutAlt} from "@iconscout/react-unicons";

function SideBar(){
    let Logo;

    const [selected, setSelected] = useState(0)
    return(
        <div className="Sidebar">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>

            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div
                            className={selected === index ? "menuItem active" : "menuItem"}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                    );
                })}
                <div className="menuItem">
                    {/*<UilSignOutAlt />*/}
                </div>
            </div>
        </div>
    );
}

export default SideBar;