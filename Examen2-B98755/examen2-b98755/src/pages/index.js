import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { SodaListToolbar } from '../components/soda/soda-list-toolbar';
import { SodaCard } from '../components/soda/soda-card';
import { CalculateTotal } from '../components/change/calculate-total';
import { Layout } from '../components/layout';
import { URL } from 'src/utils/url';

class VendingMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      sodas: []
    };
  }

  componentDidMount() {
    axios.get(URL + 'getSodas').then(response => {
      this.setState({ isLoaded: true, sodas: response.data });
      sessionStorage.setItem("Coca-ColaQuantity", '0');
      sessionStorage.setItem("PepsiQuantity", '0');
      sessionStorage.setItem("FantaQuantity", '0');
      sessionStorage.setItem("SpriteQuantity", '0');
      sessionStorage.setItem("Coca-ColaTotal", '0');
      sessionStorage.setItem("PepsiTotal", '0');
      sessionStorage.setItem("FantaTotal", '0');
      sessionStorage.setItem("SpriteTotal", '0');
    });
  }

  render() {
    function Buy() {
      var data = {
        CocaCola: sessionStorage.getItem("Coca-ColaQuantity"),
        Pepsi: sessionStorage.getItem("PepsiQuantity"),
        Fanta: sessionStorage.getItem("FantaQuantity"),
        Sprite: sessionStorage.getItem("SpriteQuantity")
      };

      if (data.CocaCola != '0' || data.Pepsi != '0' || data.Fanta != '0' || data.Sprite != '0') {
        axios.post(URL + 'updateSodas', data).then(response => {
          alert("Compra realizada con éxito");
          window.location.reload();
        }).catch(function (error) {
          if (error.response) {
            console.log(error.response)
            alert("Error: No se pudo realizar la compra");
          } else {
            alert("Error: No se puede conectar al servidor");
          }
        });
      }
      else {
        alert("No ha seleccioado ningún refresco");
      }
    };

    if (!this.state.isLoaded) {
      return <div></div>;
    } else {
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
                <CalculateTotal />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 3
                }}
              >
                <Button
                  variant="outlined"
                  onClick={Buy}
                >
                  Comprar
                </Button>
              </Box>
            </Container>
          </Box>
        </>
      );
    }
  }
}

VendingMachine.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default VendingMachine;
