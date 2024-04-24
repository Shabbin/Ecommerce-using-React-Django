// Shop.jsx
import React from "react";
import SportsItem from "../components/SportsItem";
import Navigation from "../components/navigation";
import Carousel from "../components/Carousel";

function Shop() {
    // Mock data for sports items
    const sportsItems = [
        { id: 1, name: "Football", price: 20, image: "/images/photo2.jpg" },
        { id: 2, name: "Basketball", price: 25, image: "/images/photo3.jpg" },
        { id: 3, name: "Tennis Ball", price: 10, image: "/images/photo5.jpg" },
        { id: 4, name: "Tennis Ball", price: 10, image: "/images/photo5.jpg" },
        { id: 5, name: "Tennis Ball", price: 10, image: "/images/photo5.jpg" },
        { id: 6, name: "Tennis Ball", price: 10, image: "/images/photo5.jpg" },
        { id: 7, name: "Tennis Ball", price: 10, image: "/images/photo5.jpg" },
        { id: 8, name: "Tennis Ball", price: 10, image: "/images/photo5.jpg" },
        { id: 9, name: "Tennis Ball", price: 10, image: "/images/photo5.jpg" },
        // Add more items as needed
    ];



    return (
        <div className="shop-page">
            <Navigation />
            <Carousel />
            <h2 className="shop">Shop</h2>
            <div className="sports-items">
                {sportsItems.map((item) => (
                    <SportsItem key={item.id} image={item.image} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Shop;




















// import { useState, useEffect } from "react";
// import api from "../api";
// import Note from "../components/Note"
// import "../styles/Home.css"

// function Home() {
//     const [notes, setNotes] = useState([]);
//     const [content, setContent] = useState("");
//     const [title, setTitle] = useState("");

//     useEffect(() => {
//         getNotes();
//     }, []);

//     const getNotes = () => {
//         api
//             .get("/api/notes/")
//             .then((res) => res.data)
//             .then((data) => {
//                 setNotes(data);
//                 console.log(data);
//             })
//             .catch((err) => alert(err));
//     };

//     const deleteNote = (id) => {
//         api
//             .delete(`/api/notes/delete/${id}/`)
//             .then((res) => {
//                 if (res.status === 204) alert("Note deleted!");
//                 else alert("Failed to delete note.");
//                 getNotes();
//             })
//             .catch((error) => alert(error));
//     };

//     const createNote = (e) => {
//         e.preventDefault();
//         api
//             .post("/api/notes/", { content, title })
//             .then((res) => {
//                 if (res.status === 201) alert("Note created!");
//                 else alert("Failed to make note.");
//                 getNotes();
//             })
//             .catch((err) => alert(err));
//     };

//     return (
//         <div>
//             <div>
//                 <h2>Notes</h2>
//                 {notes.map((note) => (
//                     <Note note={note} onDelete={deleteNote} key={note.id} />
//                 ))}
//             </div>
//             <h2>Create a Note</h2>
//             <form onSubmit={createNote}>
//                 <label htmlFor="title">Title:</label>
//                 <br />
//                 <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     required
//                     onChange={(e) => setTitle(e.target.value)}
//                     value={title}
//                 />
//                 <label htmlFor="content">Content:</label>
//                 <br />
//                 <textarea
//                     id="content"
//                     name="content"
//                     required
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                 ></textarea>
//                 <br />
//                 <input type="submit" value="Submit"></input>
//             </form>
//         </div>
//     );
// }

// export default Home;
