jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Person in the list
// * All 3 Person have at least one Email

sap.ui.require([
	"sap/ui/test/Opa5",
	"wiwcloud/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"wiwcloud/test/integration/pages/App",
	"wiwcloud/test/integration/pages/Browser",
	"wiwcloud/test/integration/pages/Master",
	"wiwcloud/test/integration/pages/Detail",
	"wiwcloud/test/integration/pages/Create",
	"wiwcloud/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "wiwcloud.view."
	});

	sap.ui.require([
		"wiwcloud/test/integration/MasterJourney",
		"wiwcloud/test/integration/NavigationJourney",
		"wiwcloud/test/integration/NotFoundJourney",
		"wiwcloud/test/integration/BusyJourney",
		"wiwcloud/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});