import { useState, useEffect } from "react";
import './Profile.css'

export default function Profilematch({ search }) {
  const [elem, setElem] = useState("");
  function handleSubmission(evt) {
    evt.preventDefault();
    search(elem);
    setElem("");
  }
  function handleupdate(evt) {
    setElem(evt.target.value);
  }
  return (
    <form onSubmit={handleSubmission} className="profile-form">
      <label htmlFor="githubUsername" className="visually-hidden">
        GitHub Username
      </label>
      <div className="input-group">
        <input
          id="githubUsername"
          className="form-control"
          value={elem}
          onChange={handleupdate}
          placeholder=" ENTER USER ID OF GITHUB"
        />
        <button className="btn btn-info">Find it</button>
      </div>
    </form>
  );
}
