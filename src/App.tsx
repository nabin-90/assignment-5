import { Suspense } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import type { ITechnology } from "./type/technologyType";
import Technologies from "./components/Technologies";
import { Toaster } from "react-hot-toast";

const technologyFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologyPromise = technologyFetch();

  return (
    <>
      <Toaster position="top-right" />
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologyPromise={technologyPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
