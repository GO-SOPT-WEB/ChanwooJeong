let birthA = 112;
const birthB = birthA;

console.log(birthA === birthB); // 결과가 무엇일까? true

const happhee = null;
console.log(typeof happhee === null); // 결과가 무엇일까? false

console.log(happhee === null); // 결과가 무엇일까? true

const ALL_ATTENDANCE = 24;
const TWO_PEOPLE_ABSENT = 22;
const FOUR_PEOPLE_ABSENT = 20;

function mtInfo(mtMember) {
  switch (mtMember) {
    case ALL_ATTENDANCE:
      console.log("앗싸앗싸!!!!!!");
      break;
    case TWO_PEOPLE_ABSENT:
      console.log("어어어...?");
    case FOUR_PEOPLE_ABSENT:
      console.log("집착하기 시작..>.<");
      break;
      defalut: console.log("가서 햅히하게 놀아부쟈!!!");
      break;
  }
}
mtInfo(ALL_ATTENDANCE)
mtInfo(FOUR_PEOPLE_ABSENT)

let age = 12;
function printPerson() {
  let name = "seohee";
  console.log(name);
  console.log(age);
}
printPerson();

const ages = {
  묘링 : "고물",
  25: "찬우",
  27: "요링",
};

for (const age in ages) {
  console.log(`키 : ${age}`);
  //  키 : 25
  //  키 : 27
  //  키 : 묘링

  // 순서대로 출력되지 않고 숫자부터 출력되어버린다.
  // 따라서 객체에서는 숫자를 키값으로 쓰지 않는다.
}

setTimeout(function wait(){
    console.log('1',2);
  },2000);
  
  setTimeout(function wait(){
    console.log('2',2);
  },2000);
  
  setTimeout(function wait(){
    console.log('3',2);
  },2000);
  
  setTimeout(function wait(){
    console.log('4',2);
  },2000);
