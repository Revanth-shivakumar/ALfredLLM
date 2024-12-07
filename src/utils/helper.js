export const validateEmail = (email) => {
    // Regular expression to match a typical email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email); // Returns true if valid, false if invalid
  };

export const getInitials=(name)=>{
   if (!name) return "";
  const words = name.split(" ");
  let initials="";
  for(let i=0;i<Math.min(words.length,2);i++){
    initials+=words[i][0];
  }
 return initials.toUpperCase(); 
};