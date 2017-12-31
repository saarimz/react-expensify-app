# React Test

## How to set up your computer

1. Install Node and NPM
2. Install Yarn globally using `npm install -g yarn`

## How to run the project

1. `yarn install` to install all dependencies using yarn.lock file
2. In terminal run `yarn run serve`
3. In terminal run `yarn run build`

## How to create a React project from scratch using Webpack and Babel

1. Create folders `public` and `src` in root
2. Add `index.html` to public folder
3. Run `$ yarn init` to create package.json file in root dir.
4. Use `yarn add --dev webpack babel-core babel-loader babel-preset-react babel-preset-env` to install dev dependencies.
5. Use `yarn add react react-dom live-server babel-plugin-transform-class-properties` to install dependencies.
5. In package.json add a `scripts` property to the main object and add the terminal commands serve `"serve": "live-server public/"` and `"build": "webpack --watch"` as the value
6. Create a `webpack.config.js` file in the root directory of the project.
7. Create a `.babelrc` JSON file in the root directory of the project
8. Add `"presets" : ["env","react"]` and `"plugins": ["transform-class-properties"]` in an empty object to .babelrc file.
8. In webpack.config.js add the following:

```
const path = require('path')

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public')
    }
};
```

This adds the entry point for the file, the output and the babel-loader. 

9. `import React from 'react'` and `import ReactDOM from 'react-dom'` in app.js and all relevant components and code away.

10. Build using webpack -- `$ yarn run build`

11. In a separate window run `$ yarn run serve` to serve the project.

