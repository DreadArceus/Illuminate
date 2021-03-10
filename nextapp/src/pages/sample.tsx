import Left from "../components/Left";
import Middle from "../components/Middle";
import Navbar from "../components/Navbar";


function Home() {
  return (
    <div className="pepew">
    <div className="container">
      <Navbar />
      <div className="main">
        <Left />
        <Middle />
      </div>
    </div>
    </div>
  );
}
export default Home;
