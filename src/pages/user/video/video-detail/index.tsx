import { VideoPlayer, VideoPlayerProps } from '@graphland/react-video-player';

const videoSources = [
  {
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
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
const PictureDetail = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <VideoPlayer {...videoProps} />
      </div>
      <p className="mt-4 text-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
        sit amet lacus accumsan et viverra justo commodo. Proin sodales
      </p>
    </div>
  );
};

export default PictureDetail;
