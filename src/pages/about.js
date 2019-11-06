import React from 'react'
import Layout from '../components/layout'
import { ProjectList } from '../components/ProjectList'
import { Button } from '@material-ui/core'

const About = () => {
  return (
    <Layout>
      <p>test</p>
      <Button variant='contained' color='primary'>Click</Button>
      <ProjectList />
    </Layout>
  )

}

export default About