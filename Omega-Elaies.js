 
  

  function  dec_to_bin(x) {
    var bin = "";// записывает символы слева на право тип данных строка 
     do { 
        bin =    (x % 2)  + bin ;
         } 
        while ((x >>= 1) > 0);// переводит число х в двоичную систему после отбрасывает 1 единицу с права и переводит в десятичную обратно. то есть если дать 9 >> 1 = 1001(2) сдвигаем на 1 вправо. 100(2)= 4
    return bin ;
}
function unar(r){
  result = (new Array(r+1).join(1) + 0); //parseInt читает только цифры .. n+1 для того , чтобы учесть 0
    return result;
}

  

function toDEC( dec ) {
    var out = 0, len = dec.length, bit = 1;
    while( len-- ) {
        out += dec[ len ] == "1" ? bit : 0;
        bit <<= 1;
    }
    return out;
}

 


  function  omega(n) {
  	 
  	if ( n >= 16 && n <= 127){ 


     	n =[dec_to_bin(n)];
     	name1 = n.map(function(size){
      return size.length; });
     	name1= [name1 -1]; //3
     	name3= [dec_to_bin(name1)];


     	  
     	  name2 = name3.map(function(size){
      return size.length; }); 
     	  name2=[name2-1];
     	  name2= [dec_to_bin(name2)];
     	 
   
      
           return name2+name3+ n + "0";
} 


else if   (n >= 4 && n <= 15){
		n =[dec_to_bin(n)];
     	name1 = n.map(function(size){
      return size.length; });
     	name1= [name1 -1]; //3
     	name1= [dec_to_bin(name1)];
     	return name1 + n + "0";
} 


else if  (n >=2 && n <=3){
n =[dec_to_bin(n)];
return n +"0";

} else if (n ==1){   
return  "0"; } 
 else if (n >=128){
	    n =[dec_to_bin(n)];
     	name1 = n.map(function(size){
      return size.length; });
     	name1= [name1 -1]; //3
     	name3= [dec_to_bin(name1)];


     	  
     	  name2 = name3.map(function(size){
      return size.length; }); 
     	  name2=[name2-1];
     	  name4= [dec_to_bin(name2)];
     	  name5 = name4.map(function(size){
      return size.length;});
  		  name5 =[name5-1];
  		  name6=[dec_to_bin(name5)];
     	 
     	 
   
      
      return name6+name4+name3+ n + "0";
}
 


else n==0
return "Не существует";



    }
     
      



 function deomega() {
  var n = Array.from(arguments);
   if (n.length == 6){
    n.pop();
    n.reverse();
    n.length=3;
    n.reverse();
    b = n.join('');
    b = toDEC(b);
    return b;
   } 


   else if (n.length == 7){
    n.pop();
    n.reverse();
    n.length=4;
    n.reverse();
    b = n.join('');
    b = toDEC(b);
    return b;

   }
   else if (n.length == 11){
    n.pop();
    n.reverse();
    n.length=5;
    n.reverse();
    b = n.join('');
    b = toDEC(b);
    return b;
 }
 else if (n.length == 12){
    n.pop();
    n.reverse();
    n.length=6;
    n.reverse();
    b = n.join('');
    b = toDEC(b);
    return b;
 }

else if (n.length == 13){
    n.pop();
    n.reverse();
    n.length=7;
    n.reverse();
    b = n.join('');
    b = toDEC(b);
    return b;
 }
else if (n.length == 3){
      
    n.length=2;
     
    b = n.join('');
    b = toDEC(b);
    return b;
 }


else return "Не существует"; }







