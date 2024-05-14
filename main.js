//! Değişken Tanımlama

//* var
//ES(5) sürümlerinde kullanılıyordu.
var x = 20;
var x=50;
x=60;


//ES(6) > güncel sürümlerde let/const kullanılır.
//*let
let y = 30;
y=60;

//*const
// ile tanımlanan değişkenler bir kez atanır ve daha sonra değiştirilemez.(sabit)
const z =40

const person = {
    name: "Ahmet",
    height:190,
}

person.name = "Ali";

// console.log(person)


//! Verİ Türleri

//* String
// Metin verilerini ifade eder
const text = "Merhaba Dünya!"
const text2 = 'Merhaba Dünya!'
const text3 = `Merhaba Dünya!`


//* Number
// Sayısal değerleri ifade eder.

const num =50
const num2 =50.12345

// Boolean
// true veya false değeri.Genellikle koşullarda kullanırız.
let isAdult=true
let isExpand=false

//*Array
// Sıralı elemanları içeren bir veri yapısıdır
// Elemanlar farklı veri türlerine sahip olabilir
let numbers =[1,2,3,4,5,6,0]

//* Objects
// Anahtar-Değer çiftlerini içeren bir veri yapısıdır.
// özellik ve methodları tutar.
//{} ile tanımlanır.

const car={
    make: "Nissan",
    year: 2017,
    old_models:[1990,1997,2014],
    isCrashed:false, 
    switchGear:function(){
        document.write("Arabanın vitesi değişiyor.." + '<br>')
    // alert("Arabanın vitesi değişiyor..")

    }
}

// nesne değerlerine erişme
document.write(car.make + '<br>')
document.write(car.year + '<br>')
document.write(car.old_models + '<br>')
car.switchGear()


//* Function
// bir işlevi temsil eder,
// belirli bir görevi yapa veya sonuç üreren yapılardır.
//parametre: fonksiyon çağırılırken gönderilen değer

function doubleNumber(number){
    //fonksiyon çağrıldığı zaman çalşacak kodlar
   document.write('sayı ikiyle çarpıldı:' + number*2 + '<br>')
}
 //* fonksiyonun çağrılması

 doubleNumber(30)
 doubleNumber(982)
 doubleNumber(145)


//kullanıcıdan alınan sayıyı fonksiyona gönderme 
const users_num = prompt('sayı giriniz')
 doubleNumber(users_num)

/*-----ders ortalaması bulma uygulaması
 *  vize1 %30,  vize2 %30, final %40
 *  geçme notu 60
 *  60 ın altındaysa alert ile uyarı verin kaldınız geçmiş olsun.
 *  60 ın üzerindeyse alert ile tebrikler geçtini yazsın.
 * if-else
 *
 *
 */

//! Sonuç Üreten Fonskiyonlar
//fonksiyonların yaptığı sonucu hesaplamaların ardından
//elde ettiği sonucu fonksiyonun çağrıldığı yere göndermek isteyebiliriz

function multiply(a,b,c){
    let total=a*b*c
    //fonksiyonun çağrıldığı yere döndürülmesi
    //gereken değere kara verir
    return total;
}


let func_anwer=multiply(10,99,200)
let func_anwer2=multiply(800,129,200)


document.write(
    'Fonskiyonun döndürdüğü sonuç:' + func_anwer + '<br>'
)


document.write(
    'Fonskiyonun döndürdüğü sonuç:' + func_anwer2 + '<br>'
)

//return 2.görevi
//fonksiyonların çalışmasını sonlandırır

function divide(x,y){
    document.write(x / y)
}

divide(10,2)
 divide([10,20],2)
// console.log(typeof 10)
  
function dividi(x,y){
  if(y>15){
document.write("y 15 ten büyüktür")
  }
}
dividi(10,20)

console.log(typeof '10')

function divid(x,y){
  if(typeof x !== 'number' || typeof y !=='number'){
    document.write('x number değildir')
  }
}
divid({},10)

function div(x,y){
   // x veya y sayı değilse fonksiyonu durdur
  if(typeof x !== 'number' || typeof y !=='number'){
// kullanıcıyı bilgilendir
 document.write('gönderilen parametreler sayı olmalı')
 //fonksiyonu durdur
 return;
  }
  document.write('Sonuç:' + x / y)
}

div(50,10)


//! Arrow Function
//normal fonksiyonlarda yaptığımızı daha az kodla
//daha okunabilir şekilde yapmamızı sağlar



function test (a,b){
    return a * b;
}

const test2 = (a,b)=>{
    return a *b ;
}

// ok fonksiyonlarında çok satırda return
const test3 = (a,b) => (
    // () saysesinde return edilir
    a * b
)

// ok fonskiyonlarında tek satırda return
const test4 = (a,b) => a * b

