HexColour-Code-Game
===================

##Introduction
###What?
A Hexadecimal color code game:
Where the user has to input the Hexadecimal code they think the background colour is and will get scored on how accurate they are.

###Why?
To help users become more familiar with hexadecimal colour codes.


##Progress
###Stage 1: 
User types in a hexadecimal colour code and the whole page turns to that colour if it's a valid colour.
###Stage 2: 
Random colour is given on button click (player's guess entry). Hexadecimal code is switched to rgb colour. Add in scoring system (Finding difference of the two colours and averaging the R G & B values. Per round 0 is lowest score you could get 255 is the highest.)

Scoring compares each colour seperatly.
You can get a medium score even in your colour doesn't look close.
  Example1:    random colour FF0000
               user guess    000000
              
              The user got 4 out of 6 digits correct and would score 170 points.

  Example2:    random colour FF0000
               user guess    FFFFFF
              
              The user got 2 out of 6 digits correct and would score 85 points.
