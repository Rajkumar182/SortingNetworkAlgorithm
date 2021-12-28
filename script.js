/*
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

var arr = [1, 2, 3, 4, 5, 6];

//Shuffle Fuction Call
  (shuffle(arr));
//document.write(shuffle(arr));





//This is incase to generate random Array----//
// //Numbers in Array Will be Randomly Generated
// //let arr =[a, b, c, d, e, f];
// document.write("<br>" + arr + "<br>");
//---End---//






//Start Button Delete Step 1 Button Add ---//
function startButtonClicked(){
  
  
   //First ROW Array Numbers Shuffle Show
document.getElementById("first-array-zero-index").innerHTML = arr[0];  
document.getElementById("first-array-first-index").innerHTML = arr[1];
document.getElementById("first-array-second-index").innerHTML = arr[2];
document.getElementById("first-array-third-index").innerHTML = arr[3];
document.getElementById("first-array-fourth-index").innerHTML = arr[4];
document.getElementById("first-array-fifth-index").innerHTML = arr[5];
  //First ROW Array Shuffle Show END-----//
  
  
  
  
  
  
   //removing element by ID
var startButton = document.getElementById("start-button");
    startButton.parentNode.removeChild(startButton);
//--Removing First Button Completion---///
  
 
  //--Adding New Button--//
// get the element you want to add the button to
var myDiv = document.getElementById("button-container");

// create the button object and add the text to it
var stepFirstButton = document.createElement("BUTTON");
stepFirstButton.innerHTML = "Step 1";

// add the button to the div
myDiv.appendChild(stepFirstButton);
  
  //Adding Class list inside first button
  stepFirstButton.classList.add("click-btn");
  
  //Adding Button Type to Button
  stepFirstButton.setAttribute("type", "button");
  
  
  //Adding next on Click Function to Call Next Function After Button is Clicked---//
  stepFirstButton.setAttribute("onclick","stepFirst();");
  //--End--//
  
  
  //Adding New ID for Step First Button---//  
 stepFirstButton.setAttribute("id", "step-first");
  
  
}
//Start Button Delete Step 1 Button Add END---//










//Step 1 Button Delete Step 2 Button Add ---//
function stepFirst(){
  
  //---Deleting first ROW Numbers ------//
document.getElementById("first-array-zero-index").innerHTML = "";  
document.getElementById("first-array-first-index").innerHTML = "";
document.getElementById("first-array-second-index").innerHTML = "";
document.getElementById("first-array-third-index").innerHTML = "";
document.getElementById("first-array-fourth-index").innerHTML = "";
document.getElementById("first-array-fifth-index").innerHTML = "";  
  //---Deleting first ROW Numbers END-----//
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//Second row Array Swap
// document.write("Second Step array swap" + "<br>");
// Swapping element at index 0 and index 1
if (arr[0] > arr[1]) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
  // document.write(arr + "<br>");
  document.getElementById("second-array-zero-index").innerHTML = arr[0];
  document.getElementById("second-array-first-index").innerHTML = arr[1];
} else {
  [arr[0], arr[1]] = [arr[0], arr[1]];
  //document.write(arr + "<br>");

  document.getElementById("second-array-zero-index").innerHTML = arr[0];
  document.getElementById("second-array-first-index").innerHTML = arr[1];
}

// Swapping element at index 2 and index 3

if (arr[2] > arr[3]) {
  [arr[2], arr[3]] = [arr[3], arr[2]];
//  document.write(arr + "<br>");
  document.getElementById("second-array-second-index").innerHTML = arr[2];
  document.getElementById("second-array-third-index").innerHTML = arr[3];
} else {
  [arr[2], arr[3]] = [arr[2], arr[3]];
  //document.write(arr + "<br>");
  document.getElementById("second-array-second-index").innerHTML = arr[2];
  document.getElementById("second-array-third-index").innerHTML = arr[3];
}

// Swapping element at index 4 and index 5

if (arr[4] > arr[5]) {
  [arr[4], arr[5]] = [arr[5], arr[4]];
  //document.write(arr + "<br>");
  document.getElementById("second-array-fourth-index").innerHTML = arr[4];
  document.getElementById("second-array-fifth-index").innerHTML = arr[5];
} else {
  [arr[4], arr[5]] = [arr[4], arr[5]];
  //document.write(arr + "<br>");
  document.getElementById("second-array-fourth-index").innerHTML = arr[4];
  document.getElementById("second-array-fifth-index").innerHTML = arr[5];
}
// // Print the array
// document.write(arr + "<br>");
//----Second Row Array Swap End

  
  
  
  
  
  
  
  
  
  
   //Removing Button through its element by ID
var stepFirstButton = document.getElementById("step-first");
    stepFirstButton.parentNode.removeChild(stepFirstButton);
//--Removing First Button Completion---///
  
 
  //--Adding New Button--//
// get the element you want to add the button to
var myDiv = document.getElementById("button-container");

// create the button object and add the text to it
var stepSecondButton = document.createElement("BUTTON");
stepSecondButton.innerHTML = "Step 2";

// add the button to the div
myDiv.appendChild(stepSecondButton);
  
  //Adding Class list inside first button
  stepSecondButton.classList.add("click-btn");
  
    //Adding Button Type to Button
  stepFirstButton.setAttribute("type", "button");
  
  
  //Adding next on Click Function to Call Next Function After Button is Clicked---//
  stepSecondButton.setAttribute("onclick","stepSecond();");
  //--End--//
  
  
  //Adding New ID for Step First Button---//  
 stepSecondButton.setAttribute("id", "step-second");


//   document.write(arr);
  
  
  
  
}
//---Step First Button Delete And Step 2 Button Add END---//







//Step 2 Button Delete Step 3 Button Add ---//
function stepSecond(){
  
  //---Deleting first ROW Numbers ------//
document.getElementById("second-array-zero-index").innerHTML = "";  
document.getElementById("second-array-first-index").innerHTML = "";
document.getElementById("second-array-second-index").innerHTML = "";
document.getElementById("second-array-third-index").innerHTML = "";
document.getElementById("second-array-fourth-index").innerHTML = "";
document.getElementById("second-array-fifth-index").innerHTML = "";  
  //---Deleting first ROW Numbers END-----//
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//-------Third ROW Array Swap----------------//
  
//document.write("Second Step Array Swap");
//Before Swap
[arr[1], arr[2]] = [arr[2], arr[1]];
[arr[3], arr[4]] = [arr[4], arr[3]];
//document.write("<br>" + arr);
//Before Swap End

//After swap Again
// Swapping element at index 0 and index 1
if (arr[0] > arr[1]) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
  //document.write("<br>" + arr + "<br>");
  document.getElementById("third-array-zero-index").innerHTML = arr[0];
  document.getElementById("third-array-first-index").innerHTML = arr[1];
} else {
  [arr[0], arr[1]] = [arr[0], arr[1]];
  //document.write(arr + "<br>");
  document.getElementById("third-array-zero-index").innerHTML = arr[0];
  document.getElementById("third-array-first-index").innerHTML = arr[1];
}

// Swapping element at index 2 and index 3

if (arr[2] > arr[3]) {
  [arr[2], arr[3]] = [arr[3], arr[2]];
  //document.write(arr + "<br>");
  document.getElementById("third-array-second-index").innerHTML = arr[2];
  document.getElementById("third-array-third-index").innerHTML = arr[3];
} else {
  [arr[2], arr[3]] = [arr[2], arr[3]];
  //document.write(arr + "<br>");
  document.getElementById("third-array-second-index").innerHTML = arr[2];
  document.getElementById("third-array-third-index").innerHTML = arr[3];
}

// Swapping element at index 4 and index 5

if (arr[4] > arr[5]) {
  [arr[4], arr[5]] = [arr[5], arr[4]];
  //document.write(arr + "<br>");
  document.getElementById("third-array-fourth-index").innerHTML = arr[4];
  document.getElementById("third-array-fifth-index").innerHTML = arr[5];
} else {
  [arr[4], arr[5]] = [arr[4], arr[5]];
  //document.write(arr + "<br>");
  document.getElementById("third-array-fourth-index").innerHTML = arr[4];
  document.getElementById("third-array-fifth-index").innerHTML = arr[5];
}
// Print the array
//document.write(arr + "<br>");
   
  //----Second Row Array Swap End-----------//

  
  
  
  
  
  
  
  
  //-----Step 2 Button Delete And Step 3 Button Add -----//
  
   //Removing Step 2 Button through its element by ID
var stepSecondButton = document.getElementById("step-second");
    stepSecondButton.parentNode.removeChild(stepSecondButton);
//--Removing Step 2 Button Complete---///
  
 
  //--Adding New Button--//
// get the element you want to add the button to
var myDiv = document.getElementById("button-container");

// create the button object and add the text to it
var stepThirdButton = document.createElement("BUTTON");
stepThirdButton.innerHTML = "Step 3";

// add the button to the div
myDiv.appendChild(stepThirdButton);
  
  //Adding Class list inside first button
  stepThirdButton.classList.add("click-btn");
  
    //Adding Button Type to Button
  stepThirdButton.setAttribute("type", "button");
  
  
  //Adding next on Click Function to Call Next Function After Button is Clicked---//
  stepThirdButton.setAttribute("onclick","stepThird();");
  //--End--//
  
  
  //Adding New ID for Step First Button---//  
 stepThirdButton.setAttribute("id", "step-third");


//   document.write(arr);
  
    
}
//---Step 2 Button Delete And Step 3 Button Add END---//











//Step 3 Button Delete Step 4 Button Add ---//
function stepThird(){
  
  //---Deleting first ROW Numbers ------//
document.getElementById("third-array-zero-index").innerHTML = "";  
document.getElementById("third-array-first-index").innerHTML = "";
document.getElementById("third-array-second-index").innerHTML = "";
document.getElementById("third-array-third-index").innerHTML = "";
document.getElementById("third-array-fourth-index").innerHTML = "";
document.getElementById("third-array-fifth-index").innerHTML = "";  
  //---Deleting first ROW Numbers END-----//
  
  
  
  
  
  
  
  
  
  
 
  
// //--------Fourth ROW Array Swap-----------//
// document.write("Third Step Array Swap");
//Before Swap//
[arr[1], arr[2]] = [arr[2], arr[1]];
[arr[3], arr[4]] = [arr[4], arr[3]];
//document.write("<br>" + arr + "<br>");
//Before Swap End//

//After swap Again
// Swapping element at index 0 and index 1
if (arr[0] > arr[1]) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
  //document.write("<br>" + arr + "<br>");
  document.getElementById("fourth-array-zero-index").innerHTML = arr[0];
  document.getElementById("fourth-array-first-index").innerHTML = arr[1];
} else {
  [arr[0], arr[1]] = [arr[0], arr[1]];
  //document.write(arr + "<br>");
  document.getElementById("fourth-array-zero-index").innerHTML = arr[0];
  document.getElementById("fourth-array-first-index").innerHTML = arr[1];
}

// Swapping element at index 2 and index 3
if (arr[2] > arr[3]) {
  [arr[2], arr[3]] = [arr[3], arr[2]];
  //document.write(arr + "<br>");
  document.getElementById("fourth-array-second-index").innerHTML = arr[2];
  document.getElementById("fourth-array-third-index").innerHTML = arr[3];
} else {
  [arr[2], arr[3]] = [arr[2], arr[3]];
  //document.write(arr + "<br>");
  document.getElementById("fourth-array-second-index").innerHTML = arr[2];
  document.getElementById("fourth-array-third-index").innerHTML = arr[3];
}

// Swapping element at index 4 and index 5

if (arr[4] > arr[5]) {
  [arr[4], arr[5]] = [arr[5], arr[4]];
  //document.write(arr + "<br>");
  document.getElementById("fourth-array-fourth-index").innerHTML = arr[4];
  document.getElementById("fourth-array-fifth-index").innerHTML = arr[5];
} else {
  [arr[4], arr[5]] = [arr[4], arr[5]];
  //document.write(arr + "<br>");
  document.getElementById("fourth-array-fourth-index").innerHTML = arr[4];
  document.getElementById("fourth-array-fifth-index").innerHTML = arr[5];
}
// Print the array
//document.write(arr + "<br>");


  //----Fourth Row Array Swap End-----------//

  
  
  
  
  
  //-----Step 3 Button Delete And Step 4 Button Add -----//
  
   //Removing Step 2 Button through its element by ID
var stepThirdButton = document.getElementById("step-third");
    stepThirdButton.parentNode.removeChild(stepThirdButton);
//--Removing Step 2 Button Complete---///
  
 
  //--Adding New Button--//
// get the element you want to add the button to
var myDiv = document.getElementById("button-container");

// create the button object and add the text to it
var stepFourthButton = document.createElement("BUTTON");
stepFourthButton.innerHTML = "Step 4";

// add the button to the div
myDiv.appendChild(stepFourthButton);
  
  //Adding Class list inside first button
  stepFourthButton.classList.add("click-btn");
  
    //Adding Button Type to Button
  stepFourthButton.setAttribute("type", "button");
  
  
  //Adding next on Click Function to Call Next Function After Button is Clicked---//
  stepFourthButton.setAttribute("onclick","stepFourth();");
  //--End--//
  
  
  //Adding New ID for Step First Button---//  
 stepFourthButton.setAttribute("id", "step-fourth");


//   document.write(arr);
  
  
}
//---Step 3 Button Delete And Step 4 Button Add END---//











//Step 4 Button Delete Step 5 Button Add ---//
function stepFourth(){
  
  //---Deleting first ROW Numbers ------//
document.getElementById("fourth-array-zero-index").innerHTML = "";  
document.getElementById("fourth-array-first-index").innerHTML = "";
document.getElementById("fourth-array-second-index").innerHTML = "";
document.getElementById("fourth-array-third-index").innerHTML = "";
document.getElementById("fourth-array-fourth-index").innerHTML = "";
document.getElementById("fourth-array-fifth-index").innerHTML = "";  
  //---Deleting first ROW Numbers END-----//
  
  
  
  
  
  
  
  
  
  
 
  
// //--------Fifth ROW Array Swap-----------//

// document.write("<br>" + "Fourth Step Swap" + "<br>");
if (arr[1] > arr[2]) {
  [arr[1], arr[2]] = [arr[2], arr[1]];
//  document.write(arr + "<br>");

  document.getElementById("seventh-array-zero-index").innerHTML = arr[0];
  document.getElementById("fifth-array-first-index").innerHTML = arr[1];
  document.getElementById("fifth-array-second-index").innerHTML = arr[2];
  document.getElementById("seventh-array-fifth-index").innerHTML = arr[5];
} else {
  [arr[1], arr[2]] = [arr[1], arr[2]];
  //document.write(arr);
  document.getElementById("seventh-array-zero-index").innerHTML = arr[0];
  document.getElementById("fifth-array-first-index").innerHTML = arr[1];
  document.getElementById("fifth-array-second-index").innerHTML = arr[2];
  document.getElementById("seventh-array-fifth-index").innerHTML = arr[5];
}

if (arr[3] > arr[4]) {
  [arr[3], arr[4]] = [arr[4], arr[3]];
//  document.write(arr);

  document.getElementById("fifth-array-first-index").innerHTML = arr[1];
  document.getElementById("fifth-array-third-index").innerHTML = arr[3];
  document.getElementById("fifth-array-fourth-index").innerHTML = arr[4];
} else {
  [arr[3], arr[4]] = [arr[3], arr[4]];
  //document.write(arr);
  document.getElementById("fifth-array-third-index").innerHTML = arr[3];
  document.getElementById("fifth-array-fourth-index").innerHTML = arr[4];
}

  //---Fifth Row Array Swap End-----------//
  
  
  
  
  //-----Step 4 Button Delete And Step 5 Button Add -----//
  
   //Removing Step 2 Button through its element by ID
var stepFourthButton = document.getElementById("step-fourth");
    stepFourthButton.parentNode.removeChild(stepFourthButton);
//--Removing Step 2 Button Complete---///
  
 
  //--Adding New Button--//
// get the element you want to add the button to
var myDiv = document.getElementById("button-container");

// create the button object and add the text to it
var stepFifthButton = document.createElement("BUTTON");
stepFifthButton.innerHTML = "Step 5";

// add the button to the div
myDiv.appendChild(stepFifthButton);
  
  //Adding Class list inside first button
  stepFifthButton.classList.add("click-btn");
  
    //Adding Button Type to Button
  stepFifthButton.setAttribute("type", "button");
  
  
  //Adding next on Click Function to Call Next Function After Button is Clicked---//
  stepFifthButton.setAttribute("onclick","stepFifth();");
  //--End--//
  
  
  //Adding New ID for Step First Button---//  
 stepFifthButton.setAttribute("id", "step-fifth");


//   document.write(arr);
  
  
}
//---Step 4 Button Delete And Step 5 Button Add END---//
















//Step 5 Button Delete Step 6 Button Add ---//
function stepFifth(){
  
  //---Deleting first ROW Numbers ------//
//document.getElementById("fifth-array-zero-index").innerHTML = "";  
document.getElementById("fifth-array-first-index").innerHTML = "";
document.getElementById("fifth-array-second-index").innerHTML = "";
document.getElementById("fifth-array-third-index").innerHTML = "";
document.getElementById("fifth-array-fourth-index").innerHTML = "";
//document.getElementById("fifth-array-fifth-index").innerHTML = "";  
  //---Deleting first ROW Numbers END-----//
  
  
  
  
 
 
  
// //--------Sixth ROW Array Swap-----------//

  // document.write("<br>" + "fifth Step Array Swap" + "<br>");
if (arr[2] > arr[3]) {
  [arr[2], arr[3]] = [arr[3], arr[2]];
//  document.write(arr);
  document.getElementById("seventh-array-first-index").innerHTML = arr[1];
  document.getElementById("sixth-array-second-index").innerHTML = arr[2];
  document.getElementById("sixth-array-third-index").innerHTML = arr[3];
  document.getElementById("seventh-array-fourth-index").innerHTML = arr[4];
} else {
  [arr[2], arr[3]] = [arr[2], arr[3]];
  //document.write(arr);
   document.getElementById("seventh-array-first-index").innerHTML = arr[1];
  document.getElementById("sixth-array-second-index").innerHTML = arr[2];
  document.getElementById("sixth-array-third-index").innerHTML = arr[3];
   document.getElementById("seventh-array-fourth-index").innerHTML = arr[4];
}

// document.write("<br>" + " Final sorted array is " + "<br>" + arr);
  
  //---Sixth Row Array Swap End-----------//
  
  
  
  
  
  
  //-----Step 5 Button Delete And Step 6 Button Add -----//
  
   //Removing Step 2 Button through its element by ID
var stepFifthButton = document.getElementById("step-fifth");
    stepFifthButton.parentNode.removeChild(stepFifthButton);
//--Removing Step 2 Button Complete---///
  
 
  //--Adding New Button--//
// get the element you want to add the button to
var myDiv = document.getElementById("button-container");

// create the button object and add the text to it
var stepSixthButton = document.createElement("BUTTON");
stepSixthButton.innerHTML = "Step 6";

// add the button to the div
myDiv.appendChild(stepSixthButton);
  
  //Adding Class list inside first button
  stepSixthButton.classList.add("click-btn");
  
    //Adding Button Type to Button
  stepSixthButton.setAttribute("type", "button");
  
  
  //Adding next on Click Function to Call Next Function After Button is Clicked---//
  stepSixthButton.setAttribute("onclick","stepSixth();");
  //--End--//
  
  
  //Adding New ID for Step First Button---//  
 stepSixthButton.setAttribute("id", "step-sixth");


//   document.write(arr);
  
  
}
//---Step 5 Button Delete And Step 6 Button Add END---//







//Step 6 Button Delete Step 7 Button Add ---//
function stepSixth(){
  
  //---Deleting first ROW Numbers ------//
//document.getElementById("sixth-array-zero-index").innerHTML = "";  
//document.getElementById("sixth-array-first-index").innerHTML = "";
document.getElementById("sixth-array-second-index").innerHTML = "";
document.getElementById("sixth-array-third-index").innerHTML = "";
//document.getElementById("sixth-array-fourth-index").innerHTML = "";
//document.getElementById("sixth-array-fifth-index").innerHTML = "";  
  //---Deleting first ROW Numbers END-----//
  
  
  
  
 
 
  
// //--------Seventh/Last ROW Array Swap And Show-----------//
// if (arr[0] < arr[1] < arr[2] < arr[3] < arr[4] < arr[5]) {
//   document.getElementById("seventh-array-zero-index").innerHTML = arr[0];
//   document.getElementById("seventh-array-first-index").innerHTML = arr[1];
   document.getElementById("seventh-array-second-index").innerHTML = arr[2];
   document.getElementById("seventh-array-third-index").innerHTML = arr[3];
//   document.getElementById("seventh-array-fourth-index").innerHTML = arr[4];
//   document.getElementById("seventh-array-fifth-index").innerHTML = arr[5];
// }
  //---Seventh/ Last Row Array Swap And Show End-----------//
  
  
  
  
  
  
  //-----Step 6 Button Delete And Step 7 Button Add -----//
  
   //Removing Step 6 Button through its element by ID
var stepSixthButton = document.getElementById("step-sixth");
    stepSixthButton.parentNode.removeChild(stepSixthButton);
//--Removing Step 2 Button Complete---///
  
 
  //--Adding New Button--//
// get the element you want to add the button to
var myDiv = document.getElementById("button-container");

// create the button object and add the text to it
var stepSeventhButton = document.createElement("BUTTON");
stepSeventhButton.innerHTML = "Step 7";

// add the button to the div
myDiv.appendChild(stepSeventhButton);
  
  //Adding Class list inside first button
  stepSeventhButton.classList.add("click-btn");
  
    //Adding Button Type to Button
  stepSeventhButton.setAttribute("type", "button");
  
  
  //Adding next on Click Function to Call Next Function After Button is Clicked---//
  stepSeventhButton.setAttribute("onclick","stepSeventh();");
  //--End--//
  
  
  //Adding New ID for Step First Button---//  
 stepSeventhButton.setAttribute("id", "step-seventh");


//   document.write(arr);
  
  
}
//---Step 6 Button Delete And Step 7 Button Add END---//







console.log("Working");
