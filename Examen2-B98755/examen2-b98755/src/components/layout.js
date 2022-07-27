import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 0,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 0
  }
}));

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <LayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </LayoutRoot>
    </>
  );
};
