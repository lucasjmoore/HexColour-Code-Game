  function setRandomColour(){

    var colourDecimalR,colourDecimalG,colourDecimalB;

    colourDecimalR = Math.floor(Math.random()*256);
    colourDecimalG = Math.floor(Math.random()*256);
    colourDecimalB = Math.floor(Math.random()*256);

    setBackgroundColour(colourDecimalR,colourDecimalG,colourDecimalB);

  }

  function setBackgroundColour(colourDecimalR, colourDecimalG, colourDecimalB){
    console.log( 'random colour value: rgb(' + [colourDecimalR,colourDecimalG,colourDecimalB].join(',') + ')');
    document.body.style.backgroundColor = 'rgb(' + [colourDecimalR,colourDecimalG,colourDecimalB].join(',') + ')';
  }


  function playerColourValueSubmit(){

      var colourGuessValue =document.querySelector("#colourGuessInput").value;
      console.log("colourGuessValue: " + colourGuessValue);

      checkValidInput(colourGuessValue);

      //hexColourToDecimalSplit(colourGuessValue);
  }

function checkValidInput(colourGuessValue){
  if(colourGuessValue.length == 3){
    //  If colourGuessValue only has 3 characters.  Example: #FFF

    hexColourToDecimalSplit(colourGuessValue);

    //set next random colour
    setRandomColour();
  }
  else if (colourGuessValue.length == 6){
    //  Else colourGuessValue 6 characters.  Example: #FFFFFF
    
    hexColourToDecimalSplit(colourGuessValue);

    //set next random colour
    setRandomColour();
  }
  else{
    //  Else colourGuessValue has an invalid amount of characters
    alert("Please enter a valid hexadecimal number.")
  }
  
}


function hexColourToDecimalSplit(colourGuessValue){
  /*
  find the length of the colour.   Either 3 || 6
  if length is 3  extend the number to be standard 6
  convert String to hexadecimal to interger
  multiply integers together to get seperate R G B   decimal values
  */


  // find the length of the colour.   Either 3 || 6
  if (colourGuessValue.length == 3){
    //if length is 3  extend the number to be standard 6

    //set up variables used in this section
    var stringSingleR, stringSingleG, stringSingleB;
    var stringDoubleR, stringDoubleG, stringDoubleB;

    //split the string into an array of single characters
    colourGuessValue = colourGuessValue.split("");

    //set stringSingle(R G B) into stringDouble(R G B)
    stringDoubleR = colourGuessValue[0] + colourGuessValue[0];
    stringDoubleG = colourGuessValue[1] + colourGuessValue[1];
    stringDoubleB = colourGuessValue[2] + colourGuessValue[2];

    colourGuessValue = stringDoubleR + stringDoubleG + stringDoubleB;
    console.log("3 digit code turned into 6 digit: "+ colourGuessValue);
  }
  else{
    //colourGuessValue is already standard 6 digit.
    //Do nothing
  }


  //convert String to hexadecimal
  colourGuessValue = colourGuessValue.toString();
  console.log("colourGuessValue toString(16): "+colourGuessValue);

//split
  colourGuessValue = colourGuessValue.split("");
  //multiply integers together to get seperate R G B   decimal values
  var RValueRgb;
  var GValueRgb;
  var BValueRgb;

  RValueRgb = parseInt(colourGuessValue[0]+colourGuessValue[1], 16)
  console.log(  "rgbRvalue ="+ RValueRgb);

  GValueRgb = parseInt(colourGuessValue[2]+colourGuessValue[3], 16);
  console.log(  "rgbGvalue ="+ GValueRgb);

  BValueRgb = parseInt(colourGuessValue[4]+colourGuessValue[5], 16);
  console.log(  "rgbBvalue ="+ BValueRgb);

  console.log("rgb("+RValueRgb+", "+GValueRgb+", "+BValueRgb+") of colourGuessValue");


}
