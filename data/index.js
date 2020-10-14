/*
  eslint-disable no-empty, global-require, import/no-dynamic-require,
  no-console, no-confusing-arrow, prefer-object-spread/prefer-object-spread
*/

const fs = require('fs');
const path = require('path');
const reactDocs = require('react-docgen');
const babel = require('babel-core');

const template = require('./data.template');

const parseProps = (src, cwd) => {
	const fileContents = fs.readFileSync(src).toString();

	const props = reactDocs.parse(
		fileContents,
		reactDocs.resolver.findAllExportedComponentDefinitions,
		null,
		{ filename: src, cwd }
	);

	return props;
};

// Loop through the folders up a level, i.e. atlaskit/packages to build up
// a list of packages that we process and filter. Falsy values are filtered
// out and the final array is sorted by component name.

const ignoredPackages = [
	'typekit',
	'styles-global',
	'styles-animation',
	'utilities',
	'api-services',
	'playroom',
	'use-is-in-viewport',
	'fieldWrapper',
	'navbar',
	'idleTimer',
	'placement',
];
const packages = fs
	.readdirSync(path.resolve(__dirname, '../node_modules/@autoit'))
	.map((key) => {
		// Everything in here should be a directory, but let's check to be safe.
		if (
			!fs
				.statSync(
					path.resolve(__dirname, '../node_modules/@autoit', key)
				)
				.isDirectory() ||
			ignoredPackages.indexOf(key) > -1
		)
			return false;

		// Everything should have a package.json, but we try/catch to be safe.
		let pkg;
		try {
			pkg = require(path.resolve(
				__dirname,
				'../node_modules/@autoit',
				key,
				'package.json'
			));
		} catch (e) {
			return false;
		}

		// We use the custom "ak:component" key in package.json to describe public
		// Atlastkit packages. If it's not present, ignore this package.
		// if (!pkg['ak:component']) return false;
		// The name of the component may be in the "ak:component" section; we default
		// to the directory name if it isnt present
		const pkgName = pkg.name || key;
		const supportsDarkMode = false;

		// Some packages have docs, so we test for the presence of a directory and
		// pass `true` if it exists. This writes a literal require() into the template
		let docs;
		let readme;
		let nestedDocs;
		let props;
		let changelog;
		if (key !== 'toast') {
			try {
				const src = path.resolve(
					__dirname,
					'..',
					'node_modules',
					'@autoit',
					key,
					'src',
					'index.js'
				);
				const cwd = path.resolve(
					__dirname,
					'..',
					'node_modules',
					'@autoit',
					key
				);
				const parsedProps = parseProps(src, cwd);
				props = {
					name: pkg.name,
					props: parsedProps,
				};
			} catch (e) {
				console.error(key, e);
			}
		}

		try {
			const docsFile = path.resolve(
				__dirname,
				'../node_modules/@autoit',
				key,
				'dist',
				'docs',
				'index.js'
			);
			const readmeFile = path.resolve(
				__dirname,
				'../node_modules/@autoit',
				key,
				'README.md'
			);
			const componentsDir = path.resolve(
				__dirname,
				'../node_modules/@autoit',
				key,
				'dist',
				'docs',
				'components'
			);
			// const changelogFile = path.resolve(__dirname, '../node_modules/@autoit', key, 'dist', 'docs', 'CHANGELOG.md')
			// changelog = getChangelog(changelogFile);
			docs = fs.statSync(docsFile).isFile();
			readme = fs.statSync(readmeFile).isFile();
			// We find out if we have a components directory, which determines whether
			// all exports are intended to be documented on a single page. Note, only
			// Navigation is using this atm, and this fundamentally changes how the
			// information should be displayed.

			try {
				nestedDocs = fs.statSync(componentsDir).isDirectory();
			} catch (e) {}
		} catch (e) {
			// If there is no docs/index.js, we assume the documentation has not been written
			// yet, and do not halt the build. For all other errors, we should throw.

			if (
				e.code === 'ENOENT' &&
				e.path ===
					path.resolve(
						__dirname,
						'../node_modules/@autoit',
						key,
						'dist',
						'docs',
						'index.js'
					)
			) {
				console.error(
					`WARNING: No documentation found for ${pkg.name}.`
				);
				return {
					changelog,
					docs,
					readme,
					key,
					name: pkgName,
					supportsDarkMode,
					nestedDocs,
					pkg,
					props,
					versions: [],
				};
			}
		}

		// Return the component data
		return {
			changelog,
			docs,
			readme,
			key,
			name: pkgName,
			supportsDarkMode,
			nestedDocs,
			pkg,
			props,
			versions: [],
		};
	})
	.filter((i) => i);

const sortedPackages = packages.sort((a, b) => (a.name > b.name ? 1 : -1));

Promise.all(sortedPackages)
	.then((data) => template({ components: data }).replace(/\n\s+\n/g, '\n'))
	.then((data) =>
		fs.writeFileSync(path.resolve('src', 'data.js'), data, 'utf8')
	)
	.then(() => {
		console.info(
			`📦  => Wrote data.js for ${packages.length} AutoIT components`
		);
		process.exit();
	})
	.catch(console.error);

// We're done here!
