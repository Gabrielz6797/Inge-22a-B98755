import { Box, Grid } from '@mui/material';
import { ChangeCard } from './change-card';

export const ChangeLayout = ({ coins, ...rest }) => {
  return (
    <>
      <Box sx={{ pt: 3 }}>
        <Grid
          container
          spacing={3}
        >
          {coins.map((coin) => (
            <Grid
              item
              key={coin.value}
              lg={3}
              md={6}
              xs={12}
            >
              <ChangeCard coin={coin} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
