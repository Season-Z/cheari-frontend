import { EnhanceSearchInput } from '@/components/form-field';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { VideoPlayer } from '@graphland/react-video-player';
import { Button, Card } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateVideo from './components/create-video';

const Video = () => {
  const router = useNavigate();
  const [videoOpen, setVideoOpen] = useState(false);
  const [title, setTitle] = useState<string>();

  const { data } = useCyberFetch({
    url: '/api/forum',
    method: 'get',
    data: { subjectType: 1, subjectTitle: title || undefined },
  });

  const handleSearch = (v) => {
    setTitle(v);
  };

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
        {data?.result?.map((v) => (
          <Card
            key={v.subjectId}
            hoverable
            cover={
              <VideoPlayer
                theme="city"
                height={200}
                width={260}
                autoPlay={false}
                loop={false}
                sources={[
                  {
                    src: `http://localhost:3280/file/${v?.subjectVideo}`,
                    type: 'video/mp4',
                  },
                ]}
                playbackRates={[0.5, 1, 1.5, 2]}
                disablePictureInPicture={false}
              />
            }
            size="small"
            onClick={() => router(`/user/video/${v.subjectId}`)}
          >
            <Card.Meta title={v.subjectTitle} />
          </Card>
        ))}
      </div>
    </CardBlock>
  );
};

export default Video;
