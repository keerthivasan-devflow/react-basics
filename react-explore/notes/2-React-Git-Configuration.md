# Git Configuration / NPM / PARCEL Library

## PART - 1
## Git Configuration
We have pushed all our code to the Git repository by following these steps:

1. Create a GitHub account and log in.
2. Create a new repository for your React project (you can create as many repositories as you need).
3. Run `git init` to initialize your project folder as a Git repository.
4. By default, Git will point to the master branch. Create a new development branch and switch to it:
   `git checkout -b react-dev`
   `git branch react-dev` and `git checkout react-dev`
5. Add all your files to Git:
   `git add .`
6. Add a commit message that reflects the changes you made:
   `git commit -m "commit message"`
7. Link your local Git repository to the remote repository:
   `git remote add origin "your git repo HTTPS URL"`
8. Push your code to the remote repository:
   `git push origin react-dev`

## What is NPM?  
Source: [https://github.com/npm/npm-expansions]
NPM is not just a Node Package Manager; it manages packages. How?  
It serves as a central repository for the largest package manager, where all the essential core libraries are hosted. If you want to add any utilities, libraries, or packages, you can use NPM.

When you create a React app using `create-react-app`, NPM is included by default, so you don't need to configure it separately.

## Let's integrate npm into our project  
## What is the package.json file?  
You can initialize it by running the command:  
`npm init` or `npm init -y`  

This command creates a `package.json` file, which contains the basic configuration for NPM. But why is this file necessary?  
Packages are often referred to as dependencies because your project may rely on certain packages. These are called dependencies, and NPM will manage them for you. NPM tracks information about these dependencies in the `package.json` file.

## Let's install dependencies
What is bundler? What is parcel? What is webpack? - Why do we need them?
A bundler is a tool that combines and optimizes project files for production. Tools like Parcel and Webpack bundle your code by performing tasks such as minification, compression, and cleaning up the code, ensuring that your project is production-ready.

## There are two types of dependencies can be installed:
    a. Dev dependency: For development environment
       `npm install -D[--save-dev] dependency_name`
    b. Normal dependency: For both development and production environment

## What is the difference between tilde vs. caret operator in package.json file?
 `"parcel": "^2.13.3"`
    Tilde - upgrade the dependency to major version
    Caret - upgrade the dependency to minor version, but it always recommended to upgrade to minor version. Read, why?

## What is package-lock.json file?
Both the package.json and package-lock.json files should be pushed to the Git repository.
- `package.json:` Specifies approximate versions of dependencies.
- `package-lock.json:` Records the exact versions of dependencies.

1. What is the integrity property in parcel within the package-lock.json file?
The integrity property ensures that the development and production environments use the same version of a package, solving version discrepancies.

2. Why don't we need to push the node_modules folder into the Git repo?
Since the package.json and package-lock.json files are already available, we can regenerate the node_modules folder by running the command: npm install.

3. what is .gitignore file?

## PART - 2
## Why CDN Links Are Not the Recommended Approach

CDN links are not ideal for working with React because they are typically imported using script tags with a `src` attribute, which points to a URL. This results in a separate network call to fetch the required code for the project, making it costly and inefficient. Instead, the code can be easily accessed through NPM in the `node_modules` folder, avoiding the need for extra network requests.

Additionally, when the version of React changes, you would need to manually update the URL. With NPM, however, it handles version management automatically during installation or upgrades.

## Why parcel?
## source: https://parceljs.org/
Parcel Features
- Zero Configuration
- npx parcel index.html (dev build)
- host it on a local server
- Hot Module Replacement (automatically refreshes the page) since parcel uses File Watching Algorithm (typically written in C++)
- Gives faster build since it does caching
- Image Optimization
- Bundling
- Minification
- Compression
- Content Hashing
- Code Splitting
- Differential Bundling - Browsers compatibility
- Diagnostic Features - Error Handling Features
- HTTPS
- Tree Shaking - remove unused code

## How to Create a Production Build Using Parcel?

Run the command `npx parcel build index.html`. However, you may encounter an error due to the `App.js` entry point specified in the `package.json` file. To avoid this, remove it and then execute the command again.

Workflow:  
- **Local Environment** → Git Repository  
- **Git Repository** → Server  

Once on the server, it fetches all the required code from the Git repository and runs necessary commands such as:  
- `npm init` – Initializes both `package.json` and `package-lock.json`  
- `npm install` – Installs all the required dependencies  
- `npx parcel build index.html` – Builds the project for production  

This is why certain files and folders are not pushed to Git, as specified in the `.gitignore` file.

Additionally, we have seen the concept of browserslist.