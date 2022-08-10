import React,{useState} from 'react';
import Modal from './Modal';
const Posts=({posts,loading})=>{
    const [isOpen,setIsOpen] = useState(false);
    const [isImage,setIsImage]=useState("");
    const [isDescription,setIsDescription]=useState("");
    if(loading){
        return <h2>Loding...</h2>
    }
    return(
    <div>
        {
            posts.map((post)=>{
                return (
                    <>
                     <img id={post.id} src={post.image} alt="random"  onClick={()=>{setIsOpen(!isOpen);setIsImage(post.image);setIsDescription(post.description)}} style={{height:'200px',width:'200px',cursor:"pointer"}}/>
                <Modal open={isOpen} onClose={()=>setIsOpen(!isOpen)}>
                <img src={isImage} style={{width:"200px",height:'200px',borderRadius:'20.5px',marginLeft:"30%"}} alt="the property"/>
                <p>{isDescription}</p>
                {/* hello */}
            </Modal>
                    </>
                )
               
            })
        }
    </div>
    )
}

export default Posts;