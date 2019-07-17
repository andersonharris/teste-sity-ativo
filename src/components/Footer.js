import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
           
            <div className="border-top border-bottom">
            <div className="container">
                <div className="card-deck mt-5">
                
                            <div className="col-lg-5">
                            
                                <h5 className=" pb-3">PRODUTOS</h5>
                                <p className=""><a href="#" className="nav-link">MOTORISTA</a></p>
                                <p className=""><a href="#" className="nav-link">PASSAGEIRO</a></p>
                                <p className=""><a href="#" className="nav-link">EMPRESAS</a></p>
                               
                            </div>
                       
                      
                            <div className="col-lg-4">
                                <h5 className="pb-3">SOBRE NÓS</h5>
                                <p className=""><a href="#" className="nav-link">QUEM SOMOS</a></p>
                                <p className=""><a href="#" className="nav-link">NEWS</a></p>
                                <p className=""><a href="#" className="nav-link">CONTATO</a></p>
                                <p className=""><a href="#" className="nav-link">POLITICA DE PRIVACIDADE</a></p>
                                <p className=""><a href="#" className="nav-link">TERMOS DE CONDIÇÕES</a></p>                            
                            </div>
              
                      
                            <div className="col-lg-3">
                                <h5 className="">BAIXE O APP</h5>
                                <button className="btn btn-primary btn-lg mr-3 letter mt-4">
                                   <i class="fab fa-google-play pr-2"></i>Google Play
                               </button>
                               <button className="btn btn-outline-primary btn-lg letter mt-4">
                                   <i class="fab fa-apple pr-2"></i>Apple Store
                               </button>
                            </div>
                            
                    </div>
                </div>
            </div>
        )
    }
}