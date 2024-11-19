import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Mural from "./components/mural";
export default function Home() {
  return (
    <div className="flex flex-row flex-wrap space-around" id="first">
      <Header/>
      <Main/>
      <Mural/>
      <Footer/>
    </div>
  );
}
