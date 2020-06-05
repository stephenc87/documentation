import { Typography } from 'antd';

import CodeBlock from './components/code-block';
import Heading from './components/heading';

const { Paragraph } = Typography;

export default {
  // root: 'Root container element that contains the rendered markdown',
  // text: 'Text rendered inside of other elements, such as paragraphs',
  // break: 'Hard-break (<br>)',
  paragraph: Paragraph,
  // emphasis: ' - Emphasis (<em>)',
  // strong: ' - Strong/bold (<strong>)',
  // thematicBreak: ' - Horizontal rule / thematic break (<hr>)',
  // blockquote: ' - Block quote (<blockquote>)',
  // delete: ' - Deleted/strike-through (<del>)',
  // link: ' - Link (<a>)',
  // image: ' - Image (<img>)',
  // linkReference: ' - Link (through a reference) (<a>)',
  // imageReference: ' - Image (through a reference) (<img>)',
  // table: ' - Table (<table>)',
  // tableHead: ' - Table head (<thead>)',
  // tableBody: ' - Table body (<tbody>)',
  // tableRow: ' - Table row (<tr>)',
  // tableCell: ' - Table cell (<td>/<th>)',
  // list: ' - List (<ul>/<ol>)',
  // listItem: ' - List item (<li>)',
  // definition: ' - Definition (not rendered by default)',
  heading: Heading,
  // inlineCode: ' - Inline code (<code>)',
  code: CodeBlock,
  // html: ' - HTML node (Best-effort rendering)'
  // virtualHtml: ' - When not using the HTML parser plugin, a cheap and dirty approach to supporting simple HTML elements without a complete parser.'
  // parsedHtml: ' - When using the HTML parser plugin, HTML parsed to a React elem'
};