import React from "react";
import { Link } from "react-router-dom";

// Functions

function Frame1() {
  return (
    <div>
      <h3>Select</h3>
      <div>
        <Link to="/admin">
          <button>Admin</button>
        </Link>
      </div>
      <div>
        <Link to="/user">
          <button>User</button>
        </Link>
      </div>
      <div>
        <Link to="/tv">
          <button>TV</button>
        </Link>
      </div>
    </div>
  );
}

export default Frame1;
