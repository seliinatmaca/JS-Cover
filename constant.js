//api js ded ki expore edilen verilere erişme
// {} kullnaırız
// değişken isimleri neyse onu yazarız
import {getData,deleteData,updateData} from './api.js'


// default export edilen elemana erişirken {} kullanmayız.
// import ederken istediğimiz ismi verebiliriz


import base_url from './api.js';

// console.log(base_url)




export const leader_table =[
    {
        id:'ad12345',
        username:"ahmet",
        point:1090,
    },
    {
        id: 'bd67890',
        username: "mehmet",
        point: 9800
    },
    {
        id: 'cd13579',
        username: "ayşe",
        point: 8700
    },
    {
        id: 'ed24680',
        username: "fatma",
        point: 8500
    },
    {
        id: 'fd75310',
        username: "ali",
        point: 8200
    },
    {
        id: 'gd96301',
        username: "elif",
        point: 7800
    },
    {
        id: 'hd57293',
        username: "osman",
        point: 7600
    },
    {
        id: 'id18462',
        username: "merve",
        point: 7400
    },
    {
        id: 'jd29574',
        username: "selim",
        point: 7200
    },
    {
        id: 'kd48163',
        username: "zeynep",
        point: 7000
    }
]

export const users = ["ahmet", "mehmet", "ali"]

export const newUser1 = {
    id:'aslkshc',
    username : "elif",
    point: 9000,
}

export const newUser2 = {
    id:'aslkshf',
    username : "selin",
    point: 19000,
}




