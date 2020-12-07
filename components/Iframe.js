import React from 'react'

export default function Iframe({ link }) {
  const iframe = `<iframe src=${link} width="100%" height="400px" style="border: 1px solid #ccc" frameborder=0></iframe>`
  return (
    <div dangerouslySetInnerHTML={ {__html:  iframe}} />
  )
}