




for (i=1;i<=300;i++){
    let x=i.toString();
    let h=x.length;
    let y=h-1;
    let p=y-1;
    let g=x.substring(p);


    if(g=="15"){
        x="fizzbuzz"
    }

    if (x.charAt(y)=="3"){
        x="fizz"
    }else if(x.charAt(y)=="5"){
        x="buzz"
    }
  
    console.log(x);

   

}


