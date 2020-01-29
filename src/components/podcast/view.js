import React from "react";

function View() {
    const backButtonText = '<< Kembali';
    return (
        <div className="podcast-view">
            <div className="podcast-image-wrapper">
                <img src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg" alt="Podcast Title" style={{'width': '100%'}}/>
                <a href="# " className="button" style={{'marginTop':'20px'}}>{backButtonText}</a>
            </div>
            <div className="podcast-info-wrapper">
                <h3 className="podcast-title">Podcast Title</h3>
                <p className="podcast-desc">Velit occaecat et cupidatat aliqua cillum aute dolor enim. Exercitation enim dolor ullamco aute magna adipisicing. Deserunt in quis consectetur irure nostrud cillum eiusmod eu est esse ea officia in. Irure laboris dolore quis ipsum. Anim nisi proident esse excepteur in aliquip velit eiusmod ullamco esse.</p>
                <div className="episodes">
                    <h4>
                        <strong>Episodes: </strong>
                    </h4>
                    <div>
                        <audio controls>
                            <source src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-9-7/26999555-44100-2-665eae9fbbeaa.m4a" type="audio/m4a" />
                        </audio>
                        <audio controls>
                            <source src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-9-7/26999555-44100-2-665eae9fbbeaa.m4a" type="audio/m4a" />
                        </audio>
                        <audio controls>
                            <source src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-9-7/26999555-44100-2-665eae9fbbeaa.m4a" type="audio/m4a" />
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View;