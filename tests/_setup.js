const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const html = fs.readFileSync(path.resolve(__dirname, '../src/popup.html'), 'utf8');
jest.dontMock('fs');
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.sendTo(console);

export function getDOMInstance() {
    return new JSDOM(html.toString(), {
        resources: 'usable',
        runScripts: 'dangerously',
    });
}