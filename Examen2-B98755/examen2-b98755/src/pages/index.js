import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Box, Container, Grid } from '@mui/material';
import { SodaListToolbar } from '../components/soda/soda-list-toolbar';
import { SodaCard } from '../components/soda/soda-card';
import { Layout } from '../components/layout';
import { URL } from 'src/utils/url';

class VendingMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sodas: [],
      APIUrl: URL + 'getSodas',
    };
  }

  componentDidMount() {
    axios.get(this.state.APIUrl).then(response => {
      this.setState({ sodas: response.data });
    });
  }

  render() {
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
