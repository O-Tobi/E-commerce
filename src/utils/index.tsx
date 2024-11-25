import cart from "./../assets/images/cart.svg";
import user from "./../assets/images/user.svg";



export const Cart = cart;
export const UserProfile= user;


export const NavText = [
    {
        id:1,
        navName: "Catalogue",
        isNavName : true
    },
    {
        id:2,
        navName: "Size",
        isNavName : true
    },
    {
        id:3,
        navName: "Special Features",
        isNavName : true
    },
    {
        id:4,
        navName: "About",
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

