import styled from '@emotion/styled';
import {Drawer, List, ListItemButton, ListItemText} from '@mui/material';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const drawerWidth = 200;

export type LinkItem = {
  name: string;
  link: string;
};

type Props = {
  linkItems: LinkItem[];
};

const CustomDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    width: drawerWidth,
  },
}));

export const SideBar: React.FC<Props> = ({linkItems}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <CustomDrawer variant="permanent" anchor="left" open={true}>
      <List component="nav">
        {linkItems.map(linkItem => (
          <ListItemButton
            selected={location.pathname === `${linkItem.link}`}
            key={linkItem.link}
            onClick={() => navigate(`${linkItem.link}`)}>
            <ListItemText primary={linkItem.name} />
          </ListItemButton>
        ))}
      </List>
    </CustomDrawer>
  );
};
