module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}

// module.exports = {
// 	stories: ['../src/components/**/*.stories.js'],
// 	staticDirs: ['../public'],
// 	addons: [
// 		'@storybook/addon-links',
// 		'@storybook/addon-essentials',
// 		'@storybook/preset-create-react-app',
// 		'@storybook/addon-interactions',
// 	],
// 	features: {
// 		postcss: false,
// 	},
// 	framework: '@storybook/react',
// 	core: {
// 		builder: 'webpack4',
// 	},
// };