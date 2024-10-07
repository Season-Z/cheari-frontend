import { CardBlock } from '@cyberutopian/components';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const PrintCases = () => {
  const router = useNavigate();

  const fieldsChange = () => {};

  return (
    <CardBlock>
      <div className="grid grid-cols-6 gap-4">
        <Card
          hoverable
          onClick={() => router('/print/print-cases/print-cases-detail')}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta description="投票" />
        </Card>
        <Card
          hoverable
          onClick={() => router('/print/print-cases/print-cases-detail')}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta description="投票" />
        </Card>
        <Card
          hoverable
          onClick={() => router('/print/print-cases/print-cases-detail')}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta description="投票" />
        </Card>
        <Card
          hoverable
          onClick={() => router('/print/print-cases/print-cases-detail')}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta description="投票" />
        </Card>
        <Card
          hoverable
          onClick={() => router('/print/print-cases/print-cases-detail')}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta description="投票" />
        </Card>
        <Card
          hoverable
          onClick={() => router('/print/print-cases/print-cases-detail')}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta description="投票" />
        </Card>
        <Card
          hoverable
          onClick={() => router('/print/print-cases/print-cases-detail')}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta description="投票" />
        </Card>
      </div>
    </CardBlock>
  );
};

export default PrintCases;
