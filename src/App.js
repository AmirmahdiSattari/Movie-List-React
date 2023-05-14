import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { useState, useEffect } from "react";
// import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

function App() {
  const [movies, setMovies] = useState([]);
  const getData = (filter = "همه") => {
    console.log(filter)

    fetch(`http://localhost:3001/movies`).then((data) => {
        data.json().then((res) => {
          setMovies(res);
        });
      });
    if (filter === "همه") {
      console.log("hame click shod")
      fetch(`http://localhost:3001/movies`).then((data) => {
        data.json().then((res) => {
          setMovies(res);
        });
      });
    } if (filter) {
      fetch(`http://localhost:3001/movies?genre=${filter}`).then((data) => {
        data.json().then((res) => {
          setMovies(res);
        });
      });
    }
    else {
      console.log("No valid data")
      fetch(`http://localhost:3001/movies`).then((data) => {
        data.json().then((res) => {
          setMovies(res);
        });
      });
    }
  };

  const deleteMovie = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3001/movies/${id}`, { method: "DELETE" }).then(
      () => {
        Swal.fire({
          title: 'خداوکیلی میخوای حذف کنی?',
          text: "دست به مهره حرکته",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'اره'
        }).then((result) => {
          if (result.isConfirmed) {
            const filteredMovies = movies.filter((mov) => mov.id !== id);
            setMovies(filteredMovies);
            Swal.fire(
              'حذف شد!',
              'راحت شدی؟',
              'success'
            )
          }
        })
      }
    );
  };
  const addMovie = (newMovie) => {
    let updatedMovies = [];
    fetch(`http://localhost:3001/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    }).then((response) => response.json())
      .then((data) => {
        updatedMovies = [...movies, data];
        setMovies(updatedMovies);
      })
    console.log(movies)
  };
  const handleGener = (e) => {
    getData(e.target.value);
  }
  const handleSearchByInput = (e) => {
    console.log(e.target.value)
    if (e.target.value !== "") {
      fetch(`http://localhost:3001/movies?title=${e.target.value}`).then((data) => {
        data.json().then((res) => {
          setMovies(res);
        });
      });
    } else {
      getData();
    }
  }
  const editMovie = (updatedMovie, id) => {
    console.log("edit movie")
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMovie),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedMovies = movies.map((movie) =>
          movie.id === id ? data : movie
        );
        setMovies(updatedMovies);
        toast.success('تغییرات با موفقیت اعمال شد.');
      })
      .catch((error) => {
        toast.error('خطا در ویرایش اطلاعات فیلم.');
      });
      toast.error("در دست برسی میباشد ")
  };
  useEffect(() => {
    let showAllData = false;
    if (!showAllData) {
      getData("همه")
      showAllData = true;
      console.log("use effect lunched")
    }
  }, []);
  return (
    <div className=" h-screen w-full min-w-[882px]
    bg-[url('./assets/images/bg.jpg')] bg-cover bg-no-repeat 
    flex flex-col justify-center items-center
    overflow-hidden">
      <Form addMovie={addMovie} className="h-[20%]" />
      {/* Serching area */}
      <div className='SearchArea bg-[rgba(27, 26, 26, 0.716)] flex w-full justify-evenly items-center px-3 py-2
       h-[10%]'>
        <div>
          <input className='py-1 px-3 
      bg-transparent text-white placeholder:text-white 
      border-b-2 shadow-2xl' placeholder='نام فیلم را وارد کنید' onChange={handleSearchByInput} />
        </div>
        <select className="py-1 px-3 
      bg-[#2a3a48] text-white placeholder:text-white 
      border-2 rounded-md shadow-2xl" onChange={handleGener}>
          <option>همه</option>
          <option>وحشت/هیجانی</option>
          <option>کمدی</option>
          <option>درام</option>
        </select>
      </div>
      {/*End Serching area */}
      <div className="overflow-auto">
      <Table movies={movies} deleteMovie={deleteMovie}
       editMovie={editMovie} className="h-[70%] mb-6 pb-4"/>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
export default App;
