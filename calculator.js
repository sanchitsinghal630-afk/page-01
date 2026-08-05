const old_ = document.getElementById(`old`);
const entry_ = document.getElementById(`entry`);
const ac_ = document.getElementById(`ac`);
const de_ = document.getElementById(`de`);
const modulus_ = document.getElementById(`modulus`);
const divide_ = document.getElementById(`divide`);
const seven_ = document.getElementById(`seven`);
const eight_ = document.getElementById(`eight`);
const nine_ = document.getElementById(`nine`);
const four_ = document.getElementById(`four`);
const five_ = document.getElementById(`five`);
const six_ = document.getElementById(`six`);
const one_ = document.getElementById(`one`);
const two_ = document.getElementById(`two`);
const three_ = document.getElementById(`three`);
const double_zero_ = document.getElementById(`double_zero`);
const zero_ = document.getElementById(`zero`);
const dot_ = document.getElementById(`dot`);
const equal_ = document.getElementById(`equal`);
const multiple_ = document.getElementById(`multiply`);
const minus_ = document.getElementById(`minus`);
const plus_ = document.getElementById(`plus`);

function add(value){entry_.value += value;}
function check(value){if(!isNaN(Number(entry_.value[entry_.value.length - 1]))){add(value)}}

one_.onclick = function(){add(`1`);}
two_.onclick = function(){add(`2`);}
three_.onclick = function(){add(`3`);}
four_.onclick = function(){add(`4`);}
five_.onclick = function(){add(`5`);}
six_.onclick = function(){add(`6`);}
seven_.onclick = function(){add(`7`);}
eight_.onclick = function(){add(`8`);}
nine_.onclick = function(){add(`9`);}
double_zero_.onclick = function(){add(`00`);}
modulus_.onclick = function(){check(`%`);}
divide_.onclick = function(){check(`/`);}
multiple_.onclick = function(){check(`*`);}
minus_.onclick = function(){check(`-`);}
plus_.onclick = function(){check(`+`);}
zero_.onclick = function(){add(`0`);}
dot_.onclick = function(){add(`.`);}
de_.onclick = function(){entry_.value = entry_.value.slice(0,entry_.value.length-1);}
ac_.onclick = function(){entry_.value = ``;old_.textContent=`0`}
equal_.onclick = function(){if(!isNaN(Number(entry_.value[entry_.value.length - 1]))){old_.textContent = entry_.value+`=`;entry_.value = eval(entry_.value);}}