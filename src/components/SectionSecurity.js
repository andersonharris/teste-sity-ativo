import React, { Component } from 'react'
import './SectionSecurity.css';
import security from'./security.png';

export default class SectionSecurity extends Component {
    render() {
        return (
            <div className="container-fluid bg-security">
                <div className="row">
                    <div className="col-lg-6 m-4 text-left">
                     <img src={security} alt="security" width="600px" ></img>
                    </div>
                    <div className="col-lg-4 mt-5 pt-5">
                        

                        <div className="section-security mx-auto">
                            <h1 className="sectionapp-h1 mb-4 text-white">Segurança</h1>
                            <p className="sectionapp-p text-white">It is a long established fact that a reader will be distracted
                             making it look like readable English.</p>
                            <p className="sectionapp-p text-white"><i class="far fa-check-circle pr-3"></i>Segurança de ponta a ponta.</p>
                            <p className="sectionapp-p text-white"><i class="far fa-check-circle pr-3"></i>Rapidez e agilidade no sistema.</p>
                            <p className="sectionapp-p text-white"><i class="far fa-check-circle pr-3"></i>Apenas dois cliques, para cadastro.</p>
                        </div>

                    </div>


                </div>

            </div>
        )
    }
}