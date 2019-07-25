// komentar single line

/* komentar
multi
line
*/

// perintah unuk print sesuatu di terminal
// console.log('Hello world ...')

// print lokasi folder kita saat ini
// console.log(__dirname)

// print lokasi file kita saat ini
// console.log(__filename)

// buka tutup terminal cmd+j
// ctrl+/ membuat atau hilangkan komentar

//var nama = "Andi"
//console.log(nama)

// var usia
// usia = 22
// console.log (usia)

//var vs let

// var x = 22
// var x = 23

//console.log (x) //ngerti

// let y = 22
//let y = 23

//console.log (y) //error


// var nama = 'Zondo'
// var tanggal = 22
// var single = true
// var profesi = 'pelajar'

// var hasil = typeof(profesi)

// console.log (hasil)

//github.com/rochafialvin

// var teks = 'Halo Dunia'
// console.log(teks.length) //menghitung panjang karakter
// console.log(teks.indexOf('Dunia'))  //menemukan posisi suatu karakter, index dimulai dari 0

// console.log(teks.substr(5,4))  //mengambil dari index 5 sebanyak 4 karakter
// console.log(teks.slice(5,9))  // mengambil dari index 5 sampai index ke 8

// console.log(teks.split(' ')) // memecah karakter menjadi array dengan sesuatu karakter yg diinputkan

// var x = 'halo'
// var y = 'DUNIA'
// var z = 'hai, sudah dipantai nih'

// console.log (z.replace('ai','ia')) //ganti karakter sekali saja
// console.log (z.replace(/ai/g, 'ia')) //ganti semua karakter yang ada
// console.log (x.toUpperCase()) //ganti semua karakter ke huruf kapital
// console.log (y.toLowerCase()) //ganti semua karakter ke huruf kapital


// var angka = '2019'
// var teks = 'mobil'
// var hasil = parseInt(angka) //ubah string jadi angka
// var hasilTeks = parseInt(teks)

// console.log(hasil)
// console.log(angka)

// console.log (hasilTeks)  // NaN
// console.log (typeof(hasilTeks))  // tipe data tetap angka

// var usia = 29
// var usiaString = '28'
// var umurString = '25'
// var namaDepan = 'Brew'
// var namaBelakang = 'Master'

// console.log(namaDepan + namaBelakang)
// console.log(namaDepan + usia)
// console.log(namaDepan + ' ' + usia)
// console.log(namaDepan + ' ' + namaBelakang)

// console.log(usia + usiaString)
// console.log(umurString + usiaString)
// console.log(usia + usia)

// operator ( * + - ) operator dan operand (angka yang dihitung)

// var usiaAndi = 10
// var usiaBudi = 20

// console.log(usiaAndi * usiaBudi)
// console.log(usiaAndi / usiaBudi)
// console.log(usiaAndi + usiaBudi)
// console.log(usiaAndi * usiaBudi)
// console.log(usiaAndi % usiaBudi)
// console.log(usiaAndi ** 2) //pangkat

// usiaAndi++ // tambah dengan 1
// console.log(usiaAndi);


// usiaAndi + 1 // ga nambah di console, ga dimasukin ke variabel
// usiaAndi = usiaAndi + 1 // nambah
// console.log(usiaAndi+1) //nambah

// usiaAndi-- // kurang dengan 1

// usiaAndi += 1 // tambah dengan 1

// console.log(Math.PI) // pi 3,14
// console.log(Math.abs(-4.7)) // absolutif semua positif
// console.log(Math.pow(8,2)) // 8 pangkat 2
// console.log(Math.sqrt(64)) // akar 64
// console.log(Math.cbrt(8)) // akar pangkat 3 dari 8

// var a = Math.round(4.7) //pembulatan matematika
// var b = Math.ceil(4.7)  //pembulatan ke atas
// var c = Math.floor(4.7) //pembualatan ke bawah

// console.log(a, b, c)

// 0-0.999
// var hasil = Math.random()
// console.log(hasil);

