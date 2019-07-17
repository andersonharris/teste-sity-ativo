import React, { Component} from 'react'
import './SectionApp.css';
import mockup from './mockup-phone.png';


export default class SectionApp extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 m-5 pt-5">
                        <div className="sectionapp">
                            <a className="mb-0 sectionapp-a" href="#">Saiba mais</a>
                            <h1 className="sectionapp-h1 mt-0">Baixe nosso App</h1>
                            <p className="sectionapp-p">Faça a sua viagem com conforto, segurança e pagando um preço baixo.
                               Somos a plataforma de mobilidade urbana trazendo diversos beneficios para você e seus familiares, descontos.
                               Faça o teste você mesmo, o céu não é o limite!</p>
                               <button className="btn btn-primary btn-lg mr-3 letter mt-4">
                                   <i class="fab fa-google-play pr-2"></i>Google Play
                               </button>
                               <button className="btn btn-outline-primary btn-lg letter mt-4">
                                   <i class="fab fa-apple pr-2"></i>Apple Store
                               </button>
                        </div>
                    </div>
                    <div className="col-lg-4 mx-auto">
                        <div className="sectionapp-mockup mt-5 mb-5">
                            <img src={mockup} alt="mockup"></img>
                        </div>
                        
                    </div>

                </div>

            </div>

        )
    }
}