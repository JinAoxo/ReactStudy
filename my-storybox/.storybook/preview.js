import '../src/index.css';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
	actions: {
		argTypesRegex: '^on[A-Z].*'
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   // storybook에서 가져온 코드
//   options: {
//     storySort: (a, b) =>
//       a[1].kind === b[1].kind
//         ? 0
//         : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
//   },
// };