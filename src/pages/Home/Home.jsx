import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import ProfileInfo from '../../Components/Cards/ProfileInfo'
import NoteCard from '../../Components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import { data , useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import Toast from '../../Components/ToastMessage/Toast'
const Home = () => {

        const [openAddEditModal,setOpenAddEditModal]=useState({
          isShown:false,
          type:"add",
          data:null,

        });


        const [showToastMsg,setShowToastMsg]=useState({
          isShown:false,
          message:"",
          type:"add",
          add: null
})


        const[allNotes,setAllNotes]=useState([]);
        const[userInfo,setUserInfo]=useState(null);

        const navigate =useNavigate();

        const handleEdit = (noteDetails)=>{
          setOpenAddEditModal({isShown:true,data:noteDetails,type:"edit"})

        };

        const handleCloseToast =() =>{
          setShowToastMsg(
            {
              isShown:false,
              message:" ",

            }
          );
        };

        const showToastMessage=(message,type) =>{
          setShowToastMsg(
            {
              isShown:true,
              message,
              type,
            }
          );
        };



        const getUserInfo = async () => {
          try {
            const response = await axiosInstance.get("/get-user");
            if (response.data && response.data.user) {
                setUserInfo(response.data.user);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                localStorage.clear();
                navigate("/login");
            }
        }
      };


    const getAllNotes = async()  =>{
      try {
        const response = await axiosInstance.get("/get-all-notes");
        if(response.data && response.data.notes){
          setAllNotes(response.data.notes);
        }
      } catch (error) {
        console.log("Unexpected Error. Please Try Again.");
      }
    };


  useEffect(() => {
    getAllNotes();
    getUserInfo();
  
    return () => {
      
    }
  },)
  
  return (
    <>
    <NavBar userInfo={userInfo}/>

     <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-4 mt-8'>

        {allNotes.map((item,index)=>(
        <NoteCard title={item.title}
        key={item._id}
        date={item.createdOn}
        content={item_content}
        tags={item.tags} isPinned={item.isPinned}
        onEdit={()=>handleEdit(item)}
        onDelete={()=>{}}
        onPinNote={()=>{}}/>

))}


     </div>
    
     </div>
        <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-800 absolute right-10 bottom-10' 
        onClick={()=>{
          setOpenAddEditModal({isShown:true,type:"add",data:null})
        }}
          
          
          
          >              
            
            
            <MdAdd className="text-[32px] text-white"/>
        </button>
        <Modal
         isOpen={openAddEditModal.isShown}
         onRequestClose={()=>{}}
         style={{
          overlay:{
            backgroundColor:"rgba(0,0,0,0.2)"
          },

         }

        }
          contentLabel=''
          className='w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll '        
        
        >

        <AddEditNotes
        type={openAddEditModal.type}
        notedata={openAddEditModal.data}
        onClose={()=>{
          setOpenAddEditModal({isShown:false,type:"add",data:null})
        }}
        getAllNotes={getAllNotes}
        
        />
        </Modal>
        <Toast
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
        />
    </>
  )
}

export default Home