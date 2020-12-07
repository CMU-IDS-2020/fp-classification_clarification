import React from 'react'

export default function Iframe(props) {
  const iframe = '<iframe src="https://www.desmos.com/calculator/plfizuubiv?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>'
  return (
    <div dangerouslySetInnerHTML={ {__html:  iframe}} />
  )
}