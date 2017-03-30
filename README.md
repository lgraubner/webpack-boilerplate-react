# Webpack boilerplate for React projects

Basic Webpack boilerplate for [React](https://facebook.github.io/react/) projects. The following features are included:

- [Flow](https://flow.org/) for type checking
- [Jest](https://facebook.github.io/jest/) for testing
- [ESLint](http://eslint.org/) for linting
- [Prettier](https://github.com/prettier/prettier) for consistent formatting
- [CSS Modules](https://github.com/css-modules/postcss-modules) with [autoprefixing](https://github.com/postcss/autoprefixer)
- [ES Stage 0](https://babeljs.io/docs/plugins/preset-stage-0/) support
- Hot module reloading

Beside React there are no opinionated frontend libraries such as Redux, React Router etc. Install them by your own.

## Usage

```Bash
# clone project
git clone https://github.com/lgraubner/webpack-boilerplate-react.git
cd webpack-boilerplate-react

# initialize new git workspace
rm -rf .git
git init

# install npm dependencies
yarn install

# start development server
yarn dev
```

To create a production bundle run `yarn build` which will generate the files in the `dist` folder. Serve them with nginx or any other appropriate Server.

To test your application run `yarn run lint` and `yarn run flow`.
