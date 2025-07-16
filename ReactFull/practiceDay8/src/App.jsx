import  { useContext, useEffect } from 'react';
import Header from './components/Heder';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContex';

const App = () => {
  const { fetchdata } = useContext(AppContext);
  useEffect(() => {
    fetchdata(1)
  },[])
  return (
    <div >
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
};

export default App;
