import React from 'react'
import NewsUI from './NewsUI'
import Data from "./data"

export default function NewsScreen() {
  Data.sort((a, b) => {
    fa = new Date(a.Fecha);
    fb = new Date(b.Fecha);
    return fa.getTime() - fb.getTime();
  })
  return <NewsUI Data={Data} />
}