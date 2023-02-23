import BannerLogo from "../assets/Images/Group2.png";
import BannerLogoOfMobile from "../assets/Images/Frame47402.png";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
export type BannerProps = {
  isTabletOrMobile: boolean;
}
const BigBanner = styled.div<BannerProps>`
  background: ${(props) =>
      props.isTabletOrMobile
        ? `url(${BannerLogoOfMobile}) no-repeat center;`
        : `url(${BannerLogo}) no-repeat center;`}
    ${(props) =>
      props.isTabletOrMobile ? `padding-top: 290px;` : `padding-top: 20%;`}
    background-size: cover;
`;
const Banner = () =>
{
  const isTabletOrMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <BigBanner isTabletOrMobile={isTabletOrMobile}></BigBanner>
    </div>
  );
};

export default Banner;
