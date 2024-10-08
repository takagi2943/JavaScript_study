function myFunction(){
  var myInput1 = document.getElementById("myInput1");
  var myInput2 = document.getElementById("myInput2");
  if(myInput1.value === "") {
    alert("1つ目の値が空です(>_<)！");
    return;
  }
  if(isNaN(myInput1.value)) {
    alert("1つ目の値が数値ではありません！");
    return;
  }
  if(myInput2.value === "") {
    alert("2つ目の値が空です！");
    return;
  }
  if(isNaN(myInput2.value)) {
    alert("2つ目の値が数値でありません！");
  }
  var output = parseInt(myInput1.value) + parseInt(myInput2.value);
  var myOutput = document.getElementById("myOutput");
  myOutput.innerHTML = output;
}