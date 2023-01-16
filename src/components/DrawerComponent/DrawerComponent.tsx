import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import './DrawerComponent.css'

type Props = {
    openDrawer:boolean,
    setIsMobile:(openDrawer:boolean)=>void
}

export default function DrawerComponent(props: Props) {
    const { openDrawer, setIsMobile} = props
  return (
    <Drawer
    PaperProps={{
        sx: { width: "60%" },
        className:'drawer-container'
      }}
    open={openDrawer}
    onClose={() => setIsMobile(!openDrawer)}
    >
        <div className="logo">
            Sky Musiq
        </div>
        <List>
        <ListItem onClick={() => setIsMobile(!openDrawer)}>
            <ListItemText>
            <NavLink exact to="/" className='mb-link' activeClassName='mb-active' >
              Top Albums
            </NavLink>
            
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setIsMobile(!openDrawer)}>
            <ListItemText>
            <NavLink to="/about" className='mb-link' activeClassName='mb-active' >
              your Favorites
            </NavLink>
            </ListItemText>
          </ListItem>
        </List>
        </Drawer>
  )
}
