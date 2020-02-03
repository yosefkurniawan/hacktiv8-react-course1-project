import React from "react";
import { 
    useParams,
    Link
} from "react-router-dom";
import ContextPodcasts from '../../data/contextPodcasts.js';
import Episodes from '../../components/podcast/episodes.js';

function View() {
    const backButtonText = '<< Kembali';
    const { podcastid } = useParams();
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
                            <img src={getThumbnail(context.getPodcastById(podcastid))} alt={getTitle(context.getPodcastById(podcastid))} style={{'width': '100%'}}/>
                            <Link to="/" className="button" style={{'marginTop':'20px'}}>{backButtonText}</Link>
                        </div>
                        <div className="podcast-info-wrapper">
                            <h3 className="podcast-title">{getTitle(context.getPodcastById(podcastid))}</h3>
                            <p className="podcast-desc"><a href={getUrl(context.getPodcastById(podcastid))}>{getUrl(context.getPodcastById(podcastid))}</a></p>
                            <Episodes podcast={context.getPodcastById(podcastid)} />
                        </div>
                    </>
                )}
            </ContextPodcasts.Consumer>
        </div>
    )
}

export default View;