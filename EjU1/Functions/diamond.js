function diamond(n) {
    let abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V", "W","X","Y","Z"];
   
    let con = abc.indexOf(n.toUpperCase());
    let con2 = abc.indexOf(n.toUpperCase());
    let con3 = abc.indexOf(n.toUpperCase());
    let con4 = con2;

    let con5 = con - 1;

    let guia = "-".repeat(con + 1);
    let s = guia.split("");
    let guiaC = "-".repeat(con - 1 + 1);
    let sC = guiaC.split("");

    s[abc.indexOf(n.toUpperCase())] = "A";
    let b = s.toString();

    console.log(b.concat("," + sC.toString()));

    for (i = 1; i <= con2; i++) {
        con3--;
        s[con3] = abc[i];

        sC[i - 1] = abc[i];

        s[con4--] = "-";

        console.log(s.toString().concat("," + sC.toString()));
        sC[i - 1] = "-";
    }

    for (i = 1; i <= con2; i++) {
        let y = sC.length;

        con3++;
        sC[y - i - 1] = abc[con5];
        s[con3] = abc[con5--];

        s[con4++] = "-";
        console.log(s.toString().concat("," + sC.toString()));
        sC[y - i - 1] = "-";
    }
}

diamond("W");