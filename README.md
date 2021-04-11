# Rocinante

Named after the best ship in the galaxy (and beyond the ring), Rocinante is a small and sleek dark mode focused UI library with big guns 💪.

Inspired by: https://cdn.dribbble.com/users/757239/screenshots/5666916/dashboard_-_present_2x.png

## Development

### Testing

```
yarn test
```

### Building

```
yarn build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
yarn storybook
```

### Generating New Components

```
yarn generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!
