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

// function talabalarSoni(talabalar) {
//   const fanlarSoni = {};

//   talabalar.forEach((talaba) => {
//     let fanlar = talaba.fanlar;

//     fanlar.forEach((fan) => {
//       if (fanlarSoni[fan]) {
//         fanlarSoni[fan]++;
//       } else {
//         fanlarSoni[fan] = 1;
//       }
//     });
//   });

//   return fanlarSoni
// }

// const talabalar = [
//     { ism: 'Ali', yoshi: 20, fanlar: ['Matematika', 'Fizika'] },
//     { ism: 'Vali', yoshi: 22, fanlar: ['Matematika', 'Kimyo'] },
//     { ism: 'Salim', yoshi: 21, fanlar: ['Biologiya', 'Kimyo'] },
//     { ism: 'Nodir', yoshi: 23, fanlar: ['Fizika', 'Biologiya'] }
// ];

// console.log(talabalarSoni(talabalar));

// 4-masala

// function engKattaMaoshLavozimi(ishchilar) {
//   const lavozimlar = {};

//   ishchilar.forEach((ishchi) => {
//     const lavozim = ishchi.lavozim;
//     const maosh = ishchi.maosh;

//     if (lavozimlar[lavozim]) {
//       if (maosh > lavozimlar[lavozim].engKattaMaosh) {
//         lavozimlar[lavozim].engKattaMaosh = maosh;
//       }
//       lavozimlar[lavozim].ishchiSoni++;
//     } else {
//       lavozimlar[lavozim] = {
//         engKattaMaosh: maosh,
//         ishchiSoni: 1,
//       };
//     }
//   });

//   let engKattaMaoshLavozimi = null;
//   let engKattaMaosh = 0;

//   for (const lavozim in lavozimlar) {
//     if (lavozimlar[lavozim].engKattaMaosh > engKattaMaosh) {
//       engKattaMaosh = lavozimlar[lavozim].engKattaMaosh;
//       engKattaMaoshLavozimi = lavozim;
//     }
//   }

//   return {
//     lavozim: engKattaMaoshLavozimi,
//     ishchiSoni: lavozimlar[engKattaMaoshLavozimi].ishchiSoni,
//   };
// }

// const ishchilar = [
//   { ism: "Ali", lavozim: "Dasturchi", maosh: 2000 },
//   { ism: "Vali", lavozim: "Dasturchi", maosh: 2200 },
//   { ism: "Salim", lavozim: "Dizayner", maosh: 1800 },
//   { ism: "Nodir", lavozim: "Dizayner", maosh: 1900 },
//   { ism: "Rustam", lavozim: "Menejer", maosh: 2500 },
// ];

// const natija = engKattaMaoshLavozimi(ishchilar);
// console.log(natija);


// 5-masala

// function ortachaNarxKategoriyaBoyicha(mahsulotlar) {
//   const kategoriyalar = {};

//   mahsulotlar.forEach(mahsulot => {
//       const kategoriya = mahsulot.kategoriya;
//       const narx = mahsulot.narx;

//       if (kategoriyalar[kategoriya]) {
//           kategoriyalar[kategoriya].umumiyNarx += narx;
//           kategoriyalar[kategoriya].mahsulotSoni++;
//       } else {
//           kategoriyalar[kategoriya] = {
//               umumiyNarx: narx,
//               mahsulotSoni: 1
//           };
//       }
//   });

//   const ortachaNarxlar = {};
//   for (const kategoriya in kategoriyalar) {
//       const umumiyNarx = kategoriyalar[kategoriya].umumiyNarx;
//       const mahsulotSoni = kategoriyalar[kategoriya].mahsulotSoni;
//       ortachaNarxlar[kategoriya] = umumiyNarx / mahsulotSoni;
//   }

//   return ortachaNarxlar;
// }

// const mahsulotlar = [
//   { nom: 'Olma', kategoriya: 'Meva', narx: 5000 },
//   { nom: 'Banan', kategoriya: 'Meva', narx: 6000 },
//   { nom: 'Sabzi', kategoriya: 'Sabzavot', narx: 2000 },
//   { nom: 'Kartoshka', kategoriya: 'Sabzavot', narx: 3000 },
//   { nom: 'Sut', kategoriya: 'Ichimlik', narx: 4000 },
//   { nom: 'Sharbat', kategoriya: 'Ichimlik', narx: 5000 }
// ];

// console.log(ortachaNarxKategoriyaBoyicha(mahsulotlar));
