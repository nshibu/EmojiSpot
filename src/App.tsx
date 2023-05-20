import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="bg-slate-50 transition-colors dark:bg-slate-900">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
