import React, { Component } from 'react'
import './SectionFunctional.css';

export default class SectionFunctional extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="text-center sectionapp-h3">Funcionalidades</h2>
                    <div className="card-deck mt-5 mb-5">
                        <div className="card">
                            <div className="card-body text-center">
                                <i className="fas fa-shipping-fast pb-4"></i>
                                <h5 className="sectionapp-h3">Praticidade</h5>
                                <p className="sectionapp-p">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                             
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <i className="fas fa-user-check pb-4"></i>
                                <h4 className="sectionapp-h3">Sistema Chekagem</h4>
                                <p className="sectionapp-p">This card has supporting text below as a natural lead-in to additional content.</p>
                              
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <i className="fas fa-tachometer-alt pb-4"></i>
                                <h5 className="sectionapp-h3">Rapidez</h5>
                                <p className="sectionapp-p">This is a wider card with supporting text below as 
                                 natural lead-in to additional content. This card has even longer 
                                 content than the first.</p>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}