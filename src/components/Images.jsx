import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import axios from 'axios';
import Spinner from './Spinner';



const Images = ({ category, apiKey, setProgress }) => {

    const [randomImage, setRandomImage] = useState(null);
    const [apiData, setApiData] = useState({
        apiImages: ''
    });
    const [loading, setLoading] = useState(false);

    const inputValue = (event) => {

        let { name, value } = event.target;

        setApiData((val) => {
            return {
                ...val,
                [name]: value
            }
        })
    };

    useEffect(() => {

        const fetchImages = async () => {
            setProgress(15);
            setLoading(true);
            try {
                const setHeader = {
                    headers: {
                        Accept: 'image/jpg',
                        'X-Api-Key': apiKey
                    },
                    responseType: 'arraybuffer', // Request binary response
                };
                setProgress(35);

                let endPoint = `https://api.api-ninjas.com/v1/randomimage?search=${apiData.apiImages}&category=${category}`;
                setProgress(55);

                const res = await axios.get(endPoint, setHeader);
                const imageBlob = new Blob([res.data], { type: res.headers['content-type'] });
                setProgress(75);
                setLoading(false);
                const imageUrl = URL.createObjectURL(imageBlob);
                setRandomImage(imageUrl);
                setProgress(100);

            } catch (error) {
                console.log('Error:', error);
            }
        }



        fetchImages()
        document.title = ` World's No.1 Images Library - Top ${capitalize(category)} Images`;

    }, [apiData.apiImages, category, apiKey]);



    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }




    return (

        <div className='h-full mb-96 mt-32 relative'>

            <h2 className='text-center text-4xl'>World's No.1 Images Library - Top&nbsp;<span className='text-indigo-400 underline'>{capitalize(category)}</span>&nbsp;Images</h2>


            <form className='w-1/4 mx-auto my-20 relative'>

                <div className='text-center mb-4'>
                    <span className='text-center text-blue-600'>Powered By <a href="https://api-ninjas.com/api"> <img className='w-1/4 inline mx-auto' src="https://api-ninjas.com/images/apininjas_logo.png" alt="api-ninjas" /> </a> </span>
                </div>

                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={inputValue} autoComplete='off' type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search For Images" value={apiData.apiImages} name='apiImages' />

                </div>

            </form>

            {
                apiData.apiImages ?
                    <div className='relative'>
                        <div className='absolute right-[26.5%] -top-12'>
                            <a download={'image.jpg'} href={randomImage} id="download_images" className='bg-[#000000] text-white rounded-[0.26rem] text-sm py-0.5 px-1 tracking-[1px]'>Download Image</a>
                        </div>
                    </div>
                    : null
            }

            {loading ? <Spinner /> : null}

            {apiData.apiImages ? <ImageCard randomImage={randomImage} /> : null}

        </div>
    )
}

export default Images
