import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@cyberutopian/components';
import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const Introduce = () => {
  return (
    <CardBlock className="h-full">
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <Typography>
        <Title>Introduction</Title>

        <Paragraph>
          In the process of internal desktop applications development, many different design specs and implementations
          would be involved, which might cause designers and developers difficulties and duplication and reduce the
          efficiency of development.
        </Paragraph>

        <Paragraph>
          After massive project practice and summaries, Ant Design, a design language for background applications, is
          refined by Ant UED Team, which aims to{' '}
          <Text strong>
            uniform the user interface specs for internal background projects, lower the unnecessary cost of design
            differences and implementation and liberate the resources of design and front-end development
          </Text>
          .
        </Paragraph>

        <Paragraph>
          <ul>
            <li>
              <Link href="/docs/spec/proximity">Principles</Link>
            </li>
            <li>
              <Link href="/docs/spec/overview">Patterns</Link>
            </li>
            <li>
              <Link href="/docs/resources">Resource Download</Link>
            </li>
          </ul>
        </Paragraph>

        <Paragraph>
          Press <Text keyboard>Esc</Text> to exit...
        </Paragraph>
      </Typography>
    </CardBlock>
  );
};

export default Introduce;
