import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';

export const ChangeCard = ({ coin, ...rest }) => {
  const [coinQuantity, setCoinQuantity] = useState(0);

  function DecreaseQuantity() {
    if (coinQuantity > 0) {
      sessionStorage.setItem(coin.value + "Quantity", coinQuantity - 1);
      sessionStorage.setItem(coin.value + "Total", (coinQuantity - 1) * coin.value);
      setCoinQuantity(coinQuantity - 1);
    }
    else {
      alert("Error: Mínimo alcanzado");
    }
  };

  function IncreaseQuantity() {
    sessionStorage.setItem(coin.value + "Quantity", coinQuantity + 1);
    sessionStorage.setItem(coin.value + "Total", (coinQuantity + 1) * coin.value);
    setCoinQuantity(coinQuantity + 1);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}
    >
      <CardContent>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          ₡{coin.value}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          En sistema: {coin.quantity}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              variant="outlined"
              onClick={DecreaseQuantity}
            >
              -
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Typography
              align="center"
              color="textPrimary"
              variant="body1"
            >
              ₡{coinQuantity * coin.value}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              variant="outlined"
              onClick={IncreaseQuantity}
            >
              +
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

ChangeCard.propTypes = {
  coin: PropTypes.object.isRequired
};
