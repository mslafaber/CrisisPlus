if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error); 
    });
}

function pageRedirectfor000() {
    window.location.href = "000contact.html";
  }

function pageRedirectforpoisons() {
    window.location.href = "poisons.html";
}

function pageRedirectfordisaster() {
    window.location.href = "disaster.html";
  }

function pageRedirectformentalhealth() {
    window.location.href = "mentalhealth.html";
}

function pageRedirectforcrime() {
    window.location.href = "crime.html";
  }

function pageRedirectforunsuremedical() {
    window.location.href = "unsuremedical.html";
}