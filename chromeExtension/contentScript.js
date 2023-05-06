const dummyData = {
    firstName: "John",
    middleInitial: "A",
    lastName: "Doe",
    nick: "Johnny",
    jobTitle: "Mr.",
    birthDate: "01/01/1990",
    age: "33",
    gender: "M",
    socialSecurityNumber: "123-45-6789",
    driversLicenseNumber: "D1234567",
    dateOfDeath: "",
  };
  
  function findMatchingFormField(key) {
    const possibleMatches = {
      firstName: ["txt_first_name"],
      middleInitial: ["txt_mi"],
      lastName: ["txt_last_name"],
      nick: ["txt_nickname"],
      jobTitle: ["txt_title"],
      birthDate: ["txt_dob"],
      age: ["spn_age"],
      gender: ["ddl_gender"],
      socialSecurityNumber: ["txt_ssn"],
      driversLicenseNumber: ["txt_drivers_license"],
      dateOfDeath: ["txt_deceased_date"],
    };
  
    if (possibleMatches.hasOwnProperty(key)) {
      for (const possibleMatch of possibleMatches[key]) {
        const inputElement = document.getElementById(possibleMatch);
        if (inputElement) {
          return inputElement;
        }
      }
    }
  
    return null;
  }
  
  function fillFormWithDummyData(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const inputElement = findMatchingFormField(key);
        if (inputElement) {
          if (inputElement.tagName === "INPUT" || inputElement.tagName === "SELECT") {
            inputElement.value = data[key];
          } else if (inputElement.tagName === "SPAN") {
            inputElement.textContent = data[key];
          }
        }
      }
    }
  }

  chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((request) => {
      if (request.action === "fillForm") {
        fillFormWithDummyData(dummyData);
      }
    });
  });
  
  
  //fillFormWithDummyData(dummyData);
  