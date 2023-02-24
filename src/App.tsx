import { Container, Grid } from "@mui/material";
import Banner from "Components/Banner";
import FormAICycle from "Components/MainBody/Form";
import SideBanner from "Components/MainBody/Sidebanner";
import Navbar from "Components/Navbar";
import "./App.css";
import { useMediaQuery } from "@mui/material";

function App() {
  const isTabletOrMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <Container maxWidth="xl">
        <Navbar />
      </Container>
      <Banner />
      <Container maxWidth="xl" style={{padding:`${isTabletOrMobile ? '0px':'16px'}`  }}>
        <div className="hai" style={{marginTop:`${isTabletOrMobile ? '0px':'-120px'} `,padding:`${isTabletOrMobile ? '0px 0px':'0px 200px'}`  }}>
          <Grid container >
            <Grid
              item
              sm={12}
              md={6}
            >
              <FormAICycle />
            </Grid>
            <Grid
              item
              justifyContent={"center"}
              alignItems={"start"}
              sm={12}
              md={6}
            >
              <SideBanner/>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
