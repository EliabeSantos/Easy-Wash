import { Container } from "./style"
import { Menu, MenuItem, Button } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(false)

  const handleMenu = () => {
    setAnchorEl(!anchorEl)
  }
  return (
    <Container>
      <div className="imageContainer">
        <Link to="/">
          <img src="https://picsum.photos/200" alt="Logo" />
        </Link>
      </div>

      <div className="menuContainer">
        <Button
          aria-controls="header-menu"
          onClick={handleMenu}
          color="default"
        >
            <MenuIcon/>
        </Button>
        <Menu id="header-menu" anchorEl={anchorEl} open={anchorEl} anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
        }}>
          <MenuItem onClick={handleMenu}>Perfil</MenuItem>
          <MenuItem onClick={handleMenu}>Lavandersons</MenuItem>
        </Menu>
      </div>
    </Container>
  )
}

export default Header
