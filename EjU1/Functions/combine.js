function combineArrays(...n){
  
  n.reverse();
   let a=Array.from(n[0]);
   let b=Array.from(n[1]);
   

   for (i=0;i<b.length;i++){
       a.push(b[i]);
   }
 


   console.log(a);


}

combineArrays([2,4],[3,6,5,1]);