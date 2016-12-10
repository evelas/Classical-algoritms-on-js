 
 
function numberToCode(p)
{
    var ret = [];
    if (p == 0){
      ret = [0];
      return ret;
    } else if (p ==1) 
    {
      ret = [1];
      return ret;
    } 

     else if (  p ==2 || p == 3){ 

    for (i = 0; i < 2; i++){
    
        ret.push(p % 2);
        p = Math.ceil((p - p % 2)/ 2);
         
    } 
    ret.reverse();
    return ret;



}  else if(p == 4 || p  == 5 || p == 6 || p == 7){
 for (i = 0; i < 3; i++)
    {
        ret.push(p % 2);
        p = Math.ceil((p - p % 2)/ 2);
         
    } 
ret.reverse();
return ret;

}  else if( p==8 || p == 9 || p == 10 || p == 11 || p ==12 || p == 13 || p==14 || p==15){
for (i = 0; i < 4; i++)
    {
      ret.push(p % 2);
        p = Math.ceil((p - p % 2)/ 2);
         
    } 
     ret.reverse();
     return ret;
} 
 
  else if (16 < p  && p < 32 ){

     for (i = 0; i < 5; i++)
    {
        ret.push(p % 2);
        p = Math.ceil((p - p % 2)/ 2);
    } 
    ret.reverse();
    return ret;
}
else if (32 < p && p < 64) {  

     for (i = 0; i < 6; i++)
    {
        ret.push(p % 2);
        p = Math.ceil((p - p % 2)/ 2);
    } 
    ret.reverse();
    return ret;
} else if (64 <p && p < 128) { 
 for (i = 0; i < 7; i++)
    {
        ret.push(p % 2);
        p = Math.ceil((p - p % 2)/ 2);
    } 
    ret.reverse();
    return ret;
    }
    else p > 128
       for (i = 0; i < 8; i++)
    {
        ret.push(p % 2);
        p = Math.ceil((p - p % 2)/ 2);
    } 
    ret.reverse();
    return ret;

}

function  dec_to_bin(x) {
    var bin = "";// записывает символы слева на право тип данных строка 
     do { 
        bin =    (x % 2)  + bin ;
         } 
        while ((x >>= 1) > 0);// переводит число х в двоичную систему после отбрасывает 1 единицу с права и переводит в десятичную обратно. то есть если дать 9 >> 1 = 1001(2) сдвигаем на 1 вправо. 100(2)= 4
    return bin ;
}
function unar(n){
	result = (new Array(n+1).join(1) + 0); //parseInt читает только цифры
	return result;
}


function Golombexp(n,k) {



var w = n / Math.pow(2,k);
w= Math.floor(w) + 1;
var ar1=[];
var arrr= [];
var ar= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var arr=[];
var f = Math.log2(1 + (n/ Math.pow(2,k)));
f = Math.floor(f);
f = unar (f);
var j = Math.log2(1 + (n/ Math.pow(2,k)));
j = Math.floor(j);
 if (k==0){
  return "ошибка";
 }
else if ( f == 0 ) {              
arrr = [dec_to_bin(n)];                // два массива для того , чтобы сохранить нули . В пустом массиве считаем биты  		двоичного представления числа n,а в массив с нулями вставляет размер битов , чтобы 0 сохранились при верной длинне массива.
nameL = arrr.map(function(size){
      return size.length; });
ar.length = (k - nameL[0]);
ar.push(dec_to_bin(n));
return  f + ar  ;

}  


else if (k==1){        


 
 ar5= numberToCode(w);
  ar5.reverse();
 ar5.length= j;
ar5.reverse();


ar6 = numberToCode(n);              
  ar6.reverse();
ar6.length= k;
ar6.reverse();
return f + ar5 + ar6   ;
} 

else  if  ( f>0)  {        


 // 2) Действие в эксголомбе
 // взять массив из двоичного w , перевернуть и отрезать по f младщим битам
 ar5= numberToCode(w);
  ar5.reverse();
 ar5.length= j;



ar6 = numberToCode(n);              
  ar6.reverse();
ar6.length= k;
ar6.reverse();
return f + ar5 + ar6   ;
} 

 
      else 
n = dec_to_bin (n);
return a + n;  
 



}
function toDEC( dec ) {
    var out = 0, len = dec.length, bit = 1;
    while( len-- ) {
        out += dec[ len ] == "1" ? bit : 0;
        bit <<= 1;
    }
    return out;
}

 
 



 
function decode(){
  var n = Array.from(arguments);
  var q= 0;

  for (var i=0; i < n.length; i++){
    if (n[i]==0) break;{
      q++;
       
    }
  }
  n.splice(0,(q+1)) ;
  n.join('');
  r= toDEC(n);
 n= ((Math.pow(2,q))-1) * (Math.pow(2,3)) +r; // k=3

return n ;


}











 
 


