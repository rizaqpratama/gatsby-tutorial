import React from 'react'
import { CardWithMargin } from './styles'
import { data } from './constants'
import { CardHeader, CardContent, Divider, Chip } from '@material-ui/core'

export const Skills = () => {
  return (
    <div>
      <CardWithMargin>
        <CardHeader title="Experience" />
        <CardContent>
          <ul style={{ listStyle: 'none' }}>
            {data.experience.map((e) => {
              return (
                <li>
                  <div>
                    <h3>{e.name}</h3>
                    <h4>{e.position}</h4>
                    <p style={{ color: 'grey' }}>{e.description}</p>
                    <Divider />
                  </div>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </CardWithMargin>

      <CardWithMargin>
        <CardHeader title="Education" />
        <CardContent>
          <ul style={{ listStyle: 'none' }}>
            {data.education.map((e) => {
              return (
                <li>
                  <div>
                    <h4>{e.name} {e.year} {e.degree}</h4>
                  </div>
                  <Divider />
                </li>
              )
            })}
          </ul>
        </CardContent>
      </CardWithMargin>

      <CardWithMargin>
        <CardHeader title="Skills" />
        <CardContent>
          <ul style={{ listStyle: 'none' }}>
            {data.skills.map((e) => {
              return (
                <li style={{ display: 'inline' }}>
                  <Chip label={e} />
                </li>
              )
            })}
          </ul>
        </CardContent>
      </CardWithMargin>
    </div>
  )
}

