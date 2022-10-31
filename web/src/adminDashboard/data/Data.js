
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

//Chart data
export const Options = {
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: 'DKK'
            }
        },
        fill: {
            opacity: 1
        },
        theme: {
            palette: 'palette2',

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return  " DKK " + val
                }
            }
        }
    },

};