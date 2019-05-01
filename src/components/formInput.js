import React from "react";

const Form = props => {
  return (
    <div>
      <h1>Raga's Glossary</h1>
      <table>
        <tbody>
          {props.data.map((data, index) => {
            return (
              <tr key={index} onClick={() => props.onDone(index)}>
                <td>{data.done ? <s>{data.todo}</s> : data.todo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
