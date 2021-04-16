const host = process.env.REACT_APP_DEV ?
  'http://localhost:3001' :
  'https://git.heroku.com/at-patient-backend.git';

const BASE_URL = host + "/api/patients";



function fetchInfo(userId) {
  return fetch(BASE_URL + '?uid=' + userId).then(res => res.json());
}


function deleteInfo(infoId) {
  return fetch(BASE_URL + '/' + infoId, {
    method: 'DELETE'
  }).then(res => res.json());
}

function createInfo(data, uid) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify({
      ...data,
      uid
    })
  }).then(res => res.json());
}

function updateInfo({name, address, city, statee, zipcode, phonenumber, birthdate, emcontact, emrelation, allergies, history, currentmeds, smoke, drink, familyhistory, insurancename, insuranceaddress, policynum, policyholder, phonenum,  _id }) {
  return fetch(`${BASE_URL}/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify({
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
      
    })
  }).then(res => res.json());
}

export {
  fetchInfo,
  deleteInfo,
  createInfo,
  updateInfo,
};


  // async function getAppData() {
  //   try {
  //     const BASE_URL = "http://localhost:3001/api/patients";
  //     const patientInfo = await fetch(BASE_URL).then(res => res.json());
  //     setState((prevState) => ({
  //       ...prevState,
  //       patientInfo,
  //     }));
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }