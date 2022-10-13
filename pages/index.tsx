import type { NextPage } from 'next'
import Head from 'next/head'
import Form from '../components/Login/Form'
import Header from '../components/Login/Header'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-center h-screen mx-auto w-[400px] px-2 relative '>
      <Header />
      <Form />


    </div>
  )
}

export default Home
