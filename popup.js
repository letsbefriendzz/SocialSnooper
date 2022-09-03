let rulesets = [
    'instagram_ruleset',
    'facebook_ruleset',
]

updateButtonLabel();

// kinda words kinda doesn't !
function updateButtonLabel() {
    const button = document.getElementById("toggleButton");
    chrome.declarativeNetRequest.getEnabledRulesets((strings) => {
        // button.value = strings.length;
        if(strings.length === 0)
            button.value = "Turn On"
        else
            button.value = "Turn Off"
    })
}

function toggleOnBlocking() {
    chrome.declarativeNetRequest.getEnabledRulesets((strings) => {
        rulesets.forEach((ruleset, index) => {
            if(strings.includes(ruleset))
                chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: [ruleset]});
            else
                chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: [ruleset]});
        })
    })
    updateButtonLabel();
}

// inlining the onclick listener isn't allowed in chrome extensions, for whatever reason!
const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleOnBlocking);