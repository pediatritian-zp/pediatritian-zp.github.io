import React from "react"
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
        { entry.frontmatter.customerName }
      </Grid>
    </Grid>
  </Grid>
);

export default Review;
