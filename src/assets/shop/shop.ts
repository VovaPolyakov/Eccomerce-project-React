import tshirt from '../images/t-shirt.jpg'
import shorts from '../images/shorts.jpg'
import sweetshot from '../images/sweetshot.jpg'
import hoodie from '../images/hoodie.jpg'
import wshorts from '../images/wshorts.jpg'
import wtshirt from '../images/wt-shirt.jpg'
import panama from '../images/panama.jpg'
import bag from '../images/bag.jpg'
import bag2 from '../images/bag2.jpg'

export const clothing = [
    {
        sale:false,
        gender:'men',
        image:tshirt,
        name:'Styssy',
        type:'Футболка',
        cost:259
    },
    {
        sale:false,
        gender:'men',
        image:sweetshot,
        name:'Styssy',
        type:'Свитшот',
        cost:309
    },
    {
        sale:false,
        gender:'men',
        image:shorts,
        name:'A-COLD-WALL',
        type:'Шорты',
        cost:799
    },
    {
        sale:true,
        gender:'men',
        image:hoodie,
        name:'A-COLD-WALL',
        type:'Худи',
        cost:899,
        withSale:500
    },
    {
        sale:false,
        gender:'women',
        image:panama,
        name:'JACQUEMUS',
        type:'Панама',
        cost:219
    },
    {
        sale:false,
        gender:'women',
        image:bag,
        name:'JACQUEMUS',
        type:'Сумка',
        cost:2999
    },
    {
        sale:false,
        gender:'women',
        image:wtshirt,
        name:'ACNE-STUDIOS',
        type:'Футболка',
        cost:499
    },
    {
        sale:false,
        gender:'women',
        image:wshorts,
        name:'MISBHV',
        type:'Шорты',
        cost:399
    },
    {
        sale:true,
        gender:'women',
        image:bag2,
        name:'JACQUEMUS',
        type:'Сумка',
        cost:2000,
        withSale:1399
    },
];
