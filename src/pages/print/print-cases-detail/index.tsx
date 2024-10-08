import { CardBlock } from '@/packages/@cyberutopian/components';
import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';

const PrintCasesDetail = () => {
  const router = useNavigate();

  return (
    <CardBlock>
      <div className="pt-8 text-center">
        <Image width={300} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      </div>
      <p className="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
        sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
        tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
      </p>
    </CardBlock>
  );
};

export default PrintCasesDetail;
