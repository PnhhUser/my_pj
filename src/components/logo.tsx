import { IMG_ALT } from "../common/constants/constant";

type Logo = {
  imgUrl: string;
};

function Logo({ imgUrl }: Logo) {
  return (
    <img src={imgUrl} alt={IMG_ALT} className="w-full h-full object-cover" />
  );
}

export default Logo;
