import React, { useEffect, useState } from 'react'
import Layout from '../Component/Layout/Layout'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogSkeleton from './BlogSkeleton';


const Blogs = () => {
  const [alldata, setAlldata] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const [news, setNews] = useState([]);
  const[load,setLoad]=useState(4)
  const[skeleton,setSkeleton]=useState(true)

  const moreBlog=()=>{
    setLoad(load+4)
  }

  const placeholderImage = "http://via.placeholder.com/640x360";
  
  const BaseUrl = 'https://newsapi.org'
  const getNews = async () => {
    const response = await axios.get(`${BaseUrl}/v2/everything?q=apple&from=2023-06-23&to=2023-06-23&sortBy=popularity&apiKey=2a0fc9e295974559bfcabafd8b52f741`)
    setNews(response?.data.articles)

    setTimeout(()=>{
      setSkeleton(false)
    },2000)

  }
  useEffect(() => {
    getNews()
  }, [])

  const filterdata = (search, alldata) => {
    const filtered = alldata.filter((item) => {
      return item.title.includes(search) || item.description.includes(search);
    });
    return filtered;
  };

  const handleSearch = () => {
    const data = filterdata(search, alldata);
    setSearchFilter(data);
    console.log("FilterData ----", data);
  };

  console.log(news);

  return (
    <>
      <Layout>
        <div>
          <div className="breadcrumbs" data-aos="fade-in">
            <div className="container">
              <h2>Blogs</h2>
              <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
            </div>
          </div>
          <section id="events" className="events">
            <div className="container">
              <div className="row">
                <div className="col-8 d-flex align-items-stretch">
                  <div className="row">

                {
                  skeleton
                  ?
                  <>
                   <BlogSkeleton/>
                   <BlogSkeleton/>
                   <BlogSkeleton/>
                   <BlogSkeleton/>
                  </>
                  :
                    news?.slice(0, load).map((newsData, index) => {
                      return (
                        <>
                        
                          <div className="card" style={{ width: '25rem' }}>
                            <div className='card-wrapper'>
                              <img src={newsData.urlToImage
                                ? newsData.urlToImage
                                : placeholderImage} className="card-img-top" alt="..." />
                            </div>

                            <div className="card-body">
                              <h5 className='card-title' style={{ textAlign: "left" }}>
                                {newsData.title.slice(0, 20)}
                                ...
                              </h5>
                              <p className='card-text'>
                                {newsData.description &&
                                  newsData.description.slice(0, 65)}
                                ...
                              </p>
                              <hr/>
                              <a href={newsData.url} className="btn btn-success">Read More</a>
                            </div>
                          </div>

                        </>
                      )
                    })

                  
                }
                 



                    
                    <div>
                      <button className='btn btn-lg btn-danger' style={{marginLeft:"25px", marginTop:"20px"}} onClick={moreBlog}>Load More</button>
                    </div>
                  </div>
                </div>

{/* search part starts */}
                <div className="col-4 align-items-stretch mt-5">
                  <h3>Search Here</h3>
                  <div>
            <div className="input-group">
              <div className="form-outline">
                <input
                  // onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button
                // onClick={handleSearch}
                style={{ width: "50px", height: "38px" }}
                type="button"
                className="btn btn-success"
              >
                <i class="bx bx-search"></i>
              </button>
            </div>
          </div>
                  <div className='col-4'>
                    <div className="card" style={{ width: '18rem' }}>
                      <h4>Category</h4>
                      <ul className="list-group list-group-flush">
                        <li className='category-text'><a href='#' className='category-text'>An item</a></li>
                        <li className='category-text'><a href='#' className='category-text'>An item</a></li>
                        <li className='category-text'><a href='#' className='category-text'>An item</a></li>
                        <br /><br />
                        <h4>Recent Post</h4>
                        <li className='category-text'><a href='#' className='category-text'>An item</a></li>
                        <li className='category-text'><a href='#' className='category-text'>An item</a></li>
                        <li className='category-text'><a href='#' className='category-text'>An item</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>


    </>
  )
}

export default Blogs