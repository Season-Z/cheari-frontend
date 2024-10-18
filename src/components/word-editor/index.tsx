import { CSSProperties, Dispatch, FC, SetStateAction } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.scss';

function imageHandler() {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    const formData = new FormData();
    formData.append('file', file);

    // 发送图片到服务器
    const res = await fetch('/api/upload/image', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    const imageUrl = `http://localhost:3280/${data.result.filename}`;

    // 将图片 URL 插入到编辑器中
    const quill = this.quill;
    const range = quill.getSelection();
    quill.insertEmbed(range.index, 'image', imageUrl);
  };
}

function videoHandler() {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'video/*');
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    const formData = new FormData();
    formData.append('video', file);

    // 发送视频到服务器
    const res = await fetch('YOUR_VIDEO_UPLOAD_ENDPOINT', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    const videoUrl = data.url; // 从服务器返回的视频 URL

    // 将视频 URL 插入到编辑器中
    const quill = this.quill;
    const range = quill.getSelection();
    quill.insertEmbed(range.index, 'video', videoUrl);
  };
}

const modules = {
  toolbar: {
    container: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'], // remove formatting button
      // ['link', 'image', 'video'], // link and image, video
    ],
    handlers: {
      // image: imageHandler, // 自定义图片上传 handler
      // video: videoHandler, // 自定义视频上传 handler
    },
  },
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
