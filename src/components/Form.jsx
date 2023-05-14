import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [terms, setTerms] = useState(false)

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(
          'firstName:',firstName,
          'lastName:', lastName,
          'userName:', userName,
          'city:', city,
          'State:', state,
          'zip:', zip,
          'terms:', terms,


        )
    }

  return (
<>
<form class="row g-3" onSubmit={onHandleSubmit}>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value={firstName} onChange={(e)=> setFirstName(e.target.value)}  required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value={lastName} onChange={(e)=> setLastName(e.target.value)} required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" value={userName} onChange={(e)=> setUserName(e.target.value)} required/>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" value={city} onChange={(e)=> setCity(e.target.value)} required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04 " value={state} onChange={(e)=> setState(e.target.value)} required>
      <option selected disabled value=''>Choose...</option>
      <option>Lagos</option>
      <option>Abuja</option>
      <option>Abia</option>
      <option>PortHarcourt</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" value={zip} onChange={(e)=> setZip(e.target.value)} required/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value={terms} onChange={(e)=> setTerms(e.target.value = true)} id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

</>

 )
}

export default Form