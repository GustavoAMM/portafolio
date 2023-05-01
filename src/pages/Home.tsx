import Main from "../Components/Home/Components/Main";
import Slidebar from "../Components/Home/Components/Slidebar";
import Curriculum from "../Components/Home/Components/Curriculum";
function Home() {
  return (
    <div className="w-full xl:flex sm:flex grid mx-4">
      <div className="xl:w-3/4 sm:w-3/4 m-4 ">
        <Main />
      </div>
      <div className="w-1/4 m-4 grid gap-4 content-around">
        <Slidebar />
        <Curriculum />
      </div>
    </div>
  );
}
export default Home;
