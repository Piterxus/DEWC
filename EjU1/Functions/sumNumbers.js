function sumNumbers(...n){

    let a=Array.from(n);
    let c=0;

    for (i=0;i<a.length;i++){
        if (!isNaN(a[i])){
            //c=eval(c+a[i]);
            c=c+a[i];
        }
    }
    console.log(c);
}

sumNumbers(200,1,{value:300},-7);