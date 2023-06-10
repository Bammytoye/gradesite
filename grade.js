// function Totall () {
//    if (condition) {
      
//    var course1 = paraseInt(document.getElementById("ProMgt").value);   
//    var course2 = paraseInt(document.getElementById("ResPro").value); 
//    var course3 = paraseInt(document.getElementById("QuaTec").value);
//    var course4 = paraseInt(document.getElementById("BusPol").value);
//    var course5 = paraseInt(document.getElementById("IntroBus").value);

//    if (course1>100 || course2>100 || course3>100 || course4>100 || course5>100) {
//       alert("Enter Marks in Range of 100")
//    } 
//    else {
//       var Total = course1 + course2 + course3 + course4 + course5;
//       document.getElementById("Totall").innerHTML = "Production Management: " +course1 + "<br> Research Project: " + course2 + "<br> Quantitative Technique: " + course3 + "<br> Business Policy: " + course4 + "<br> Introduction of Business: " + course5 + "Total Marks: " + totall;
//    }
// }

// function Average () {
//    var course1 = paraseInt(document.getElementById("ProMgt").value);   
//    var course2 = paraseInt(document.getElementById("ResPro").value); 
//    var course3 = paraseInt(document.getElementById("QuaTec").value); 
//    var course4 = paraseInt(document.getElementById("BusPol").value);
//    var course5 = paraseInt(document.getElementById("IntroBus").value); 

//    if (course1>100 || course2>100 || course3>100 || course4>100 || course5>100) {
//       alert("Enter Marks in Range of 100")
//    } 
//    else {
//       var Total = course1 + course2 + course3 + course4 + course5;
//       var avg = totall/5;
//       document.getElementById("avg").innerHTML = "Your Average marks are: " + avg;
//    }
// }

// function Grade () {
//    var course1 = paraseInt(document.getElementById("ProMgt").value);
//    var course2 = paraseInt(document.getElementById("ResPro").value);
//    var course3 = paraseInt(document.getElementById("QuaTec").value);
//    var course4 = paraseInt(document.getElementById("BusPol").value); 
//    var course5 = paraseInt(document.getElementById("IntroBus").value);

//    if (course1>100 || course2>100 || course3>100 || course4>100 || course5>100) {
//       alert("Enter Marks in Range of 100")
//    } 
//    else {
//       var Total = course1 + course2 + course3 + course4 + course5;
//       var avg = totall/5;
      
//       if (avg>=80 && avg<=100) {
//          document.getElementById("grade").innerHTML = "You Got A+ Grade";
//       } 
//       else if  (avg>=75 && avg<=79) {
//          document.getElementById("grade").innerHTML = "You Got A+ Grade";
//       }
//       else if (avg>=70 && avg<=74) {
//          document.getElementById("grade").innerHTML = "You Got A Grade";
//       }
//       else if (avg>=60 && avg<=69) {
//          document.getElementById("grade").innerHTML = "You Got B Grade";
//       }
//       else if (avg>=50 && avg<=59) {
//          document.getElementById("grade").innerHTML = "You Got C Grade";
//       }
//       else if (avg>=40 && avg<=49) {
//          document.getElementById("grade").innerHTML = "You Got D Grade";
//       }
//       else if (avg>=0 && avg<=39) {
//          document.getElementById("grade").innerHTML = "You Got F Grade";
//       }
//    }
// }
// }

var gradeA = new Audio("audio/Jesus-Jesus-Jesus-comedy-sound-effect-1.mp3")
var gradeD = new Audio("audio/you-think-say-you-dey-wise.mp3")
var gradeNone = new Audio("audio/They-av-left-you-behind.mp3")
var gradeE = new Audio("audio/Oh-no-no-no-laugh-music.mp3")
var gradeFF = new Audio("audio/yee-yee-yeeee-sound-effect.mp3")
var gradeF = new Audio("audio/Slap (Sound Effect) (128 kbps).mp3")
var gradeC = new Audio("audio/Something-About-To-Happen.mp3")
var gradeB = new Audio("audio/Will-You-Keep-Quiet.mp3")
var gradeAAA = new Audio("audio/Why-Are-You-Running.mp3")
var gradeAA = new Audio("audio/There-Is-God-O.mp3")
var gradeInvalid = new Audio("audio/Wrong-Answer.mp3")

function playMusic () {
   gradeA.play()
   gradeD.play()
   gradeNone.play()
   gradeE.play()
   gradeF.play()
   gradeFF.play()
   gradeC.play()
   gradeB.play()
   gradeAAA.play()
   gradeAA.play()
   gradeInvalid.play()
}


function fate() {
   if (businessPolicy.value == "") {
      console.log("Input Your Scores, Dont be Scared");
      displayFate.innerHTML = "Input Your Scores, Dont be Scared"
      gradeNone.play()
   }

   else if (businessPolicy.value >=0 && businessPolicy.value <=19) {
      console.log("YOU GOT F+ GRADE");
      displayFate.innerHTML = "YOU GOT F+ GRADE" 
      gradeFF.play()          
   }
   
   else if (businessPolicy.value >=20 && businessPolicy.value <=39) {
      console.log("YOU GOT F GRADE");
      displayFate.innerHTML = "YOU GOT F GRADE"  
      gradeF.play()         
   }

   else if (businessPolicy.value >=40 && businessPolicy.value <=44) {
      console.log("YOU GOT E GRADE");
      displayFate.innerHTML = "YOU GOT E GRADE"
      gradeE.play()
   }

   else if (businessPolicy.value >=45 && businessPolicy.value <=49) {
      console.log("YOU GOT D GRADE");
      displayFate.innerHTML = "YOU GOT D GRADE"
      gradeD.play()
   }

   else if (businessPolicy.value >=50 && businessPolicy.value <=59) {
      console.log("YOU GOT C GRADE");
      displayFate.innerHTML = "YOU GOT C GRADE"
      gradeC.play()
   }

   else if (businessPolicy.value >=60 && businessPolicy.value <=69) {
      console.log("YOU GOT B GRADE");
      displayFate.innerHTML = "YOU GOT B GRADE"
      gradeB.play()
   }

   else if (businessPolicy.value >=70 && businessPolicy.value <=79) {
      console.log("YOU GOT A GRADE");
      displayFate.innerHTML = "YOU GOT A GRADE"
      gradeA.play() 
   }

   else if (businessPolicy.value >=80 && businessPolicy.value <=89) {
      console.log("YOU GOT A+ GRADE");
      displayFate.innerHTML = "YOU GOT A+ GRADE"
      gradeAA.play() 
   }

   else if (businessPolicy.value >=90 && businessPolicy.value <=100) {
      console.log("YOU GOT A++ GRADE");
      displayFate.innerHTML = "YOU GOT A++ GRADE"
      gradeAAA.play()
   }

   else {
      console.log("Invalid Input");
      displayFate.innerHTML = "Invalid Input"
      gradeInvalid.play()
   }
}