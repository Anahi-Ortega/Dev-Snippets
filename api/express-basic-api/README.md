# Express Basic API

### In this Repo
This repo is a brief, hands-on introduction to APIs and Express. It walks through setting up your local environment, creating a minimal Express server, and running it so you can start building and testing your own routes.

### What is an API?
API stands for **Application Programming Interface**. It's a defined set of rules that lets one piece of software talk to another — for example, letting a web browser request data from a server, or letting one app pull information from a third-party service. In web development, an API typically exposes a set of **endpoints** (URLs) that accept requests (like `GET`, `POST`, `PUT`, `DELETE`) and return responses, usually in JSON format.

### What is Express?
Express is a minimal, unopinionated web framework for **Node.js**. It makes it much easier to build APIs and web servers in JavaScript by handling the repetitive, low-level parts of HTTP — like routing, request parsing, and middleware — so you can focus on your application's logic. It's one of the most widely used backend frameworks in the Node.js ecosystem.

## Instructions

### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/) installed on your local machine
- [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) installed
- [Nodemon](https://www.npmjs.com/package/nodemon) installed
- Port forwarding configured in VS Code (so you can preview your running server)

#### Helpful Tools
- [jwt.io](https://www.jwt.io/) — useful for decoding and debugging JSON Web Tokens if your API uses authentication

## How to Install VS Code
1. Download the installer for your OS from the [official VS Code website](https://code.visualstudio.com/).
2. **Windows:** Run the `.exe` file and follow the prompts. Be sure to check **"Add to PATH"** during installation — this lets you open folders by typing `code .` in your terminal.
3. **Mac:** Open the downloaded `.zip` file and drag the VS Code app into your Applications folder.
4. **Linux:** Download the `.deb` (Debian/Ubuntu) or `.rpm` (Fedora/RHEL) package from the website and install it with your package manager, e.g.:
   ```bash
   sudo apt install ./code_<version>_amd64.deb
   ```

## How to Install NVM

### Windows
1. Go to the [nvm-windows releases page](https://github.com/coreybutler/nvm-windows/releases).
2. Download `nvm-setup.exe` and run the installer.
3. Verify the install in PowerShell or Command Prompt:
   ```bash
   nvm version
   ```

### Mac
1. Open Terminal.
2. Create the `~/.zshrc` file if it doesn't already exist:
   ```bash
   touch ~/.zshrc
   ```
3. Install NVM using the official curl script:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
   ```
4. If you get an error about missing build tools, install the Xcode Command Line Developer Tools and re-run the install script:
   ```bash
   xcode-select --install
   ```
5. Restart your terminal and verify the install:
   ```bash
   nvm --version
   ```

### Linux
1. Open your terminal.
2. Install NVM using the official curl script:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
   ```
3. Restart your terminal (or run `source ~/.bashrc` / `source ~/.zshrc`) and verify:
   ```bash
   nvm --version
   ```

### All Operating Systems
Once NVM is installed, use it to install and select a Node.js version:
```bash
nvm install --lts
nvm use --lts
node -v
```

Then install Nodemon globally:
```bash
npm install -g nodemon
```

Nodemon automatically restarts your server whenever it detects a file change, so you don't have to manually stop and restart it during development. You'll use it to run the server later in this guide.

## Port Forwarding in VS Code
When your Express server is running locally (e.g. on `http://localhost:3000`), VS Code's built-in **Ports** panel lets you forward that port so it's accessible via a shareable URL — useful if you're working in Codespaces, a remote container, or want to preview your API from another device.

1. In VS Code, open the integrated terminal and start your server.
2. Open the **Ports** tab (next to Terminal/Debug Console).
3. Click **Forward a Port** and enter your server's port (e.g. `3000`).
4. VS Code will generate a forwarded URL — click the globe icon to open it in your browser.

This works the same way across Windows, Mac, and Linux, since it's a VS Code feature rather than an OS-level one.

## How to Create the Project
You can set this project up with or without Git.

**With Git/GitHub:** see the quick reference guide to Git and GitHub *(link to be added)*.

**Without Git**, follow these steps:
1. Create a new project folder and open it in VS Code:
   ```bash
   mkdir express-basic-api
   cd express-basic-api
   code .
   ```
2. Initialize the project:
   ```bash
   npm init -y
   ```
3. Install Express:
   ```bash
   npm install express
   ```
4. Create an entry file named `index.mjs` in the project root with a minimal server:
   ```js
   import express from "express";
   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
     res.send("Hello, Express!");
   });

   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });
   ```
   > Using the `.mjs` extension (or setting `"type": "module"` in `package.json`) enables ES module `import` syntax, as used above.

## How to Test It
1. In the terminal, run:
   ```bash
   nodemon index.mjs
   ```
2. Open your browser to:
   ```
   http://localhost:3000/
   ```
   You should see `Hello, Express!` displayed on the page.

## Where to Go Next
Now that your basic server is running, the next step is **routing** — defining additional endpoints (like `/users` or `/api/items`) that handle different HTTP methods and return different data. *(See the routing section for details.)*