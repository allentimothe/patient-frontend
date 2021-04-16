import styles from '../PersonalHistory/PersonalHistory.module.css'

const PersonalHistory = ({handleSubmit, handleChange, state, handleCancel, handleDelete, handleEdit}) => (         
  <div className={styles.container1}>
          {/* {state.patientInfo.map((i) => (
            <article key={i.newInfo}>
              
              <div>{i.history}</div>
              <div onClick={() => handleDelete(i._id)}>{"🚫"}</div>
              { !state.editMode && <div onClick={() => handleEdit(i._id)}>{"✏️"}</div> }
            </article>
          ))} */}
        <form onSubmit={handleSubmit}>
            <label>
              <span>Personal History</span></label>
              <p>Please enter your PERSONAL HEALTH HISTORY in the field below. 
                (CONDITIONS SUCH AS: AIDs/HIV, Appendicitis, Birth Trauma (your own birth), Multiple Sclerosis, Pacemaker, Thyroid Disorders, Ulcers, Venereal Disease, Surgery, Allergies, Arteriosclerosis, Asthma, Heart Disease, Cancer, High Blood Pressure, Seizures, Stroke, Diabetes, Deptression or Alcholism.)
              </p>
              <input name="history" value={state.newInfo.history} onChange={handleChange}
             />
           
            
            </form>
            
  </div>

);

export default PersonalHistory;     