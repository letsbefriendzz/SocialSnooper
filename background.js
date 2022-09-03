const RULESET_LIST = [
    'instagram_post_ruleset',
    'instagram_comment_ruleset',
]
console.log('SocialSnooper Loaded!');

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.action === "toggleRulesets") {
        toggleRulesets();
    }
});

function toggleRulesets() {
    chrome.declarativeNetRequest.getEnabledRulesets(async (ruleSets) => {
        console.log("Currently enabled rulesets:\n\n", ruleSets);
        chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: ruleSets});
        let rulesToEnable = RULESET_LIST.filter(ruleSet => !ruleSets.includes(ruleSet));
        if(rulesToEnable.length !== 0)
            chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: rulesToEnable});
    });
}