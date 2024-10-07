import WordEditor from '@/components/word-editor';
import { Button } from 'antd';
import { Fragment, useState } from 'react';

const ChatEditor = () => {
  const [value, setValue] = useState('');

  return (
    <Fragment>
      <div className="flex justify-end mb-2">
        <Button type="primary" size="small">
          发送
        </Button>
      </div>
      <WordEditor style={{ height: '100px' }} value={value} setValue={setValue} />
    </Fragment>
  );
};

export default ChatEditor;
