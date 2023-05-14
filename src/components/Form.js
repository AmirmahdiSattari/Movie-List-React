import React,{useState} from "react";
// import "./form.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = ({ addMovie }) => {

  const [formInfo, setFormInfo] = useState({
    title: "",
    genre: "",
    explanation: "",
    director: "",
    year: "",
  });

  const { title, genre, explanation, director, year } = formInfo;
  const handleChange = (e) => {
    const { value, name } = e.target
    setFormInfo({ ...formInfo, [name]: value });
  }

  const titleReg = /^([A-Za-z\s]){2,30}$/;
  const directorReg = /^([A-Za-z\s]){2,30}$/;
  const yearReg = /^[0-9]{4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titleReg.test(title)) {
      toast.error("نام فیلم را به درستی وارد کنید!");
    } else if (!directorReg.test(director)) {
      toast.error("نام کارگردان را به درستی وارد کنید!");
    } else if (!yearReg.test(year)) {
      toast.error("سال تولید را به درستی وارد کنید!");
    } else {
      const newMovie = {
        title: title,
        genre: genre,
        explanation: explanation,
        director: director,
        year: year
      };
      addMovie(newMovie);
      clearInputs();
      toast.success('Item Added!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  const clearInputs = () => {
    setFormInfo({
      title: "",
      genre: "وحشت/هیجانی",
      explanation: "",
      director: "",
      year: "",
    });
  }

  const cancleSubmit = (e) => {
    e.preventDefault()
    clearInputs();
  }

  return (
    <form className="w-full h-full
    bg-transparent
    flex flex-row-reverse  p-6
    justify-center items-center
    flex-wrap
    ">

      <div className="py-2 px-1 mx-2">
        <input
          className="p-2 
                  bg-transparent border-b border-white
                   text-white outline-none
                   placeholder:text-white"
          name="title"
          value={title}
          placeholder="نام فیلم را وارد کنید"
          onChange={(e) => handleChange(e)} />
      </div>
      <div className="py-2 px-1 mx-2">
        <input
          className="p-2
          bg-transparent border-b border-white
           text-white outline-none
           placeholder:text-white"
          name="director"
          placeholder="نام کارگردان را وارد کنید"
          onChange={(e) => handleChange(e)}
          value={director}
        />
      </div>

      <div className="py-2 px-1 mx-2">
        <select
          name="genre"
          className="p-2 placeholder:text-white
          bg-transparent border-b border-white
           text-white outline-none"
          onChange={(e) => handleChange(e)}>
          <option className="bg-slate-500" value={genre}>وحشت/هیجانی</option>
          <option className="bg-slate-500" value="کمدی">کمدی</option>
          <option className="bg-slate-500" value="درام">درام</option>
        </select>
      </div>
      <div className="py-2 px-1 mx-2">
        <input
          className="p-2 placeholder:text-white
          bg-transparent border-b border-white
           text-white outline-none"
          name="year"
          placeholder="سال تولید را وارد کنید"
          onChange={(e) => handleChange(e)}
          value={year}
        />
      </div>
      <div className="py-1 px-1 mx-2">
        <textarea
          className="p-2  placeholder:text-white
          bg-transparent border-b border-white
           text-white outline-none"
          name="explanation"
          placeholder="توضیحات درباره فیلم"
          onChange={(e) => handleChange(e)}
          value={explanation}></textarea>
        </div>
        <div className="py-2 px-1 mx-2 
        flex flex-warp justify-end items-center
        text-white">
          <button className="save  p-2 bg-transparent
           font-semibold border text-white border-white" onClick={handleSubmit}>
            ذخیره
          </button>
          <button className="cancle mx-2 p-2 bg-transparent
           font-semibold border text-white border-white" onClick={cancleSubmit}>
            انصراف
          </button>
        </div>
    </form>
  );
}

export default Form;