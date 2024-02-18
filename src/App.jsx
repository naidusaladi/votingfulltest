import { useEffect,useState } from 'react'
import IntroPage from './pages/IntroPage/IntroPage'
import President from './pages/PresidentPage/President'
import VicePresident from './pages/VicePresidentPage/VicePresident'
import GvicePresident from './pages/GvicePresidentPage/GvicePresident'
import GeneralManager from './pages/GeneralManagerPage/GeneralManager'
import PrivateRouters from './utils/PrivateRouters'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import NotAValiedUser from './pages/NotAValiedUser/NotAValiedUser'
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import ThankYou from './pages/ThankYouPage/ThankYou'
import Firebase from './pages/firebasetestpage/Firebase'
import { db } from './database/firebase'
import {getDocs,collection} from 'firebase/firestore'


const App = () => {
  const voteCollectionRef=collection(db,'votes2024')
  const [auth,setAuth]=useState(false)
  const [id,setId]=useState(-1)
  const [voteList,setVoteList]=useState([])
  const getVoteList=async ()=>{
      try{

          //Read data
          const data=await getDocs(voteCollectionRef)
          const filtredData=data.docs.map((doc)=>({
              ...doc.data(),
              id:doc.id

          }))
          setVoteList(filtredData)
          console.log(filtredData)
      }catch(err){
          console.error(err)
      }

  }
  
  const authFun=(id,value)=>{
    if(value==true){
      setAuth(true)
      setId(id)
    }
    else{
      setAuth(false)
    }
  }

  useEffect(()=>{
    const changing=async()=>{   
        await getVoteList()
    }
    changing()

},[])



  
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouters auth={auth} />}>
            <Route path=":userId/President" element={<President id={id} />} />
            <Route path=":userId/VicePresident" element={<VicePresident id={id}  />} />
            <Route path=":userId/GvicePresident" element={<GvicePresident id={id} />} />
            <Route path=":userId/GeneralManager" element={<GeneralManager id={id} />} />
          <Route path=":userId/ThankYou" element={<ThankYou id={id}  getVoteList={getVoteList} />} />
        </Route>
        <Route path='/datatest' element={<Firebase/>}/>
        <Route path='/' element={<PageNotFound/>}/>
        <Route path=":userId" element={<IntroPage authFun={authFun} voteList={voteList}/>} />
        <Route path='/NotAValiedUser' element={<NotAValiedUser />} />

        <Route path="*" element={<PageNotFound/>}/>
    
      </Routes>
    </BrowserRouter>



      {/* <IntroPage/>
      <President/>
      <VicePresident/>
      <GvicePresident/>
      <GeneralManager/> */}
  

    </>
  )
}

export default App
