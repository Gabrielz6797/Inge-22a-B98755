import PropTypes from 'prop-types';
import { useState } from 'react';
import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';

export const SodaCard = ({ soda, ...rest }) => {
  const [buyQuantity, setBuyQuantity] = useState(0);

  function DecreaseQuantity() {
    if (buyQuantity > 0) {
      setBuyQuantity(buyQuantity - 1);
    }
  };

  function IncreaseQuantity() {
    if (buyQuantity < soda.quantity) {
      setBuyQuantity(buyQuantity + 1);
    }
  };

  function Buy() {
    
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            alt={soda.name}
            src={soda.imageURL}
            sx={{ width: 112, height: 112 }}
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {soda.name}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          Precio: ₡{soda.price}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          Disponibles: {soda.quantity}
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
              {buyQuantity}
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
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              variant="outlined"
              onClick={Buy}
            >
              Comprar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

SodaCard.propTypes = {
  soda: PropTypes.object.isRequired
};
