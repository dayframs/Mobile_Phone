let card;
let used = false;
let i;
let l;
let q;
let disp;
let ref;
 let re = result.innerHTML;

let val = JSON.parse(localStorage.getItem('myData')) || [];

function createCard() {
     let n = network.value;
     let am = amount.value;
     let num = number.value;
     for (let i = 0; i < num; i++) {
          ref = Math.ceil(Math.random() * 100000000);
          card = {
               network: n,
               amount: am,
               used: false,
               refNum: ref
          }
          val.push(card);
          localStorage.myData = JSON.stringify(val);
          amount.value = '';
          number.value = '';
          console.log(localStorage.myData);
     }
}

     function displayCard() {
          let y = localStorage.getItem("myData");
          let z = JSON.parse(y);
          result.innerHTML = '';
          for (let i = 0; i < z.length; i++) {
               sn = eval(i + 1);
               result.innerHTML += sn + ' ' + z[i].network + ' ' + z[i].amount + ' ' + z[i].refNum + '<br>';
               console.log(result.innerHTML);
          }
     }

function hideCard() {
     result.innerHTML = '';
}
     
function submit() {
     let y = localStorage.getItem("myData");
     let z = JSON.parse(y);
     result.innerHTML = '';
     for (let i = 0; i < z.length; i++) {
          if (netw.value == z[i].network && refnumber.value == z[i].refNum) {
               phoneResult.innerHTML = 'transaction successful' + '<br>' + 'your account balance is ' + z[i].amount;
               z[i].used = true;
               break;
          } else {
               phoneResult.innerHTML = 'INVALID CARD';
          }
     }
}