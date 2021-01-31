const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter((f) => f.test.toString() !== "/\\.css$/");
    config.module.rules.push({
      test: /\.css$/i,
      exclude: /node_modules/,
      include: path.resolve(__dirname, "../"),
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        icons: path.resolve(__dirname, "../src/icons"),
      },
    };
    return config;
  },
};
