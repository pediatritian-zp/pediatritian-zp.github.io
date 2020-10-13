import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from '../components/section';
import Reviews from '../components/reviews';
import Sections from '../components/sections';
import Contacts from '../components/contacts';
import Gallery from '../components/gallery';
import Map from '../components/map';

const IndexPage = () => (
  <Layout>
    <SEO title="Галич Андрей Радиевич" />

    <Contacts/>

    <Sections/>

    <Section>
      <Map/>
    </Section>

    <Section>
      <Reviews/>
    </Section>

    <Gallery/>
  </Layout>
);

export default IndexPage
