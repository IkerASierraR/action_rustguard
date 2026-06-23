// Generated from: src\features\antivirus.feature
import { test } from "playwright-bdd";

test.describe('Antivirus Core Functions', () => {

  test('Dashboard shows initial protected status', async ({ Given, Then, And, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await Then('I should see the "SISTEMA PROTEGIDO" status', null, { page }); 
    await And('the realtime protection toggle should be visible', null, { page }); 
  });

  test('Toggling realtime protection', async ({ Given, When, Then, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await When('I click the realtime protection toggle', null, { page }); 
    await Then('the status should change to "ON"', null, { page }); 
  });

  test('Quick scan execution', async ({ Given, When, Then, And, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await When('I click on "Escaneo Rápido"', null, { page }); 
    await Then('I should be navigated to the "Centro de Escaneo" page', null, { page }); 
    await And('I should see the "Detener Escaneo" button', null, { page }); 
  });

  test('Full scan execution', async ({ Given, When, Then, And, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await When('I click on "Escaneo Completo"', null, { page }); 
    await Then('I should be navigated to the "Centro de Escaneo" page', null, { page }); 
    await And('I should see the "Detener Escaneo" button', null, { page }); 
  });

  test('Quarantine view access', async ({ Given, When, Then, And, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await When('I navigate to the Quarantine section', null, { page }); 
    await Then('I should see "Bóveda de Cuarentena"', null, { page }); 
    await And('I should see the quarantine records table or empty state', null, { page }); 
  });

  test('History view access', async ({ Given, When, Then, And, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await When('I navigate to the History section', null, { page }); 
    await Then('I should see "Historial de Escaneos"', null, { page }); 
    await And('I should see the scan history records table or empty state', null, { page }); 
  });

  test('Canceling an active scan', async ({ Given, When, Then, And, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await And('I click on "Escaneo Rápido"', null, { page }); 
    await When('I click on "Detener Escaneo"', null, { page }); 
    await Then('the scan should stop and the button should disappear', null, { page }); 
  });

  test('Sidebar navigation highlights active section', async ({ Given, When, Then, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await When('I navigate to the Scan section', null, { page }); 
    await Then('the Scan section in the sidebar should be highlighted', null, { page }); 
  });

  test('Realtime page status', async ({ Given, When, Then, And, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await When('I navigate to the RealTime section', null, { page }); 
    await Then('I should see "Protección en Tiempo Real"', null, { page }); 
    await And('I should see the anti-ransomware status', null, { page }); 
  });

  test('History export functionality exists', async ({ Given, When, Then, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await When('I navigate to the History section', null, { page }); 
    await Then('I should see an "Exportar Historial" button', null, { page }); 
  });

  test('View application version', async ({ Given, Then, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await Then('I should see the application version "RustGuard v1.0.0" in the sidebar', null, { page }); 
  });

  test('Log viewer displays messages', async ({ Given, When, Then, And, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await When('I navigate to the Scan section', null, { page }); 
    await Then('I should see "Registro en vivo"', null, { page }); 
    await And('the log viewer should display "Esperando eventos..."', null, { page }); 
  });

  test('Dashboard stats are visible', async ({ Given, Then, And, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await Then('I should see "Firmas ClamAV"', null, { page }); 
    await And('I should see "Último Escaneo"', null, { page }); 
  });

  test('Titlebar window controls are present', async ({ Given, Then, And, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await Then('I should see the application title "RUSTGUARD"', null, { page }); 
    await And('the window control buttons should be visible', null, { page }); 
  });

  test('Threat Modal handles ignoring threats', async ({ Given, When, Then, page }) => { 
    await Given('I open the RustGuard application', null, { page }); 
    await When('a threat is detected', null, { page }); 
    await Then('a threat modal should appear', null, { page }); 
    await When('I click on "Ignorar"', null, { page }); 
    await Then('the threat modal should disappear', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\antivirus.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"SISTEMA PROTEGIDO\" status","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And the realtime protection toggle should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I click the realtime protection toggle","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the status should change to \"ON\"","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on \"Escaneo Rápido\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Escaneo Rápido\"","children":[{"start":12,"value":"Escaneo Rápido","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the \"Centro de Escaneo\" page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And I should see the \"Detener Escaneo\" button","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I click on \"Escaneo Completo\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Escaneo Completo\"","children":[{"start":12,"value":"Escaneo Completo","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the \"Centro de Escaneo\" page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And I should see the \"Detener Escaneo\" button","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I navigate to the Quarantine section","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Bóveda de Cuarentena\"","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And I should see the quarantine records table or empty state","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":40,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When I navigate to the History section","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Historial de Escaneos\"","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"And I should see the scan history records table or empty state","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":47,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And I click on \"Escaneo Rápido\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Escaneo Rápido\"","children":[{"start":12,"value":"Escaneo Rápido","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When I click on \"Detener Escaneo\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Detener Escaneo\"","children":[{"start":12,"value":"Detener Escaneo","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then the scan should stop and the button should disappear","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":54,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When I navigate to the Scan section","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then the Scan section in the sidebar should be highlighted","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":51,"tags":[],"steps":[{"pwStepLine":60,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When I navigate to the RealTime section","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Protección en Tiempo Real\"","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"And I should see the anti-ransomware status","stepMatchArguments":[]}]},
  {"pwTestLine":66,"pickleLine":57,"tags":[],"steps":[{"pwStepLine":67,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When I navigate to the History section","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then I should see an \"Exportar Historial\" button","stepMatchArguments":[]}]},
  {"pwTestLine":72,"pickleLine":62,"tags":[],"steps":[{"pwStepLine":73,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then I should see the application version \"RustGuard v1.0.0\" in the sidebar","stepMatchArguments":[{"group":{"start":37,"value":"\"RustGuard v1.0.0\"","children":[{"start":38,"value":"RustGuard v1.0.0","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":77,"pickleLine":66,"tags":[],"steps":[{"pwStepLine":78,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When I navigate to the Scan section","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Registro en vivo\"","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"And the log viewer should display \"Esperando eventos...\"","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":72,"tags":[],"steps":[{"pwStepLine":85,"gherkinStepLine":73,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Firmas ClamAV\"","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"And I should see \"Último Escaneo\"","stepMatchArguments":[]}]},
  {"pwTestLine":90,"pickleLine":77,"tags":[],"steps":[{"pwStepLine":91,"gherkinStepLine":78,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then I should see the application title \"RUSTGUARD\"","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"And the window control buttons should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":96,"pickleLine":82,"tags":[],"steps":[{"pwStepLine":97,"gherkinStepLine":84,"keywordType":"Context","textWithKeyword":"Given I open the RustGuard application","stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"When a threat is detected","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then a threat modal should appear","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":87,"keywordType":"Action","textWithKeyword":"When I click on \"Ignorar\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Ignorar\"","children":[{"start":12,"value":"Ignorar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":101,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"Then the threat modal should disappear","stepMatchArguments":[]}]},
]; // bdd-data-end