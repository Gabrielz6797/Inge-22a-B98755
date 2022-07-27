import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Box, Button, Container } from '@mui/material';
import { TitleBar } from '../components/title-bar';
import { Layout } from '../components/layout';
import { SodasLayout } from '../components/soda/sodas-layout';
import { ChangeLayout } from '../components/change/change-layout';
import { URL } from 'src/utils/url';

class VendingMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadedSodas: false,
      isLoadedCoins: false,
      sodas: [],
      coins: []
    };
  }

  componentDidMount() {
    axios.get(URL + 'getSodas').then(response => {
      this.setState({ isLoadedSodas: true, sodas: response.data });
    });
    axios.get(URL + 'getCoins').then(response => {
      this.setState({ isLoadedCoins: true, coins: response.data });
    });
    sessionStorage.setItem("Coca-ColaQuantity", '0');
    sessionStorage.setItem("PepsiQuantity", '0');
    sessionStorage.setItem("FantaQuantity", '0');
    sessionStorage.setItem("SpriteQuantity", '0');
    sessionStorage.setItem("Coca-ColaTotal", '0');
    sessionStorage.setItem("PepsiTotal", '0');
    sessionStorage.setItem("FantaTotal", '0');
    sessionStorage.setItem("SpriteTotal", '0');

    sessionStorage.setItem("500Quantity", '0');
    sessionStorage.setItem("100Quantity", '0');
    sessionStorage.setItem("50Quantity", '0');
    sessionStorage.setItem("25Quantity", '0');
    sessionStorage.setItem("500Total", '0');
    sessionStorage.setItem("100Total", '0');
    sessionStorage.setItem("50Total", '0');
    sessionStorage.setItem("25Total", '0');
  }

  render() {
    function Buy() {
      var data = {
        cocaCola: sessionStorage.getItem("Coca-ColaQuantity"),
        pepsi: sessionStorage.getItem("PepsiQuantity"),
        fanta: sessionStorage.getItem("FantaQuantity"),
        sprite: sessionStorage.getItem("SpriteQuantity")
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

    if (!(this.state.isLoadedSodas && this.state.isLoadedCoins)) {
      return <div></div>;
    } else if ((parseInt(this.state.coins[1].value) * parseInt(this.state.coins[1].quantity) + parseInt(this.state.coins[2].value) * parseInt(this.state.coins[2].quantity) + parseInt(this.state.coins[3].value) * parseInt(this.state.coins[3].quantity) + parseInt(this.state.coins[4].value) * parseInt(this.state.coins[4].quantity)) < 500) {
      return <TitleBar title={"Sistema fuera de servicio"} />;
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
              <TitleBar title={"Máquina de refrescos"} />
              <SodasLayout sodas={this.state.sodas} />
              <TitleBar title={"Pago"} />
              <ChangeLayout coins={this.state.coins} />

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
