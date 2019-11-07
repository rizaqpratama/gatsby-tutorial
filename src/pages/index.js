import React from 'react'
import Layout from '../components/layout'
import { ProjectList } from '../components/ProjectList'
import { Skills } from '../components/Skills'
import { Form } from '../components/Form'
import { Hero } from '../components/Hero'

const Index = () => {
  return (
    <Layout>
      <Hero tagline="Hi, saya Rizaq, developer web" />
      <Skills />
      <ProjectList />
      <Form />
    </Layout>
  )

}

export default Index