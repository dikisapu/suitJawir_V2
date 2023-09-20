function getPilihanKomputer() {
  const kom = Math.round(Math.random() * 3 + 1);
  if (kom < 2) return "gajah";
  if (kom == 2) return "orang";
  return "semut";
}

function getHasilUser(kom, user) {
  if (user == kom) return "seri";
  if (user == "gajah") return kom == "orang" ? "menang" : "kalah";
  if (user == "orang") return kom == "semut" ? "menang" : "kalah";
  if (user == "semut") return kom == "gajah" ? "menang" : "kalah";
  return "HARUS ULANG COEG , Pilih SESUAI PILIHAN ASU";
}

function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }

    imgKomputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    console.log(pil);
    const pilihanKomputer = getPilihanKomputer();
    const pilihanUser = pil.className;
    const hasil = getHasilUser(pilihanKomputer, pilihanUser);
    console.log(`pilihan Komputer : ${pilihanKomputer}`);
    console.log(`pilihan User : ${pilihanUser}`);
    console.log(`Hasilnya adalah Kamu : ${hasil}`);
    setTimeout(() => {
      const imgKomputer = document.querySelector(`.img-komputer`);
      imgKomputer.setAttribute(`src`, `img/${pilihanKomputer}.png`);
      const info = document.querySelector(`.info`);
      info.innerHTML = hasil;
    }, 1000);
    putar();
  });
});

// console.log(pilihan);

// const uGajah = document.querySelector(".gajah");
// uGajah.addEventListener("click", function () {
//   //   alert("oke");
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanUser = uGajah.className;
//   const hasil = getHasilUser(pilihanKomputer, pilihanUser);
//   console.log(`pilihan Komputer : ${pilihanKomputer}`);
//   console.log(`pilihan User : ${pilihanUser}`);
//   console.log(`Hasilnya adalah Kamu : ${hasil}`);

//   const imgKomputer = document.querySelector(`.img-komputer`);
//   imgKomputer.setAttribute(`src`, `img/${pilihanKomputer}.png`);
//   const info = document.querySelector(`.info`);
//   info.innerHTML = hasil;
// });
// const uOrang = document.querySelector(".orang");
// uOrang.addEventListener("click", function () {
//   //   alert("oke");
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanUser = uOrang.className;
//   const hasil = getHasilUser(pilihanKomputer, pilihanUser);
//   console.log(`pilihan Komputer : ${pilihanKomputer}`);
//   console.log(`pilihan User : ${pilihanUser}`);
//   console.log(`Hasilnya adalah Kamu : ${hasil}`);

//   const imgKomputer = document.querySelector(`.img-komputer`);
//   imgKomputer.setAttribute(`src`, `img/${pilihanKomputer}.png`);
//   const info = document.querySelector(`.info`);
//   info.innerHTML = hasil;
// });
// const uSemut = document.querySelector(".semut");
// uSemut.addEventListener("click", function () {
//   //   alert("oke");
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanUser = uSemut.className;
//   const hasil = getHasilUser(pilihanKomputer, pilihanUser);
//   console.log(`pilihan Komputer : ${pilihanKomputer}`);
//   console.log(`pilihan User : ${pilihanUser}`);
//   console.log(`Hasilnya adalah Kamu : ${hasil}`);

//   const imgKomputer = document.querySelector(`.img-komputer`);
//   imgKomputer.setAttribute(`src`, `img/${pilihanKomputer}.png`);
//   const info = document.querySelector(`.info`);
//   info.innerHTML = hasil;
// });
