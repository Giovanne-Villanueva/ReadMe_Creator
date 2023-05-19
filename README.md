# ReadMe Creator

![license](https://img.shields.io/badge/license-MIT-green)

## Description
I have been slow when it comes to building a readme file for projects. I spend too much time adding each of the different sections, badges, and any other links for the readme file. This need to decrease the time to build the readme file has led me to building a readme creator. The readme creator should be able to make all the different sections needed in a readme. Then based on data passed to the project it will add more content to each section. The readme should be pretty much completed except for the insertion of any images you may need to include. While working on this project I got to learn more about nodejs, exporting javascript files, inquirer library, and switch statements. I have not used nodejs befor this, so I had to install it and read documentation on it. Nodejs is a tool to run projects instead of having to run the project in the web browser. Reading about nodejs has lead us to this file system library included with nodejs. The file system that nodejs has was used to create our readme file. Also I was introduced to this concept of modularization. In modularization we are making the main javascript smaller by making a file with either functions or variables that we can use in the main program. Inquirer is a library installed to help us prompt users in the command terminal with a varity of different ways. Inquirer could wait for text input, Yes or no option, multiple choice quiz format, or more options. I used switch statments in my javascript code. This project had just the right use case for statement which I beleve helped in simplifing my code instead of an if else statement. In the end I made project that makes a readme file, but impovements could be made in the way I prompt users for data.

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[Badges](#badges)

[Tests](#tests)

[Questions](#questions)


## Installation

Now to run this project you will need to install nodejs. I will include the link to get nodejs below. When downloading nodejs just make sure you get the proper version for your device. 
 
Nodejs Installation Link: https://nodejs.org/en/download 


After installing nodejs you will need to install the inquirer library for this project. I should have the correct library in the package.json file, so all you need to do is enter in the following command in you terminal at the project folder location. 
 

    npm install 
 

If the previous command does not work you can use this other command to install inquirer.
 

    npm install inquirer@8.2.4

## Usage

![Inital terminal starting screen for project](./images/inital.PNG)

The image above will show the inital prompt given to users when the project is ran. This project will give users a series of prompts about the current project users are working on. The prompts do not have any data validation, so you can enter nothing and a readme file will still be created with just section titles. Another thing to mention is that if you wanna make a new line I gave the users the ability to do so by typing pound character or some people know as the hash tag character in there text. My program will see the pound character and make a new line. After the prompts are done we make a readme file using a string literal to build it. Once all the data is organized we place the final string literal in a file. When storing information there is a variable called "filename" used to determine the file name for the readme. I just have it set as "testReadME", so everytime you run the program the new file will have this name. If the file name is not changed and we run the project again, then the contents of the file will be replaced by the new data being stored. Make sure to change the filename variable to make different files. 

![Ending terminal screen for project](./images/success.PNG)

The image above is the final prompt given at the very end confirming that a new file was made. The image below is an example of readme created for this project. We just put all the information from the prompts and put them in there respective sections. Then something we added was a badge for the readme file. You can see it near the top of the readme and in the badges section of the readme.

![Created readme file from project top half](./images/readmePT1.PNG)
![Created readme file from project bottom half](./images/readmePT2.PNG)

## Credits

Thank you to nodejs, inquirer, sheildio, spdx, gnu, and apache.
 
 - Nodejs provided the file system used in the project. 
 
 - Inquirer was used for the prompts given to users. 
 
 - Sheild io for providing the badges seen in the readme files created. 
 
 - SPDX, GNU, Apache for providing links to the licenses mentioned in the project. 


## License

The project is covered by the MIT license. Please refer to the repo for more information on the license. The link below we will link users to the template followed to make license.

License Link: https://spdx.org/licenses/MIT.html



## Badges

![license](https://img.shields.io/badge/license-MIT-green)

## Tests

N/A

## Questions

Any questions you may have you can contact me through my email shown below and there is a link to my github account.

Email: gvv8106@gmail.com

GitHub Profile: https://github.com/Giovanne-Villanueva