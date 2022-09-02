let rulesets = [
    'instagram_ruleset',
    'facebook_ruleset',
]

function toggleOnBlocking() {
    chrome.declarativeNetRequest.getEnabledRulesets((strings) => {
        rulesets.forEach((ruleset, index) => {
            if(strings.includes(ruleset))
                chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: [ruleset]});
            else
                chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: [ruleset]});
        })
    })

}
const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleOnBlocking);