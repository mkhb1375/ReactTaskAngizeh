import React from "react";

 export default function ListItem({ item }) {
    const imageUrl = item.image.replace('.com', '.ir');
    return (
        <div className='item m-1 lg:m-4 p-2 w-[150px]  lg:h-auto lg:w-[175px] xl:w-[200px]  2xl:w-[225px] 3xl:w-[300px] cursor-pointer lg:hover:scale-[110%] rounded text-center border-4 border-solid
         border-[orange] block'>
            <h1 className="font-bold lg:text-[1.2rem] text-borderColor">{item.name}</h1>
            <img src={imageUrl} alt={item.name} />
            <p className="lg:text-[0.9rem] text-[0.8rem]">{item.brief}</p>

        </div>
    )
}