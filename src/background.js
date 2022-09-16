const RULESETS = {
    instagram_posts_ruleset: "instagram_posts_ruleset",
    instagram_comments_ruleset: "instagram_comments_ruleset",
    instagram_follows_ruleset: "instagram_follows_ruleset",
};
console.log('SocialSnooper Loaded!');

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === "togglePostLikes")
        return togglePostLikes();
    if (msg.action === "toggleCommentLikes")
        return toggleCommentLikes();
    if (msg.action === "toggleFollows")
        return toggleFollows();
});

function logEnabledRules() {
    chrome.declarativeNetRequest.getEnabledRulesets().then((ruleSets) => {
        console.log(ruleSets);
    });
}

async function togglePostLikes() {
    await chrome.declarativeNetRequest.getEnabledRulesets().then((ruleSets) => {
        if (ruleSets.includes(RULESETS.instagram_posts_ruleset))
            return chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: [RULESETS.instagram_posts_ruleset]});
        else
            return chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: [RULESETS.instagram_posts_ruleset]});
    });
    logEnabledRules();
}

async function toggleCommentLikes() {
    await chrome.declarativeNetRequest.getEnabledRulesets().then((ruleSets) => {
        if (ruleSets.includes(RULESETS.instagram_comments_ruleset))
            return chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: [RULESETS.instagram_comments_ruleset]});
        else
            return chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: [RULESETS.instagram_comments_ruleset]});
    });
    logEnabledRules();
}

async function toggleFollows() {
    await chrome.declarativeNetRequest.getEnabledRulesets().then((ruleSets) => {
        if (ruleSets.includes(RULESETS.instagram_follows_ruleset))
            return chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: [RULESETS.instagram_follows_ruleset]});
        else
            return chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: [RULESETS.instagram_follows_ruleset]});
    });
    logEnabledRules();
}