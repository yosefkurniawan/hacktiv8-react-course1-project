import React from "react";

function Episodes(props) {
    if (props.podcast && props.podcast.episodes) {
        return (
            <div className="episodes">
                <h4>
                    <strong>Episodes: </strong>
                </h4>
                <div>

                    {props.podcast.episodes.map(episode => (
                        <audio controls key={episode.id}>
                            <source src={episode.audio} type="audio/mpeg" />
                        </audio>
                    ))}
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Episodes;