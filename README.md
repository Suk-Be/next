# This is a starter template for a react framework next.js
The frame has its strength in an organized project structure and developer convenience (zero config better than fb cra) for developing single page apps.

strength:
- prerendering data (seo friendly)
- routing
- already though out concepts for dynamic data (routing, rendering, updates)

More on this topic: https://nextjs.org/learn

## Purpose of this project

Experimenting on resuseable patterns on common development issues handling headless content management systems

- routing
	- dynamic 
	- static
- data fetching
	- static
		- async 
		- sync
	- rest
		- async 
		- sync
- handling meta data 
  - meta description
  - title tags
- page structure
	- layout
	- data handling
	- component architecture
- project structure	
	- components
	- data
	- libs
	- page 
	- public
	- styles

## Installing and running this project

### install
get repo. install locally. 
```
npm i
```

### develop
```
npm run dev
```

## Coding Patterns

### consuming data
In a typical **react** way data is passed from top to bottom.

This happens in page components (kind of a root component) with next.js convenience methods like **getStaticProps**. The data is rendered server side and automatically SEO optimized.
```
export async function getStaticProps(){
  const localPosts = getSortedPostsData() // example for a promised based function
  return {
    props: {
      meta,
      localPosts
    }
  }
}
```

### styling
#### Scoped Styling and Module Organisation 
next.js is shipped with a ready to use styling pattern for react components tied/scoped to css components. 

How the components work together can be inspected in the **components** folder (e.g. Layout.js, layout.module.css).
Additionally moduleCSS has a helpful online documentation.

#### Globable Styling
Certain Stylings that can be used global can be found in the **styles** folder 

example coding patterns:
- browser resets
- utils (typograhpy, layout grid)

### Pages
In next.js pages are used to organize components into a set of component architecture that makes individual single pages.
Single pages can be found in the **pages** folder. 

#### index.js 
is the root entry for index.html (www.yourdomain.de). 

#### [filename].js
filenames in this folder lead to http endpoint with the filename: e.g. login.js results in **www.yourdomain.de/login**.

#### [foldername]
foldernames add url segments: e.g. folder **posts/index.js** lead results in a url **www.yourdomain.de/posts**, or folder **posts/login.js** lead results in a url **www.yourdomain.de/posts/login**.

#### _app.js
next.js provides a global entry component in this example **_app.js** is used to import global styling similar to a react context component. It does not have any impact on urls.

### Assets
Static assets can be found in the folder public. **Best practice** would be to store different types of assets in subfolders within this directory, similar to how it is done in the node express framework.

## Prototyping
### Dynamic Routing
Presets for creating dynamic routes is a basic knowlegdge of state management concepts.   

A basic example for dynamic routing can be found in folder **pages/router/index.js**. next.js offers a custom useEffect named useRouter. The pattern used in this experiment can be found here https://codeburst.io/next-js-tutorial-static-and-dynamic-routing-fba70e26359a  

http://localhost:3000/router

More on that topic: https://nextjs.org/docs/routing/dynamic-routes

### State Management concepts (with Hooks)
##### Preset state management
can be done by Class Components or Functional Components using hooks.

I prefer functional components over class components because they need less code surface to be stateful.

Quote: Just use hooks useState instead of states and setState and use Effect instead of lifecycle methods.
https://medium.com/weekly-webtips/react-hooks-for-beginners-sweet-and-a-little-complex-31a1225bd2f7
https://javascript.plainenglish.io/react-hooks-how-to-use-useeffect-ecea3e90d84f

##### basic useState example
useState in functional components can be used 

in the same manner as

state and setState in React Class Components.

A basic useState example can be found in folder **pages/hooks/exampleUseState.js**

http://localhost:3000/hooks/exampleUseState

##### custom useState example
can be found in folder **pages/hooks/hook.js. 

useState (or a custom useState) can be used by any functional component, in our example the hook is used by counter.js
http://localhost:3000/hooks/customUseState

##### basic useEffect example
useEffect will be called every time something affects your component  

which means basically

componentDidMount and componentDidUpdate.

The hook useEffect can be used for component life-cycle purposes.

A basic useState example can be found in folder **pages/hooks/exampleUseEffect.js**

http://localhost:3000/hooks/exampleUseEffect

##### custom useEffect example
A complex boilerplate example for fetching data and rendering a component. 
The components manages 4 states. More information for this boilerplate concept: https://nimblewebdeveloper.com/blog/custom-react-hooks-data-fetching

The concept is revised in a es6 module architecture and woven into a page layout with an already server-side fetched data.
**pages/hooks/customUseEffect/index.js**

The boilerplate fetches data on the client-side on button click: **pages/hooks/customUseEffect/boilerplate.js**

http://localhost:3000/hooks/customUseEffect

### API
Next.js offers a simple way to provide api routes. Basically it is the same routing pattern used for rendering pages (static and dynamically).
A basic example for api routing can be found in folder **pages/api**.

Some interesting response helper are can be used
- ```res.status(code) // res.status(200)```
- ```res.json(json)```
  Request methods can be used too
- ```req.method(code) // req.method(POST)```

A basic example for handling http requests and response can be found in **pages/api/hepler.js**.

http://localhost:3000/api/hello

More on that topic: https://nextjs.org/docs/api-routes/introduction, https://nextjs.org/docs/api-routes/response-helpers