// random dadu 1-6
// var hasil = Math.random() * 6 // 0-5.999
// console.log(Math.floor(hasil+1)) //1-6.999
// console.log(Math.ceil(hasil)) //cara lain

// var waktu = new Date()

// console.log(waktu.getFullYear())
// console.log(waktu.getMonth()) //0-11
// console.log(waktu.getDate())  //1-30
// console.log(waktu.getDay())  //0-6, bukan 7


// comparison operator

// console.log(4 == 4)
// console.log(4 == '4') // value harus sama
// console.log(4 === '4') // tipe data dan value harus sama

// var usia = 24
// var string = '25'

// console.log (usia < string) // true

// var benar = 4 < 5 // true
// var salah = 4 > 5 //false

// and &&
// keduanya true maka true
// console.log(benar && benar) // true
// console.log(benar && salah) // false
// console.log(salah && benar) // false
// console.log(salah && salah) // false

// // or ||
// // salah satu true maka true, keduanya false maka false
// console.log(benar || benar) // true
// console.log(benar || salah) // true
// console.log(salah || benar) // true
// console.log(salah || salah) // false

// // tanda negasi !
// console.log(!benar) // false
// console.log(!salah) // true

// console.log(benar && benar && salah && benar) // false
// console.log(benar && benar || salah && benar) // true

// var single = true 

// if(single){
//     console.log ('Masih sendiri')
// }
// else {
//     console.log ('Tidak lagi sendiri')
// }

// var umur = 18

// if (umur < 18){
//     console.log ("Belum punya KTP")
// }
// else {
//     console.log ("Sudah punya KTP")
// }


// var umur = 44

// if (umur < 18){
//     console.log ("Umur kurang dari 18")
// }
// else if (umur == 18){
//     console.log ("Umur pas 18")
// }
// else if (umur > 18 && umur < 25) {
//     console.log ("Umur di antara 18-24")
// }
// else if (isNan(umur)){
//  console.log ("Bukan angka")
// }
// else {
//     console.log ("Umur di atas 24")
// }


// not !
// var single = true
// !single //false

// console.log('Don\'t give up')

// var job = 'guru'
 
// switch (job.toLowerCase()) { //biar case insensitive
//     case 'guru':
//         console.log('Kerjaannya ngajar')
//         break; // harus dibreak biar case bawahnya ga keprint lagi
//     case 'sopir':
//         console.log('Kerjaannya nyupir')
//         break;
//     case 'polisi':
//         console.log('Kerjaannya polisi')
//         break;
//     default:
//         console.log('Tidak diketahui')
// }

// BUKAN BEST PRACTICE, LEBIH BAIK PAKAI IF
// var hujan = true
// switch (hujan) {
//     case true:
//         console.log('Sedang hujan')
//         break;
//     default:
//         console.log('Sedang kemarau')
// }

// BUKAN BEST PRACTICE, LEBIH BAIK PAKAI IF
// var umur = 18
// switch (umur) {
//     case umur < 18:
//         console.log('Kurang dari 18')
//         break;
//     case umur = 18:
//         console.log('Sama dengan 18')
//         break;
//     default:
//         console.log('Lebih dari 18')
// }

// beda if dan switch adalah if parameternya true false, kalau switch parameternya value

// LOOPPING

// WHILE

// var angka = 1

// while (angka <= 10){
//     console.log (angka)
//     angka++
// }

// DO WHILE

// var nilai = 1

// do {
//     console.log(nilai)
//     nilai++
// }
// while (nilai <= 10)
// console.log("Selesai")

// FOR LOOP

// for (var i = 1;i<=3;i++) {
//     console.log('looping ke: ' + i)
// }

// console.log ('Selesai looping')

// bilangan ganjil
// for (var i = 1;i<=10;i+=2) {
//     console.log(i)
// }

// console.log ('Selesai looping')

// // bilangan genap
// for (var i = 0;i<=10;i+=2) {
//     console.log(i)
// }

// console.log ('Selesai looping')


