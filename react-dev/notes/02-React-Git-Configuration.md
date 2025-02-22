# Git Configuration / NPM / PARCEL

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
- NPM is not just a Node Package Manager; It doesn't have any particular full form of NPM.
- It manages all the packages. How?  
- It serves as a central repository for the largest package manager, where all the essential core npm libraries are hosted. If you want to add any utilities, libraries, or packages, you can use NPM.
- Note: When you create a React app using `create-react-app`, NPM is included by default, so you don't need to configure it separately.

### What is a package?
- A package is a file or directory that is described by a package.json file. A package must contain a package.json file in order to be published to the npm registry. The npm registry contains packages, many of which are also Node modules, or contain Node modules

### Let's integrate npm into our project  
You can initialize it by running the command:  
`npm init` or `npm init -y`

What is the package.json file? → The above command creates a `package.json` file, which contains the basic configuration for NPM but why is this file necessary? Packages are often referred to as dependencies because your project may rely on certain packages. These are called dependencies, and NPM will manage them for you. NPM keeps track of information about these dependencies in the `package.json` file.

### Let's start installing dependencies / Let's install bundler (PARCEL)
- What is bundler? 
- What is parcel?
- What is webpack?
   A bundler is a tool that combines and optimizes project files for production. Tools like Parcel and Webpack bundle your code by performing tasks such as minification, compression, and cleaning up the code, ensuring that your project is production-ready. *Bundler is the most important package in our project.*

   Note: When initializing a React application with create-react-app, it uses the webpack bundler and Babel. However, in our project, we prefer using the PARCEL bundler due to its many powerful features. Install it using npm like following: 
   `npm install -D parcel`

### Two ways of installing dependencies
   1. Dev dependency → For development environment
       `npm install -D[--save-dev] dependency_name`
   2. Normal dependency → For both development and production environment

### What is the difference between tilde vs. caret operator in package.json file? 
- https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json
- **Example:** `"parcel": "^2.13.3"`
- Tilde → upgrade the dependency to major version
- Caret → upgrade the dependency to minor version but it always recommended to upgrade to minor version. Read, why?

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
   node_modules can be re-generated by running `npm install` if both the package.json and package-lock.json files are available. There's no need to push them to the Git repository.

## PART - 2

1. What is the difference between `npm and npx`

### Why CDN links are not the recommended approach
- CDN links are not ideal for working with React because they are typically imported using script tags with a `src` attribute, which points to a URL. This results in a separate network call to fetch the required code for the project, making it costly and inefficient. Instead, the code can be easily accessed through NPM in the `node_modules` folder, avoiding the need for extra network requests.

- Additionally, when the version of React changes, you would need to manually update the URL. With NPM, however, it handles version management automatically during installation or upgrades.

- Let's integrate react and react-dom using NPM

### Why parcel?
- Parcel creates the development build and hosts it on a local server at port 1234.
- Parcel Features → https://parceljs.org/
   - Zero Configuration → which makes beginner-friendly
   - npx parcel index.html (dev build)
   - host it on a local server
   - Hot Module Replacement (automatically refreshes the page) → Parcel uses File Watching Algorithm  (written in C++)
   - Image Optimization
   - Fast Bundling with support for caching and multi-core processing (try to save file and check terminal)
      **Bundling refers to the process of combining all the files into a single compressed file after minification, compression, and other optimizations. While the size of the resulting file may be larger, bundling is still necessary. This is because, in a project with 100 files, it's inefficient to load each file individually. Instead, loading smaller bundles of these files is more efficient, a technique known as code splitting. This process improves performance by reducing the number of requests made for each file.**
   - Minification
   - Compression
   - Content Hashing
   - Code Splitting / Chunking / Dynamic Bundling OR Import / Lazy Loading - Logical separation of codes [on-demand loading]
   - Differential Bundling → Browsers compatibility
   - Diagnostic Features → Error Handling Features
   - HTTPS
   - Tree Shaking → Process of eliminating unused code during build process → leads to fatser load times and better performance 

**How to create a production build using Parcel?**
- Run the command npx parcel build index.html. However, you may encounter an error if the App.js entry point specified in the package.json file conflicts with the entry point used by npm and Parcel. To resolve this, remove the entry point from the package.json and then run the command again.

- Afterwards, the production build will be generated in the dist folder, where you'll find the production-ready code.

Workflow:
- **Local Environment** → Git Repository  
- **Git Repository** → Server  

Once on the server, it fetches all the required code from the Git repository and runs necessary commands such as:  
- `npm init` → Initializes both `package.json` and `package-lock.json`  
- `npm install` → Installs all the required dependencies  
- `npx parcel build index.html` → Builds the project for production  

This is why certain files and folders are not pushed to Git, as specified in the `.gitignore` file.

Additionally, we have seen the concept of browserslist → https://browserslist.dev/

**Differential Bundling**
It is a technique that creates different bundles for modern and older browsers to optimize performance and compatibility. It essentially allows you to deliver separate JavaScript bundles based on the capabilities of the user's browser.

- **For modern browsers**: Parcel creates a bundle that uses the latest JavaScript features, such as ES6+ syntax and modules, that these browsers can handle natively.
  
- **For older browsers**: It creates a separate bundle with polyfills and transpiled code (using tools like Babel) to ensure compatibility with older browser versions that don't support modern JavaScript features.

By using differential bundling, Parcel ensures that users with modern browsers get smaller, faster bundles without unnecessary polyfills or transformations, while still supporting older browsers with the appropriate fallbacks.

This technique improves load times and overall performance by serving optimized code for different browser environments.