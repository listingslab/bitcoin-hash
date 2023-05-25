import pJSON from "../../package.json"
import React from 'react';



function BitcoinHash() {

  React.useEffect(() => {
    const {name, version} = pJSON
    console.log(name, version)
  }, [])

  return (
    <div>
      Bitcoin Hash
    </div>
  );
}

export default BitcoinHash;