// for (var i=0; i <10; i++) {
//     if ( i % 2 == 0)
//     console.log (i)
// }

// var bintang = ''

// for(var i = 1; i <= 5 ; i++){
//     bintang += ' * \n'
// }

// console.log(bintang)

// var bintang = '' // harus masukkan nilai string kosong, kalau nggak, nanti undefined ikut keprint
// var angka = 5

// for(var i = 0; i < angka ; i++){
    
//     for(var j = 0; j < angka; j++){
//         bintang += ' * '
//     }
//     bintang += '\n'
// }

// console.log(bintang)

// FUNCTION

// function f (x){
//     return x**2;
// }

// var x,y
// x = 2

// y = f(x)

// console.log (y)

// function sayHai(name) {
//     console.log(
//         "Hai " + name
//     )
// }

// sayHai("Phantom")

// function jumlah(x,y) {
//     var hasil = x + y
//     console.log("x: " + x)
//     console.log("y: " + y)
//     console.log(
//         "hasilnya: " + hasil
//     )
// }

// var output = jumlah(3, 4)
// console.log(output) // undefined, karena fungsi tanpa balikan ketika diprint maka undefined


// yang bener harus pake return

// function jumlah(x,y) {
//     var hasil = x + y
//     return hasil
// }

// var output = jumlah(3, 4)
// console.log('hasil jumlah ' + output)

// function anytype(str, num, boolean) {
//     console.log(str);
//     console.log(num);
//     console.log(boolean);
// }

// anytype('string', 26, true) //sebenarnya direturn undefined, tapi ga di console.log

// function selalu mereturn sesuatu, kalau ga dideklarasikan apa yang harus direturn, maka function akan mereturn undefined

// CALLBACK FUNCTION

// function satu(x,fn){
//     console.log('Nilai x: ' + x)
//     //calling function
//     fn()
// }

// function dua(){
//     console.log('Ini dari function dua')
// }

// satu(43,dua) //ga dipake buka tutup kurung langsung run isi function dua

// function satu(x,fn){
//     console.log('Nilai x: ' + x)
//     
//     //cek isi variabel fn
//     console.log(fn)
// }

// function dua(){
//     console.log('Ini dari function dua')
// }
// satu(43,dua()) //akan mereturn undefined dari function dua()

// FUNCTION HOISTING

// satu(43,dua) //panggil di atas sebelum function dideklarasi

// function satu(x,fn){
//     console.log('Nilai x: ' + x)
//     //calling function
//     fn()
// }

// function dua(){
//     console.log('Ini dari function dua')
// }

// contoh lain

// function tiga(q, fn){
//     console.log('nilai q: ' + q)
//     fn(q)
// }

// function empat(x) {
//     console.log("nilai q dikali dua:" + (x*2))
// }

// tiga(5, empat)

// contoh lain

// function lima(number, fun){
//     console.log('number kuadrat: ' + (number*number))
//     fun()
// }

// lima(5, function() {console.log('fn tanpa declaration')})

// contoh lain 

// function enam (x,fn){
//     var num1=25
//     var num2=35

//     console.log('Nilai x adalah '+x )
//     fn(num1, num2)

// }

// function tujuh(y,z){
//     console.log('y+z: ' + (y+z))
// }

// enam (9,tujuh)

// function enam (x,fn){
//     var num1=25
//     var num2=35

//     console.log('Nilai x adalah '+x )
//     fn(num1, num2)

// }

// function tujuh(y,z){
//     y = 5 // tertimpa
//     z = 5 // tertimpa
//     console.log('y+z: ' + (y+z))
// }

// enam (9,tujuh)

//contoh lain

// function delapan() {

//     console.log ('suatu string')

//     return function(){
//         console.log('string hasil return dari function delapan')
//     }
// }

// // var nama = 'droid'
// // var copy = nama

// var ini = delapan // yg masuk adalah functionnya
// var itu = delapan() // yg masuk adalah return dari functionnya // jalan yg pertama

// ini() // jalankan ini // jalan yg ke dua
// itu() // jalan itu // jalan yg ke tiga

