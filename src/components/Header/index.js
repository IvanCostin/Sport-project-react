import React from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ThemeSwitchButton from "../ThemeSwitchButton";
import { Link as ScrollLink, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import clsx from "clsx"
// import Logo from "../images/logo1.png"
import { logout } from '../../actions/authActions';

const useStyles = makeStyles((theme) => ({
  // offset: theme.mixins.toolbar,
  offset: {
    minHeight: "72px"
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    paddingRight: 20,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: "center"
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Header(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { isAuthenticated, user } = useSelector(state => state.tennisReducer.auth)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogoutClick = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    dispatch(logout())
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogoutClick}>Log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className="py-0 min-h-0 h-7">
        <ScrollLink
          activeClass="active"
          to="Products"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Products
        </ScrollLink>
      </MenuItem>
      <MenuItem className="py-0 min-h-0 h-7">
        <ScrollLink
          activeClass="active"
          to="Pricing"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Pricing
        </ScrollLink>
      </MenuItem>

      <MenuItem className="py-0 min-h-0 h-7">
        <ScrollLink
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Contact
        </ScrollLink>
      </MenuItem>
      <MenuItem className="py-0 min-h-0 h-7">Blog</MenuItem>
      <MenuItem className="py-0 min-h-0 h-7">Faq</MenuItem>
      <MenuItem className="py-0 min-h-0 h-7">Example</MenuItem>
      {isAuthenticated && (
        <MenuItem to="/matchcenter" component={Link} className="py-0 min-h-0 h-7">Match Center</MenuItem>
      )}
      <Divider className="bg-gray-900" />

      {!isAuthenticated ? (
        <>
          <MenuItem to="/login" component={Link} className="py-0 min-h-0 h-7">Login</MenuItem>
          <MenuItem to="/register" component={Link} className="py-0 min-h-0 h-7">Sign up</MenuItem>
        </>) : (
        <MenuItem className="py-0 min-h-0 h-7" onClick={handleLogoutClick}>Log out</MenuItem>
      )}
    </Menu>
  );

  const unAuthMenu = (
    <>
      <Button color="inherit" to="/login" component={Link} className={classes.menuButton}>Login</Button>
      <Button color="inherit" to='/register' component={Link} className={classes.menuButton}>Sign up</Button>
    </>
  );
  const isAuthMenu = (
    <Button
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
      startIcon={<AccountCircle />}
    >
      {/* {user.name} */}
      TIm
    </Button>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className="bg-white px-2 sm:px-28 py-1 ">
        <Toolbar className="flex flex-row w-full justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img className={classes.menuButton} src='/LOGO.png' style={{ width: 140 }} className="max-w-none" alt="logo" />
            </Link>
            <div className={classes.sectionDesktop}>
              <Button color="inherit" component={Link} to="/" className={classes.menuButton}>Home</Button>
              <ScrollLink
                activeClass="active"
                to="Products"
                spy={true}
                smooth={true}
                duration={1000}
                className="text-black leading-5 dark:text-black uppercase mx-3 cursor-pointer"
              >
                Products
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="Pricing"
                spy={true}
                smooth={true}
                duration={1000}
                className="text-black leading-5 dark:text-black uppercase mx-3 cursor-pointer"
              >
                Pricing
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                duration={1000}
                className="text-black leading-5 dark:text--black uppercase mx-3 cursor-pointer"
              >
                Contact
              </ScrollLink>

              <Button
                color="inherit"
                component={Link}
                to="/"
                className="text-black leading-5 dark:text-black"
              >
                BLOG
              </Button>

              <Button
                color="inherit"
                component={Link}
                to="/"
                className="text-black leading-5 dark:text-black"
              >
                FAQ
              </Button>

              <Button
                color="inherit"
                component={Link}
                to="/"
                className="text-black leading-5 dark:text-black"
              >
                EXAMPLE
              </Button>
              {isAuthenticated && (
                <Button
                  color="inherit"
                  component={Link}
                  to="/matchcenter"
                  className="text-black leading-5 dark:text-black"
                >
                  Match Center
                </Button>
              )}
            </div>
          </div>

          {!isAuthenticated ? (
            <Link to="/login" className={clsx(classes.sectionDesktop, "flex-col items-center text-black dark:text-gray-900")}>
              <AccountCircle className="text-4xl" />
              <span className="text-xs">LOGIN</span>
              {/* {isAuthenticated ? isAuthMenu : unAuthMenu} */}
            </Link>
          ) : (
            <Button onClick={handleProfileMenuOpen} className={clsx(classes.sectionDesktop, "flex-col items-center text-black dark:text-gray-900")}>
              <AccountCircle className="text-4xl" />
              <span className="text-xs">{user.name}</span>
            </Button>
          )}

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              className="text-black"
            >
              <MoreIcon />
            </IconButton>
          </div>
          {/* <ThemeSwitchButton /> */}


        </Toolbar>
      </AppBar>
      <div className={classes.offset} />

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Header;
