const country = 4;
const continent = 4;
const population = 4;
console.log(country,continent,population);

//LAB2 Toán tử
var heightMark = 1.7
var weightMark= 60
var heightJohn = 1.8
var weightJohn= 70
BMIMark = weightMark/(heightMark*heightMark)
BMIJohn = weightJohn/(heightJohn*heightJohn)
console.log(BMIMark);
console.log(BMIJohn);

function BMI(height,weight) {
    return weight/(height*height)  
}
BMIMark=BMI(1.7,60)
console.log(BMIMark);
BMIJohn=BMI(1.8,70)
console.log(BMIJohn);
if (BMIJohn <= BMIMark){
    console.log("Mark's BMI is higher than John's!");
}
else{
    console.log("John's BMI is higher than Mark's!");
}

//LAB3
let numNeighbours = prompt('How many neighbor countries does your country have?');
if (numNeighbours==1){
    console.log('Only 1 border!' );
} else if (numNeighbours > 1){
    console.log('More than 1 border');
} else{
    console.log('No borders');
}
//Sự khác nhau giữa == === là == tương đối đúng với mọi giá trị còn === đúng tuyệt đối với 1 giá trị
//LAB SWITCH
var language = 'Spannish';
switch (language) {
    case 'Chinese'|| 'Mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'Spannish':
        console.log('2nd place in number of native speakers');
        break
    case 'English':
        console.log('3rd place');
        break
    case 'Number 4':
        console.log('Number 4');
        break
    case 'Arabic':
        console.log('5th most spoken language');
        break          
    default:
        console.log( 'Great language too :D');
        break;
}
//LAB toán tử
var Population = 33;
var PopulationS = (Population >= 33) ? "Portugal's population is above average" : "Portugal's population is below average";
console.log(PopulationS);

//LAB 3.6.1
function TBDolphin(ponit1) {
    var tongdiem=0;
    for (var i=0; i< ponit1.length; i++){
        tongdiem += ponit1[i];
    }
    var TBponit1 = tongdiem/ponit1.length;
    return TBponit1;
}
var ponit1 = [120,300,100];
var tbPonitDolphin = TBDolphin(ponit1)

function TBKoalas(ponit2) {
    var tongdiem=0;
    for (var i=0; i< ponit2.length; i++){
        tongdiem += ponit2[i];
    }
    var TBponit2 = tongdiem/ponit2.length
    return TBponit2
}
 var ponit2 = [300,120,100];
 var tbPonitKoalas = TBKoalas(ponit2)

if ( tbPonitDolphin >= 100 && tbPonitKoalas >= 100 ){
     if (tbPonitDolphin > tbPonitKoalas) {
    console.log('Dolphin Winner');
    } else if (tbPonitDolphin < tbPonitKoalas){
    console.log('Koalas Winner')
    } else {console.log('Both win the trophy!');}
} else if( tbPonitDolphin >= 100 && tbPonitKoalas <= 100){
    console.log('Dolphin Winner');
} else if ( tbPonitDolphin <=100 && tbPonitKoalas >= 100){
    console.log('Koalas Winner');
}
  else {
    console.log('Loser');}
//Hàm For n
var a=[1,2,3,4,5,6]
var tongdiem = 0
    for ( i = 0; i < a.length; i++){
        tongdiem += a[i]
    }
console.log(tongdiem);

//LAB 3.6.2
var bill = 40
var tip = (bill > 300) ? bill * 0.15 : bill * 0.2
var total = bill+tip
console.log('The Bill: '+ bill+ ' The tip was '+ tip+' and the total value '+ total )

//LAB 4
function describeCountry (country,population,city){
    var rate= population*100/7900
   console.log(`${country} has ${population} million people and its capital city is ${city}`);
   return rate
}
    var percentageOfWorld1= describeCountry('Hoa kỳ',300, 'WST')
    console.log(percentageOfWorld1);
    var percentageOfWorld2=describeCountry('China',1000,'Bắc Kinh')
    console.log(percentageOfWorld2);
    var percentageOfWorld3=describeCountry('Việt Nam',95,'Hà Nội')
    console.log(percentageOfWorld3);
