import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
// @ts-ignore
import { VideoPlayer, VideoPlayerProps } from '@graphland/react-video-player';
import { useParams } from 'react-router-dom';

const TechnicalTrainingDetail = () => {
  const params = useParams();
  const { data } = useCyberFetch({ url: `/api/platform/train/${params.id}`, method: 'get' });

  const videoSources = [
    {
      src: `http://localhost:3280/file/${data?.result?.trainingVideo}`,
      type: 'video/mp4',
    },
  ];

  const videoProps: VideoPlayerProps = {
    theme: 'city', // 'city', 'fantasy', 'forest', 'sea'
    height: 720,
    width: 980,
    autoPlay: false,
    loop: false,
    sources: videoSources,
    controlBar: {
      skipButtons: {
        forward: 5,
        backward: 5,
      },
    },
    playbackRates: [0.5, 1, 1.5, 2],
    disablePictureInPicture: false,
    onReady: () => {
      console.log('Video player is ready!');
    },
  };

  return (
    <CardBlock>
      <div className="flex items-start gap-4">
        {data?.result?.trainingVideo && <VideoPlayer {...videoProps} />}

        <div className="flex-shrink-0 flex-1">
          <div className="title-18">课程简介</div>
          <div className="title-14">{data?.result?.trainingTitle}</div>
          <div className="text-14 w-full mt-[8px] mb-[24px] break-all">{data?.result?.trainingContent}</div>
          {/* <div className="overflow-y-scroll w-full break-all">{data?.result?.trainingTitle}</div> */}
        </div>
      </div>
    </CardBlock>
  );
};

export default TechnicalTrainingDetail;
