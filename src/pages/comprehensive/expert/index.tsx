import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@cyberutopian/components';
import { Card } from 'antd';
import { Fragment } from 'react';

const Expert = () => {
  return (
    <CardBlock>
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <div className="grid grid-cols-5 gap-4 mt-6">
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
            title={
              <Fragment>
                <p>徐鸿 教授级高工</p>
                <p>中国家用电器研究院</p>
              </Fragment>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
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
            title={
              <Fragment>
                <p>徐鸿 教授级高工</p>
                <p>中国家用电器研究院</p>
              </Fragment>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
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
            title={
              <Fragment>
                <p>徐鸿 教授级高工</p>
                <p>中国家用电器研究院</p>
              </Fragment>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
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
            title={
              <Fragment>
                <p>徐鸿 教授级高工</p>
                <p>中国家用电器研究院</p>
              </Fragment>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
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
            title={
              <Fragment>
                <p>徐鸿 教授级高工</p>
                <p>中国家用电器研究院</p>
              </Fragment>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
          />
        </Card>
      </div>
    </CardBlock>
  );
};

export default Expert;
