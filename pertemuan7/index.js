/*
    LOOP
*/
//1. For Loop
//for (let i = 1; i <= 10; i++) {
 //   console.log(i);
 // }
 
//2.For/In Loop 
//const buku = {
// judul: "Harry Potter and The Philosopher's Stone",
//  pengarang: "J. K. Rowling",
// tahun: 1997
 //};
 //for (x in buku) {
 //  console.log(x, ':', buku[x]);
 //}

 //3.For/Of Loop
//const buku = ["Game of Thrones: A Song of Ice and Fire", 
//  "Harry Potter and The Philosopher's Stone", 
//  "Lord of The Rings: The Fellowship of The Ring"
//];

//for (x of buku) {
//  console.log(x);
//}

//4.Do While Loop 
//let i = 1;

//do {
//  console.log(i);
//  i++;
//} while (i <= 10);

/* 
    Conditional 
*/

//1. If, Else if, Else
//let nilaiAndi = 95;

//if (nilaiAndi > 80) {
//  console.log("SANGAT MEMUASKAN");
//} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
//  console.log("MEMUASKAN");
//} else {
//  console.log("JANGAN MENYERAH, COBA LAGI!");
//}

//2. Switch dan Case
let bajuKuliah;
let hari = "senin";

switch (hari) {
  case "senin":
    bajuKuliah = "Kemeja Kotak-kotak";
    break;
  case "selasa":
    bajuKuliah = "kemeja hijau ";
    break;
  case "rabu":
    bajuKuliah = "kemeja putih";
    break;
  case "kamis":
    bajuKuliah = "kemeja batik";
    break;
  case "jumat":
    bajuKuliah = "kemeja kuning";
    break;
  default:
    bajuKuliah = "baju bebas";
}

console.log(bajuKuliah);

 