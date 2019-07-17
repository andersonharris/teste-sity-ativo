import React, { Component } from 'react'
import principal from './logo-default.png';
import './Header.css'


export default class Header extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light border-bottom">
                   <img src={principal} alt="logo"></img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">EMPRESA</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">PASSAGEIRO</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link" href="#">MOTORISTA</a>
                            </li>
                            <li className="nav-item mr-5">
                                <button className="btn btn-primary">CADASTRE-SE</button>
                            </li>

                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}