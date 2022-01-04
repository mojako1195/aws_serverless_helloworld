exports.handler = async (event) => {
  // Extract values from event and format as strings
  let name = JSON.stringify(
    `Hello from Lambda, ${event.firstName} ${event.lastName}`
  );
  // Create a JSON object with our response and store it in a constant
  const response = {
    statusCode: 200,
    body: name,
  };
  // Return the response constant
  return response;
};
