import { Box, Typography } from '@mui/material';

export const TitleBar = ({ title, ...props }) => {
  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
