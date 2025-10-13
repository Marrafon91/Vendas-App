export const Layout: React.FC = () => {
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
                {/* {menu ficara aqui} */}

                <div className="container column is-10">
                    <div className="section">
                        <div className="card">
                            <div className="card-header has-background-white">
                                <p className="card-header-title has-text-dark">
                                    Cadastro
                                </p>
                            </div>
                            <div className="card-content has-background-white">
                                <div className="content has-text-dark">
                                    Conteudo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}