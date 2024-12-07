import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import ProfileInfo from '../../Components/Cards/ProfileInfo'
import NoteCard from '../../Components/Cards/NoteCard'

const Home = () => {
  return (
    <>
    <NavBar/>
     <div className='container mx-auto'>
        <NoteCard title="Meeting on 7th April" date="3rd Apr 2024" content="Meeting on 7th April"
        tags="#Meeting" isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}/>
     </div>
    
    </>
  )
}

export default Home