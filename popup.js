// inlining the onclick listener isn't allowed in chrome extensions, for whatever reason!
document.getElementById("toggle").addEventListener("click", sendToggleRulesetsMessage);

// init the button by calling this func once each time the window is opened
updateTogglePosition();
function updateTogglePosition() {
    const toggle = document.getElementById("toggle");
    chrome.declarativeNetRequest.getEnabledRulesets((enabledRulesets) => {
        toggle.checked = enabledRulesets.length !== 0;
    });
}

function sendToggleRulesetsMessage() {
    chrome.runtime.sendMessage({action: "toggleRulesets"});
}