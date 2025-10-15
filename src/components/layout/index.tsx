import { ReactNode } from 'react';
import { Menu } from './menu'

interface LayoutProps {
    titulo?: string;
    children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
                <Menu />

                <div className="container column is-10">
                    <div className="section">
                        <div className="card">
                            <div className="card-header has-background-white">
                                <p className="card-header-title has-text-dark">
                                    {props.titulo}
                                </p>
                            </div>
                            <div className="card-content has-background-white">
                                <div className="content has-text-dark">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}