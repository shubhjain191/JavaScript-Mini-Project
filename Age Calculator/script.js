function calculateAge() {
    const birthDate = new Date(document.getElementById("birthDate").value);
    const today = new Date();
    
    if (!birthDate || birthDate > today) {
      document.getElementById("years").textContent = "0";
      document.getElementById("months").textContent = "0";
      document.getElementById("days").textContent = "0";
      return;
    }
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
  }
  