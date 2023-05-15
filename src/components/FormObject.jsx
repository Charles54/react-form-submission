import React, { useState } from 'react'

const FormObject = () => {
    const [formData, setFormData]  = useState({
        firstName: "",
        lastName: "",
        userName: "",
        city: "",
        state: "",
        zip: undefined,
        terms: "",
        facebook: "",
        instagram: "",
    })

    const onhandlechange = (e) => {
        const {name, value,} = e.target;
        setFormData((data) => ({
            ...data, [name]: value,
        }));

        


        
    }
    

    function onsubmitdata(e) {
        e.preventDefault()
        console.log(formData);
    }


return (
<div>

<form class="row g-3" onSubmit={onsubmitdata}>
  <div class="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value={formData.firstName} name='firstName' onChange={onhandlechange} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="text" class="form-control is-valid" id="validationServer02" value={formData.lastName} name="lastName" onChange={onhandlechange} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" name='userName' value={formData.userName} onChange={onhandlechange} required/>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" name='city' value={formData.city} onChange={onhandlechange} required/>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" value={formData.state} onChange={onhandlechange} name='state' required>
      <option selected disabled value="">Choose...</option>
      <option>Lagos</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer05" class="form-label">Zip</label>
    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" name='zip' value={formData.zip} onChange={onhandlechange} required/>
    <div id="validationServer05Feedback" class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value={formData.terms? false : true} name='terms' id="invalidCheck3" aria-describedby="invalidCheck3Feedback" onChange={onhandlechange}/>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="facebook" id="flexRadioDefault1" value={formData.facebook? false : true} onChange={onhandlechange}/>
  <label class="form-check-label" for="flexRadioDefault1">
    Facebook
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="instagram" id="flexRadioDefault2" onChange={onhandlechange} value={formData.instagram? false : true} />
  <label class="form-check-label" for="flexRadioDefault2">
    Instagram
  </label>
</div>

  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>


    </div>
  )
}

export default FormObject