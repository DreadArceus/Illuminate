import Left from "../components/Left";
import Middle from "../components/Middle";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <Left />
        <Middle />
      </div>
    </div>
  );
}
export default Home;
