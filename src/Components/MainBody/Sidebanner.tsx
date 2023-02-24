import { useMediaQuery } from "@mui/material";
import SideImage from "assets/Images/Group 1.png"
const SideBanner = () =>
{
  const isTabletOrMobile = useMediaQuery("(max-width: 600px)");
  const flexibleStyle : React.CSSProperties = isTabletOrMobile
    ? { width: "100%"}
    : { position: "relative", top: "-5%", padding: "2%", width: "100%" };
  return (
    <div style={flexibleStyle}>
      <img
        src={SideImage}
        alt="imageDecoration"
        style={{ aspectRatio: 1 / 1, maxWidth: "100%" }}
      />
    </div>
  );
}

export default SideBanner;