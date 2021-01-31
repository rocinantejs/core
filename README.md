# Rocinante - React Component Library

### Storybook Static Page

You can view the storybook page here:

- [Storybook Page](todo)

# Usage

## Importing to your React application


## Required peer dependencies

Each UI Kit package comes with some required [peer dependencies](https://docs.npmjs.com/files/package.json#peerdependencies) to be installed by the consumer.

Make sure to have the related peer dependencies installed and matched the specified version.

The required peer dependencies include `react`, `react-dom`

# Component Development
## Getting Started

This project is created with React and Storybook.

Install dependencies:

`yarn install`

Run Storybook:

`yarn storybook`

To run tests:

`yarn test`
`yarn test:coverage`

To manually publish the library:

`yarn publish`

## Local development alongside another React app

While developing components you may wish to view them inside another React application to check your changes.

To avoid publishing to npm and re-installing each time, recommend to use [yalc](https://github.com/wclr/yalc) to link to a local package.  (This method is preferred over yarn link due to conflicts with multiple react versions.)

Install the yalc package with `yarn global add yalc`

To link to your local package in another folder:

Navigate to the rocinante/core folder and run `yalc publish`

You should see a message that it is successfully registered the `@rocinante/core` package.

Navigate to your React application folder and run `yalc link @rocinante/core`.  This will create a symlink in your node_modules to the local package.  You should be able to import components as if you had installed the package from npm.

To unlink, run `yalc installations remove @rocinante/core` removes the published package.
`yalc unlink @rocinante/core` in your React app.

