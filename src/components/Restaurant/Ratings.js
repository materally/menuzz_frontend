import React from "react";
import { FacebookProvider, Comments } from 'react-facebook';

// Components

const Ratings = (props) => {
    
    return (
    <div className="tab-pane fade" id="pills-ratings" role="tabpanel" aria-labelledby="pills-ratings-tab">
        <div id="restaurant-ratings" className="bg-white rounded shadow-sm p-4 mb-4">
            <FacebookProvider appId="1613042828876052">
                <Comments width="100%" href={process.env.REACT_APP_FRONTEND_URL+"restaurant/"+props.slug} />
            </FacebookProvider>
        </div>
    </div>
    );
};


export default Ratings;