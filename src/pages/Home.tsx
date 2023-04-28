import Main from "../Components/Home/Components/Main";
import Slidebar from "../Components/Home/Components/Slidebar";
function Home() {
  return (
    <div className="w-full flex">
      <div className="w-3/4 m-4">
        <Main />
      </div>
      <div className="w-1/4 m-4 bg-blue-200">
        <Slidebar />
      </div>
    </div>
  );
}
export default Home;
