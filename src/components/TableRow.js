import React, { useState } from "react";
import { Modal } from "./Modal";
import "./table.css";

function TableRow({
  id,
  title,
  director,
  genre,
  year,
  explanation,
  deleteMovie,
  editMovie
}) {
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      <tr key={id} className=" w-screen">
        <td className="whitespace-nowrap">{id}</td>
        <td className="whitespace-nowrap">{title}</td>
        <td className="whitespace-nowrap">{director}</td>
        <td className="whitespace-nowrap">{genre}</td>
        <td className="whitespace-nowrap" >{year}</td>
        <td className="whitespace-nowrap">
          <button className="explain p-2 " onClick={() => setshowModal(true)}>
            توضیحات
          </button>
          {showModal && (
            <Modal
              explanation={explanation}
              closeModal={() => setshowModal(false)}
            />
          )}
        </td>
        <td className="whitespace-nowrap">
          <button className="delete p-2 " onClick={(e) => deleteMovie(e, id)}>
            حذف
          </button>
        </td>
        <td className="whitespace-nowrap">
          <button className="px-4 " disabled onClick={(e) => editMovie(e, id)}>
            ویرایش
          </button>
        </td>
      </tr>

       {/* mobile */}

    </>
  );
}
//
export default TableRow;
