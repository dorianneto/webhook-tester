import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: 'none',
  },
  nested: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 4),
    display: 'flex',
    flexDirection: 'line',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardRoot: {
    margin: theme.spacing(3),
  },
  cardHeader: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  cardHeaderAvatarGET: {
    backgroundColor: 'rgb(172, 160, 242) !important',
  },
  cardHeaderAvatarPOST: {
    backgroundColor: 'rgb(143, 200, 96) !important',
  },
  cardHeaderAvatarPATCH: {
    backgroundColor: 'rgb(229, 202, 30) !important',
  },
  cardHeaderAvatarPUT: {
    backgroundColor: 'rgb(249, 162, 48) !important',
  },
  cardHeaderAvatarDELETE: {
    backgroundColor: 'rgb(240, 109, 107) !important',
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  let { id, method, body, query, headers, updatedAt } = props.data;

  headers = headers ? Object.entries(headers) : [];
  query = query ? new URLSearchParams(Object.entries(query)).toString() : null;
  body = body ? JSON.stringify(body) : null;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card className={classes.cardRoot}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Chip className={classes[`cardHeaderAvatar${method}`]} label={method} />
        }
        title={`ID: ${id}`}
        subheader={new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }).format(updatedAt)}
      />
      <CardContent className={classes.tabRoot}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem className={body ? null : classes.hidden}>
            <ListItemText primary="Body" secondary={body} />
          </ListItem>
          <ListItem className={query ? null : classes.hidden}>
            <ListItemText primary="Query" secondary={query} />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Headers" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {headers.map(header => (
                <>
                  <ListItem className={classes.nested}>
                    <Chip label={header[0]} />
                    <Typography component="div">{header[1]}</Typography>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </Collapse>
        </List>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
