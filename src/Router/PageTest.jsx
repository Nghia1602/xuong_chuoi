// Page.jsx
import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Page = ({ title }) => {
  const params = useParams();
  const location = useLocation();

  return (
    <div style={{ padding: 20 }}>
      <h1>{title}</h1>
      <p>Path: {location.pathname}</p>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};

export default Page;
