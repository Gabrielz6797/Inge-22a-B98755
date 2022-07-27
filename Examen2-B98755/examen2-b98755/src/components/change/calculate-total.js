import { useState } from 'react';
import { Button, TextField } from '@mui/material';

export const CalculateTotal = ({ ...rest }) => {
  const [total, setTotal] = useState(0);

  const handleClick = event => {
    setTotal(parseInt(sessionStorage.getItem("Coca-ColaTotal"))
      + parseInt(sessionStorage.getItem("PepsiTotal"))
      + parseInt(sessionStorage.getItem("FantaTotal"))
      + parseInt(sessionStorage.getItem("SpriteTotal")));
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
      >
        Calcular total a pagar
      </Button>
      &nbsp;
      <TextField id="outlined-basic" label="Total" variant="outlined" value={"₡" + total} disabled />
    </>
  );
}
