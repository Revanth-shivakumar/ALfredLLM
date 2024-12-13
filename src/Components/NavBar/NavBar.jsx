import React,{useState} from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const NavBar= ({userInfo}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const Navigate=useNavigate();
  const onLogout=()=>{
    localStorage.clear()
    Navigate("/login");
  }
  const handleSearch=()=>{};
  const onClearSearch=()=>{
    setSearchQuery("");
  }

  
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow '>
    <h2 className='text-xl font-medium text-black py-2'>ALFRED</h2>
    <SearchBar value={searchQuery}
       onChange={ ({target})=>{
        setSearchQuery(target.value);
       }}
       handleSearch={handleSearch}
       onClearSearch={onClearSearch}
       
    />
    <ProfileInfo userInfo={userInfo} onLogout={onLogout}></ProfileInfo>
    </div>
  )
}

export default NavBar