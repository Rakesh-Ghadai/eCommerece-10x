import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';
const Products = () => {
    const [data,setData]=useState('');
    const [items,setItems] = useState([]);
    const [loading,setLoding]= useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]= useState(10);
    const paginate = pageNumber =>setCurrentPage(pageNumber);

    const onSearch=(e)=>{
        setData(e.target.value);
        console.log(data);
        axios.get("http://fakestoreapi.com/products")
        .then(res=>{
            let filtered =res.data;
                //console.log(post);
                const result= filtered.filter((val)=>val.category===data);
                
                //console.log(res);
               
           

            console.log(result)
            setItems(result);
            setLoding(false);
            //console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })

    }

    useEffect(()=>{
        setLoding(true);
        //axios.get("https://instaclone-10x-app.herokuapp.com/user")
        axios.get("http://fakestoreapi.com/products")
        .then(res=>{
            console.log(res.data)
            setItems(res.data);
            setLoding(false);
            //console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirststPost=indexOfLastPost-postsPerPage;
    const currentPosts=items.slice(indexOfFirststPost,indexOfLastPost);
    return(
        <>
    
        <select name="pro" style={{marginBottom:"60px",marginTop:"30px",marginLeft:"40%",width:'400px',height:"50px",borderRadius:'6.5px',fontSize:"20px"}}   required={true} onChange={onSearch} >
                <option value="" selected={true} disabled>Not selected yet</option>
                <option value="electronics" >Men's clothing</option>
                <option value="jewelery" >electronics</option>
                <option value="women's clothing" >jewelery</option>
                <option value="men's clothing" >women's clothing</option>
            </select>
        <Posts posts={currentPosts} loading={loading}/>
        <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}/>
        </>
    )
}

export default Products;