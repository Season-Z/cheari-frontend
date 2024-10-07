import { CardBlock } from '@cyberutopian/components';
// @ts-ignore
import { VideoPlayer, VideoPlayerProps } from '@graphland/react-video-player';

const TechnicalTrainingDetail = () => {
  const videoSources = [
    {
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      type: 'video/mp4',
    },
    // Add more video sources as needed
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
        <VideoPlayer {...videoProps} />
        <div className="flex-shrink-0">
          <div className="title-18">课程简介</div>
          <div className="overflow-y-scroll w-full break-all">asdbasjhb</div>
        </div>
      </div>
    </CardBlock>
  );
};

export default TechnicalTrainingDetail;
