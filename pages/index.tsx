import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Baner from '../components/Baner'
import Tilte from '../components/Tilte'
import List from '../components/List'
import Sale from '../components/Sale'
import Fotter from '../components/Fotter'
import {client} from '../lib/client'
import { Products,Banner } from '../typing'

export const getServerSideProps = async () => {
  const query ='*[_type == "product"]';
  const products = await client.fetch(query);
  const query2 ='*[_type == "banner"]';
  const banner = await client.fetch(query2);
  return {
    props:{
      products,banner
    }
  }
}
interface Props{
  products: Products[],
  banner:Banner[],
}
const Home = ({products,banner}:Props) => {
  console.log(products[0].image[0].asset._ref);
  
  return (
    <div className='relative flex h-screen w-screen flex-col  items-center  '>
      <Head>
        <title>Ecommerc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tilte/>
         <Baner/>  
         <div className='flex flex-col items-center'>
           <h1 className='font-bold text-cyan-800 text-5xl'>
             Best Sellers
           </h1>
           <p>
             find all u like
           </p>
         </div>
         <List Products={products}/>
         <Sale/>
         <Fotter/>
      </div>
    
  )
}

export default Home
