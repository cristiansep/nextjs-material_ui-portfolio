import {useState, useEffect} from 'react';
import { Layout } from "../components/Layout";
import AppBar from "../components/AppBar";

import DotLoader from "react-spinners/DotLoader";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [Layout, AppBar]);

  return (
    <>
      {!loading ? (
        <div className="loader">
          <DotLoader color={"#252740"} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <AppBar />
          <Layout />
        </>
      )}
    </>
  );
}
