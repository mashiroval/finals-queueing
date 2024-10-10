import React from "react";
import { Link } from "react-router-dom";

// Functions

function Frame1() {
  return (
    <div>
      <h3>Select</h3>
      <div>
        <button>
          <Link to={"/admin"}>Admin</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to={"/user"}>User</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to={"/tv"}>TV</Link>
        </button>
      </div>
    </div>
  );
}

export default Frame1;
