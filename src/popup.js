// inlining the onclick listener isn't allowed in chrome extensions, for whatever reason!
document.getElementById("instagram-post-likes").addEventListener("click", sendPostLikesToggleMessage);
document.getElementById("instagram-post-comments").addEventListener("click", sendPostCommentsToggleMessage);
document.getElementById("instagram-follows").addEventListener("click", sendFollowToggleMessage);
document.getElementById("instagram-read-receipts").addEventListener("click", sendReadReceiptToggleMessage);

init();

function init() {
    updateTogglePosition('instagram-post-likes', 'instagram_posts_ruleset');
    updateTogglePosition('instagram-post-comments', 'instagram_comments_ruleset');
    updateTogglePosition('instagram-follows', 'instagram_follows_ruleset');
    updateTogglePosition('instagram-read-receipts', 'instagram_dm_read_ruleset');
}

function updateTogglePosition(elementId, ruleSetId) {
    const toggle = document.getElementById(elementId);
    chrome.declarativeNetRequest.getEnabledRulesets((enabledRulesets) => {
        toggle.checked = enabledRulesets.includes(ruleSetId);
    });
}

function sendPostLikesToggleMessage() {
    return chrome.runtime.sendMessage({action: "togglePostLikes"});
}

function sendPostCommentsToggleMessage() {
    return chrome.runtime.sendMessage({action: "toggleCommentLikes"});
}

function sendFollowToggleMessage() {
    return chrome.runtime.sendMessage({action: "toggleFollows"});
}
function sendReadReceiptToggleMessage() {
    return chrome.runtime.sendMessage({action: "toggleDMReadReceipts"});
}