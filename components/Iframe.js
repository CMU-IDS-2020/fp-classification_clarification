import React from 'react'

export default function Iframe(props) {
  const iframe = '<iframe src="https://www.desmos.com/calculator/plfizuubiv?embed" width="100%" height="400px" style="border: 1px solid #ccc" frameborder=0></iframe>'
  return (
    <div dangerouslySetInnerHTML={ {__html:  iframe}} />
  )
}