const RULESETS = {
    instagram_posts_ruleset: "instagram_posts_ruleset",
    instagram_comments_ruleset: "instagram_comments_ruleset",
    instagram_follows_ruleset: "instagram_follows_ruleset",
};
console.log('SocialSnooper Loaded!');

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.action === "togglePostLikes")
        togglePostLikes();
    if (msg.action === "toggleCommentLikes")
        toggleCommentLikes();
    if (msg.action === "toggleFollows")
        toggleFollows();
});

function logEnbaledRulesets() {
    chrome.declarativeNetRequest.getEnabledRulesets().then((ruleSets) => {
        console.log(ruleSets);
    });
}

async function togglePostLikes() {
    await chrome.declarativeNetRequest.getEnabledRulesets().then((ruleSets) => {
        if (ruleSets.includes(RULESETS.instagram_posts_ruleset)) {
            return chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: [RULESETS.instagram_posts_ruleset]});
        } else {
            return chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: [RULESETS.instagram_posts_ruleset]});
        }
    });

    logEnbaledRulesets();
}

async function toggleCommentLikes() {
    await chrome.declarativeNetRequest.getEnabledRulesets().then((ruleSets) => {
        if (ruleSets.includes(RULESETS.instagram_comments_ruleset)) {
            return chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: [RULESETS.instagram_comments_ruleset]});
        } else {
            return chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: [RULESETS.instagram_comments_ruleset]});
        }
    });

    logEnbaledRulesets();
}

async function toggleFollows() {
    await chrome.declarativeNetRequest.getEnabledRulesets().then((ruleSets) => {
        if (ruleSets.includes(RULESETS.instagram_follows_ruleset)) {
            return chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: [RULESETS.instagram_follows_ruleset]});
        } else {
            return chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: [RULESETS.instagram_follows_ruleset]});
        }
    });

    logEnbaledRulesets();
}