import React from 'react';
import Header from '../components/Heder'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination'
const Home = () => {

  return (
    <div>
      <Header/>
      <Blogs />
      <Pagination />
    </div>
  )
};

export default Home;
