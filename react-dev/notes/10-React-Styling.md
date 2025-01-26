## All about Tailwind CSS with React Application

### CSS Libraries / Frameworks
- Styled Components
- Material UI
- Ant Design
- Chakra UI
- Bootstrap / Tailwind CSS

### Tailwind CSS Setup - especially with parcel

**source:** https://tailwindcss.com/docs/installation/framework-guides/parcel
- npm install tailwindcss 
- npm install postcss
- Edit your setting.json in vs code to get auto-suggestion of tailwincss classes after installing Tailwind CSS intellisense
{
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}

VS Code Extension: Tailwind CSS Intellisense

### Important Questions
1. What is postcss dependency?

Advantages of tailwindcss
- Tailwind is lightweight because if you use a utility like mt-4 in multiple places, it will only be included once in your bundled CSS file. The utility will then be applied wherever it’s needed throughout your project.
- Dark mode UI Design

Disadvantages
- Initial learning curve
- code becomes ugly while including so many classes for a particular html tag



1. **Utility-First Approach**
  - Tailwind is based on utility classes, which means you can apply styles directly in your HTML. This can significantly speed up development since you don't need to constantly switch between your HTML and CSS files.

2. **Easy Customization**
  - Tailwind provides a configuration file (`tailwind.config.js`) where you can customize themes, colors, breakpoints, spacing, and more.

3. **Responsive Design**
  - Tailwind is designed with responsiveness in mind, and it includes responsive utility classes out-of-the-box, so you can quickly design for different screen sizes. [Easy breakpoints available]

4. **Better Maintainability**: 
  - Tailwind encourages component-based design, which results in fewer lines of custom CSS and easier maintenance.

5. **Rapid Development**: 
  - Because of its utility-first approach, you can quickly build out prototypes without needing to spend time writing stylesheets from scratch.

6. **Large Ecosystem and Community**

7. **Performance Optimization**
   - **Tree Shaking**: With Tailwind's purge mechanism (which removes unused styles in production), you get minimal CSS in your final build, resulting in smaller file sizes and faster loading times