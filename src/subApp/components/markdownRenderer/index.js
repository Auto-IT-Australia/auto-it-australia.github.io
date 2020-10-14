import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import atomDark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';

import Text from '@autoit/text';
import {
	TableStyle,
	TableHeader,
	TableEntry,
	TableRow,
	Image,
	Code,
	Header,
	Body,
} from './style';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const renderers = {
	heading: (props) => <Header type='heading' {...props} />,
	paragraph: (props) => <Body style={{ margin: '20px 0' }} {...props} />,
	// Workaround for styled components issue v4.1.1 with tag and passing props. See https://github.com/rexxars/react-markdown/issues/244
	table: (props) => <TableStyle cellSpacing='0' cellPadding='0' {...props} />,
	tableRow: (props) => <TableRow {...props} />,
	tableCell: (props) =>
		props.isHeader ? <TableHeader {...props} /> : <TableEntry {...props} />,
	code: (props) => (
		<SyntaxHighlighter language={props.language || 'jsx'} style={atomDark}>
			{props.value}
		</SyntaxHighlighter>
	),
	image: (props) => <Image alt={props.alt} {...props} />,
	inlineCode: (props) => <Code {...props} />,
};

const MarkdownRenderer = ({ src }) => (
	<ReactMarkdown source={src} renderers={renderers} />
);

MarkdownRenderer.propTypes = {
	/** The source markdown that we are parsing. */
	src: PropTypes.string,
};

MarkdownRenderer.defaultProps = {
	src: '# This is a header\n\nAnd this is a paragraph',
};

export default MarkdownRenderer;
