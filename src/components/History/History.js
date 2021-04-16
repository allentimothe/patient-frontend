

const History = ({handleSubmit, handleChange, state, handleCancel, handleDelete, handleEdit}) => (         
  <div>
      {/* {state.patientInfo.map((i) => (
            <article key={i.newInfo}>
              
              <div>{i.familyhistory}</div>
              <div onClick={() => handleDelete(i._id)}>{"🚫"}</div>
              { !state.editMode && <div onClick={() => handleEdit(i._id)}>{"✏️"}</div> }
            </article>
          ))} */}
      <form onSubmit={handleSubmit}>
            <label>
              <span>Family Health History</span></label>
              <p>Please enter your FAMILY HEALTH HISTORY in the field below. 
                (CONDITIONS SUCH AS: Allergies, Arteriosclerosis, Asthma, Heart Disease, Cancer, High Blood Pressure, Seizures, Stroke, Diabetes, Deptression or Alcholism.)
              </p>
              <input name="familyhistory" value={state.newInfo.familyhistory} onChange={handleChange}
             />
            
            
            </form>
            
  </div>

);

export default History;        