import * as DOM from './_setup';

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

    it.each(provideToggleData)('calls sendMessage on toggle click', (toggleData) => {
        const postLikesToggle = DOM.document.getElementById(toggleData.toggleId);
        const toggleOnclickCallback = jest.fn(() => {
            chrome.runtime.sendMessage({action: toggleData.toggleAction});
        });
        postLikesToggle.addEventListener("click", toggleOnclickCallback);

        postLikesToggle.click();

        expect(chrome.runtime.sendMessage).toBeCalledWith({action: "togglePostLikes"});
    });
});