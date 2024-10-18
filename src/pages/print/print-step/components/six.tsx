import { useRouterState } from '@/packages/@cyberutopian/hooks';
import { cyberFetch } from '@/request';
import { Button, InputNumber, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PrintStepType } from '../type';

const Six = () => {
  const navigate = useNavigate();
  const [state, setState] = useRouterState<PrintStepType>();

  const handleSubmit = async () => {
    const { material, price, ...values } = state.data || {};
    const result = await cyberFetch({
      url: '/api/print/order',
      method: 'post',
      data: { ...values, orderPrice: price, orderStatus: 1 },
    });

    if (result.success) {
      navigate('/print/print-cases', { replace: true });
      message.success('创建成功');
    }
  };

  return (
    <div className="bg-warning-hover p-3">
      <h1 className="text-center title-30">确认订单</h1>

      <div className="p-4 bg-text-1">
        <div className="grid grid-cols-6 border-b border-solid border-text-2 pb-4  object-contain p-2">
          <div>3D文件显示</div>
          <div>打印信息</div>
          <div>发货周期</div>
          <div>单价</div>
          <div>数量</div>
          <div>总价</div>
        </div>

        <div className="grid grid-cols-6 pt-2">
          <div>3D文件显示</div>
          <div>
            <div>宽度：{state.data?.orderModelWidth} cm</div>

            <div>高度：{state.data?.orderModelHeight} cm</div>

            <div>体积：{state.data?.orderModelLong} cm²</div>

            <div>材料：{state.data?.material}</div>

            <div>处理：{state.data?.orderTech}</div>

            <div>颜色：红10、黄6、蓝19</div>
          </div>
          <div>1-5个工作日</div>
          <div>{state.data?.price}</div>
          <div>
            <InputNumber
              value={state.data.orderNumber}
              onChange={(i) => setState((v) => ({ ...v, data: { ...v.data, orderNumber: i } }))}
            />
          </div>
          <div>{parseInt(state.data?.price) * parseInt(state.data?.orderNumber)}</div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <Button onClick={() => setState((v) => ({ ...v, current: 4 }))}>上一步</Button>
        <Button type="primary" onClick={handleSubmit}>
          提交并支付
        </Button>
      </div>
    </div>
  );
};

export default Six;
