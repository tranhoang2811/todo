const handleError = (error, filePath = "", functionName = "") => {
  console.error(
    `Path: ${filePath} -> Function Name: ${functionName} -> Error: ${error}`
  );
};

export default handleError;
