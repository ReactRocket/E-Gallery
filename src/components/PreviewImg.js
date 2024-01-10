import React from 'react';

export const PreviewImg = (props) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = props.src;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className="relative p-5">
                <img
                    className='cursor-pointer object-cover rounded-xl object-center w-auto h-auto transform transition duration-500 group-hover:scale-105'
                    src={props.src}
                    onClick={() => props.setImgPrev(!props.imgPrev)}
                    alt="Preview"
                />
                <button
                    className="fixed bottom-0 right-0 bg-white m-5 p-2 rounded-md shadow-md text-gray-700 hover:text-gray-900"
                    onClick={handleDownload}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};
