import {chrome} from 'jest-chrome';

describe('default jest-chrome tests', () => {
    it('can use listeners', () => {
        const listenerSpy = jest.fn();
        const sendResponseSpy = jest.fn();

        chrome.runtime.onMessage.addListener(listenerSpy);

        expect(listenerSpy).not.toBeCalled();
        expect(chrome.runtime.onMessage.hasListeners()).toBe(true);

        chrome.runtime.onMessage.callListeners(
            {greeting: 'hello'},   // message
            {},                         // MessageSender object
            sendResponseSpy,            // SendResponse function
        );

        expect(listenerSpy).toBeCalledWith(
            {greeting: 'hello'},
            {},
            sendResponseSpy,
        );
        expect(sendResponseSpy).not.toBeCalled();
    });

    it('can mock synchronous functions', () => {
        const manifest = {
            name: 'my chrome extension',
            manifest_version: 2,
            version: '1.0.0',
        };

        chrome.runtime.getManifest.mockImplementation(() => manifest);

        expect(chrome.runtime.getManifest()).toEqual(manifest);
        expect(chrome.runtime.getManifest).toBeCalled();
    });

    it('can mock asynchronous callback functions', () => {
        const message = {greeting: 'hello?'};
        const response = {greeting: 'here I am'};
        const callbackSpy = jest.fn();

        chrome.runtime.sendMessage.mockImplementation(
            (message, callback) => {
                callback(response);
            },
        );

        chrome.runtime.sendMessage(message, callbackSpy);

        expect(chrome.runtime.sendMessage).toBeCalledWith(
            message,
            callbackSpy,
        );
        expect(callbackSpy).toBeCalledWith(response);
    });

    it.only('can mock declarativeNetRequest API calls', () => {
        const callback = jest.fn();
        chrome.declarativeNetRequest.getEnabledRulesets.mockImplementation(callback);
    });
});