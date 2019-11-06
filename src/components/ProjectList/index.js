import React, { useEffect, useState } from 'react'
import Octokit from '@octokit/rest'


export const ProjectList = () => {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const oc = new Octokit({
      auth: "token 1d74f70b7fccbe3ddbb6aa4e9f555aaa0b714d45"
    })

  oc.repos
  .listForUser({
    username: 'rizaqpratama'
  })
  .then(({ data }) => {

    if(data.length > 5) {
      setRepos(data.slice(0,4))
    } else {
      setRepos(data)
    }
  });
    
  },[])

  return (
    <div>
      <ul>
      { repos.map(repo => {
        return(<li key={repo.name}>{repo.name}</li>) 
      }) }
      </ul>
    </div>
  )
}