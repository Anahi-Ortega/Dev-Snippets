# Express Basic API
### In this Repo
I'm going to provide a brief introduction into API's and Express. I provide a guide on 
### What is an API?
API - Application Programming Interface, is a 
### What is Express?
Express - 
## Instructions
### Prerequisites
Visual Studio (VS) Code installed on your local machine  
Install Node Version Manager (NVM)  
Install Nodemon  
Configure port forwarding  
Windows:  
Mac:  
Linux:  
Helpful Tools
https://www.jwt.io/

## How to install dependencies
Download the respective installer from the official website  
Run the .exe file and follow the prompts  
Check the box "Add to PATH" during installatoin so you can open folders by typing code in your terminal  
On Mac open the zip and drag the VS Code app into your applications folder  

### Windows
Go to the nvm-windows-release page  
Download `nvm-setup.exe` and run the installer  
Verify in PowerShell or Command Prompt `nvm version`  

### Mac
Open Terminal  
Create the ~/.zshrc file: `touch ~/.zshrc`  
Install using the curl script: 
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash`
If you get an error because you are missing required tools, you may need to install the XCode Command Line Developer tools: `xcode-select -- install` then rerun the install script  
Restart terminal and verify: `nvm --version`

### Both OS
`nvm install --lts`  
`nvm use --lts`  
`node -v`  

`npm install -g --nodemon`  
Run `nodemon server.js`

VS Code port forwarding via Github

### How to create the project
Visit the quick reference guide to Git and GitHub  
Or follow the instruction below to create the project without git
### How to test it
In the terminal run nodemon index.mjs  
In a browser open http://localhost:3000/ 
### Where to go next
The routing in the section

