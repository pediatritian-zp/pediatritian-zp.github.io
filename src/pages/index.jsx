import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Lorem from '../components/lorem';
import Section from '../components/section';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Section>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <p>Some testimonials</p>
          <Rating value={5} readOnly/>
          <Grid container spacing={1} alignItems='center'>
            <Grid item>
              User Name
            </Grid>
            <Grid item>
              <Avatar src='/'/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <h3>Wall</h3>
          <Lorem/>
          <Rating value={5} readOnly/>
        </Grid>
        <Grid item xs={12} md={4}>
          <h3>Will</h3>
          <Lorem/>
          <Rating value={5} readOnly/>
        </Grid>
      </Grid>
    </Section>
    <Section>
      <Lorem length={2}/>
    </Section>
    <Section>
      <Lorem length={2}/>
    </Section>
    <Section>
      <Lorem length={2}/>
    </Section>
    <Section>
      <Lorem length={2}/>
    </Section>
    <Section>
      <Lorem length={2}/>
    </Section>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Layout>
);

export default IndexPage
