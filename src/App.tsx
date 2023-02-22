import { Container, Grid } from '@mui/material';
import Banner from 'Components/Banner';
import Navbar from 'Components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Container maxWidth="xl">
        <Navbar />
      </Container>
      <Banner />
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sm={12}
            md={6}
          >
            <div>
              
            </div>
          </Grid>
          <Grid
            item
            justifyContent={"center"}
            alignItems={"start"}
            sm={12}
            md={6}
          >
            Side
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
