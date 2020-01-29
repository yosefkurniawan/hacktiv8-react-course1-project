import React from "react";

function Item() {
    const seeMoreButtonTitle = 'Lihat >>';
    return (
        <li className="podcast-list-item">
            <div className="podcast-image-wrapper">
                <img src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg" alt="Podcast Title" style={{ 'width': '100%' }} />
            </div>
            <div className="podcast-info-wrapper">
                <h3 className="podcast-title">Podcast Title</h3>
                <p className="podcast-desc">Velit occaecat et cupidatat aliqua cillum aute dolor enim. Exercitation enim dolor ullamco aute magna adipisicing. Deserunt in quis consectetur irure nostrud cillum eiusmod eu est esse ea officia in. Irure laboris dolore quis ipsum.</p>
                <a href="# " className="button">{seeMoreButtonTitle}</a>
            </div>
        </li>
    )
}

export default Item;