import Head from "next/head"
import 'bulma/css/bulma.css'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
      <title>Vendas App</title>
      <link rel="icon" href="/favicon.icon" />
      </Head>
      <h1>TESTE DEV</h1>
      <button className="button is-white">Button</button>      
    </div>
  )
}
export default Home;