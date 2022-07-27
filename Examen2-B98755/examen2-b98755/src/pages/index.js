import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Box, Button, Container, Grid } from '@mui/material';
import { SodaListToolbar } from '../components/soda/soda-list-toolbar';
import { SodaCard } from '../components/soda/soda-card';
import { Layout } from '../components/layout';
import { URL } from 'src/utils/url';

class VendingMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sodas: []
    };
  }

  componentDidMount() {
    axios.get(URL + 'getSodas').then(response => {
      this.setState({ sodas: response.data });
      sessionStorage.setItem("Coca-Cola", '0');
      sessionStorage.setItem("Pepsi", '0');
      sessionStorage.setItem("Fanta", '0');
      sessionStorage.setItem("Sprite", '0');
    });
  }

  render() {
    function Buy() {
      var data = {
        CocaCola: sessionStorage.getItem("Coca-Cola"),
        Pepsi: sessionStorage.getItem("Pepsi"),
        Fanta: sessionStorage.getItem("Fanta"),
        Sprite: sessionStorage.getItem("Sprite")
      };

      axios.post(URL + 'updateSodas', data).then(response => {
        alert("Compra realizada con éxito");
        window.location.reload();
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response)
          // The client was given an error response (5xx, 4xx)
          alert("Error: No se pudo realizar la compra");
        } else {
          alert("Error: No se puede conectar al servidor");
        }
      });
    };

    return (
      <>
        <Head>
          <title>
            Máquina de refrescos | Examen 2 - B98755
          </title>
        </Head>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Container maxWidth={false}>
            <SodaListToolbar />
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {this.state.sodas.map((soda) => (
                  <Grid
                    item
                    key={soda.name}
                    lg={3}
                    md={6}
                    xs={12}
                  >
                    <SodaCard soda={soda} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 3
              }}
            >
            </Box>
            <Button
              variant="outlined"
              onClick={Buy}
            >
              Comprar
            </Button>
          </Container>
        </Box>
      </>
    );
  }
}

VendingMachine.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default VendingMachine;
