// import React, { useState } from "react";
// import Navbar from "../../components/navbar/Navbar";
// import { useNavigate, useLocation } from "react-router-dom";
// import {  useSelector } from "react-redux";
// export const HttpxSub = () => {
 
 

//   const location = useLocation();
//   const { parameterss } = location.state || { parameterss: [] }; // Eğer parametreler gelmezse varsayılan olarak boş bir dizi
//   const { parametersTwo } = location.state || { parametersTwo: [] }; // Eğer parametreler gelmezse varsayılan olarak boş bir dizi
//   const myParamss  = useSelector((state) => state.api.paramss); 

//   const myParamsTwo  = useSelector((state) => state.api.paramsTwo); 




//   const [outputData, setOutputData] = useState([]);
//   const handleButtonClick = async () => {

  
//       try {
//         const response = await fetch("http://localhost:3001/runHttpx", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ paramss:myParamss, parametersTwo: myParamsTwo }),
//         });

//         const data = await response.json(); // JSON olarak al

//             setOutputData(data.output); // Çıktıyı işle
//     } catch (error) {
//         console.error("Error:", error);
//     }
// };
//   return (
//     <div style={{ display: "flex", flexDirection: "row" }}>
//       <Navbar />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           width: "84vw",
//           height: "100vh",
//           backgroundColor: "red",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//             height: "full",
//             backgroundColor: "white",
//             width: "100%",
//             gap: "24px",
//             backgroundColor: "#1A1A1A",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "start",
//               justifyContent: "start",
//               width: "70%",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: "8px",
//                 width: "65px",
//                 height: "64px",
//                 backgroundColor: "#00D1FF",
//               }}
//             >
//               <span
//                 style={{
//                   color: "#000",
//                   textAlign: "center",
//                   fontSize: "36px",
//                   fontStyle: "normal",
//                   fontWeight: 700,
//                 }}
//               >
//                 2
//               </span>
//             </div>
//           </div>
//           <div
//             style={{
//               position: "relative",
//               flexDirection: "row",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               width: "100%",
//             }}
//           >
           
//              <div style={{position:"absolute", left:"76%"}}>
//           <select class="select-input" style={{fontSize:"16px",fontWeight:600,color:"#1A1A1A",borderRadius:"6px",padding:"8px", paddingLeft:"18px",paddingRight:"18px",backgroundColor:"#00D1FF"}}>
//             <option>.com</option>
//             <option>.dev</option>
//             <option>.io</option>
//           </select>
//           </div>
//           </div>
         
//           <div
//             style={{
//               display: "flex",
//               alignItems: "start",
//               width: "70%",
//               fontSize: "40px",
//               fontWeight: 700,
//               lineHeight: "normal",
//               color: "#00D1FF",
//             }}
//           >
//             Lorem ipsum dolor{" "}
//           </div>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "start",
//               width: "70%",
//               fontSize: "16px",
//               fontWeight: 400,
//               lineHeight: "normal",
//               color: "#FFF",
//             }}
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </div>
//           <button onClick={handleButtonClick}>Continue</button>
//           <button onClick={()=>console.log("Melih test:", outputData)}>melih </button>
           
//            <pre>{outputData.map((i)=><li>{i}</li>)}</pre>
//         </div>
//       </div>  
//     </div>
//   );
// };