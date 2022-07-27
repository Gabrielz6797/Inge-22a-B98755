import { Box, Grid } from '@mui/material';
import { SodaCard } from './soda-card';
import { CalculateTotal } from '../change/calculate-total';

export const SodasLayout = ({ sodas, ...rest }) => {
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
      <br></br>
    </>
  );
}
