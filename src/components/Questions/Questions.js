import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1>1.How react works?</h1>
            <p><b><u>Ans:</u></b>
            React is a single page application.It loads the full website for one time at first.React uses a transpiler
            that is called babel that helps react to translate everything in object.React uses diff algorithm that helps to change the state when somthing is change in react then it creats a vitual dom and compares by diff algorithm then change the state instead of seaching where the change is happended.

            </p>
            <h1>2.Props vs State</h1>
            <p><b><u>Ans:</u></b>
            Props is used to pass data from one component to another component.Props cannot be modified ,read-only and immutable.State is used to store data.State is mutable that is asynchoronous.Props are read only but state is both read and write.
            </p>
        </div>
    );
};

export default Questions;