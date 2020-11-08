// Array

let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

console.log(namaDepan);
console.log(namaBelakang);
console.log(buku);

//Object

let orang = {
    name: "Joko",
    age: 22,
  };

  let { name: nama, age: umur } = orang;
  
  console.log(nama);
  console.log(umur);

//Object Bertingkat 
let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga);