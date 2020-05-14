import React, { useState, useEffect } from "react";
import Title from "./components/Layout/Title";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Country from "./components/Country";
import Global from "./components/Global";
import Home from "./components/Home";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState({ Global: {}, Countries: [], Date: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const result = await axios("https://api.covid19api.com/summary");
        setData(result.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const country = () => <Country data={data} loading={loading} error={error} />;
  const global = () => <Global data={data} loading={loading} error={error} />;
  const home = () => <Home />;

  return (
    <div>
      <Router>
        <Header />
        <Title />
        <Switch>
          <Route path="/country" component={country}></Route>
          <Route path="/global" component={global}></Route>
          <Route path="/" component={home}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
