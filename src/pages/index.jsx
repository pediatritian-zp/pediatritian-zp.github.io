import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Section from '../components/section';
import Reviews from '../components/reviews';
import Sections from '../components/sections';
import Contacts from '../components/contacts';

const IndexPage = () => (
  <Layout>
    <SEO title="Галич Андрей Радиевич" />

    <Contacts/>

    <Sections/>

    <Section>
      <Reviews/>
    </Section>

    <div style={{backgroundColor:'green'}}>
      Фотографии - разделом, или вставить сбоку в Sections
    </div>

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
