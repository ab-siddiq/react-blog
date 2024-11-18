import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex justify-between w-90px">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  );
}

export default App;
