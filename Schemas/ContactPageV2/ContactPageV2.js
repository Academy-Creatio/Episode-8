define("ContactPageV2", [], function() {
	return {
		entitySchemaName: "Contact",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onMyButtonClick: function(){
				let tag = arguments[3];


				var id = this.$Id;
				var email = this.$Email;
				var name = this.$Name;

				//use tag to handle button clicks
				if(tag){
					this.showInformationDialog("Button with tag: "+tag+" clicked");
				}
			},
			onActionClick: function(){
				let tag = arguments[0];

				//use tag to handle button clicks
				if(tag){
					this.showInformationDialog("Button with tag: "+tag+" clicked");
				}
			},

			/**
			 * @inheritdoc Terrasoft.BasePageV2#getActions
			 * @overridden
			 */
			getActions: function() {
				var actionMenuItems = this.callParent(arguments);
				actionMenuItems.addItem(this.getButtonMenuItem({Type: "Terrasoft.MenuSeparator",Caption: ""}));
				actionMenuItems.addItem(this.getButtonMenuItem({
					"Caption": "Page Action Item One",
					"Click": {bindTo: "onActionClick"},
					"Enabled": true,
					"Tag": "Item1",
					ImageConfig: this.get("Resources.Images.CreatioSquare"),
				}));
				actionMenuItems.addItem(this.getButtonMenuItem({
					"Caption": "Page Action Item Two",
					"Click": {bindTo: "onActionClick"},
					"Enabled": true,
					"Tag": "Item2"
				}));
				return actionMenuItems;
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"name": "MyRedButton",
				"values": {
					"layout": {
						"column": 13,
						"row": 3,
						"colSpan": 6
					},
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.RED,
					"click": {"bindTo": "onMyButtonClick"},
					"tag": "red",
					"caption": {"bindTo": "Resources.Strings.MyRedBtnCaption"},
					"hint": {"bindTo": "Resources.Strings.MyRedBtnHint"},
					"menu": {
						"items": [
							{
								caption: "Sub Item 1",
								click: {bindTo: "onMyButtonClick"},
								visible: true,
								hint: "Sub item 1 hint",
								tag: "subItem1"
							 },
							 {
								 caption: "Sub Item 2",
								 click: {bindTo: "onMyButtonClick"},
								 visible: true,
								 hint: "Sub item 2 hint",
								 tag: "subItem2"
							  }
						],
					}
				}
			},
			{
				"operation": "insert",
				"parentName": "LeftContainer",
				"propertyName": "items",
				"name": "PrimaryContactButtonGreen",
				"values": {
					itemType: Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.GREEN,
					classes: {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					caption: "PAGE BTN",
					click: {bindTo: "onMyButtonClick"},
					tag: "green",
					menu: {
						"items": [
							{
								caption: "Sub Item 1",
								click: {bindTo: "onMyButtonClick"},
								visible: true,
								hint: "Sub item 1 hint",
								tag: "subItem1"
							 },
							 {
								 caption: "Sub Item 2",
								 click: {bindTo: "onMyButtonClick"},
								 visible: true,
								 hint: "Sub item 2 hint",
								 tag: "subItem2"
							  }
						],
					}
					
				}
			},
			{
				"operation": "insert",
				"parentName": "LeftContainer",
				"propertyName": "items",
				"name": "PrimaryContactButtonBlue",
				"values": {
					itemType: Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.BLUE,
					classes: {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					caption: "PAGE BTN",
					click: {bindTo: "onMyButtonClick"},
					tag: "blue",
				}
			},
			{
				"operation": "insert",
				"parentName": "LeftContainer",
				"propertyName": "items",
				"name": "PrimaryContactButtonGrey",
				"values": {
					itemType: Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.GREY,
					classes: {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					caption: "PAGE BTN",
					click: {bindTo: "onMyButtonClick"},
					tag: "grey",
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
