import { Container, Grid } from "@mui/material";
import Banner from "Components/Banner";
import FormAICycle from "Components/MainBody/Form";
import SideBanner from "Components/MainBody/Sidebanner";
import Navbar from "Components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Container maxWidth="xl">
        <Navbar />
      </Container>
      <Banner />
      <Container maxWidth="xl">
        <div>
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
