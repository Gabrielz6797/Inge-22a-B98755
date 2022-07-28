import { useState } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { SodaCard } from './soda-card';
import { TitleBar } from '../../components/title-bar';

export const SodasLayout = ({ sodas, ...rest }) => {
  const [total, setTotal] = useState(0);

  return (
    <>
      <Box sx={{ pt: 3 }}>
        <Grid
          container
          spacing={3}
        >
          {sodas.map((soda) => (
            <Grid
              item
              key={soda.name}
              lg={3}
              md={6}
              xs={12}
            >
              <SodaCard soda={soda} setTotal={setTotal} />
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
        <TitleBar title={"Total: ₡" + total} />
      </Box>
      <br></br>
    </>
  );
}
