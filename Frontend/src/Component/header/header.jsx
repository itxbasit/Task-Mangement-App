import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../assets/images/logo.png'
import Drop from '../MainFrame/Dropdown';

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div style={{ display: "flex" }}>
          <img src={logo} style={{ width: "2rem", margin: "0.5rem 1rem" }} />
          <div style={{ margin: "0.5rem 0rem" }}>
            <p style={{ fontWeight: "550", fontSize: "0.8rem" }}>Task Mangement App</p>
            <p style={{ fontSize: "0.44rem" }}>Manage Your Task</p>
          </div>
        </div>
      </Typography>
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const boxSX = {
    color: 'black', background: "#fff", fontWeight: '550', borderRadius: "10px",
    "&:hover": {
      backgroundColor: '#fff'
    },
  }
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: "#fff", border: "none" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}

          >
            <div style={{ display: "flex" }}>
              <img src={logo} style={{ width: "3rem", margin: "0.5rem" }} />
              <div style={{ margin: "0.5rem 0.6rem" }}>
              <p style={{ fontWeight: "550", color: "#5C92F7"}}>Task Mangement App</p>
                <p style={{ fontSize: "0.7rem", marginLeft: "6.8rem", color: "black" }}>Manage Your Task</p>
              </div>
            </div>

          </Typography>
          <Box sx={{position: "absolute", right: "0", margin: "0rem 0.5rem 0.3rem 0"}}>
             <Drop/>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;