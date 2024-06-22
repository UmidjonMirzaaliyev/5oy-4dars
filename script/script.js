// 1-masala

// function engYaxshiTalaba(talabalar) {
//   let ortacha = 0;
//   let yaxshiIsm = "";

//   talabalar.forEach((talaba) => {
//     let ortachaBaho = talaba.baholar.reduce((sum, baho) => sum + baho, 0);

//     if (ortachaBaho > ortacha) {
//       ortacha = ortachaBaho;
//       yaxshiIsm = talaba.ism
//     }
//   });

//   return yaxshiIsm
// }

// const talabalar = [
//     { ism: 'Ali', yosh: 20, baholar: [90, 85, 88] },
//     { ism: 'Vali', yosh: 22, baholar: [92, 81, 79] },
//     { ism: 'Salim', yosh: 21, baholar: [91, 89, 95] }
// ];

// console.log(engYaxshiTalaba(talabalar));

//2-masala

// function engQimmatMavjudMahsulot(mahsulotlar) {
//     let engQimmatNarx = 0;
//     let engQimmatMahsulot = null;

//     mahsulotlar.forEach(mahsulot => {

//         if (mahsulot.mavjud && mahsulot.narx > engQimmatNarx) {
//             engQimmatNarx = mahsulot.narx;
//             engQimmatMahsulot = mahsulot;
//         }
//     });

//     return engQimmatMahsulot;
// }

// const mahsulotlar = [
//     { nom: 'Laptop', narx: 1500, mavjud: true },
//     { nom: 'Telefon', narx: 800, mavjud: false },
//     { nom: 'Monitor', narx: 300, mavjud: true },
//     { nom: 'Klaviatura', narx: 100, mavjud: true }
// ];

// console.log(engQimmatMavjudMahsulot(mahsulotlar));

// 3-masala

