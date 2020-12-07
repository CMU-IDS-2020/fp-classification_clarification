import React from 'react'

export default function Iframe({ iframe }) {
  const iframe = iframe
  return (
    <div dangerouslySetInnerHTML={ {__html:  iframe}} />
  )
}