function diamond(n){
    let abc = ["A",'B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','X','Y','Z'];
    let con = abc.indexOf(n.toUpperCase());
    let arr=[];
    //console.log(abc.indexOf(n.toUpperCase()));


    for (i=0;i<=con;i++){
       arr.push("-");
       console.log(arr);
    }
}

diamond('X');