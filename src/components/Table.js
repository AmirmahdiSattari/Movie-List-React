import React from "react";
import TableRow from "./TableRow";
// import "./table.css";

export const Table = (props) => {
  const { movies, deleteMovie, editMovie } = props;
  return (
    <div className=" bg-[rgba(27, 26, 26, 0.716)]
     shadow-2xl
     rounded-lg overflow-auto">

      <table className="rounded-lg 
      w-full h-full
      text-[.7rem]
      sm:text-sm 
      md:text-sm 
      lg:text-lg 
      overflow-scroll
      shadow-2xl 
      flex-col flex-wrap justify-start items-start
       m-1  p-1">
        <thead className="">
          <tr className="">
            <th className="">ردیف</th>
            <th>نام فیلم</th>
            <th>کارگردان</th>
            <th>ژانر فیلم</th>
            <th>سال ساخت</th>
            <th className=" ">توضیحات</th>
            <th className=" ">حذف</th>
            <th className=" ">ویرایش</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {movies.map((mov) => {
            return <TableRow key={mov.id} {...mov}
              deleteMovie={deleteMovie} editMovie={editMovie} />;
          })}
        </tbody>
      </table>
    </div >

  );
};
