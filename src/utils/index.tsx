import cart from "./../assets/images/cart.svg";
import user from "./../assets/images/user.svg";
import burger from "./../assets/images/hamburger.svg";
import close from "./../assets/images/close.svg";



export const Cart = cart;
export const UserProfile= user;
export const Menu = burger;
export const Close = close;


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

