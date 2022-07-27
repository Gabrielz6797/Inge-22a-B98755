import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/soda/soda-list-toolbar';
import { ProductCard } from '../components/soda/soda-card';
import { Layout } from '../components/layout';

const VendingMachine = () => (
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
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={3}
                md={6}
                xs={12}
              >
                <ProductCard product={product} />
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

VendingMachine.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default VendingMachine;
