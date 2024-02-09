let full = document.querySelector("div.wrapper>Form.form1>input#full");
console.log(full);
let num = document.querySelector("div.wrapper>Form.form1>input#phonnumber");
console.log(num);
let add = document.querySelector("div.wrapper>Form.form1>input#َaddres");
console.log(add);
let degree = document.querySelector("div.wrapper>Form.form1>input#degree");
console.log(degree);
let age = document.querySelector("div.wrapper>Form.form1>input#age");
console.log(age);
let mounth = document.querySelector("div.wrapper>Form.form1>input#mounth");
console.log(mounth);
let name2 = document.querySelector("p.p01");
console.log(name2);
let num2 = document.querySelector("p.p02");
console.log(num2);
let add2 = document.querySelector("p.p03");
console.log(add2);
let degree2 = document.querySelector("p.p04");
console.log(degree2);
let age2 = document.querySelector("p.p05");
console.log(age2);
let mounth2 = document.querySelector("p.p06");
console.log(mounth2);
let submit = document.querySelector("button#submit");
console.log(submit);

submit.addEventListener("click", function () {
  let v1 = full.value;
  document.querySelector("p.p01").innerHTML = v1;
  document.querySelector("p.p02").innerHTML = Number(num.value);
  let v3 = add.value;
  document.querySelector("p.p03").innerHTML = v3;
  let v4 = degree.value;
  document.querySelector("p.p04").innerHTML = v4;

  if (age.value == 20) {
    age2.innerHTML = "2003";
  } else if (age.value == 21) {
    age2.innerHTML = "2004";
  } else if (age.value == 22) {
    age2.innerHTML = "2005";
  } else if (age.value == 23) {
    age2.innerHTML = "2006";
  } else if (age.value == 24) {
    age2.innerHTML = "2007";
  } else if (age.value == 25) {
    age2.innerHTML = "2008";
  } else if (age.value == 26) {
    age2.innerHTML = "2009";
  } else if (age.value == 27) {
    age2.innerHTML = "2010";
  } else if (age.value == 28) {
    age2.innerHTML = "2011";
  } else if (age.value == 29) {
    age2.innerHTML = "2012";
  } else if (age.value == 30) {
    age2.innerHTML = "2013";
  }
  if (mounth.value == "فروردین") {
    mounth2.innerHTML = "ژانویه";
  } else if (mounth.value == "اردیبهشت") {
    mounth2.innerHTML = "فوریه";
  } else if (mounth.value == "خرداد") {
    mounth2.innerHTML = "مارچ";
  } else if (mounth.value == "تیر") {
    mounth2.innerHTML = "اپریل";
  } else if (mounth.value == "مرداد") {
    mounth2.innerHTML = "می";
  } else if (mounth.value == "شهریور") {
    mounth2.innerHTML = "جولای";
  } else if (mounth.value == "مهر") {
    mounth2.innerHTML = "ژوییه";
  } else if (mounth.value == "ابان") {
    mounth2.innerHTML = "اگوست";
  } else if (mounth.value == "اذر") {
    mounth2.innerHTML = "سپتامبر";
  } else if (mounth.value == "دی") {
    mounth2.innerHTML = "اکتبر";
  } else if (mounth.value == "بهمن") {
    mounth2.innerHTML = "نوامبر";
  } else if (mounth.value == "اسفند") {
    mounth2.innerHTML = "دسامبر";
  }
});
