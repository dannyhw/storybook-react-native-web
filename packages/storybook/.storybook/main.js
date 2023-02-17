module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-react-native-web",
  ],
  
  "framework": "@storybook/react",
  
  // Fixes Node 18 Hash algorithm issue
  "webpackFinal": async (config) => {
    config.output.hashFunction ='sha256'
    return config
  }
}