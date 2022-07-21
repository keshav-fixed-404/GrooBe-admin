import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Appointments from './components/Appointments/Appointments';
import { Route, Routes } from 'react-router-dom';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Customers from './components/Customers/Customers';
import Salons from './components/Salons/Salons';



function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        
        <Routes>
          <Route path='/' element={<MainDash/>}/>
        </Routes>
        <Routes>
          <Route path='appointments' element={<Appointments/>}/>
        </Routes>
        <Routes>
          <Route path='orders' element={<Orders/>}/>
        </Routes>
        <Routes>
          <Route path='customers' element={<Customers/>}/>
        </Routes>
        <Routes>
          <Route path='salons' element={<Salons/>}/>
        </Routes>
        
        <RightSide />
        

      </div>
    </div>
  );
}

export default App;











// import { async } from '@firebase/util';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getFirestore, connectFirestoreEmulator, collection, query, where, getDocs} from "firebase/firestore";
// import { useEffect } from 'react';
// import './App.css'
// import MainDash from './components/MainDash/MainDash';
// import RightSide from './components/RigtSide/RightSide';
// import Sidebar from './components/Sidebar';
// //test start here

// import Appointments from './components/Appointments/Appointments';
// import { Route, Routes } from 'react-router-dom';
// import Orders from './components/Orders/Orders';
// import Products from './components/Products/Products';







// let config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

// const firebaseapp = firebase.initializeApp(config);

// if (window.location.hostname === "localhost") {
//  // app.functions().useFunctionsEmulator("http://localhost:5001");
//   const db = getFirestore();
//   connectFirestoreEmulator(db, 'localhost', 8080);
//   firebaseapp.auth().useEmulator("http://localhost:9099");
//   firebaseapp.firestore().settings({
//     host: "localhost:8080",
//     ssl: false,
//   });

// }

// //Test Here
// const db = getFirestore(firebaseapp);

// const test=()=>{
//   // const querySnapshot = await getDocs(collection(db, "user"));
//   // querySnapshot.forEach((doc) => {

//   //   console.log(doc.id, " => ", doc.data());
//   // });
//   const colRef  = collection(db,'user');
//  // console.log(colRef);
//   getDocs(colRef).then((snapshot)=>{console.log(snapshot.docs)}).catch(err=>console.log(err))
// }
// test();




// function App() {
//     return (
//       <div className="App">
//         <div className="AppGlass">
//           <Sidebar />
          
//           {/* <MainDash /> */}
//           <Routes>
//             <Route path='/' element={<MainDash/>}/>
//           </Routes>
//           <Routes>
//             <Route path='appointments' element={<Appointments/>}/>
//           </Routes>
//           <Routes>
//             <Route path='orders' element={<Orders/>}/>
//           </Routes>
//           <Routes>
//             <Route path='products' element={<Products/>}/>
//           </Routes>
//           <RightSide />
          
  
//         </div>
//       </div>
//     );
// }

// export default {App, firebaseapp};