import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.css'


export const ProjectList = () => {
  const [repos, setRepos] = useState([])
  useEffect(() => {

    axios.get('https://api.github.com/users/rizaqpratama/repos')
      .then((response) => {
        if (response.status === 200) {
          if (response.data.length > 5) {
            setRepos(response.data.slice(0, 4))
          } else {
            setRepos(response.data)
          }
        }
      })

  }, [])

  return (
    <div>
      <h3>Projects</h3>
      <ul style={{ listStyle: 'none' }}>
        {repos.map(repo => {
          return (<li key={repo.name}>
            <div className='project'>
              <h4><a href={repo.html_url}>{repo.name}</a></h4>
              <p>{repo.description}</p>
            </div>
          </li>)
        })}
      </ul>
    </div>
  )
}