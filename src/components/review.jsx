import React from "react"
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const Review = ({entry}) => (
  <Grid item xs={12} md={4}
        style={{justifyContent: 'space-between', flexDirection: 'column', display: 'flex'}}>
    <Grid item>
      <div dangerouslySetInnerHTML={{ __html: entry.html }} />
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Avatar src='/'/>
      </Grid>
      <Grid item xs={10} style={{alignItems: 'flex-end', display: 'flex'}}>
        User Name
      </Grid>
      <Rating value={5} readOnly/>
    </Grid>

  </Grid>
);

export default Review;
