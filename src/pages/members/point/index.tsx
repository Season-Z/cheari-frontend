import Gap from '@/components/gap';
import { CardBlock } from '@cyberutopian/components';
import { Badge, Divider } from 'antd';

const Point = () => {
  return (
    <CardBlock>
      <Badge count={99} offset={[10, 0]}>
        <div className="title-30">我的积分</div>
      </Badge>
      <Divider />
      <div className="title-20">积分规则</div>
      <Gap />
      <p>每支付1元，积5分。 </p>
      <p className="my-4">99 积分规则 每公开发布一个方案，积1分。</p>
      <p>积分可抵扣3D打印费用。 100分可抵扣1元3D打印费。</p>
    </CardBlock>
  );
};

export default Point;
