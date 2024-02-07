// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
// import { Link } from 'react-router-dom';

// function Home() {
//   const [data, setData] = useState([]);
//   const [ayah, setAyah] = useState()
//   const randomAyah = Math.floor(Math.random() * (6236 - 1) ) + 1
 
//   useEffect(() => {
 
//    console.log(randomAyah);

//     fetch('https://6579a51f1acd268f9af99c00.mockapi.io/posts')
//       .then((response) => response.json())
//       .then((ukkash) => {
//         setData(ukkash);
//         console.log(data);
//       });


      
//       fetch(`http://api.alquran.cloud/v1/ayah/${randomAyah}/ar.uthmani`)
//       .then((response) => response.json())
//       .then((umar) =>{
//         setAyah(umar.data)
//         console.log(ayah);
//       })
//   }, []);

//   return (
//     <div>
//       <div>
//       <h1 className="text-3xl font-bold mb-4 " style={{direction: "rtl"}}>{ayah?.text}</h1>
//       </div>
//       <div>
//       <button className="absolute top-0 left-0 m-4">
//   <Link to="/posts/create" className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
//    Create Post
//   </Link>
// </button>
// </div>

     
     

//       <table className="w-full border-collapse border border-green-400 mb-4">
//         <thead className="bg-green-400 text-white">
//           <tr>
//             <th className="border border-green-400 py-2 px-4">ID</th>
//             <th className="border border-green-400 py-2 px-4">Title</th>
//             <th className="border border-green-400 py-2 px-4">Body</th>
//             <th className="border border-green-400 py-2 px-4">Operation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item,index) =>(
//             <tr key={index}>
//               <td className="border border-green-400 py-2 px-4"> {index + 1} </td>
//               <td className="border border-green-400 py-2 px-4"> {item.title} </td>
//               <td className="border border-green-400 py-2 px-4"> {item.body} </td>
//               <td className="border border-green-400 py-2 px-4">
               
//                 <div className="flex justify-center gap-x-4">
//                 <Link to={`/posts/edit/${item.id}`}>
//                         <AiOutlineEdit className="text-2x1 text-yellow-600" />
//                       </Link>
//                       <Link to={`/posts/delete/${item.id}`}>
//                         <MdOutlineDelete className="text-2x1 text-red-600" />
//                       </Link>
//                   </div>
//              </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
 
// }

// export default Home;




import React, { useState, useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

function truncateText(text, maxLength) {
  const words = text.split(' ');
  if (words.length <= maxLength) {
    return text;
  }
  return words.slice(0, maxLength).join(' ') + '...';
}

function Home() {
  const [data, setData] = useState([]);
  const [ayah, setAyah] = useState();
  const randomAyah = Math.floor(Math.random() * (6236 - 1)) + 1;

  useEffect(() => {
    fetch('https://6579a51f1acd268f9af99c00.mockapi.io/posts')
      .then((response) => response.json())
      .then((ukkash) => {
        setData(ukkash);
      });

    fetch(`https://api.alquran.cloud/v1/ayah/${randomAyah}/ar.uthmani`)
      .then((response) => response.json())
      .then((umar) => {
        setAyah(umar.data);
      });
  }, []);

  const truncatedAyah = ayah ? truncateText(ayah.text, 15) : '';

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-4 " style={{ direction: 'rtl' , textAlign:"center",justifyContent: "center" }}>
          {truncatedAyah}
        </h1>
      </div>
     
        <button className="relitive top-0 left-0 m-4">
          <Link
            to="/posts/create"
            className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create Post
          </Link>
        </button>
     

      <table className="w-full border-collapse border border-green-400 mb-4">
        <thead className="bg-green-400 text-white">
          <tr>
            <th className="border border-green-400 py-2 px-4">ID</th>
            <th className="border border-green-400 py-2 px-4">Title</th>
            <th className="border border-green-400 py-2 px-4">Body</th>
            <th className="border border-green-400 py-2 px-4">Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-green-400 py-2 px-4"> {index + 1} </td>
              <td className="border border-green-400 py-2 px-4"> {item.title} </td>
              <td className="border border-green-400 py-2 px-4"> {item.body} </td>
              <td className="border border-green-400 py-2 px-4">
                {/* Add your operation buttons here */}
                <div className="flex justify-center gap-x-4">
                  <Link to={`/posts/edit/${item.id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/posts/delete/${item.id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
