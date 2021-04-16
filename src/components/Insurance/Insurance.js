import styles from '../Insurance/Insurance.module.css'

const Insurance = ({handleSubmit, handleChange, state}) => (         
  <div className={styles.container}>
    <div className={styles.infoDisplay}>
          {/* {state.patientInfo.map((i) => (
            <article key={i.newInfo}>
              
              <div>{i.insurancename}</div>
              <div>{i.insuranceaddress}</div>
              <div>{i.policynum}</div>
              <div>{i.policyholder}</div>
              <div>{i.phonenum}</div>
              <div onClick={() => handleDelete(i._id)}>{"🚫"}</div>
              { !state.editMode && <div onClick={() => handleEdit(i._id)}>{"✏️"}</div> }
            </article>
          ))} */}
          </div>
          <div className={styles.inInput}>
       <form onSubmit={handleSubmit}>
            
              <label><span>Insurance</span></label>
              <p>Please enter your insurance information in the fields below.</p>
              <label><span>Insurance Name</span></label>
              <input name="insurancename" value={state.newInfo.insurancename} onChange={handleChange}
             />
             <label><span>Insurance Address</span></label>
              <input name="insuranceaddress" value={state.newInfo.insuranceaddress} onChange={handleChange}
             />
             <label><span>Policy Number</span></label>
              <input name="policynum" value={state.newInfo.policynum} onChange={handleChange}
             />
             <label><span>Policy Holder</span></label>
              <input name="policyholder" value={state.newInfo.policyholder} onChange={handleChange}
             />
             <label><span>Phone Number</span></label>
              <input name="phonenum" value={state.newInfo.phonenum} onChange={handleChange}
             />
            
            
            </form>
            
            </div>
  </div>

);

export default Insurance;     