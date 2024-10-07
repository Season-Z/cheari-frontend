import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@cyberutopian/components';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const Information = () => {
  const router = useNavigate();

  return (
    <CardBlock>
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
          onClick={() => router('/comprehensive/information/detail')}
        >
          <Card.Meta
            title="中国家用电器研究院"
            description="《家电科技》创刊于1981年，是我国最早为家电行业服务的科技专业期刊，由中国轻工业联合会主管、中国家用电器研究院主办。重点为家电行业科研和技术人员提供交流学术思想、提高学术能力的平台，为家电行业内外协同创新提供互相了解的窗口。"
          />
        </Card>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
        >
          <Card.Meta
            title="中国家用电器研究院"
            description="《家电科技》创刊于1981年，是我国最早为家电行业服务的科技专业期刊，由中国轻工业联合会主管、中国家用电器研究院主办。重点为家电行业科研和技术人员提供交流学术思想、提高学术能力的平台，为家电行业内外协同创新提供互相了解的窗口。"
          />
        </Card>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
        >
          <Card.Meta
            title="中国家用电器研究院"
            description="《家电科技》创刊于1981年，是我国最早为家电行业服务的科技专业期刊，由中国轻工业联合会主管、中国家用电器研究院主办。重点为家电行业科研和技术人员提供交流学术思想、提高学术能力的平台，为家电行业内外协同创新提供互相了解的窗口。"
          />
        </Card>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
        >
          <Card.Meta
            title="中国家用电器研究院"
            description="《家电科技》创刊于1981年，是我国最早为家电行业服务的科技专业期刊，由中国轻工业联合会主管、中国家用电器研究院主办。重点为家电行业科研和技术人员提供交流学术思想、提高学术能力的平台，为家电行业内外协同创新提供互相了解的窗口。"
          />
        </Card>
      </div>
    </CardBlock>
  );
};

export default Information;
