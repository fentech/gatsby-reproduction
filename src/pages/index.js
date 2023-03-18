import React from 'react'

const RootIndex = (props) => {
  return (
    <div>
      <h1>HI</h1>
      <button className="btn btn-primary btn-outline">Btn text</button>
    </div>
  )
}

export function Head() {
  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      <html lang="en" />
    </>
  )
}

export default RootIndex
