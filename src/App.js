import './App.css';
import Banner from './components/Banner.js';
import Nav from './components/Nav.js';
import Row from './components/Row.js';
import requests from "./api/requests.js"

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row 
        title= "NETFLIX ORIGINAL"
        id= "NO"
        fetchUrl= {requests.fetchNetflexOriginals}
        isLargeRow
      />
      <Row
        title= "Tranding Now"
        id= "TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title= "TopRated"
        id= "TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title= "Action Movies"
        id= "AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title= "Comedy Movies"
        id= "CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}

export default App;
