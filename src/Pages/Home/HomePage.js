import {
  Divider, Grid, IconButton, List,
  ListItem, ListItemSecondaryAction, ListItemText,
  Typography
} from "@material-ui/core";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function HomePage() {
  const history = useHistory();
  const [state, setstate] = useState([]);

  const fetchData = async () => {
    const result = await axios("http://localhost:3002/posts");
    setstate(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (id) => () => {
    console.log("item clicked", id);
    history.push(`/read-book/${id}`);
  };

  const handleDelete = (id) => () => {
    const url = `http://localhost:3002/posts/${id}`;
    axios
      .delete(url)
      .then((res) => {
        console.log("delete res", res);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(state);

  return (
    <Grid container justify="center">
      <Grid item xs={8} className="padding-top-94">
        <List component="ul" aria-label="secondary mailbox folders">
          {state.length !== 0 ? (
            state.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem button onClick={handleClick(item.id)}>
                  <ListItemText
                    primary={
                      <Typography variant="h5" color="primary">
                        {item.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="caption">
                        Author: {item.author}
                      </Typography>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="delete"
                      onClick={handleDelete(item.id)}
                    >
                      <DeleteForeverRoundedIcon color="secondary" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="fullWidth" component="li" />
              </React.Fragment>
            ))
          ) : (
            <Typography> Data Kosong </Typography>
          )}
        </List>
      </Grid>
    </Grid>
  );
}

export default HomePage;
