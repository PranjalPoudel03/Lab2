# Required Features

[x] The user can enter their guess into an input box before seeing the flipside of the card
        Application features a clearly labeled input box with a submit button where users can type in a guess
        Clicking on the submit button with an incorrect answer shows visual feedback that it is wrong
        Clicking on the submit button with a correct answer shows visual feedback that it is correct

[x] The user can navigate through an ordered list of cardss
        A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
        A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
        Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

## Additional Features

[x]  Users can use a shuffle button to randomize the order of the cards
        Cards should remain in the same sequence (NOT randomized) unless the shuffle button is clicked
        Cards should change to a random sequence once the shuffle button is clicked

[x]  A user’s answer may be counted as correct even when it is slightly different from the target answer
        Answers are considered correct even if they only partially match the answer on the card
        Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
        
[x] A counter displays the user’s current and longest streak of correct responses
        The current counter increments when a user guesses an answer correctly
        The current counter resets to 0 when a user guesses an answer incorrectly
        A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter