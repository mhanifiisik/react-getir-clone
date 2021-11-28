import Header from "./Components/Header";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import Promotions from "./Components/Promotions";
import Favorites from "./Components/Favorites";
import Mobile from "./Components/Mobile";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Categories />
      <div className="bg-gray-100">
        <Promotions />
        <Favorites />
        <Mobile />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
