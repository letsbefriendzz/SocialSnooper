import {getDOMInstance} from "./_setup";

describe('popup', () => {
    const provideToggleData = [
        {
            toggleId: 'post-likes',
            toggleAction: 'togglePostLikes',
        },
        {
            toggleId: 'post-comments',
            toggleAction: 'toggleCommentLikes',
        },
        {
            toggleId: 'follows',
            toggleAction: 'toggleFollows',
        },
    ];

    const provideTogglePositions = [
        {},
        {},
        {},
    ];

    it.each(provideToggleData)('calls sendMessage on toggle click', (toggleData) => {
        const document = getDOMInstance().window.document;

        const rulesetToggle = document.getElementById(toggleData.toggleId);
        const toggleOnclickCallback = jest.fn(() => {
            chrome.runtime.sendMessage({action: toggleData.toggleAction});
        });
        rulesetToggle.addEventListener("click", toggleOnclickCallback);

        rulesetToggle.click();

        expect(chrome.runtime.sendMessage).toBeCalledWith({action: "togglePostLikes"});
    });

    it('sets the toggles to the correct position', async () => {
        // await chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds})
        const document = getDOMInstance().window.document;
        const postLikesToggle = document.getElementById('post-likes');
        console.log(postLikesToggle.checked);
        expect(postLikesToggle.checked).toBeTruthy();
    });
});