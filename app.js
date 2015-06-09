var addNumbers = function() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var answer = parseFloat(num1) + parseFloat(num2);
  document.getElementById("answer").innerHTML = answer;
}


// add nums to an array.  suppose [3,1,4]. num is: 10^ (array.length - i + 1)
//    * array[i]
//    for (int i = 0; i < nums.length; i++) {
//      myNum += nums[i] * 10 ^ (nums.length - i);
//    }