import PropTypes from 'prop-types';
// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src="/static/Baby-App.png" sx={{ marginLeft:'35px', width: 150, height: 150, ...sx }} />;
}
