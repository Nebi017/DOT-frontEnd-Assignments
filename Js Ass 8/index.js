// Question 1

let numbers =[3,6,7,2,9,1,2,7,8];

for(element of numbers){
let result = element*2 ;
console.log(result);
}



// Question 2

let students ={
    name:'nebi',
    age:25,
    id:'NSE/1020/14',
    dept:'CS'
}

for(keys in students ){
    console.log(`${keys} : ${students[keys]}`);
}


// Question 3
function display(str){
    let i=0;
    function printNext(){
        if(i < str.length){
            console.log(str[i]);
            i++;
            setTimeout(printNext,1000);
        }
       
    }
    printNext();
}


let names = ['thomas', 'nebiy', 'eskndr','tenketem','tewelde'];
let length=names.length;
console.log(length);
display(names);






















// function display(arr) {
//   let i = 0;
//   function printNext() {
//     if (i < arr.length) {
//       console.log(arr[i]);
//       i++;
//       setTimeout(printNext, 1000); 
//     }
//   }
//   printNext(); 
// }


// let names=['Thomas','Eskndr','Nebiy','Tenketem','Abel'];
// display(names);




