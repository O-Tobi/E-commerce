import cart from "./../assets/images/cart.svg";
import user from "./../assets/images/user.svg";
import burger from "./../assets/images/hamburger.svg";
import close from "./../assets/images/close.svg";
import search from "./../assets/images/search.svg";
import black from "./../assets/images/blackfriday.jpg";

import headphone from "./../assets/images/headset.jpg";
import phone from "./../assets/images/iphone.jpg";
import neckband from "./../assets/images/levelupro.jpg";
import manHero from "./../assets/images/man-in-coat.jpg";
import sale from "./../assets/images/sale.jpg";
import glasses from "./../assets/images/sunshade1.jpg";

const swir = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"



export const Cart = cart;
export const UserProfile= user;
export const Menu = burger;
export const Close = close;
export const Search = search;
export const BlackFriday =black
export const Headset = headphone;
export const Iphone = phone;
export const SamsungLevelUPro = neckband;
export const ManInCoat = manHero;
export const Sales = sale;
export const Sunshade = glasses;
export const Swirl = swir;






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

