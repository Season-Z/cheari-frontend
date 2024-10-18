import { useCyberFetch } from '@/request';
import { VideoPlayer, VideoPlayerProps } from '@graphland/react-video-player';
import { useParams } from 'react-router-dom';

const PictureDetail = () => {
  const params = useParams();
  const { data } = useCyberFetch({
    url: `/api/forum/${params.id}`,
    method: 'get',
  });

  const videoSources = [
    {
      src: `http://localhost:3280/file/${data?.result?.subjectVideo}`,
      type: 'video/mp4',
    },
  ];

  const videoProps: VideoPlayerProps = {
    theme: 'city', // 'city', 'fantasy', 'forest', 'sea'
    height: 400,
    width: 500,
    autoPlay: false,
    loop: false,
    sources: videoSources,
    playbackRates: [0.5, 1, 1.5, 2],
    disablePictureInPicture: false,
    onReady: () => {
      console.log('Video player is ready!');
    },
  };

  return (
    <div className="">
      <div className="flex justify-center">{data?.result?.subjectVideo && <VideoPlayer {...videoProps} />}</div>
      <p className="mt-4 text-16">
        <div dangerouslySetInnerHTML={{ __html: data?.result?.subjectContent }} />
      </p>
    </div>
  );
};

export default PictureDetail;
