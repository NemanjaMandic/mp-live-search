// @flow

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Layout } from "./components/SearchList/style";
import SearchList from "./components/SearchList/SearchList";

import Loader from "./components/Loader";
import Header from "./components/Header/Header";

type PropsT = {
  results: Array<any>,
  inProgress: boolean
};

function App(props: PropsT) {
  const { inProgress, results } = props;
  return (
    <div className="App">
      <Layout>
        <Header />
        {inProgress ? <Loader /> : <SearchList results={results} />}
      </Layout>
    </div>
  );
}

const mapStateToProps = ({
  news: {
    images: { data: results },
    images: { inProgress }
  }
}) => ({
  results,
  inProgress
});

export default connect(
  mapStateToProps,
  null
)(App);
