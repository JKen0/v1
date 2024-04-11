import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

interface Props {
  onClose: (value: boolean) => void;
}

const WarningAlert = ({ onClose }: Props) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        botttom: 20,
        right: 20,
        maxWidth: "350px",
        zIndex: 9999, // Ensure it's above other content
      }}
    >
      <Alert variant="filled" severity="warning" onClose={() => { onClose(false) }}>
        Error while fetching API data. Test Data will now be displayed.
      </Alert>
    </Box>
  );
};

export default WarningAlert;
