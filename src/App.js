import { useState, useEffect } from "react";
// import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import History from "./components/History/History";
import PersonalHistory from "./components/PersonalHistory/PersonalHistory";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import Insurance from "./components/Insurance/Insurance";
import Reasons from "./components/Reasons/Reasons";
import Map from './components/Map/Map';
import { getCurrentLatLng } from './services/geolocation';
import "./styles.css";
//====================================
import { auth } from './services/firebase';
import { 
  fetchInfo, 
  deleteInfo, 
  createInfo, 
  updateInfo } from './services/api-service';

export default function App() {

  const [appData, setData] = useState({
    lat: null,
    lng: null, 

  })

//====================================
  const [state, setState] = useState({
    user: null,
    patientInfo: [],
    newInfo: [
      {
      name: [],
      address: [],
      city: [],
      statee: [],
      zipcode: [],
      phonenumber: [],
      birthdate: [],
      emcontact: [],
      emrelation: [],
      allergies: [],
      history: [],
      currentmeds: [],
      smoke: [],
      drink: [],
      familyhistory: [],
      healthinsurance: [
        { 
          insurancename: [],
          insuranceaddress: [],
          policynum: [],
          policyholder: [],
          phonenum: [],
    
    },
  ]
  }],
  editMode: false
});
//====================================
async function getData() {
  // await is like telling JavaScript ... "wait for this to run"
  const {lat, lng} = await getCurrentLatLng();

  setData({
    lat, 
    lng,

  });
  
}

useEffect(() => {

   getData();
 }, []); 

//====================================
  useEffect(() => {
    async function getAppData() {
      if(!state.user) return;
      try {
        const patientInfo = await fetchInfo(state.user.uid);
        setState((prevState) => ({
          ...prevState,
          patientInfo,
        }));
      } catch (error) {
        console.log(error)
      }
    }
    getAppData();
    
    const cancelSubscription = auth.onAuthStateChanged(user => {
      if(user) {
        setState(prevState => ({
          ...prevState,
          user,
        }));
      } else {
        setState(prevState => ({
          ...prevState,
          patientInfo: [],
          user,
        }));
      }
    });

    return function() { // cleanup function
      cancelSubscription();
    }

  }, [state.user]);
//====================================

  async function handleSubmit(e) {
    if(!state.user) return;
    
    e.preventDefault();

    if(!state.editMode) {

      const patientInfo = await createInfo(state.newInfo, state.user.uid)
      

    setState((prevState) => ({
      ...prevState,
      patientInfo,
      newInfo: {
        name: "",
        address: "",
        city: "",
        statee: "",
        zipcode: "",
        phonenumber: "",
        birthdate: "",
        emcontact: "",
        emrelation: "",
        allergies: "",
        history: "",
        currentmeds: "",
        smoke: "",
        drink: "",
        familyhistory: "",
        healthinsurance: [
          { 
            insurancename: "",
            insuranceaddress: "",
            policynum: "",
            policyholder: "",
            phonenum: "",
      
      },
    ]
      },
    }));
} else {

  const patientInfo = await updateInfo(state.newInfo);

  setState(prevState => ({
    ...prevState,
    patientInfo,
    newInfo: {
      name: "",
      address: "",
      city: "",
      statee: "",
      zipcode: "",
      phonenumber: "",
      birthdate: "",
      emcontact: "",
      emrelation: "",
      allergies: "",
      history: "",
      currentmeds: "",
      smoke: "",
      drink: "",
      familyhistory: "",
      healthinsurance: [
        { 
          insurancename: "",
          insuranceaddress: "",
          policynum: "",
          policyholder: "",
          phonenum: "",
    
    },
  ]
    },
    editMode: false
  }));
}
}
//====================================
  function handleChange(e) {
    setState((prevState) => ({
      ...prevState, 
      newInfo: {
        ...prevState.newInfo,
        [e.target.name]: e.target.value 
      }
    })) 
  }
//====================================
  async function handleDelete(infoId) {
    if(!state.user) return;
    
    const patientInfo = await deleteInfo(infoId);
    
    setState(prevState => ({
      ...prevState,
      patientInfo,
    }));
  }
//====================================
  function handleEdit(infoId) {
    const { name, address, city, statee, zipcode, phonenumber, birthdate, emcontact, emrelation, allergies, history, currentmeds, smoke, drink, familyhistory, insurancename, insuranceaddress, policynum, policyholder, phonenum, _id } = state.patientInfo.find(
      name => name._id === infoId,
      address => address._id === infoId,
      city => city._id === infoId,
      statee =>  statee._id === infoId,
      zipcode => zipcode._id === infoId,
      phonenumber => phonenumber._id === infoId,
      birthdate => birthdate._id === infoId,
      emcontact => emcontact._id === infoId,
      emrelation => emrelation._id === infoId,
      allergies => allergies._id === infoId,
      currentmeds => currentmeds._id === infoId,
      smoke => smoke._id === infoId,
      drink => drink._id === infoId,
      history => history._id === infoId,
      insurancename => insurancename._id === infoId,
      insuranceaddress => insuranceaddress._id === infoId,
      policynum => policynum._id === infoId,
      policyholder => policyholder._id === infoId,
      phonenum => phonenum._id === infoId,
    );
    setState(prevState => ({
      ...prevState,
      newInfo: {
        name,
        address,
        city,
        statee,
        zipcode,
        phonenumber,
        birthdate,
        emcontact,
        emrelation,
        allergies,
        history,
        currentmeds,
        smoke,
        drink,
        familyhistory,
        healthinsurance: [
          { 
            insurancename,
            insuranceaddress,
            policynum,
            policyholder,
            phonenum,
            _id
      
      },
    ]
      },
      editMode: true
    }));
  }
//====================================
  function handleCancel() {
    setState(prevState => ({
      ...prevState,
      newInfo: {
        name: "",
        address: "",
        city: "",
        statee: "",
        zipcode: "",
        phonenumber: "",
        birthdate: "",
        emcontact: "",
        emrelation: "",
        allergies: "",
        history: "",
        currentmeds: "",
        smoke: "",
        drink: "",
        familyhistory: "",
        healthinsurance: [
          { 
            insurancename: "",
            insuranceaddress: "",
            policynum: "",
            policyholder: "",
            phonenum: "",
      
      },
    ]
   
      },
      editMode: false
    }));
  }

//====================================
  return (
    <>
    <div className='App'>
            <div className='Gmap'>
            <Map lat={appData.lat} lng={appData.lng}/>
            </div>
      <Header user={state.user} />
      <main>
        <section>
          {/* <Switch> */}
          { 
            state.user && 
            <>
            <hr />
{/* ====================================             */}
              <PatientInfo handleChange={handleChange} 
              handleSubmit={handleSubmit} 
              handleCancel={handleCancel} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit} 
              state={state}
              />
              <Insurance handleChange={handleChange} 
              handleSubmit={handleSubmit} 
              handleCancel={handleCancel} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit} 
              state={state}
              />
              <PersonalHistory handleChange={handleChange} 
              handleSubmit={handleSubmit} 
              handleCancel={handleCancel} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit} 
              state={state}
              />
              <History handleChange={handleChange} 
              handleSubmit={handleSubmit} 
              handleCancel={handleCancel} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit} 
              state={state}
              />
              <Reasons handleChange={handleChange} 
              handleSubmit={handleSubmit} 
              handleCancel={handleCancel} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit} 
              state={state}
              />
{/* ==================================== */}
            </>
          }
          {/* // </Switch> */}
           </section>
          </main>
          <footer className="footer">
        &copy; React Patient Sign In
      </footer>
      </div>
    </>
  );
}