// RECURSIVE FUNCTION

// function Pangkat(x,y){
//     if (y == 1){
//         return x
//     }
//     else {
//         return x = x * Pangkat(x, y-1)
//     }
// }

// var hasil = Pangkat(7,3)
// console.log (hasil)

// SET TIMEOUT

// function sayHello(){
//     console.log('Hello...')
// }

// console.log('Pertama') // dijalanin pertama
// setTimeout(sayHello, 3000) // dijalanin kedua, tapi munculnya 3 detik kemudian, jadi munculnya di bawah yg kettiga
// console.log('Terakhir') // dijalanin ketiga


// function sayHello(){
//     console.log('Hello...')
// }

// console.log('Pertama')
// var x = setTimeout(sayHello, 3000) 
// console.log(x); //mereturn objek x/objek return dari fungsi setTimeout
// clearTimeout(x)

// ARRAY

// var buah = ['Apel', 'Belimbing', 'Ceri']

// jumlah data ada 3, apel index 0, belimbing index 1, ceri index 2

// console.log(buah)
// console.log(buah.toString()) //jadi string
// console.log(buah.join(' - '))  //jadi string
// console.log(buah[0])
// console.log(buah[1])
// console.log(buah[2])

// function sayHello (){
//     console.log ('Hello')
// }

// var arrayCampur = ['Buah', 2 , true , sayHello] 
// arrayCampur[3](); //tanda () berarti dijalankan
// console.log(arrayCampur.length)

// var x = 'Durian'
// var buah = ['Apel', 'Belimbing', 'Ceri', x]

// console.log(buah[0])
// console.log(buah[1])
// console.log(buah[2])
// console.log(buah[3])

// cara lain pakai for loop
// for (var i = 0; i<buah.length; i++){
//     console.log(buah[i])
// }

// array bertumpuk
// var a = [[1,2], ['apel', 'belimbing']]
// console.log(a[1][0])

// properties and method

// var hari = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']

// fungsi fungsi di bawah adalah untuk memodifikasi array berdasar array terakhir

// var len = hari.length
// console.log('length: ' + len)
// var sort = hari.sort() // berdasar abjad
// console.log('sort: ' + sort)
// var rev = hari.reverse() // berdasar terbalik
// console.log('reverse: ' + rev)
// var idx = hari.indexOf('Sabtu') // mencari index data tapi dari hasil fungsi array terakhir yang dijalankan
// console.log('index: ' + idx)
// var idx2 = hari.indexOf('Sunday') // jika -1 maka data tidak ditemukan
// console.log('index2: ' + idx2)

// let buah = ['Jeruk', 'Nanas', 'Pisang']
// console.log(buah)

// // menghapus data terakhir
// buah.pop()
// console.log(buah)

// // menambah data terakhir
// buah.push('Kiwi')
// console.log(buah)

// // menambah 2 data terakhir
// buah.push('Durian', 'Manggis')
// console.log(buah)

// // menghapus data di posisi depan
// buah.shift()
// console.log(buah)

// // menambah data dari depan
// buah.unshift('Lemon')
// console.log(buah)

// // menambah 2 data dari depan
// buah.unshift('Anggur', 'Bengkoang')
// console.log(buah)

///////////// 

// let buah = ['Jeruk', 'Nanas', 'Pisang', 'Anggur', 'Leci']

// buah.splice(2, 2, 'Lemon','Kiwi') //parameter 1 = pilih index ke berapa, parameter 2 = banyak data yang ingin dihapus, parameter 3 = mau masukkan data apa
// console.log(buah)

// CONCATENATION (GABUNGKAN ARRAY)

let nama = ['Reyhan', 'Haniful', 'Donny']
let nama2 = ['Ifan', 'Lukito', 'Syaiful']
let nama3 = ['Ilham', 'Aisyah','Ayu']

let gabung1 = nama.concat(nama2)
let gabung2 = nama3.concat(nama2, nama)

console.log(gabung1)
console.log(gabung2)











