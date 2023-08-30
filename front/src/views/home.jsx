import React from "react";
// 60, 532, 668
import Mail from "../images/mail.jpg";
import Web from "../images/web.jpg";
import Form from "../components/form";

const Home = props => {
    return (
        <div className="landing">

            {/* CAROUSEL */}

            <div className="carousel">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://picsum.photos/id/668/1080/300" className="d-block w-100 caroupic" alt="macfan" />
                            <div className="carousel-caption">
                                <h5>¡Bienvenido!</h5>
                                <p>Estoy feliz de poder ser tu web partner oficial</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Mail} className="d-block w-100 caroupic" alt="mail" />
                            <div className="carousel-caption">
                                <h5>Correo Corporativo</h5>
                                <p>Deja la informalidad de vender tus productos y servicios con correos genericos... <br />Hazte corporativo y obten tu @miempresa!!!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Web} className="d-block w-100 caroupic" alt="web" />
                            <div className="carousel-caption">
                                <h5>Agrega tu propia página web</h5>
                                <p>No sólo puedes tener un correo corporativo...<br />Ten tu propia pagina web para mostrar lo que vendes!</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* INTRODUCCION */}

            <div className="introduccion" id="somos">
                <h1>INTRODUCCION</h1>
            </div>

            {/* SERVICIOS */}

            <div className="servicios" id="servicios">
                <h1>SERVICIOS</h1>
            </div>

            {/* CASOS DE EXITO */}

            <div className="casos">
                {/* <a class="casos" id="casosExito"></a> */}
                <h1>CASOS DE EXITO</h1>
            </div>

            {/* BLOG */}

            <div className="blog" id="blog">
                <h1>BLOG</h1>
            </div>

            {/* CONTACTO - FORMULARIO */}

            <div className="formulario" id="contactame">
                <Form />
            </div>

        </div>
    );
}

export default Home;