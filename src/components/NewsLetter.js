import React, { Component } from 'react'
import './NewsLetter.css'
import motorista from './motorista.jpg'
import sede from './sede.jpg'

export default class NewsLetter extends Component {
    render() {
        return (
            <div className="container">
                   <h1 className="sectionapp-h1 mb-4 text-center mt-5">NewsLetter</h1>
                <div className="row">
                    <div className="col-lg-6 mt-5 mb-5">
                        <img src={motorista} className="card-img-top" alt="..." />
                        <div className="card-body shadow">
                            <h5 className="sectionapp-h3 line">Novo app de mobilidade reforça segurança para motorista</h5>
                            <p className="sectionapp-p">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className=""><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>

                    </div>
                    <div className="col-lg-6 mt-5 mb-5">
                        <img src={sede} className="card-img-top" alt="..." />
                        <div className="card-body shadow">
                            <h5 className="sectionapp-h3 line">Centro de atendimento ao motorista da cidade
                            de São Paulo</h5>
                            <p className="sectionapp-p">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className=""><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            
            </div>

        )
    }
}