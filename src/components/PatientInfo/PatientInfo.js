import styles from '../PatientInfo/PatientInfo.module.css'

const PatientInfo = ({handleSubmit, handleChange, state, handleCancel, handleDelete, handleEdit}) => (         
  
  <div className={styles.container}>
    <div className={styles.infoDisplay}>
     {state.patientInfo.map((i) => (
            <article key={i.newInfo} className={styles.infoList}> 
              <div>{i.name}</div>
              <div>{i.address}</div>
              <div>{i.city}</div>
              <div>{i.state}</div>
              <div>{i.zipcode}</div>
              <div>{i.phonenumber}</div>
              <div>{i.birthdate}</div>
              <div>{i.emcontact}</div>
              <div>{i.emrelation}</div>
              <div>{i.insurancename}</div>
              <div>{i.insuranceaddress}</div>
              <div>{i.policynum}</div>
              <div>{i.policyholder}</div>
              <div>{i.phonenum}</div>
              <div>{i.history}</div>
              <div>{i.familyhistory}</div>
              <div>{i.reasons}</div>
              <div onClick={() => handleDelete(i._id)}>{"🚫"}</div>
              { !state.editMode && <div onClick={() => handleEdit(i._id)}>{"✏️"}</div> }
            </article>
          ))}
          </div>
          <div className={styles.infoInput}>
      <form onSubmit={handleSubmit}>
            
              <label><span>Patient Info</span></label>
              <label><span>Name</span></label>
              <input name="name" value={state.newInfo.name} onChange={handleChange}/>
              <label><span>Address</span></label>
              <input name="address" value={state.newInfo.address} onChange={handleChange}/>
              <label><span>City</span></label>
              <input name="city" value={state.newInfo.city} onChange={handleChange}/>
              <label><span>State</span></label>
              <input name="state" value={state.newInfo.state} onChange={handleChange}/>
              <label><span>Zip Code</span></label>
              <input name="zipcode" value={state.newInfo.zipcode} onChange={handleChange}/>
              <label><span>Phone Number</span></label>
              <input name="phonenumber" value={state.newInfo.phonenumber} onChange={handleChange}/>
              <label><span>Birth Date</span></label>
              <input name="birthdate" value={state.newInfo.birthdate} onChange={handleChange}/>
              <label><span>Emergency Contact</span></label>
              <input name="emcontact" value={state.newInfo.emcontact} onChange={handleChange}/>
              <p>Relation To Emergency Contact</p>
              <input name="emrelation" value={state.newInfo.emrelation} onChange={handleChange}/>
            
            
            </form>
           
            </div>
  </div>

);

export default PatientInfo;   