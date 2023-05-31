document
  .getElementById("birthdayForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const friendName = document.getElementById("friendName").value;
    const personalizedMessage = `Dear ${friendName}, Wishing you a fantasitc birthday!`;
    document.getElementById("personalizedMessage").textContent =
      personalizedMessage;

    const currentUrl = window.location.href;
    const encodedName = encodeURIComponent(friendName);
    const personalizedUrl = `${currentUrl}?name=${encodedName}`;
    document.getElementById("shareableLink").value = personalizedUrl;

    document.getElementById("birthdayForm").style.display = "none";
    document.getElementById("birthdayCard").style.display = "block";
  });
