import React, { useEffect, useState } from "react";
import { txtDB } from "../../firebase/index";
import { collection, getDocs } from "firebase/firestore";
import { Loading } from "../../components/Loading";
import { PreviewImg } from "../../components/PreviewImg";
export const Photos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [imgPrev, setImgPrev] = useState(false)


  const getData = async () => {
    try {
      const valRef = collection(txtDB, 'txtData');
      const dataDb = await getDocs(valRef);
      const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }));
      setData(allData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setLoading(true)

    return () => {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }
  }, [])

  return (
    <div className="container mx-auto  min-h-screen pb-5 w-full overflow-hidden">

      {
        loading ?
          <div className='h-full w-full flex justify-center items-center'>
            <Loading />
          </div>

          : data.length > 0 ?
            <>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-auto h-auto">
                {data?.map((value, i) => (
                  <div key={i} className=" group relative aspect-auto  overflow-hidden">

                    <img
                      onClick={() => setImgPrev(value.imgUrl)}
                      className=" cursor-pointer object-cover rounded-xl object-center w-full h-full transform transition duration-500 group-hover:scale-105"
                      src={value.imgUrl}
                      alt={`photooo-${i}`}
                      loading="lazy"
                    />

                  </div>
                ))}
              </div>
            </>

            :
            <h1>No Photos</h1>
      }

      {
        imgPrev && <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity z-50 ">
          <PreviewImg imgPrev={imgPrev} setImgPrev={setImgPrev} src={imgPrev} />
        </div>
      }

    </div>
  );
};
