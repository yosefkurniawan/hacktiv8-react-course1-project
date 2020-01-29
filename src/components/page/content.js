import React from 'react';
import Podcast from '../podcast'

function Content() {
    return (
        <div className="body">
            <Podcast />

            {/* in the future, another page such as user profile, payment, etc can be added here. for now we just have podcast pages */}
        </div>
    );
}

export default Content;