import { Cart, UserProfile, Sales, ManInCoat, BlackFriday } from "./assets";


export const NavText = [
    {
        id:1,
        navName: "Today's Deal",
        isNavName : true
    },
    {
        id:2,
        navName: "Customer Service",
        isNavName : true
    },
    {
        id:3,
        navName: "Registry",
        isNavName : true
    },
    {
        id:4,
        navName: "Gift Card",
        isNavName : true
    },
    {
        id:5,
        navName: "Checkout",
        isNavName : false,
        icon: Cart
    },
    {
        id:6,
        navName: "Profile",
        isNavName : false,
        icon: UserProfile
    },
   
    
];


export const SmallImages = [Sales, ManInCoat, BlackFriday]

export const FooterServices = [
    {
        id:1,
        navName: "Branding",
        isNavName : true,
        icon: "",
        navStyle:" "
    },
    {
        id:2,
        navName: "Design",
        isNavName : true,
        icon: "",
        navStyle:" "
    },
    {
        id:3,
        navName: "Marketing",
        isNavName : true,
        icon: "",
        navStyle:" "
    },
    {
        id:4,
        navName: "Advertisement",
        isNavName : true,
        icon: "",
        navStyle:" "
    },
]

export const  FooterCompany = [
    {
        id:1,
        navName: "About Us",
        isNavName : true,
        icon: "",
        navStyle:" "
    },
    {
        id:2,
        navName: "Contact",
        isNavName : true,
        icon: "",
        navStyle:" "
    },
    {
        id:3,
        navName: "Jobs",
        isNavName : true,
        icon: "",
        navStyle:" "
    },
    {
        id:4,
        navName: "Press Kit",
        isNavName : true,
        icon: "",
        navStyle:" "
    },
]