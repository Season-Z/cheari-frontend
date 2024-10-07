import { CSSProperties, Dispatch, FC, SetStateAction } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.scss';

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

const WordEditor: FC<{
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  className?: string;
  style?: CSSProperties;
}> = ({ value, setValue, className, style }) => {
  return (
    <ReactQuill
      theme="snow"
      className={'h-[400px] w-full word-editor ' + className}
      style={style}
      modules={modules}
      formats={formats}
      value={value}
      onChange={setValue}
    />
  );
};

export default WordEditor;
