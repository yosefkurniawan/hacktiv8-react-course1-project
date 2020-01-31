import React from "react";

function Item(props) {
    const seeMoreButtonTitle = 'Lihat >>';
    const podcast = props.podcast;

    return (
        <>
                <li className="podcast-list-item">
                    <div className="podcast-image-wrapper">
                        <img src={podcast.thumbnail} alt={podcast.title} style={{ 'width': '100%' }} />
                    </div>
                    <div className="podcast-info-wrapper">
                        <h3 className="podcast-title">{podcast.title}</h3>
                        <p className="podcast-desc"><a href={podcast.url}>{podcast.url}</a></p>
                        <a href="# " className="button">{seeMoreButtonTitle}</a>
                    </div>
                </li>
        </>
    )
}

export default Item;