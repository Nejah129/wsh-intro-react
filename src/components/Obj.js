import React from "react";

const Obj = () => {
  const obj = {
    name: "Nejah",
    age: 29,
    Job: "full time Js Instactur",
    img: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg",
  };
  const { name: ism, age: omor, Job: khdma, img } = obj;
  return (
    <div>
      <h1>{ism}</h1>
      <h2 style={{color:"red" ,width:"100%",backgroundColor:"black"}}>{omor}</h2>
      <h2>{khdma}</h2>
      <img src={img} alt="" srcset="" />
      <iframe
        width="1380"
        height="487"
        src="https://www.youtube.com/embed/BE-yJ9Cuguc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Obj;
