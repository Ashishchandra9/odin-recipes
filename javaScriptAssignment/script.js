var num = prompt('enter the range to print number');

function number(num) {
    for (let i = 1; i <= num; i++) {
        document.write(i);
    }
}
number(num)


var n = prompt('enter number')
function divisible(n) {

    for (let i = 1; i <= n; i++) {
        if (i % 4 == 0) {
            document.write('fourDiv');
        }
        else if (i % 7 == 0) {
            document.write('sevenDiv');
        }
      
    }

}
divisible(n)