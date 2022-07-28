import PropTypes from 'prop-types';
import { useState } from 'react';
import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';

export const SodaCard = ({ soda, setTotal, ...rest }) => {
  const [buyQuantity, setBuyQuantity] = useState(0);

  function DecreaseQuantity() {
    if (buyQuantity > 0) {
      sessionStorage.setItem(soda.name + "Quantity", buyQuantity - 1);
      sessionStorage.setItem(soda.name + "Total", (buyQuantity - 1) * soda.price);
      setTotal(parseInt(sessionStorage.getItem("Coca-ColaTotal"))
        + parseInt(sessionStorage.getItem("PepsiTotal"))
        + parseInt(sessionStorage.getItem("FantaTotal"))
        + parseInt(sessionStorage.getItem("SpriteTotal")));
      setBuyQuantity(buyQuantity - 1);
    }
    else {
      alert("Error: Mínimo alcanzado");
    }
  };

  function IncreaseQuantity() {
    if (buyQuantity < soda.quantity) {
      sessionStorage.setItem(soda.name + "Quantity", buyQuantity + 1);
      sessionStorage.setItem(soda.name + "Total", (buyQuantity + 1) * soda.price);
      setTotal(parseInt(sessionStorage.getItem("Coca-ColaTotal"))
        + parseInt(sessionStorage.getItem("PepsiTotal"))
        + parseInt(sessionStorage.getItem("FantaTotal"))
        + parseInt(sessionStorage.getItem("SpriteTotal")));
      setBuyQuantity(buyQuantity + 1);
    }
    else {
      alert("Error: Máximo alcanzado");
    }
  };

  let numberFormatter = new Intl.NumberFormat("es-CR", {
    style: 'currency',
    currency: 'CRC',
  });

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
              Cant. {buyQuantity} |&nbsp;
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="body1"
            >
              ₡{buyQuantity * soda.price}
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

SodaCard.propTypes = {
  soda: PropTypes.object.isRequired
};
