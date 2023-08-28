//function to append

function appendIndex(mockdata) {
    return mockdata.map((item, i) => ({
      ...item,
      Index: i
    }));
  }
  
  // Export the function
  module.exports = {
    appendIndex
  };

  