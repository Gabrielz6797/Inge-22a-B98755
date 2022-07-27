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

    sessionStorage.setItem("1000Quantity", '0');
    sessionStorage.setItem("500Quantity", '0');
    sessionStorage.setItem("100Quantity", '0');
    sessionStorage.setItem("50Quantity", '0');
    sessionStorage.setItem("25Quantity", '0');
    sessionStorage.setItem("1000Total", '0');
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

      if (data.cocaCola != '0' || data.pepsi != '0' || data.fanta != '0' || data.sprite != '0') {
        let payment = parseInt(sessionStorage.getItem("1000Total"))
          + parseInt(sessionStorage.getItem("500Total"))
          + parseInt(sessionStorage.getItem("100Total"))
          + parseInt(sessionStorage.getItem("50Total"))
          + parseInt(sessionStorage.getItem("25Total"));

        let totalCost = parseInt(sessionStorage.getItem("Coca-ColaTotal"))
          + parseInt(sessionStorage.getItem("PepsiTotal"))
          + parseInt(sessionStorage.getItem("FantaTotal"))
          + parseInt(sessionStorage.getItem("SpriteTotal"));

        if (payment >= totalCost) {
          let change = payment - totalCost;
          axios.post(URL + 'buySodasAndGetChange?change=' + change, data).then(response => {
            if (response.data.fiveHundred != 0 || response.data.oneHundred != 0
              || response.data.fifty != 0 || response.data.twentyFive != 0) {
              let desglose = "Desglose:" + "\n" + "\t";
              if (response.data.fiveHundred != 0) {
                desglose = desglose + response.data.fiveHundred + " moneda/s de " + 500 + "\n" + "\t ";
              }
              if (response.data.oneHundred != 0) {
                desglose = desglose + response.data.oneHundred + " moneda/s de " + 100 + "\n" + "\t ";
              }
              if (response.data.fifty != 0) {
                desglose = desglose + response.data.fifty + " moneda/s de " + 50 + "\n" + "\t ";
              }
              if (response.data.twentyFive != 0) {
                desglose = desglose + response.data.twentyFive + " moneda/s de " + 25 + + "\n" + "\t ";
              }
              alert("Compra realizada con éxito, su vuelto es de "
                + (response.data.fiveHundred * 500
                  + response.data.oneHundred * 100
                  + response.data.fifty * 50
                  + response.data.twentyFive * 25)
                + " colones" + "\n" + desglose
              );
              window.location.reload();
            }
            else {
              alert("Fallo al realizar la compra, no hay suficiente vuelto en el sistema");
            }
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
          alert("No ingresó suficiente dinero");
        }
      }
      else {
        alert("No ha seleccioado ningún refresco");
      }
    };

    if (!(this.state.isLoadedSodas && this.state.isLoadedCoins)) {
      return <div></div>;
    } else if ((parseInt(this.state.coins[1].value) * parseInt(this.state.coins[1].quantity)
      + parseInt(this.state.coins[2].value) * parseInt(this.state.coins[2].quantity)
      + parseInt(this.state.coins[3].value) * parseInt(this.state.coins[3].quantity)
      + parseInt(this.state.coins[4].value) * parseInt(this.state.coins[4].quantity)) < 500 ||
      (parseInt(this.state.coins[1].value) * parseInt(this.state.coins[1].quantity)
        + parseInt(this.state.coins[2].value) * parseInt(this.state.coins[2].quantity)
        + parseInt(this.state.coins[3].value) * parseInt(this.state.coins[3].quantity)
        + parseInt(this.state.coins[4].value) * parseInt(this.state.coins[4].quantity)) < 550 &&
      this.state.sodas[0].quantity == 0 ||
      (parseInt(this.state.coins[1].value) * parseInt(this.state.coins[1].quantity)
        + parseInt(this.state.coins[2].value) * parseInt(this.state.coins[2].quantity)
        + parseInt(this.state.coins[3].value) * parseInt(this.state.coins[3].quantity)
        + parseInt(this.state.coins[4].value) * parseInt(this.state.coins[4].quantity)) < 600 &&
      this.state.sodas[0].quantity == 0 && this.state.sodas[2].quantity == 0 ||
      (parseInt(this.state.coins[1].value) * parseInt(this.state.coins[1].quantity)
        + parseInt(this.state.coins[2].value) * parseInt(this.state.coins[2].quantity)
        + parseInt(this.state.coins[3].value) * parseInt(this.state.coins[3].quantity)
        + parseInt(this.state.coins[4].value) * parseInt(this.state.coins[4].quantity)) < 725 &&
      this.state.sodas[0].quantity == 0 && this.state.sodas[1].quantity == 0 && this.state.sodas[2].quantity == 0) {
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
              < TitleBar title={"Sistema fuera de servicio"} />
            </Container>
          </Box>
        </>
      );
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
