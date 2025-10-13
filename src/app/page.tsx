import Head from "next/head"
import 'bulma/css/bulma.css'
import { Layout }  from 'components/layout'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
      <title>Vendas App</title>
      <link rel="icon" href="/favicon.icon" />
      </Head>
      <h1>TESTE DEV</h1>
      <Layout />
    </div>
  )
}
export default Home;