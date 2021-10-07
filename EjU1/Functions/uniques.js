function uniques(...resto){
    let mySet=new Set();
   
   
    for (i=0;i<resto.length;i++){
        mySet.add(resto[i]);
         
    }
    
   
 
  
    let a= Array.from(mySet);
    console.log(a);
  

    

}

uniques(1,24, "e",24,[1,2],[1,2],"e",'a',"a");