/*
Object 
*/

// const mahasiswa1 = ["Josh", "Doe", 31, true];
//1. Object Literals
const mhs1 = {
    namaDepan: "John",
    namaBelakang: "Doe", 
    umur: 31,
    sudahLulus: true,
    alamat : {
        jalan: "jln Arnold Mononutu",
       kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    IPSemester: [3.05, 3.25, 3.0, 3.4],
    hitungIPK: function (){
        let total = 0;
        this.IPSemester.forEach(function(el){
            total = total + el;
        });
        this.IPKumulatif = total / 4;
    },
};
//delete mhs1.namaBelakang;
//console.log(mhs1);

//2. Kata Kunci New 
//const mhs2 = new Object();
//mhs2.namaDepan = "Jane";
//mhs2.namaBelakang = "Smith";

// Mengakses Property Object
//1. Dot Notation
//console.log(mhs1.umur);
//2. Bracket Notation
//console.log(mhs1["namaBelakang"]);

//console.log(mhs1.alamat.jalan);
//console.log(mhs1.IPSemester[2]);
//mhs1.hitungIPK();
//console.log(mhs1);

// Array Object (JSON)
//const mahasiswa = [
//    {
//        nim: "001",
//        namaDepan: "John",
//        namaBelakang: "Doe";
//    },
 //   {
 //       nim: "002"
 //       namaDepan: "Jane",
 //       namaBelakang: "Smith";
 //   },
 //   {
 //       nim: "003",
 //       namaDepan: "Danica",
 //       namaBelakang: "Massie";
//    },
//];
//mahasiswa.forEach(function (el){
//    console.log(el);
//});