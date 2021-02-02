import React, { useState } from "react";
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css' 

// Components

const Gallery = (props) => {
    const { images } = props;
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="tab-pane fade" id="pills-gallery" role="tabpanel" aria-labelledby="pills-gallery-tab">
            <div id="restaurant-gallery" className="bg-white rounded shadow-sm p-4 mb-4">
                <div className="position-relative">
                    <GalleryWrapper>
                        {
                            images.length > 0 && images.map((img, i) => (
                                <GalleryItem key={i} onClick={() =>  {
                                    setIsOpen(true);
                                    setPhotoIndex(i); 
                                }}>
                                    <img src={img.image} alt={props.name} />
                                </GalleryItem>
                            ))
                        }
                    </GalleryWrapper>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex].image}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() => {
                                const newIndex = (photoIndex + images.length - 1) % images.length;
                                setPhotoIndex(newIndex)
                            }}                            
                            onMoveNextRequest={() => {
                                const newIndex = (photoIndex + 1) % images.length;
                                setPhotoIndex(newIndex)
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const GalleryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const GalleryItem =  styled.div`
    flex: 22%;
    max-width: 22%;
    height: 200px;
    overflow: hidden;
    margin: 5px;
    -webkit-transition: 0.3s all;
    -moz-transition: 0.3s all;
    -ms-transition: 0.3s all;
    -o-transition: 0.3s all;
    transition: 0.3s all;

    img {
        object-fit: cover;
        width: 100%;
        height: 300px;
    }

    &:hover {
        cursor:pointer;
        transform: scale(1.1);
    }

    @media screen and (max-width: 800px) {
        & {
          flex: 50%;
          max-width: 50%;
        }
      }
      
      
      @media screen and (max-width: 600px) {
        & {
          flex: 100%;
          max-width: 100%;
        }
      }
`;

export default Gallery;