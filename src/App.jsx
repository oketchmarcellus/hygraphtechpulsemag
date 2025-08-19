import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import Shop from './Shop'
import Blog from './Blog'
import Footer from './Footer'
import './App.css'

const GET_DATA = gql`
query QueryHomepage($homepageSlug: String) {
  home(where: {slug: $homepageSlug}) {
    id
    publishedAt
    heroTagline{
      html
    }
  }
}
`;

function App() {
  // Set your navigation ID
  //const navId = 'main-nav'; 
  // Set your homepage slug
  const homepageSlug= 'home';
  // Provide default values to initiate the query
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { homepageSlug }, 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Router>
    <div id="main">
      {/* Main content */}
      <>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={
                <>
                  <Landing />
                </>
              }
            />
            <Route path="/:shopPageSlug" element={
              <Shop />
              }
            />
            <Route path="/:blogPageSlug" element={
              <Blog />
              }
            />
          </Routes>
        </div>
        <Footer />
      </>
      {/* End Main content */}   
    </div>
  </Router>
  );
}

export default App;