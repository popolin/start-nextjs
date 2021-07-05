import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <h1>NextJS Sctructure</h1>
        <p>A ReactJS + NextJS structure.</p>
        <p>+ ESLint, Prettier, EditorConfig and Styled Components</p>
      </main>
    </Container>
  )
}

export default Home;
