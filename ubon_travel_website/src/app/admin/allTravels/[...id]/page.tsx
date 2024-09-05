import React from 'react'

type Props = any

export default function TravelDetail({params}: Props) {
    const {id} = params
  return (
    <div>TravelDetail: {id}</div>
  )
}