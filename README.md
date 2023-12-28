This is a Tac-tac-toe game. Two players can play this game. The first player that clicks the circular box gets automatically assigned the 'X' symbol.
The second player gets assigned the '0' symbol.
If either player wins, a win message is displayed on the display box and the game restarts automatically after 5 seconds.
Clicking on the restart button at the buttom of the screen will restart the game.

//logic
Theere are two javascript files uploaded.

The script.js file contains logic for the user playing against the computer. Each div in the  3X3 grid is given indices and stored in an array. Event listener is added to each box.
There are two arrays box-index and blocked-index. blocked index is initially empty and box index stores indices from 0 to 8. 
Whenever a user clicks on any box,'X' is inserted(if that box index is not in the blocked index) and that box index is added to the blocked index and removed from the box-index.
Next, a randomn int y is generated between 0 and the length of the box index. '0' is inserted at div[box[y]].
There are 8 patterns [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8].
Then using 'if' the innerHTML content of the divs at these indices is comapared. if they are equal to 'X' the player wins. If they are equal to '0' the player loses.

The newscript.js file contains logic allowing two users to play. Each div in the  3X3 grid is given indices and stored in an array. Event listener is added to each box.
There is one  array box-index and blocked-index. blocked index is initially empty.
Whenever a user clicks on any box,'X' or '0' is inserted (if that box index is not in the blocked index) and that box index is added to the blocked index.
A counter is used to decide whether the player is 'X' or '0' using the % operator 
There are 8 patterns [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8].
Then using 'if' the innerHTML content of the divs at these indices is comapared. if they are equal to 'X' the player 1 wins. If they are equal to '0' the player 2 wins.
