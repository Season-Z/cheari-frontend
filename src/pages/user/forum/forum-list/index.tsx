import { EnhanceSearchInput } from '@/components/form-field';
import { useCyberFetch } from '@/request';
import { Button } from 'antd';
import { Fragment, useState } from 'react';
import CreatePost from '../components/create-post';
import ItemList from '../components/item-list';

const ForumList = () => {
  const { data, sendRequest } = useCyberFetch({ url: '/api/forum', method: 'get' });

  const [postOpen, setPostOpen] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-end items-center gap-4">
        <EnhanceSearchInput placeholder="搜索" className="w-[278px]" handleSearch={() => {}} />
        <Button onClick={() => setPostOpen(true)}>发布新帖</Button>
      </div>
      <ItemList data={data?.result} />
      {postOpen && (
        <CreatePost
          open={postOpen}
          onClose={() => {
            setPostOpen(false);
            sendRequest();
          }}
        />
      )}
    </Fragment>
  );
};

export default ForumList;
