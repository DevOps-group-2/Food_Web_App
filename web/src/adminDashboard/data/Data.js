
//Sidebar inputs
import {
    UilEstate,
    UilClipboardAlt,
} from "@iconscout/react-unicons";

// Sidebar
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    }
];

export const CardsData = [
    {
        title: "Orders",
        description: "(Last 24 hours)",
        value: "5",
        series: [{
            name: "Orders",
            data: [1, 1, 1, 1, 1]
        }]
    },
    {
        title: "Sales",
        description: "(Last 24 hours)",
        value: "7000",
        series: [{
            name: "Sales",
            data: [589, 4324, 34, 89, 111]
            }
        ]
    }
]