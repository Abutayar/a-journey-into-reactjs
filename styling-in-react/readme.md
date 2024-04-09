# 💻🎨 Styling with React

## Creating and Import CSS File 📄
- You can create CSS single file for whole app and import in index.js(x) file 
    - Eg: `index.css` file is imported in `index.js` file
- or you can create separate CSS file and import them in there respected component
    - Eg: `Header.css` which is imported in `Header.js` file
- both will be added to `index.html` at the build time.


## Vanilla CSS: Advantages & Disadvantages

| 👍 Advantage | 👎 Disadvantages |
|-----------|---------------|
|CSS code is decoupled from JSX code|You need to know CSS|
|You write CSS code as you (maybe) know and (maybe) love it|CSS code is not scoped to components → CSS rules may clash across components (e.g., same CSS class name used in different components for different purposes)|
|CSS code can be written by another developer who needs only a minimal amount of access to your JSX code| |


## Inline Style
- You can using style attribute but you need to pass value as object not as string
    - Eg: `<p style={{color:'red'}}>Hello World</p>`
    
### Inline Styles: Advantages & Disadvantages
| 👍 Advantage | 👎 Disadvantages |
|-----------|---------------|
|Quick & easy to add to JSX|You need to know CSS|
|Styles only affect the element to which you add them|You need to style every element individually|
|You need to style every element individually|No separation between CSS & JSX code|

## Scoped CSS

### CSS Module
- one way is to create a css file with `.module.css` extension and use in you js(x) file by importing as object
    - Eg `import classes from 'Header.module.css'`
    - this will give us object with all the classes which that we can use as value for ClassName
        - Eg: `<p className{classes.para}>Hello World</p>`
    - Now build tool will take care of creating classes which are scope to that components using unique className

### Advantages & Disadvantages
| 👍 Advantage | 👎 Disadvantages |
|-----------|---------------|
|CSS code is decoupled from JSX code|You need to know CSS|
|You write CSS code as you (maybe) know and (maybe) love it| You may end up with many relatively small CSS files in your project|
|CSS code can be written by another developer who needs only a minimal amount of access to your JSX code||
|CSS classes are scoped to the component (files) which import them→ No CSS class name clashes||

## Styling using Third Party Package

### Package: [styled-components](https://styled-components.com/)

- install using `npm install styled-components`
- You can now import by `import { styled } from 'styled-components';`
- `styled` is a object that contains all the element
-  Eg:  `styled.div`
- now by using [text - tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) we can pass our style which will return a new react component which we can use as any other react components
- by using this css style will be manage by this package itself
- as show in `AuthInputs.js`
- Note: when you create component like this it pass all the attribute added to that react component to underlying html element
    - Eg: `<Label className={emailNotValid ? 'invalid' : ''}>Email</Label>`
    - so `Label` is react component it has attribute className which will be passed to underlying `label` html element
    - sidenote: 
        - `Label` is a variable which contain react component
        - In react component can be passed as values
- You can conditional css using template literal by passing function
    - Eg - `color: ${({ $invalid }) => $invalid ? '#f87171' : '#6b7280'};`
- Also to avoid any name clash with html attribute it is preferable to prefix attribute with '$' if you are only using it for styling
- you don't always need to create a new component to style but you can create parent component and style child components based on parent as showned in `Header.js`

### Advantages & Disadvantages
| 👍 Advantage | 👎 Disadvantages |
|-----------|---------------|
|Quick & easy to add |You need to know CSS|
|You continue "thinking in React" (→ configurable style functions)|No clear separation of React & CSS code|
|Styles are scoped to components → No CSS rule clashes|You end up with many relatively small "wrapper" components|


