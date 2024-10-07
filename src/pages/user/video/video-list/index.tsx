import { EnhanceSearchInput } from '@/components/form-field';
import { CardBlock } from '@cyberutopian/components';
import { VideoPlayer, VideoPlayerProps } from '@graphland/react-video-player';
import { Button, Card } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateVideo from './components/create-video';

const videoSources = [
  {
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    type: 'video/mp4',
  },
];

const videoProps: VideoPlayerProps = {
  theme: 'city', // 'city', 'fantasy', 'forest', 'sea'
  height: 200,
  width: 260,
  autoPlay: false,
  loop: false,
  sources: videoSources,
  playbackRates: [0.5, 1, 1.5, 2],
  disablePictureInPicture: false,
  onReady: () => {
    console.log('Video player is ready!');
  },
};

const Video = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const router = useNavigate();

  const handleSearch = () => {};

  return (
    <CardBlock>
      <div className="flex justify-end items-center gap-4 mb-4">
        <Button type="primary" onClick={() => setVideoOpen(true)}>
          上传视频
        </Button>
        <EnhanceSearchInput placeholder="搜索" className="w-[278px]" handleSearch={handleSearch} />
      </div>
      {videoOpen && <CreateVideo open={videoOpen} onClose={() => setVideoOpen(false)} />}
      <div className="grid grid-cols-3 gap-4">
        <Card
          hoverable
          cover={<VideoPlayer {...videoProps} />}
          size="small"
          onClick={() => router('/user/video/detail')}
        >
          <Card.Meta title="中国家用电器研究院" />
        </Card>
        <Card hoverable cover={<VideoPlayer {...videoProps} />} size="small">
          <Card.Meta title="中国家用电器研究院" />
        </Card>
        <Card hoverable cover={<VideoPlayer {...videoProps} />} size="small">
          <Card.Meta title="中国家用电器研究院" />
        </Card>
        <Card hoverable cover={<VideoPlayer {...videoProps} />} size="small">
          <Card.Meta title="中国家用电器研究院" />
        </Card>
      </div>
    </CardBlock>
  );
};

export default Video;
