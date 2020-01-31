import React from "react";
import ContextPodcasts from '../../data/contextPodcasts.js';
import Episodes from '../../components/podcast/episodes.js';

function View() {
    const backButtonText = '<< Kembali';
    const episodeId = 2;
    function getThumbnail(podcast) {
        if(podcast) {
            return podcast['thumbnail'];
        }else{
            return;
        }
    }
    function getTitle(podcast) {
        if (podcast) {
            return podcast['title'];
        } else {
            return;
        }
    }
    function getUrl(podcast) {
        if (podcast) {
            return podcast['url'];
        } else {
            return;
        }
    }
    return (
        <div className="podcast-view">
            <ContextPodcasts.Consumer>
                {(context) => (
                    <>
                        <div className="podcast-image-wrapper">
                            <img src={getThumbnail(context.getPodcastById(episodeId))} alt={getTitle(context.getPodcastById(2))} style={{'width': '100%'}}/>
                            <a href="# " className="button" style={{'marginTop':'20px'}}>{backButtonText}</a>
                        </div>
                        <div className="podcast-info-wrapper">
                            <h3 className="podcast-title">{getTitle(context.getPodcastById(episodeId))}</h3>
                            <p className="podcast-desc"><a href={getUrl(context.getPodcastById(episodeId))}>{getUrl(context.getPodcastById(episodeId))}</a></p>
                            <Episodes podcast={context.getPodcastById(episodeId)} />
                        </div>
                    </>
                )}
            </ContextPodcasts.Consumer>
        </div>
    )
}

export default View;