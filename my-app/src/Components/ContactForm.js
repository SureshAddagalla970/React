import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    description: "",
    gender: [],
    Skills: [],
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId === "") setValues({ ...initialFieldValues });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          name="fullName"
          placeholder="Full Name"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>

          <input
            className="form-control"
            name="mobile"
            placeholder="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="description"
          placeholder="Description"
          value={values.description}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value={values.gender}
                onChange={handleInputChange}
              ></input>
              <label class="form-check-label">Male</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value={values.gender}
                onChange={handleInputChange}
              ></input>
              <label class="form-check-label">Female</label>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Skills</legend>

          <div class="col-sm-6 col-md-4">
            <select
              name="Skills"
              id="company"
              class="form-control"
              value={values.Skills}
              onChange={handleInputChange}
            >
              <option>UI</option>
              <option>UX</option>
              <option>BACKEND</option>
              <option>CSS</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <input
          type="submit"
          value={props.currentId === "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
