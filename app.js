
/////   CHAPTER 31-34 /////


////    Q1 //////


// var rightNow = new Date();

// console.log(rightNow);





/////   Q2 //////

// var currMon = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// var now = new Date();

// var rightNow = currMon[now.getMonth()];

// alert(rightNow);
// console.log(rightNow);




////    Q3    //////



// var day = new Date().toString();

// alert(day.slice(0,3));
// console.log(day.slice(0,3));



/////   Q4 //////


// var day = new Date().toString().slice(0,3);

// if(day === "Sat"){
//     document.write("It's Fun day");
// }else if(day === "Sun"){
//     document.write("It's Fun day");
// }else if(day === "Mon"){
//     document.write();
// }else if(day === "Tue"){
//     document.write();
// }else if(day === "Wed"){
//     document.write();
// }else if(day === "Thu"){
//     document.write();
// }else if(day === "Fri"){
//     document.write();
// }




//////  Q5 //////








//////  Q6  ///////


// var currDate = new Date();

// var todayMili = currDate.getTime();

// var todayMin = currDate.getMinutes();

// var diff = todayMili - todayMin;

// var diffMin = diff/(1000*60*60);

// var accMin = Math.floor(diffMin);

// console.log(currDate);
// console.log(todayMili);
// console.log(accMin);





//////  Q7  ////////////



// var day = new Date().toString().slice(16,18);

// if(day === "01"){
//     alert("It's AM")

// }else if(day === "02"){
//     alert("It's AM")
// }else if(day === "03"){
//     alert("It's AM")
// }else if(day === "04"){
//     alert("It's AM")
// }else if(day === "05"){
//     alert("It's AM")
// }else if(day === "06"){
//     alert("It's AM")
// }else if(day === "07"){
//     alert("It's AM")
// }else if(day === "08"){
//     alert("It's AM")
// }else if(day === "09"){
//     alert("It's AM")
// }else if(day === "10"){
//     alert("It's AM")
// }else if(day === "11"){
//     alert("It's AM")
// }else if(day === "12"){
//     alert("It's AM")
// }else if(day === "13"){
//     alert("It's PM")
// }else if(day === "14"){
//     alert("It's PM")
// }else if(day === "15"){
//     alert("It's PM")
// }else if(day === "16"){
//     alert("It's PM")
// }else if(day === "17"){
//     alert("It's PM")
// }else if(day === "18"){
//     alert("It's PM")
// }else if(day === "19"){
//     alert("It's PM")
// }else if(day === "20"){
//     alert("It's PM")
// }else if(day === "21"){
//     alert("It's PM")
// }else if(day === "22"){
//     alert("It's PM")
// }else if(day === "23"){
//     alert("It's PM")

// }else if(day === "24"){
//     alert("It's PM")
// }
// console.log(day)



//////  Q8  ///////////////

// var laterDate = new Date("Dec 31 , 2020")

// console.log(laterDate)





//////  Q9 //////


// var now = new Date();

// var ramStr = new Date("May 29, 2021")


// msNow = now.getTime();

// msRam = ramStr.getTime()

// msDiff = msNow - msRam

// days = Math.floor(msDiff/(1000*60*60*24)) 

// alert("171 days have passed since 1st Ramadan ,2021", days)
// console.log("171 days have passed since 1st Ramadan ,2021" ,days)




/////   Q10 /////


// var currTime = new Date();

// var strTime = new Date("January 01 , 2021");

// var timeDiff =  endTime - currTime;

// timeDiff = Math.floor(timeDiff/(1000*60)) ;

// console.log(timeDiff);




/////   Q11    ////////////////








/////   Q12 ////////////////


// var currDate = new Date();

// var oldDate = new Date("Noverber 17, 1921")

// console.log(currDate)
// console.log(oldDate)





//////  Q13 /////


// var dob = new Date( prompt("enter your date of birth"))

// var dobmili = dob.getTime();

// var today = new Date();

// var todayMili = today.getTime();

// var diff = todayMili - dobmili

// var diffYear = Math.floor( diff/(1000*60*60*24*30*12))

// document.write(diffYear)
// console.log(diffYear)




//////  Q14   ////////////