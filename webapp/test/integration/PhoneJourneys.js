jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"wiwcloud/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"wiwcloud/test/integration/pages/App",
	"wiwcloud/test/integration/pages/Browser",
	"wiwcloud/test/integration/pages/Master",
	"wiwcloud/test/integration/pages/Detail",
	"wiwcloud/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "wiwcloud.view."
	});

	sap.ui.require([
		"wiwcloud/test/integration/NavigationJourneyPhone",
		"wiwcloud/test/integration/NotFoundJourneyPhone",
		"wiwcloud/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});