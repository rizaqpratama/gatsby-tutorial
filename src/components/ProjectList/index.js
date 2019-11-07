import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const ProjectList = () => {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    
    axios.get('https://api.github.com/users/rizaqpratama/repos')
    .then((response) => {
      if(response.status === 200) {
        if(response.data.length > 5) {
              setRepos(response.data.slice(0,4))
            } else {
              setRepos(response.data)
            }
      }
    })
    
  },[])

  return (
    <div>
      <ul>
      { repos.map(repo => {
        return(<li key={repo.name}>
          <div>
            <h4><a href={repo.html_url}>{repo.name}</a></h4>
            <p>{repo.description}</p>
          </div>

        </li>) 
      }) }
      </ul>
    </div>
  )
}