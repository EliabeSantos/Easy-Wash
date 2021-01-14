import { Container } from "./style";
import {
  Button,
  Drawer,
  List,
  IconButton,
  Divider,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import { FiChevronLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const auth = localStorage.getItem("authToken");
  const history = useHistory();
  const handleMenu = () => {
    setOpen(true);
  };
  return (
    <Container>
      <div className="menuContainer">
        <Button
          aria-controls="header-menu"
          onClick={handleMenu}
          color="default"
        >
          <MenuIcon />
        </Button>
        <Drawer variant="persistent" anchor="left" open={open}>
          <div className="drawerHeader">
            <IconButton onClick={() => setOpen(false)}>
              <FiChevronLeft />
            </IconButton>
          </div>
          {/* <Divider /> */}
          <List>
            <ListItem
              button
              onClick={() =>
                auth ? history.push("/profile") : history.push("/login")
              }
            >
              {auth ? "Perfil" : "Login"}
            </ListItem>
            <ListItem button>Lavandersons</ListItem>
          </List>
        </Drawer>
      </div>

      <div className="imageContainer">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
