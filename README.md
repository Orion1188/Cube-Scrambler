# Cube Scrambler

A web app for speedcubers that generates scrambles to some popular twisty puzzles.

## What is a scramble

Scramble is an algorithm that tells you how you should turn the cube to get the specific combination. It makes sure that everyone who scrambles the cube gets the same combination and prevents competitors from getting an unfair advantage, for example trying to force an easy solution. Scrambles use different letters depending on the cube type. For example a 3x3 uses 6 letters: \
U - up \
D - down \
F - front \
B - back \
R - right \
L - left \
Each move can have an additional character like an apostrophe or number 2. Apostrophe means that the side is supposed to be rotated counterclockwise and a 2 means a 180 degrees turn. Letters without the special character are the standard clockwise turns.

## How does it work?
1. Choose the cube type you want to get the scrambles for. Currently the are 3 cubes available: 2x2, 3x3 and skewb.
2. Input the number of scrambles you want the program to generate.
3. Click "Generate scrambles"

## How are the scrambles generated?

Generating valid scrambles is not only about getting random letters printed on the screen.

### Move repetition

For each cube type the program provides scrambles that exclude move repetition which means that you don't have to worry about getting a scramble including two moves with the same face in a row.
Scrambles for 2x2 and skewb are quite simple as move repetition is the only issue that needs to be dealt with. 

### Parallel moves

In case of 3x3 there is a chance of getting a series of moves that are parallel, for example: U D U'.
In this example U and D are valid moves but the U' cancels the first move which means that it is not a legit scramble. In order to fix this problem after two parallel moves have been chosen the program makes sure that the third move is neither of the two previous moves which presents cancelling or repetition from happening.
