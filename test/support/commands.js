import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

Cypress.Commands.add('getTestElement', selector => cy.get(`[data-test="${selector}"]`));

Cypress.Commands.overwrite('visit', (orig, url, options) => {
    const auth = {
        username: Cypress.env('DEV_USER'),
        password: Cypress.env('DEV_PASS'),
    };

    if (options) {
        options.auth = auth;
    } else {
        options = {
            auth,
        };
    }

    return orig(url, options);
});