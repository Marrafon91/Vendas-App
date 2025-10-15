import 'bulma/css/bulma.css'
import { Layout } from 'components/layout'
import Head from "next/head"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
      <title>Vendas App</title>
      <link rel="icon" href="/favicon.icon" />
      </Head>

      <Layout />      
    </div>
  )
}
export default Home;