import React from "react";


export const Description = (props) => {
  return (
    <div className="Description">
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">
         {props.Description}
        </p>
      </div>
    </div>
  );
};
