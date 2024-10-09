function myFunction(){
//  while文
//  var gokei = 0;
//  var i = 1;
//  while(gokei < 100){
//   gokei = gokei + i;
//   i++;
//  }
//  alert(i);

 var myInput = document.getElementById('myInput');
 var x = parseInt(myInput.value);
 var ketasu = 0;
  do {
    x = Math.floor(x /10);
    ketasu++;
  } while(x != 0)
  alert(ketasu);
}
