import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Column } from '@ant-design/plots';
import { Table } from 'antd';
import { useMemo } from 'react';
import { Fragment } from 'react/jsx-runtime';

const type = {
  1: '冰箱',
  2: '洗衣机',
  3: '空调',
};

const Report = () => {
  const { data: tableData } = useCyberFetch({ url: '/api/study/report/table', method: 'get' });
  const { data } = useCyberFetch({ url: '/api/study/report', method: 'get' });

  const columns = useMemo(() => {
    if (!tableData?.result?.column) {
      return [];
    }

    return [
      {
        title: '月份',
        dataIndex: 'dataPublishTime',
        key: 'dataPublishTime',
      },
    ].concat(
      tableData.result.column.map((v) => ({
        title: v.dataTitle,
        dataIndex: v.dataTitle,
        key: v.dataTitle,
      })),
    );
  }, [tableData?.result]);

  const dataSource = useMemo(() => {
    if (!tableData?.result?.data) {
      return [];
    }

    return tableData?.result?.data.map((v) => {
      return {
        dataPublishTime: v.dataPublishTime,
        ...v.products,
      };
    });
  }, [tableData?.result]);

  const chartData = useMemo(() => {
    return data?.result?.map((v) => ({ ...v, dataType: type[v.dataType], count: Number(v.count) }));
  }, [data?.result]);

  const config = {
    data: chartData || [],
    xField: 'dataBrand',
    yField: 'count',
    colorField: 'dataType',
    group: true,
  };

  return (
    <Fragment>
      <CardBlock>
        <Table columns={columns} dataSource={dataSource} />
      </CardBlock>
      <Gap />
      <CardBlock>
        <Column {...config} />
      </CardBlock>
    </Fragment>
  );
};

export default Report;
