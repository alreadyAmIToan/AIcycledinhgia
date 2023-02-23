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
          >
            <Grid item xs={12}>
              <FormTitle>
                Nhập thông tin để AICycle định giá xe của bạn
              </FormTitle>
            </Grid>
            <Grid item md={5.5} xs={12}>
              <SelectedInput label="Hãng xe" idForInput="hangXe" />
            </Grid>
            <Grid item md={5.5} xs={12}>
              <SelectedInput label="Dòng xe" idForInput="dongXe" />
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
                Định giá ngay
              </Button>
            )}
            <Grid item md={5.5} xs={12}>
              <SelectedInput label="Năm sản xuất" idForInput="birthDate" />
            </Grid>
            <Grid item md={5.5} xs={12}>
              <SelectedInput label="Phiên bản" idForInput="version" />
            </Grid>
            <Grid item md={5.5} xs={12}>
              <SelectedInput label="Nơi đăng ký" idForInput="registeredPlace" />
            </Grid>
            <Grid item md={5.5} xs={12}>
              <SelectedInput
                label="Số km đã đi"
                idForInput="traveledDistance"
              />
            </Grid>
            <Grid item xs={12}>
              <SelectedInput label="Tình trạng xe" idForInput="status" />
            </Grid>
            <Grid item xs={12}>
              <DetailText
                onClick={() => {
                  setOpenDetail(!openDetail);
                }}
              >
                <span>Thông tin chi tiết</span>&emsp;{" "}
                <KeyboardArrowDownIcon
                  style={{ fontSize: "14px", width: "14px", height: "14px" }}
                />
              </DetailText>
              <SideText>
                Kết quả định giá xe sẽ chính xác hơn nếu đầy đủ thông tin dưới
                đây.
              </SideText>
            </Grid>
            {openDetail && (
              <>
                <Grid item md={5.5} xs={12}>
                  <CustomizedInputs
                    label="Thời gian đăng ký"
                    idOfInput="registeredTime"
                    type="date"
                  />
                </Grid>
                <Grid item md={5.5} xs={12}>
                  <SelectedInput label="Màu sắc xe" idForInput="carColor" />
                </Grid>
                <Grid item xs={12}>
                  <SelectedInput label="Xuất xứ" idForInput="theOrigin" />
                </Grid>
                <Grid item xs={12}>
                  <CustomizedInputs
                    idOfInput="statusDesc"
                    label="Mô tả tình trạng xe"
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
                      Bảo dưỡng, bảo trì đầy đủ
                    </DescForCheckbox>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<LabelCheckbox>Không</LabelCheckbox>}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<LabelCheckbox>Có</LabelCheckbox>}
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
                      Xe có kinh doanh vận tải{" "}
                    </DescForCheckbox>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<LabelCheckbox>Không</LabelCheckbox>}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<LabelCheckbox>Có</LabelCheckbox>}
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
                Định giá ngay
              </Button>
            )}
          </Grid>
        </Form>
      </Formik>
    </CoverBox>
  );
};

export default FormAICycle;
