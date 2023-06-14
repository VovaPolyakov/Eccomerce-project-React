import tshirt from '../images/t-shirt.jpg'
import shorts from '../images/shorts.jpg'
import sweetshot from '../images/sweetshot.jpg'
import hoodie from '../images/hoodie.jpg'
import wshorts from '../images/wshorts.jpg'
import wtshirt from '../images/wt-shirt.jpg'
import panama from '../images/panama.jpg'
import bag from '../images/bag.jpg'
import bag2 from '../images/bag2.jpg'
import ts_shirt from '../images/t-shirt.jpg'
import jpgt_shirt from '../images/jpg-shirt.jpg'

export const clothing = [
    {
        id:1,
        sale:false,
        gender:'men',
        image:jpgt_shirt,
        name:'Styssy',
        type:'Футболка',
        cost:259,
        amount:true,
        size:['M','L','XL','XXL']
    },
    {
        id:2,
        sale:false,
        gender:'men',
        image:sweetshot,
        name:'Styssy',
        type:'Свитшот',
        cost:309,
        amount:true,
        size:['M','L','XL','XXL']
    },
    {
        id:3,
        sale:false,
        gender:'men',
        image:shorts,
        name:'A-COLD-WALL',
        type:'Шорты',
        cost:799,
        amount:false,
        size:['M','L','XXL'],
    },
    {
        id:4,
        sale:true,
        gender:'men',
        image:hoodie,
        name:'A-COLD-WALL',
        type:'Худи',
        cost:899,
        withSale:500,
        amount:true,
        size:['M','L','XL','XXL']
    },
    {
        id:5,
        sale:false,
        gender:'women',
        image:panama,
        name:'JACQUEMUS',
        type:'Панама',
        cost:219,
        amount:true,
        size:['M','L','XL','XXL']
    },
    {
        id:6,
        sale:false,
        gender:'women',
        image:bag,
        name:'JACQUEMUS',
        type:'Сумка',
        cost:2999,
        amount:true,
        size:['M','L','XL','XXL']
    },
    {
        id:7,
        sale:false,
        gender:'women',
        image:wtshirt,
        name:'ACNE-STUDIOS',
        type:'Футболка',
        cost:499,
        amount:true,
        size:['M','L','XL','XXL']
    },
    {
        id:8,
        sale:false,
        gender:'women',
        image:wshorts,
        name:'MISBHV',
        type:'Шорты',
        cost:399,
        amount:false,
        size:['M']
    },
    {
        id:9,
        sale:true,
        gender:'women',
        image:bag2,
        name:'JACQUEMUS',
        type:'Сумка',
        cost:2000,
        withSale:1399,
        amount:true,
        size:['M','L','XL','XXL']
    },
];