test(10,20)

/*

1 sayi tahmin oyunu yaziniz. Kisi makinanin urettigi sayiyi bilirse eger
ekrana kazandi, bilmezse ve hakki bitti ise ekrana kaybetti ama haklari hala
varsa o zaman makinanin urettigi sayi ile oyuncunun girdigi sayiyi 
karsilastirarak daha buyuk veya daha kucuk girmesini bilgilendiren
bir program yaziniz.(adamin 3 hakki var)

const mSAYİ = parseInt(Math.random() * 100)
Math.random(): Bu fonksiyon, 0 (dahil) ile 1 (hariç) arasında rastgele bir ondalıklı sayı üretir. Yaptığınız işlemde Math.random() * 100 ifadesi, 0 ile 100 arasında (100 hariç) rastgele bir ondalıklı sayı elde etmenizi sağlar.

parseInt(): Bu fonksiyon, aldığı bir string'i tam sayıya dönüştürür. Math.random() fonksiyonunun sonucunu 100 ile çarptığınızda, elde edeceğiniz sayı 0 ile 99 arasındaki bir yüzdeliği temsil eder.

Yani, parseInt(Math.random() * 100) ifadesi ile elde ettiğiniz sayı, 0 ile 99 arasında rastgele bir tam sayıdır. Örneğin, 42.57893 veya 76.02134 gibi bir ondalıklı sayı yerine, bu işlem sonucunda 0 ile 99 arasında bir tam sayı elde edilir. mSAYİ değişkeni bu rastgele tam sayıyı saklar.

*/

let hak = 1;
const mSayi = parseInt(Math.random() * 100);

console.log(mSayi);

while (hak < 4) {
  const oSayi = prompt('tahmini giriniz');
  if (mSayi == oSayi) {
    console.log('KAZANDINIZ!');
    break;
  } else {
    if (hak == 3) {
      console.log('Kaybettiniz!');
      break;
    } else {
      if (mSayi > oSayi) {
        console.log('Daha Büyük Sayı Giriniz!');
      } else {
        console.log('Daha Küçük Sayı Giriniz!');
      }
    }
  }
  hak++;
}








//! Array (dizi):
//* Aynı veri türüne sahip birden  çok ögeyi saklamak için
// ve bu ögeleri işlemek için kullanılır.

const basket = ["Elma", "Armut", "Muz", "Üzüm"]

document.write(basket + '<br>')

//dizide ki belirli sırada ki (index) elemanına ulaşma
document.write(basket[1] + '<br>')

//! Dizi Methodları
//* push: dizinin sonuna yeni bir eleman eklemek için kullanılır.
basket.push('Karpuz')
basket.push('Çilek')


document.write(basket + '<br>')

//* unshift: diziinin başına eklemeye yarar
basket.unshift('Şeftali')

document.write(basket + '<br>')

//*shift: dizinin ilk elemanını çıkarma
basket.shift()

document.write(basket + '<br>')

//*pop: dizinin son elemanını çıkarma
const last_ele=basket.pop()
// console.log(last_ele)

document.write(basket + '<br>')


//* slice: dizinin belirli bir parçasını kesip yeni bir dizi oluşturu

const newBasket = basket.slice(2,5)
document.write(newBasket)

/*



*/


//!farklı dosyalardan export edilen veriy erişme

// import { leader_table, users} from "./constant.js";
import * as constants from './constant.js'
/*
* splice:
dizide ki belirli bir bölümğ değiştirir veyya çıkarır.
isteğe bağlı şekilde çıkardıklarının yerine yeni
elemanlar ekleyebilir.

? splice istediği parametreler
- silmeye başlanacak index
- kaç tane eleman silinecek
- eklenecek eleman/elemanlar

*/
//  console.log(leader_table, users)
// console.log(constants.users)

 console.table(constants.leader_table)

 //eleman çıkarmak için kullanım
 const deleted_items= constants.leader_table.splice(3,2)
 console.table(deleted_items)
 console.table(constants.leader_table)


 //eleman eklemek için kullanımı
 constants.leader_table.splice(5,0, constants.newUser2,constants.newUser1)
 console.table(constants.leader_table)

 // diziyi güncellemek için kullanımı
constants.leader_table.splice(3,1,{
    id:'gd96301',
    username:'elif',
    point:20000,
})
console.table(constants.leader_table)

//*reserve diziyi tersine çevirme
console.table(constants.leader_table.reverse())

//* sort: diziyi sıralamaya yarar
// sayı değerine göre sıralama
constants.leader_table.sort((a,b)=> b.point - a.point)

console.table(constants.leader_table)

// string değerine göre sıralam
constants.leader_table.sort((a,b)=> a.username.localeCompare(b.username))
console.table(constants.leader_table)