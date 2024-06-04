import { LoaderWrapper, LoaderText, LoaderImage } from './LoaderStyles';
import Basket from '../../assets/img/preloader.gif';

export const Loader = ({ isSm }: any) => {
  return (
    <LoaderWrapper isSm={isSm}>
      <LoaderImage className="loader_image" src={Basket} alt={'loader'} />
      <LoaderText>Идёт загрузка, пожалуйста подождите...</LoaderText>
    </LoaderWrapper>
  );
};
