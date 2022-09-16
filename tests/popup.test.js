import {getDOMInstance} from "./_setup";
import {chrome} from "jest-chrome";

describe('popup', () => {
    const provideToggleData = [
        {
            toggleId: 'instagram-post-likes',
            toggleAction: 'togglePostLikes',
        },
        {
            toggleId: 'instagram-post-comments',
            toggleAction: 'toggleCommentLikes',
        },
        {
            toggleId: 'instagram-follows',
            toggleAction: 'toggleFollows',
        },
    ];

    it.each(provideToggleData)('calls sendMessage on toggle click', (toggleData) => {
        const document = getDOMInstance().window.document;
        const rulesetToggle = document.getElementById(toggleData.toggleId);

        const toggleOnClickCallback = jest.fn(() => {
            chrome.runtime.sendMessage({action: toggleData.toggleAction});
        });

        rulesetToggle.addEventListener("click", toggleOnClickCallback);

        rulesetToggle.click();

        expect(chrome.runtime.sendMessage).toBeCalledWith({action: "togglePostLikes"});
    });

    it.each(provideToggleData)('listens for messages', (toggleData) => {

    });
});