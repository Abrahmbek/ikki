function countLetter(harf, soz) {            //ikkita parametrli funksiya elon qildik
    let sanash = 0;                            // sanash ozgaruchisi orqali qoshib boradi
    
    
    for (let i = 0; i < soz.length; i++) {         //   for operatoi orqali pastta berilgan                                                                                           // argumentni uzunligi boyicha harfma harf                                                                                           //  tekshiradi agar topsa sanashga 1 ta qoshib qoyadi
      if (soz[i] === harf) {
        sanash++;
      }
    }
    
    return sanash;
  }
  
  const natija = countLetter("a", "abrahm, anvar, akmal"); // bu yerda natija ozgaruchisiga argumentlarimizni beramiz 
  console.log(natija);                                      /// va log qilib natijani olamiz