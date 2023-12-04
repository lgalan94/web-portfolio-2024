import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import {
  Link
} from 'react-router-dom';
 
export default function DefaultSidebar() {
  return (
    <Card floated={false} shadow={false} className="h-[530px] w-full max-w-[18rem] p-4 bg-defaultColor block md:hidden ">
      <div className="mb-2 capitalize p-4">
        <Typography variant="h5" color="blue-gray">
          messages
        </Typography>
      </div>
      <List>
        <Link to={`/admin/messages/inbox`}>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="12" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <Link to={`/admin/messages/archive`}>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Archive
          </ListItem>
        </Link>
        <Link to={`/logout`}>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}