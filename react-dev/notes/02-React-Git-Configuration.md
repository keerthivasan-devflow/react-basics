# Git Configuration / NPM / PARCEL Library

## PART - 1
### Git Configuration
We have pushed all our code to the Git repository by following these steps:

1. Create a GitHub account and log in.
2. Create a new remote repository for your React project (you can create as many repositories as you need).
3. Run the following to make your project folder as local git repository
   - `git init`
4. By default, Git will point to the master branch. Create a new development branch and switch to it
   - `git checkout -b react-dev` (OR) `git branch react-dev` and `git checkout react-dev`
5. Add all your files to Git
   - `git add .`
6. Add a commit message 
   - Note: documentation for what was altered, added, or fixed in the code at that point in the project’s history.
   - `git commit -m "commit message"`
7. Link your local Git repository to the remote repository
   - `git remote add origin "your git repo HTTPS URL"`
8. Push your code to the remote repository
   - `git push origin react-dev`

### What is Node Package Manager (NPM)?
- https://github.com/npm/npm-expansions
- NPM is not just a Node Package Manager; It doesn't have any  particular full form
- It manages all the packages. How?  
- It serves as a central repository for the largest package manager, where all the essential core npm libraries are hosted. If you want to add any utilities, libraries, or packages, you can use NPM.
- Note: When you create a React app using `create-react-app`, NPM is included by default, so you don't need to configure it separately.

### Let's integrate npm into our project  
You can initialize it by running the command:  
`npm init` or `npm init -y`

**What is the package.json file?** The above command creates a `package.json` file, which contains the basic configuration for NPM but why is this file necessary? Packages are often referred to as dependencies because your project may rely on certain packages. These are called dependencies, and NPM will manage them for you. NPM keeps track of information about these dependencies in the `package.json` file.

### Let's start installing dependencies / Let's install bundler (PARCEL)
**Anything you like to:**
- What is bundler? 
- What is parcel?
- What is webpack?
   A bundler is a tool that combines and optimizes project files for production. Tools like Parcel and Webpack bundle your code by performing tasks such as minification, compression, and cleaning up the code, ensuring that your project is production-ready. *Bundler is the most important package in our project.*

Note: When initializing a React application with create-react-app, it uses the webpack bundler and Babel. However, in our project, we prefer using the PARCEL bundler due to its many powerful features. Install it using npm like following: 
`npm install -D parcel`

### Two ways of installing dependencies
   1. Dev dependency: For development environment
       `npm install -D[--save-dev] dependency_name`
   2. Normal dependency: For both development and production environment

### What is the difference between tilde vs. caret operator in package.json file? 
https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json
- **Example:** `"parcel": "^2.13.3"`
- Tilde - upgrade the dependency to major version
- Caret - upgrade the dependency to minor version but it always recommended to upgrade to minor version. Read, why?

### Version numbers in detail
Typically represented with three digits: major, minor, and patch.

**Patch version (e.g., 4.19.2 → 4.19.3)** indicates a small change or bug fix. Upgrading to a new patch version is generally safe as it does not introduce breaking changes, so you can safely update your project.

**Minor version (e.g., 4.19.2 → 4.20.3)** represents the addition of new features that are backward-compatible with previous versions. Upgrading to a new minor version is also considered safe for your project, as it doesn't break existing functionality.

**Major version (e.g., 4.19.2 → 5.20.3)** introduces changes that may break backward compatibility, meaning it could potentially break your existing code. Updating to a new major version may require code changes in your project.

- If you specify a version without any symbol before it in your package.json, the project will always use that specific version and will not automatically update to newer versions.

- If you use the ^ (caret) symbol before a version, it allows your project to automatically update to the latest compatible version within the same major version range. The package-lock.json file will still lock the exact version of the package used, ensuring consistency across installations.

### What is package-lock.json file?
Both the package.json and package-lock.json files should be pushed to the Git repository.
- `package.json:` Specifies approximate versions of dependencies.
- `package-lock.json:` Records the exact versions of dependencies.

1. What is the integrity property in parcel within the package-lock.json file?
   The integrity property ensures that the development and production environments use the same version of a package, solving version discrepancies.

2. Why don't we need to push the node_modules folder into the Git repo?
   Since the package.json and package-lock.json files are already available, we can regenerate the node_modules folder by running the command: npm install.

3. what is .gitignore file?
4. What are transitive dependencies in package.json?

5. How many package.json files are typically found in a single project?
   Each dependency will have its own package.json.

6. Should the node_modules folder be pushed to a remote repository? What happens if it gets deleted accidentally?

## PART - 2
### Why CDN links are not the recommended approach
- CDN links are not ideal for working with React because they are typically imported using script tags with a `src` attribute, which points to a URL. This results in a separate network call to fetch the required code for the project, making it costly and inefficient. Instead, the code can be easily accessed through NPM in the `node_modules` folder, avoiding the need for extra network requests.

- Additionally, when the version of React changes, you would need to manually update the URL. With NPM, however, it handles version management automatically during installation or upgrades.

### Why parcel?
Parcel Features - https://parceljs.org/
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

### How to create a production build using Parcel?
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