import { formatTime } from '@/utils';
import Table, { ColumnsType } from 'antd/es/table';

const TaleList = () => {
  //   const { tableProps, sendRequest } = useTableProvider<
  //   any,
  //   any
  // >({
  //   request: useCyberFetch['GET/api/v1/project/list'],
  //   requestParams: { req: { type: searchParams.type, displayName: searchParams.displayName } },
  // });

  const columns: ColumnsType<any> = [
    {
      title: '发布时间',
      dataIndex: 'projectDisplayName',
      width: 160,
      render: (t) => formatTime(t),
    },
    {
      title: '产品',
      dataIndex: 'integration',
      width: 100,
    },
    {
      title: '品牌',
      dataIndex: 'language',
      width: 100,
    },
    {
      title: '监测时间',
      dataIndex: 'lastScanStatus',
      width: 160,
      render: (t) => formatTime(t),
    },
    {
      title: '渠道',
      dataIndex: 'issueDistribution',
      width: 140,
    },
    {
      title: '标题',
      dataIndex: 'severityDistribution',
      width: 140,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={[]}
      rowKey="id"
      rowSelection={undefined}
      locale={{ emptyText: <div className="text-14 text-text-3">暂无数据</div> }}
      // scroll={scroll}
    />
  );
};

export default TaleList;
