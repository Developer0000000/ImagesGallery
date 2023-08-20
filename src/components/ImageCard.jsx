import React from "react";

const ImageCard = ({ randomImage }) => {


    return (

        <>
            <div className='flex justify-center items-center relative'>
                {randomImage && <img src={randomImage} alt='random_image' />}
            </div>
        </>
    );
}

export default ImageCard;
