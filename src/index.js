import e from "cors";
import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click", function (e) {
//   alert("Bana tıkladın!");
// });

// Kodlar buraya gelecek!

document.querySelectorAll(".btn").forEach((e) => {
  e.addEventListener("dblclick", () => {
    e.style.backgroundColor = "black";
    e.style.color = "white";
  });
});

const baslik = document.querySelector("header");
baslik.addEventListener("mouseenter", () => {
  alert("Uups! Nereye gidiyorsun?");
});

const icerik = document.querySelector("body");
icerik.addEventListener("copy", (e) => {
  alert("do not copy pls!");
  e.preventDefault;
});

const rota = document.querySelector("#rota");
rota.addEventListener("mouseenter", () => {
  rota.textContent = "Следующая станция: Венгрия.";
});
rota.addEventListener("mouseleave", () => {
  rota.textContent = "Rotanızı Belirleyin";
});
