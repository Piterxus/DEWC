function diamond(n) {
    let abc = ["A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let con = ((abc.indexOf(n.toUpperCase()))) * 2;
    let con2 = ((abc.indexOf(n.toUpperCase())));
    let con3 = abc.indexOf(n.toUpperCase())
    let con4 = con2;
    let con5=con3+1;
    let con6=con5+1;
    
   
    let guia = '-'.repeat(con + 1);
    let s = guia.split("");
    //console.log(guia[1]);

    s[abc.indexOf(n.toUpperCase())] = 'A';

    console.log(s.toString());



    for (i = 1; i <= con2; i++) {
        con3--;
        s[con3] = abc[i];
        //s[con5++]=abc[i];
        //s[con6--]="-";
        
        

        s[con4--] = "-";


        console.log(s.toString());
    }

    for (i = 1; i <= con2; i++) {
        let x=i;
        con3++;
        s[con3] = abc[i];
        
        s[con4++] = "-";
        console.log(s.toString());
    }

    /*
    for(i=0;i<con;i++){
        //console.log(guia);
        s[i]=abc[i];
        console.log(s.toString());
    }
    */
}

diamond('D');