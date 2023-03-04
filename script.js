var isimSoyisim = prompt("Adınızı soyadınızı giriniz");
var isimSoyisimArray = isimSoyisim.split(" ");
for(let i = 0; i < isimSoyisimArray.length; i++) {
    isimSoyisimArray[i] = isimSoyisimArray[i].charAt(0).toUpperCase() + isimSoyisimArray[i].slice(1)
}

for(let j = 0; j < isimSoyisimArray.length; j++) {
    for(let k = 0; k < isimSoyisimArray[j].length; k++) {
        if(k == 0) {continue};
        isimSoyisimArray[j] = isimSoyisimArray[j].replace(isimSoyisimArray[j][k],"*");
    }
}
isimSoyisim = isimSoyisimArray.join(" ");
document.querySelector(".adSoyad").innerHTML = isimSoyisim;

