// inlining the onclick listener isn't allowed in chrome extensions, for whatever reason!
toggleButton = document.getElementById("toggle").addEventListener("click", chromeExtTesting);

// init the button by calling this func once each time the window is opened
updateTogglePosition();
function updateTogglePosition() {
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