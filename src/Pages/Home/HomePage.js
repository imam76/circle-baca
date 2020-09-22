import React from "react";
import {
  Grid,
  Typography,
  Box,
  makeStyles,
  Button,
  Paper,
} from "@material-ui/core";

//import svg
import BookLover from "../../Assets/Svg/BookLover.svg";
import { Link, useHistory } from "react-router-dom";
const useStyles = makeStyles({
  tagline: {
    height: "100%",
  },
});

function HomePage() {
  const classes = useStyles();
  const history = useHistory();
  const handleCreateSomething = () => {
    history.push("/writebook");
  };
  return (
    <div>
      <Grid container className="header-landing-page" justify="center">
        <Grid container alignItems="flex-start" item xs={10}>
          <Grid item xs={7}>
            <img
              className="cover-book"
              src={BookLover}
              className="img-banner-landing-page"
            />
          </Grid>
          <Grid
            container
            classes={{ root: classes.tagline }}
            justify="flex-start"
            alignItems="center"
            item
            xs
          >
            <Grid container spacing={4} direction="row" item xs={12}>
              <Grid item xs={12}>
                <Typography
                  component="span"
                  variant="h3"
                  color="primary"
                  className="alfa-slab-one uppercase"
                >
                  Read, It’s a need you can feed.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="p" variant="body1" className="lowercase">
                  Reading Slogans shows the importance of reading books. You can
                  go anywhere by reading a book. You can learn a lot.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginRight: 8 }}
                >
                  Read Now
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  style={{ marginLeft: 8 }}
                  onClick={handleCreateSomething}
                >
                  Create something
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className="margin-top-64">
        <Grid item xs={10}>
          <Typography variant="h3" component="span" className="capitalize">
            buku pilihan untuk mu
          </Typography>
        </Grid>
        <Grid container item xs={10} className="margin-top-16">
          <Grid item xs={2} style={{ marginRight: 32 }}>
            <Paper elevation={2}>
              <img
                className="cover-book"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
              />
            </Paper>
            <Button
              variant="outlined"
              size="small"
              className="margin-top-16 btn-rounded padding-none"
            >
              <Typography className="lowercase" component="p" variant="caption">
                Novel
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={2} style={{ marginRight: 32 }}>
            <Paper elevation={2}>
              <img
                className="cover-book"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
              />
            </Paper>
            <Button
              variant="outlined"
              size="small"
              className="margin-top-16 btn-rounded padding-none"
            >
              <Typography className="lowercase" component="p" variant="caption">
                Novel
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={2} style={{ marginRight: 32 }}>
            <Paper elevation={2}>
              <img
                className="cover-book"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
              />
            </Paper>
            <Button
              variant="outlined"
              size="small"
              className="margin-top-16 btn-rounded padding-none"
            >
              <Typography className="lowercase" component="p" variant="caption">
                Novel
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={2} style={{ marginRight: 32 }}>
            <Paper elevation={2}>
              <img
                className="cover-book"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
              />
            </Paper>
            <Button
              variant="outlined"
              size="small"
              className="margin-top-16 btn-rounded padding-none"
            >
              <Typography className="lowercase" component="p" variant="caption">
                Novel
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
