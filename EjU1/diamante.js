function diamante(n) {
    let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let coming = letras.indexOf(n.toUpperCase());
   
    let repe = "-".repeat(coming*2);

    console.log(repe);
}

diamante("w");