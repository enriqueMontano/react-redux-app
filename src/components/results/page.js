import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CssBaseline } from "@material-ui/core";
import AppBar from "../appBar";
import "./style.css";

const Page = (props) => {
  const { results, goTo } = props;
  const isEmpty = results.length === 0;

  return (
    <Fragment>
      <CssBaseline />
      <AppBar />
      <div className="results-page">
        {isEmpty ? (
          <Typography variant="h5" component="h3" className="page-message">
            There are no results
          </Typography>
        ) : (
          results.map((cv) => (
            <div key={cv.id} className="card-container">
              <Card className="card" onClick={() => goTo(`/details/${cv.id}`)}>
                <CardActionArea>
                  <CardMedia
                    className="card-media"
                    image={cv.image}
                    title={cv.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cv.title}
                    </Typography>
                    <Typography component="p">{cv.content}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Page;
