function sum(num){
	var a = 0;
  while (a * a < num){
  	var b = 0;
   while (b * b < num){
   	if (a * a + b * b == num) {
    	if (a <= b) {
      	console.log(a + "," + b);
      }
    }
    b += 1;
   }
   a +=1;
  }
}
console.log(sum(100));