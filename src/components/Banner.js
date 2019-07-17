import React, { Component } from 'react'
import logo from './logo.jpg'
import './Banner.css'


export default class Banner extends Component {

    render() {
        return (
            <div className="text-white text-center">
                <img src={logo} className="card-img" alt="..." height="600px"/>
                <div className="card-img-overlay text-center position">
                    <h4 className="card-text">Venha ser mais um Campeão</h4>
                    <h1 className="card-title"><span>Seja mais </span>um SITY</h1>
                    <p className="card-p">Nada é impossivel, quando <span>se tem a Sity por perto.</span></p>
                    <button className="btn btn-primary btn-lg mr-3 letter mt-4">SEJA UM SITY</button>
                    <button className="btn btn-outline-primary btn-lg letter mt-4">SAIBA-MAIS</button>
                    
                </div>
            </div>
        )
    }
}