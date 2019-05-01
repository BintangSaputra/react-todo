import React from "react";

const Form = props => {
  return (
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        <tr>
          {/* <td>
            {props.data.map(data => {
              return <div>{data.name}</div>;
            })}
          </td>
          <td>
            {props.data.map(data => {
              return <div>{data.email}</div>;
            })}
          </td>
          <td>
            {props.data.map(data => {
              return <div>{data.number}</div>;
            })}
          </td>
          <td>
            <button onClick={props.DeleteContact.bind(this, index)}>delete</button>
          </td> */}

          {props.data.map((data, index) => {
            return (
              <div>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
                <td>
                  <button onClick={() => props.deleteData(index)}>
                    delete
                  </button>
                </td>
              </div>
            );
          })}
        </tr>
      </table>
    </div>
  );
};
