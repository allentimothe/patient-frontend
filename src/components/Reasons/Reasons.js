const Reasons = ({handleSubmit, handleChange, state, handleCancel, handleDelete, handleEdit}) => (         
  <div>
      {/* {state.patientInfo.map((i) => (
            <article key={i.newInfo}>
              <div>{i.reasons}</div>
              <div onClick={() => handleDelete(i._id)}>{"🚫"}</div>
              { !state.editMode && <div onClick={() => handleEdit(i._id)}>{"✏️"}</div> }
            </article>
          ))} */}
      <form onSubmit={handleSubmit}>
            <label>
              <span>Reasons</span></label>
              <p>What is the reason for your visit today?</p>
              <input name="reasons" value={state.newInfo.reasons} onChange={handleChange}
             />
            
            <button>{state.editMode ? 'EDIT ' : 'ADD '}</button>
            </form>
            {state.editMode && <button onClick={handleCancel}>CANCEL</button> }
  </div>

);

export default Reasons;   