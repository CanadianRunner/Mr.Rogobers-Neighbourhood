# _Mr.Roboger's Neighbourhood_

#### By _**Sean Keane**_

#### Mr.Roboger's Neighbourhood - Epicodus Code Review 4/23/2022

## Technologies Used

* HTML
* CSS
* Markdown
* JavaScript/jQuery

## Description
_This is a project I created at Epicodus that takes a number from a user in a text box.  It returns a range of numbers from 0 to the inputted number.  There are exceptions for when the user inputs a number containing 1, 2, or 3.  This project helped develop my understanding of Arrays and Looping within JavaScript.   This is project represents six weeks of study at Epicodus (with no previous development experience) and my attempt to navigate HTML, CSS, Markdown, JavaScript/jQuery and Github._

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the now installed directory.
* Open the file "index.html" in your browser.

## Project can be found at:
https://github.com/CanadianRunner/Mr.-Roboger-s-Neighborhood.git

## Known Bugs

* Any integar inputted below -1 will cause a RangeError.
* GitHub-pages doesn't appear to be loading the video background.  This error will make the branch appear broken as the CSS is outputting white text on a white background.  Please download the repo as per the setup instructions.

## Tests

```
 Test One: "If the number 0 is inputted, the array will return '0."
Code: userInput(0);
Expected Output: "0" 
```
```
Test Two: "If the number 1 is inputted, the array will return  'Beep!."
Code: userInput(1);
Expected Output: "0", "Beep!"
```
```
Test Three: "If the number 2 is inputted, the array will return 'Beep, Boop!"
Code: userInput(2);
Expected Output: "0", "Beep!", "Boop!"
```
```
Test Four: "If the number 3 is inputted, the array will return 'Won't you be my neighbour?'"
Code: userInput(3);
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbour?'
```
```
Test Five: "It will return a list of values (numbers and strings previously tested). 
Code: userInput(10);
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbour?', 4, 5, 6, 7, 8, 9, 'Beep!'
```


## License

_If you have any questions or concerns feel free to contact me at seankeane93@gmail.com. Video Background by Matthias Groeneveld from Pexels.com: 
https://www.pexels.com/video/playing-a-vinyl-record-on-a-spinning-turntable-2984380/_





Copyright (c) 4-23-2022 Sean Keane