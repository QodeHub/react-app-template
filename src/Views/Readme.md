Every parent components have must be in the view.

If there are different sections of the app, say `authentication` and `dashboard`, directories have to be created. The directory naming should be very clear, say `auth` and `dashoard`.

Each directory must have a root component. If there are sub routes for that component, a directory much be created that corresponds with the name of the component and all sub component must be in the directory. The root component of that directory must handle all the routing.

If there are general component for just one component directory, create a component directory in the directory that is accessible by the components in that directory.

Example

```
.
├── Home
│   ├── Components
│   │   └── index.js
│   └── index.js
├── Home.js
```

`Home.js` is the root component for all routes in home, eg home, home/one, home/two, home/qodehub.

All sub routes have to be in the Home directory eg `Home > index.js`, `Home > One.js`, `Home > Two.js`, `Home > Qodehub.js` etc...

All global components that are scoped to Home should be the `Home > Components` directory. Let's say a component called `Intro` will be `Home > Components > Intro.js`
