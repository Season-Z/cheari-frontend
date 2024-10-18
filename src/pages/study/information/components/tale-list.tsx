import { StudyDataEntity } from '@/common/study';
import { useRouterState } from '@/packages/@cyberutopian/hooks';
import { useCyberFetch } from '@/request';
import { formatTime } from '@/utils';
import Table, { ColumnsType } from 'antd/es/table';

const type = {
  1: '冰箱',
  2: '洗衣机',
  3: '空调',
};

const TaleList = () => {
  const [value] = useRouterState<any>();

  const { data } = useCyberFetch({ url: '/api/study', method: 'post', data: value });

  const columns: ColumnsType<StudyDataEntity> = [
    {
      title: '发布时间',
      dataIndex: 'dataPublishTime',
      width: 160,
      render: (t) => formatTime(t),
    },
    {
      title: '产品',
      dataIndex: 'dataType',
      width: 100,
      render: (t) => type[t],
    },
    {
      title: '品牌',
      dataIndex: 'dataBrand',
      width: 100,
    },
    {
      title: '监测时间',
      dataIndex: 'dataGatherTime',
      width: 160,
      render: (t) => formatTime(t),
    },
    {
      title: '渠道',
      dataIndex: 'dataChannel',
      width: 140,
    },
    {
      title: '标题',
      dataIndex: 'dataTitle',
      width: 140,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data?.result}
      pagination={false}
      rowKey="id"
      rowSelection={undefined}
      locale={{ emptyText: <div className="text-14 text-text-3">暂无数据</div> }}
      // scroll={scroll}
    />
  );
};

export default TaleList;
