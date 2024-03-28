function getDayOfWeek(son) {
  let haftaKunlari;
  switch (son) {
    case 1:
      haftaKunlari = "Dushanba";
      break;
    case 2:
      haftaKunlari = "Seshanba";
      break;
    case 3:
      haftaKunlari = "Chorshaba";
      break;
    case 4:
      haftaKunlari = "Payshanba";
      break;
    case 5:
      haftaKunlari = "Juma";
      break;
    case 6:
      haftaKunlari = "Shanba";
      break;
    case 7:
      haftaKunlari = "Yakshanba";
      break;
    default:
      haftaKunlari = "Siz noto'g'ri son kiritdingiz";
  }
  return haftaKunlari;
}

let result = getDayOfWeek(-1);
console.log(result);
