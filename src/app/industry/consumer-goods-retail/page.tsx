import React from 'react'
import ConsumerGoodsRetailPage from './clientretail'
import { generateSEOMetadata } from '../../../../lib/seometadata';



export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <ConsumerGoodsRetailPage/>
}
