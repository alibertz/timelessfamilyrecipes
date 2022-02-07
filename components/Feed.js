import styles from "../styles/Components/Feed/Feed.module.scss";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Feed({ posts }) {
  // const posts = {
  //   data: [
  //     {
  //       _id: "423423423",
  //       title: "Aliberti",
  //       subtitle: "subtitle",
  //     },
  //     {
  //       _id: "4eew324",
  //       title: "Dunphy",
  //       subtitle: "subtitle",
  //     },
  //   ],
  // };
  return (
    <div className={styles.feed}>
      <ul>
        {posts.data.map((post) => (
          <li key={`post-${post._id}`}>
            {/* <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <h3>{post.subtitle}</h3> */}
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {post._id}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {post.subtitle}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">See More</Button>
                  </CardActions>
                </React.Fragment>
              </Card>
            </Box>
          </li>
        ))}
      </ul>
    </div>
  );
}
