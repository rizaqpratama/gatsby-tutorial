import React from 'react'
import Layout from '../components/layout'
import { ProjectList } from '../components/ProjectList'
import { Button } from '@material-ui/core'
import { Skills } from '../components/Skills'
import { Form } from '../components/Form'

const About = () => {
  return (
    <Layout>
      <Skills />
      <ProjectList />
      <Form />
    </Layout>
  )

}

export default About