   function test2(n){
         var n =[...Array(1000).keys()];
        var bin="";
  
  for (var i=0; i < n.length; i++){
    bin=omega(n[i]) + " = "+ (n[i]) +"  " + bin;
  }
  return bin ;
}
