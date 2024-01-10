import React, { useEffect, useState } from "react";
import { imgDB, txtDB } from "../../firebase/index";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Loading } from "../../components/Loading";
function StoreImageTextFirebase() {

    const [txt, setTxt] = useState('');
    const [img, setImg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        // console.log(file);
        if (!file) {
            alert('No file selected for upload');
            return;
        }

        const imgs = ref(imgDB, `Imgs/${v4()}`);
        try {
            setLoading(true);
            const uploadedImage = await uploadBytes(imgs, file);
            const downloadURL = await getDownloadURL(uploadedImage.ref);
            setImg(downloadURL);

        } catch (error) {

            alert('Error uploading image:', error);

        }
    };

    useEffect(() => {
        setLoading(false);
    }, [img])

    const handleClick = async () => {
        if (!txt || !img) {
            alert('Please provide both text and an image');
            return;
        }
        try {
            const valRef = collection(txtDB, 'txtData');
            await addDoc(valRef, { txtVal: txt, imgUrl: img });
            alert('Data added successfully');
            setTxt('');
            setImg('');
            // getData();
        } catch (error) {
            alert('Error adding data:', error);
        }
    };

    const handleReset = () => {
        setImg('');
        setTxt('');
        setLoading(false);
    }

    return (
        <div className="h-screen w-full flex justify-center items-center flex-col gap-5">
            {
                loading ? <Loading /> : 
                <label htmlFor="uploadFile1"
                    className="dark:text-white bg-white dark:bg-gray-900 dark:border-gray-700  text-base rounded w-full h-[80%] flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                    {img ? (
                        <img src={img} alt="Preview" className="bg-cover h-full p-10 mb-2" />
                    ) : (
                        <><svg xmlns="http://www.w3.org/2000/svg" className=" w-8 mb-2 fill-blue-400" viewBox="0 0 32 32">
                            <path
                                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                data-original="#000000" />
                            <path
                                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                data-original="#000000" />
                        </svg><span>Upload file</span><input required onChange={(e) => handleUpload(e)} type="file" id='uploadFile1' className="hidden" /><p className="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p></>
                    )}
                </label>
            }

            <div className='flex justify-center items-center gap-10 pt-5'>
                <button
                    onClick={handleClick}
                    className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0">
                    Upload
                </button>
                <button onClick={handleReset} className="inline-block px-5 py-2 mx-auto text-white bg-gray-600 rounded-full hover:bg-gray-700 md:mx-0">
                    Cancle
                </button>
                <div>
                    <select required onChange={(e) => setTxt(e.target.value)} id="folder" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue='default' >Folder</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>

                </div>
            </div>

        </div>
    )
}
export default StoreImageTextFirebase;


// <div>
//     <input onChange={(e) => setTxt(e.target.value)} /><br />
//     <input type="file" onChange={(e) => handleUpload(e)} /><br /><br />
//     <button onClick={handleClick}>Add</button>

//     {
//         data.map((value, i) => <div key={i}>
//             <h1>{value.txtVal}</h1>
//             <img src={value.imgUrl} height='200px' width='200px' />
//         </div>)
//     }
// </div>
