import { useCyberFetch } from '@/request';
import { useParams } from 'react-router-dom';

const PictureDetail = () => {
  const params = useParams();
  const { data } = useCyberFetch({
    url: `/api/forum/${params.id}`,
    method: 'get',
  });

  return (
    <div className="">
      <img
        alt="example"
        className=" object-contain p-2 mx-auto"
        src={`http://localhost:3280/${data?.result?.subjectImage}`}
      />
      <p className="mt-4 text-16">
        <div dangerouslySetInnerHTML={{ __html: data?.result?.subjectContent }} />
      </p>
    </div>
  );
};

export default PictureDetail;
