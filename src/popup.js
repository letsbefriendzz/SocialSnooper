// inlining the onclick listener isn't allowed in chrome extensions, for whatever reason!
document.getElementById("post-likes").addEventListener("click", sendPostLikesToggleMessage);
document.getElementById("post-comments").addEventListener("click", sendPostCommentsToggleMessage);
document.getElementById("follows").addEventListener("click", sendFollowToggleMessage);

// init the button by calling this func once each time the window is opened
init();

function init() {
    updateTogglePosition('follows', 'instagram_follows_ruleset');
    updateTogglePosition('post-likes', 'instagram_posts_ruleset');
    updateTogglePosition('post-comments', 'instagram_comments_ruleset');
}

function updateTogglePosition(elementId, ruleSetId) {
    const toggle = document.getElementById(elementId);
    chrome.declarativeNetRequest.getEnabledRulesets((enabledRulesets) => {
        toggle.checked = enabledRulesets.includes(ruleSetId);
    });
}

function sendPostLikesToggleMessage() {
    chrome.runtime.sendMessage({action: "togglePostLikes"});
}

function sendPostCommentsToggleMessage() {
    chrome.runtime.sendMessage({action: "toggleCommentLikes"});
}

function sendFollowToggleMessage() {
    chrome.runtime.sendMessage({action: "toggleFollows"});
}