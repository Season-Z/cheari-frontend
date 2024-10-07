import { SearchField } from '@/components/form-field';
import WordEditor from '@/components/word-editor';
import { CardBlock } from '@cyberutopian/components';
import { Button, Input } from 'antd';
import { useState } from 'react';

const Community = () => {
  const [value, setValue] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    console.log(value, content);
  };

  return (
    <CardBlock className="h-full">
      <SearchField label="标题">
        <Input
          placeholder="请输入标题"
          className="w-[270px]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </SearchField>

      <SearchField label="文案内容" className="mt-10">
        <WordEditor value={content} setValue={setContent} />
      </SearchField>

      <div className="flex justify-end gap-4 mt-[80px]">
        <Button type="primary" onClick={handleSave}>
          保存
        </Button>
        <Button>删除</Button>
      </div>
    </CardBlock>
  );
};

export default Community;
