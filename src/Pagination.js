import React from 'react';
import './pagination.css';
const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers=[];
    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <>
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number=>{
                    return(
                        <li key={number} className='page_items'>
                        <a onClick={()=>paginate(number)} href='!#' className='page_numbers'>
                            {number}
                        </a>
                    </li>
                    )
                    
                })}
            </ul>
        </nav>
        </>
    )
}
export default Pagination;