import { useState } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import SelectedInput from "Components/FormComponents/SelectedInput";
import { Form, Formik } from "formik";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import CustomizedInputs from "Components/FormComponents/CustomizedInputs";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { BannerProps } from "Components/Banner";
const FormTitle = styled.div`
  font-family: "San Francisco Text";
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  text-align: center;
  margin-bottom: 10px;
`;
const CoverBox = styled.div<BannerProps>`
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(102, 105, 133, 0.2);
  border-radius: 24px;
  position: relative;
  top: ${(props) => (props.isTabletOrMobile ? "0%" : "-10%")};
`;
const DetailText = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #5768ff;
  cursor: pointer;
`;
const SideText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7b8091;
`;
const DescForCheckbox = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1f2738;
`;
const LabelCheckbox = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1f2738;
`;
const FormAICycle = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const isTabletOrMobile = useMediaQuery("(max-width: 600px)");
  console.log("isTabletOrMobile", isTabletOrMobile);
  return (
    <CoverBox isTabletOrMobile={isTabletOrMobile}>
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Form>
          <Grid
            container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={5}
            rowGap={"20px"}
            style={{padding:'20px'}}
          >
            <Grid item xs={12}>
              <FormTitle>
                Nh???p th??ng tin ????? AICycle ?????nh gi?? xe c???a b???n
              </FormTitle>
            </Grid>
            <Grid item md={5.5} xs={12}>
              <SelectedInput label="H??ng xe" idForInput="hangXe" />
            </Grid>
            <Grid item md={5.5} xs={12}>
              <SelectedInput label="D??ng xe" idForInput="dongXe" />
            </Grid>
            {isTabletOrMobile && (
              <Button
                style={{
                  width: "343px",
                  height: "50px",
                  background: "#f0f0f0",
                  borderRadius: "12px",
                  padding: "15px 118px",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                  letterSpacing: "0.005em",
                  color: "#bdbdbd",
                  textTransform: "unset",
                  wordBreak: "keep-all",
                  display: "block",
                  margin: "0 auto",
                }}
              >
                ?????nh gi?? ngay
              </Button>
            )}
            <Grid item md={5.5} xs={12}>
              <SelectedInput label="N??m s???n xu???t" idForInput="birthDate" />
            </Grid>
            <Grid item md={5.5} xs={12}>
              <SelectedInput label="Phi??n b???n" idForInput="version" />
            </Grid>
            <Grid item md={5.5} xs={12}>
              <SelectedInput label="N??i ????ng k??" idForInput="registeredPlace" />
            </Grid>
            <Grid item md={5.5} xs={12}>
              <SelectedInput
                label="S??? km ???? ??i"
                idForInput="traveledDistance"
              />
            </Grid>
            <Grid item xs={12}>
              <SelectedInput label="T??nh tr???ng xe" idForInput="status" />
            </Grid>
            <Grid item xs={12}>
              <DetailText
                onClick={() => {
                  setOpenDetail(!openDetail);
                }}
              >
                <span>Th??ng tin chi ti???t</span>&emsp;{" "}
                <KeyboardArrowDownIcon
                  style={{ fontSize: "14px", width: "14px", height: "14px" }}
                />
              </DetailText>
              <SideText>
                K???t qu??? ?????nh gi?? xe s??? ch??nh x??c h??n n???u ?????y ????? th??ng tin d?????i
                ????y.
              </SideText>
            </Grid>
            {openDetail && (
              <>
                <Grid item md={5.5} xs={12}>
                  <CustomizedInputs
                    label="Th???i gian ????ng k??"
                    idOfInput="registeredTime"
                    type="date"
                  />
                </Grid>
                <Grid item md={5.5} xs={12}>
                  <SelectedInput label="M??u s???c xe" idForInput="carColor" />
                </Grid>
                <Grid item xs={12}>
                  <SelectedInput label="Xu???t x???" idForInput="theOrigin" />
                </Grid>
                <Grid item xs={12}>
                  <CustomizedInputs
                    idOfInput="statusDesc"
                    label="M?? t??? t??nh tr???ng xe"
                    row={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "20px",
                    }}
                  >
                    <DescForCheckbox style={{ flexBasis: "30%" }}>
                      B???o d?????ng, b???o tr?? ?????y ?????
                    </DescForCheckbox>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<LabelCheckbox>Kh??ng</LabelCheckbox>}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<LabelCheckbox>C??</LabelCheckbox>}
                    />
                  </Box>
                </Grid>
                <Grid item md={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "20px",
                    }}
                  >
                    <DescForCheckbox style={{ flexBasis: "30%" }}>
                      Xe c?? kinh doanh v???n t???i{" "}
                    </DescForCheckbox>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<LabelCheckbox>Kh??ng</LabelCheckbox>}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<LabelCheckbox>C??</LabelCheckbox>}
                    />
                  </Box>
                </Grid>
              </>
            )}
            {!isTabletOrMobile && (
              <Button
                style={{
                  width: "343px",
                  height: "50px",
                  background: "#f0f0f0",
                  borderRadius: "12px",
                  padding: "15px 118px",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                  letterSpacing: "0.005em",
                  color: "#bdbdbd",
                  textTransform: "unset",
                  wordBreak: "keep-all",
                  display: "block",
                  margin: "0 auto",
                }}
              >
                ?????nh gi?? ngay
              </Button>
            )}
          </Grid>
        </Form>
      </Formik>
    </CoverBox>
  );
};

export default FormAICycle;
