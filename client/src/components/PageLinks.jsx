import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPagesAsync } from '../features/pageLinks/pageLinkSlice';
import PageCard from './cards/PageCard';

function PageLinks() {
  const dispatch = useDispatch();
  const [pages, setpages] = useState([]);
  
  useEffect(()=>{
    const fetchDaata = async ()=>{
      const data = await dispatch(getAllPagesAsync());
      const result = await data.payload;
      setpages(result);
    }
    fetchDaata();
  }, [dispatch]);


  return (
    <div className=''>
      {pages.map((pageData, count)=>(
        <PageCard 
        key={pageData._id} 
        id={pageData._id} 
        title={pageData.title}
        pageLink={pageData.path}
        imageUrl={pageData.imageURL}
        description={pageData.description}
        count={count}
        />
      ))}
    </div>
  )
}

export default PageLinks