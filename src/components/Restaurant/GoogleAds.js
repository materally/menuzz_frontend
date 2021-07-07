import React from "react";
import AdSense from 'react-adsense';

// Components

const GoogleAds = (props) => {
    
    return (
        <div className="text-center pt-2 mb-4">
            <AdSense.Google
                client='ca-pub-0702538969981759'
                slot='5219813458'
                style={{ display: 'block', width: '100%' }}
                format='auto'
                responsive='true'
            />
        </div>
    );
};


export default GoogleAds;