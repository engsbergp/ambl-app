import React, { useContext, useState } from "react";
import metadata from '../components/visual/metadata.json'

const AuthDataContext = React.createContext();
const AuthFunctionsContext = React.createContext();

export function useAuthData() {
  return useContext(AuthDataContext);
}

export function useAuthFunctions() {
  return useContext(AuthFunctionsContext);
}

export function AuthProvider({ children }) {

  //user states
  // const [userEmail, setUserEmail] = useState("");
  // const [userUsername, setUserUsername] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  // const [userEthAddress, setUserEthAddress] = useState("");

  const [user, setUser] = useState(false);

  const currentUser = "ambient landscapes";
  const currentEmail = "philengsberg@gmail.com";
  const currentAvatar = metadata[6].image;
  const currentEthAddress = "0x4f5e28C786f209620A35d334a7280ef33DeB0018"
  const currentEthAddressTruncated = "0x4f5e...0018"

  // const [currentUser, setCurrentUser] = useState("");
  // const [currentEmail, setCurrentEmail] = useState("");
  // const [currentAvatar, setCurrentAvatar] = useState("");
  // const [currentEthAddress, setCurrentEthAddress] = useState("");


  //GET AND UPDATE USER INFO
  // useEffect(() => {
  //   if (!user) return;
  //   const email = user.get('email');
  //   const username = user.get('username');
  //   const avatar = user.get('avatar');
  //   const ethAddress = user.get('ethAddress');
  //   setCurrentUser(username);
  //   setCurrentEmail(email);
  //   setCurrentAvatar(avatar);
  //   setCurrentEthAddress(ethAddress);
  //   // console.log(ethAddress);
  // }, [user])

  // SAVE USER INFO
  // const saveUserInfo = async () => {
  //   if (!user) return;
  //   user.set('email', userEmail);
  //   user.set('username', userUsername);
  //   user.set('avatar', userAvatar);
  //   user.set('ethAddress', userEthAddress);
  //   setCurrentUser(userUsername);
  //   setCurrentEmail(userEmail);
  //   setCurrentAvatar(userAvatar);
  //   setCurrentEthAddress(userEthAddress);

  //   await user.save();
  //   alert('user info saved from context')
  // }
  

  return(
    <AuthDataContext.Provider value={{ 
                                // userEmail, setUserEmail, 
                                // userUsername, setUserUsername, 
                                // userAvatar, setUserAvatar, 
                                user, setUser,
                                currentUser, currentEmail, currentAvatar, currentEthAddress, currentEthAddressTruncated
    }}>
      {/* <AuthFunctionsContext.Provider value={{ saveUserInfo }}> */}
            { children }
      {/* </AuthFunctionsContext.Provider> */}
    </AuthDataContext.Provider>
  )
};