updateButtonLabel();
function updateButtonLabel() {
    const toggle = document.getElementById("toggle");
    console.log('toggle');
    chrome.declarativeNetRequest.getEnabledRulesets((enabledRulesets) => {
        console.log('enabled rulesets:\n\n', enabledRulesets);
        toggle.checked = enabledRulesets.length !== 0;
    })
}

function chromeExtTesting() {
    chrome.runtime.sendMessage({action: "toggleRulesets"});
}

// inlining the onclick listener isn't allowed in chrome extensions, for whatever reason!
const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", chromeExtTesting);