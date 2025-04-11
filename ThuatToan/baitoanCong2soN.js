/* Cho n số tự nhiên N, tính tổng 2 số tự nhiên bất kỳ trong n 
        Input [1,2,3,4,5,6,7,8,9]*/
let nums = [1,2,3,4,5,6] 
function SUm() {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let sum = nums[i]+nums[j]
            console.log(sum);}
        }
   } 
SUm()

/* Cho n số tự nhiên N, tính tổng 2 số tự nhiên, 2 số đó đều chia hết cho 2 */ 
function SUm() {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] % 2 === 0 && nums[j] % 2 === 0) {
                let sum = nums[i]+nums[j]
                console.log(sum);}
            }
        }
   } 
SUm()

function print() {
    let x
    console.log(x+ 'Helo Word')
}