import { CardBlock } from '@/packages/@cyberutopian/components';
import { cyberFetch, useCyberFetch } from '@/request';
import { Button, message } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pop from './components/pop';

const OrderDetail = () => {
  const param = useSearchParams();
  const navigate = useNavigate();

  const { data } = useCyberFetch({
    url: `/api/print/order/${param[0].get('orderId') || 0}`,
    method: 'get',
  });

  const handleDelete = async () => {
    const result = await cyberFetch({ url: `/api/print/order/${data?.result?.orderId}`, method: 'DELETE' });

    if (result.success) {
      message.success('删除成功');
      navigate('/members/person', { replace: true });
    }
  };

  return (
    <div className="h-full">
      <CardBlock>
        <div className="grid grid-cols-7 border-b border-solid border-text-2 pb-4  object-contain p-2">
          <div>3D文件显示</div>
          <div>打印信息</div>
          <div>发货周期</div>
          <div>单价</div>
          <div>数量</div>
          <div>总价</div>
          <div>操作</div>
        </div>

        <div className="grid grid-cols-7 pt-2">
          <div>3D文件显示</div>
          <div>
            <div>宽度：{data?.result?.orderModelWidth} cm</div>

            <div>高度：{data?.result?.orderModelHeight} cm</div>

            <div>体积：{data?.result?.orderModelLong} cm²</div>

            <div>材料：{data?.result?.material}</div>

            <div>处理：{data?.result?.orderTech}</div>

            <div>颜色：红10、黄6、蓝19</div>
          </div>
          <div>1-5个工作日</div>
          <div>{data?.result?.orderPrice}</div>
          <div>{data?.result?.orderNumber}</div>
          <div>
            {data?.result?.orderPrice && data?.result?.orderNumber
              ? data?.result?.orderPrice * data?.result?.orderNumber
              : null}
          </div>
          <div>
            <Pop />
          </div>
        </div>
      </CardBlock>

      <div className="flex justify-center gap-4 mt-10">
        <Button>再次打印</Button>
        <Button color="danger" variant="solid" onClick={handleDelete}>
          <span className="text-text-1">删除</span>
        </Button>
      </div>
    </div>
  );
};

export default OrderDetail;
