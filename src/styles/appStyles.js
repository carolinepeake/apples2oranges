import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledContainer = styled(Box)({
  transform: 'translate(-50%,-50%)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  maxWidth: '600px',
  borderRadius: '50px',
  width: '100%',
  '&::before': {
    zIndex: '-1',
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    minHeight: '100%',
    padding: '0 2em',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
});
