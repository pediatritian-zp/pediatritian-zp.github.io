import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Lorem from '../components/lorem';
import Section from '../components/section';
import Reviews from '../components/reviews';

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

    </Section>
    <Section>
      <Reviews/>
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
