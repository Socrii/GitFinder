import { useState, useEffect } from "react";
import axios from "axios";
import Profilematch from "./Profile.jsx";
const BASE_URL = "https://api.github.com/users";
import './GitFinder.css';
function GitFinder() {
  const [username, setUsername] = useState("socrii");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(() => {
    async function fetchUser() {
      const userResult = await axios.get(`${BASE_URL}/${username}`);
      setProfile({ data: userResult.data, isLoading: false });
    }
    fetchUser();
  }, [username]);

  function search(username) {
    setProfile({ data: null, isLoading: true });
    setUsername(username);
  }

  return (
    <>
      <Profilematch search={search} />
      {profile.isLoading ? <h3>Loading...</h3> : null}
      {profile.data && (
        <div className="container text-center">

          <div className="row row-cols-4">
            <div className="col">
              <img src={profile.data.avatar_url} alt="User Avatar" /> 
            </div>

          </div>
          <div className="H2">
              <h2>{profile.data.name}</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default GitFinder;
