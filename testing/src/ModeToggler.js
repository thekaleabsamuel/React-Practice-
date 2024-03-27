import React, { useState } from 'react';

function ModeToggler () {
    const [darkModeOn, setDarkModeOn] = useState(true);
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function handleClick() {
        setDarkModeOn(!darkModeOn);
        if (darkModeOn == true) {
            console.log ("Dark mode is on")
        } else {
            console.log ("Light mode is on")
        }
    }

      return (   
          <div>
              {darkModeOn ? darkMode : lightMode}
              <button onClick={handleClick}>
                Click Me
              </button>
          </div>
      );
      }

      export default ModeToggler;