//Hàm mũi tên
var percentageOfWorld4 = (population) => population *100/7900;
 console.log('China có 1400 triệu người, chiếm '+ percentageOfWorld4(1400)+ ' dân số thế giới.');

function DescribeCountry (country,population) {
    var rate= population *100/7900;
    return rate;
} 
var abv=DescribeCountry('China',1400)
console.log('china has 1400 million people,which is about '+ abv + ' of the world')

populationa=[2,3,5,7]
lengthPopulation=populationa.length
if (lengthPopulation >= 4) {
    console.log('True');
    
}else {console.log('Flase');}
console.log(lengthPopulation);

PercentageOfWorld=[percentageOfWorld1,percentageOfWorld2,percentageOfWorld3] 
console.log(PercentageOfWorld);

var neighbours=['Mexico',' Cuba',' Blazil']
var a=', Utopia'
neighbours +=a
console.log(neighbours);
Neighbours=neighbours.slice(14,20)
console.log(Neighbours);
//4.7.1
var calcAverage= (a,b,c) => (a+b+c)/3 
var b=calcAverage(30,60,10)
console.log(b);
var c= calcAverage(10,7,8)
console.log(c);
function checkWinner(avgKoalas,avgDolphins) {
    if (avgDolphins >= 2* avgKoalas){
   return 'Dolphin Win'
    }else if (avgDolphins <= 2* avgKoalas){
        return 'Koalas Win'
    } else{
        return 'No team win'}
}
var Winner= checkWinner(b,c)
console.log(Winner);

function calcTip(bill) {
    var tip
    if (bill>300) {
        return tip=bill*0.2
    }
    else {
        return tip = bill * 0.15
    }
}
var tips=[calcTip(125),calcTip(555),calcTip(44)]
console.log(tips);
var bills=[125,555,44]
var totAL= [tips[0] + bills[0],tips[1]+bills[1],tips[2]+bills[2]]
 console.log(totAL);

//LAB5
 var BMIMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,      
    BMIM: function() {
        this.calcBMIMark= this.mass/(this.height*this.height)        
   return this.calcBMIMark
 } 
 }
 console.log(BMIMark.BMIM());
 var BMIJohn = {
    fullName:'John Miller',
    mass: 92,
    height: 1.95,      
    BMIJ: function() {
        this.calcBMIJohn= this.mass/(this.height*this.height)        
   return this.calcBMIJohn
 } 
 }
 //C1
 if (BMIMark.BMIM() < BMIJohn.BMIJ()){
    console.log("John's BMI "+ BMIJohn.BMIJ()+" is higher than Mark's " +BMIMark.BMIM);
 } else{
    console.log("Mark's BMI "+ BMIMark.BMIM()+" is higher than John's " + BMIJohn.BMIJ());
 } 
let BMIM= BMIMark.calcBMIMark
let BMIJ= BMIJohn.calcBMIJohn
/* if (BMIM>BMIJ) {
    console.log("John's BMI"+ BMIJohn.BMIJ()+"is higher than Mark's" +BMIMark.BMIM);
} else{
   console.log("Mark's BMI"+ BMIMark.BMIM()+"is higher than John's" + BMIJohn.BMIJ());
}  */   

calculator= {
    bill:[10,200,300,400,500,60,70,80,90,40],
    tips:[],
    total:[],
} 
for ( let i = 0; i < calculator.bill[i]; i++){
    tip = 0
    sum = 0
    totals=0
   if (calculator.bill >50 && calculator.bill<300 ) {
      tip = calculator.bill[i]*0.15
    } else if (calculator.bill < 50){
      tip = 0
    } else{
      tip = calculator.bill[i]*0.2
    }
    calculator.tips.push(tip)
    calculator.total.push(calculator.bill[i]+tip)
}
console.log(calculator.tips);
console.log(calculator.total);
var sum = 0
var trungbinh= 0
for (let i= 0; i < calculator.total.length; i++) {
    sum += calculator.total[i]
}
console.log(sum);
console.log(trungbinh = sum/calculator.total.length);

//LAB6
var ObjectNhietdo= {
    day1:17,
    day2:21,
    day3:23,
}
console.log("..."+ ObjectNhietdo.day1+ "in 1 day ..."+ObjectNhietdo.day2 +"in 2 days ..."+ObjectNhietdo.day3 +"in 3 days ...");