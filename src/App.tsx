import { Suspense } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import type { ITechnology } from "./type/technologyType";
import Technologies from "./components/Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const technologyFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologyPromise = technologyFetch();

  return (
    <>
      <ToastContainer position="bottom-right" />
      <Nav />
      <Banner />
      <Suspense
        fallback={
          <div className="flex w-full min-h-[50vh] items-center justify-center">
            <h2>Loading...</h2>
          </div>
        }
      >
        <Technologies technologyPromise={technologyPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
