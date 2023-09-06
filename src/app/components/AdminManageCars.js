import { useEffect, useState } from "react";

import Image from "next/image";

export default function AdminManageCars() {
  const [data, setData] = useState([]); 
  const [clickedIndexes, setClickedIndexes] = useState([]); 

  useEffect(() => {
    getData()
      .then((data) => {

        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async function() {
    const result = await sendTheData(clickedIndexes)
    getData()
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleClick = (index) => {

    setClickedIndexes((prevClickedIndexes) => {
      if (prevClickedIndexes.includes(index)) {

        return prevClickedIndexes.filter((clickedIndex) => clickedIndex !== index);
      } else {
 
        return [...prevClickedIndexes, index];
        
      }
      
    }
    );
    
  };

  return (
    <>
      <section className="w-full flex flex-wrap my-4  border-b-2 border-black border-t-2 ">
        {data.map((item, index) => (
          <div
            className={`w-96 flex justify-around items-center m-2 border-2 border-black h-16 ${
              clickedIndexes.includes(index) ? "bg-red-500" : ""
            }`} // Add bg-red-500 class to change background color when clicked
            key={index}
          >
            <div key={index} onClick={() => handleClick(index)} className="">
              <div className="">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                  class="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M511.881216 929.554432c230.109184 0 416.649216-186.540032 416.649216-416.649216S741.9904 96.256 511.881216 96.256 95.232 282.796032 95.232 512.905216s186.540032 416.649216 416.649216 416.649216"
                    fill="#FFF200"
                  />
                  <path
                    d="M698.098688 376.60672L551.447552 523.256832l144.979968 144.979968c5.0688 5.0688 7.891968 11.782144 7.94624 18.905088 0.057344 7.221248-2.720768 14.006272-7.82336 19.10784 0.002048 0.003072-0.001024 0.004096-0.003072 0.004096-4.943872 4.943872-11.829248 7.774208-18.907136 7.774208h-0.113664c-7.185408-0.03072-13.93152-2.835456-18.993152-7.897088L513.553408 561.152 366.901248 707.805184c-5.506048 5.504-12.841984 8.55552-20.655104 8.589312h-0.123904c-7.70048 0-15.194112-3.08224-20.579328-8.46848l-0.004096-0.002048c-5.553152-5.554176-8.577024-12.939264-8.516608-20.799488 0.060416-7.74656 3.129344-15.049728 8.640512-20.558848l146.651136-146.65216-144.978944-144.979968c-5.0688-5.0688-7.891968-11.783168-7.947264-18.907136-0.05632-7.221248 2.722816-14.00832 7.827456-19.110912 4.941824-4.942848 11.8272-7.773184 18.907136-7.773184h0.11264c7.186432 0.03072 13.93152 2.833408 18.993152 7.89504L510.208 482.018304l146.65216-146.65216c5.506048-5.506048 12.843008-8.556544 20.65408-8.590336h0.124928c7.70048 0 15.19616 3.084288 20.5824 8.470528 5.552128 5.55008 8.578048 12.939264 8.516608 20.79744-0.059392 7.748608-3.12832 15.049728-8.640512 20.56192m79.434752 401.95072c-34.515968 34.516992-74.697728 61.611008-119.430144 80.530432-46.28992 19.57888-95.485952 29.507584-146.22208 29.507584-50.736128 0-99.93216-9.928704-146.223104-29.508608-44.731392-18.919424-84.913152-46.012416-119.42912-80.528384-34.515968-34.515968-61.609984-74.697728-80.530432-119.431168C146.11968 612.839424 136.192 563.641344 136.192 512.90624c0-50.736128 9.92768-99.93216 29.50656-146.223104 18.920448-44.731392 46.014464-84.914176 80.530432-119.42912 34.515968-34.515968 74.697728-61.609984 119.42912-80.530432C411.949056 147.14368 461.145088 137.216 511.881216 137.216s99.93216 9.928704 146.22208 29.50656c44.732416 18.920448 84.914176 46.014464 119.42912 80.530432 34.516992 34.514944 61.611008 74.698752 80.531456 119.42912 19.57888 46.291968 29.50656 95.488 29.50656 146.223104 0 50.736128-9.92768 99.93216-29.50656 146.22208-18.920448 44.731392-46.014464 84.9152-80.530432 119.431168M511.881216 96.256C281.772032 96.256 95.232 282.796032 95.232 512.904192 95.232 743.0144 281.772032 929.555456 511.881216 929.555456s416.649216-186.54208 416.649216-416.65024C928.530432 282.796032 741.9904 96.256 511.881216 96.256" fill="#000000" /></svg>
              </div>
            </div>

            <div className="text-lg">
              {item.brand} {item.name}
            </div>
            <div className="">
              <Image src={"/" + item.images[0]} height={60} width={80} />
            </div>
          </div>
        ))}
      </section>
      <div className="w-full flex items-center justify-center">
            <div onClick={handleSubmit} className="p-4 hover:cursor-pointer hover:border-black border-2 rounded-md flex items-center justify-center">Сохранить</div>
      </div>
    </>
  );
}


async function sendTheData(data) {
  const response = await fetch("http://localhost:3000/api/update", {
      method: "POST",

      body: JSON.stringify(data)
      
  })
  return response
}



function getData() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/data", { next: { revalidate: 1 } })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}
