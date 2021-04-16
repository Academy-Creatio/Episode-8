define("ContactSectionV2", [], function() {
	return {
		entitySchemaName: "Contact",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		attributes:{
			/**
		 * Submenu items, which provide actions to synchronize.
		 */
		"SynchronizeActivitiesSubmenu": {dataValueType: this.Terrasoft.DataValueType.COLLECTION},
		},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"name": "MainContactButton",
				"values": {
					itemType: Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.RED,
					classes: {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					caption: "SECTION COMB",
					click: {bindTo: "onSectionButtonClick"},
					tag: "CombinedModeActionButtonsCardLeftContainer",
					enabled: true
				}
			},
			{
				"operation": "insert",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"name": "MainContactSectionButton",
				"values": {
					itemType: Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.GREEN,
					classes: {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					caption: "SECTION ABC",
					click: { bindTo: "onSectionButtonClick" },
					tag: "ActionButtonsContainer"
				}
			}
		]/**SCHEMA_DIFF*/,
		methods: {
			onSectionButtonClick: function(){
				
				let tag = arguments[3];
				

				if(this.$GridData && this.$ActiveRow){
					//get collection of columns
					var columnsObj = this.$GridData.get(this.$ActiveRow).columns;
					
					//get list of props
					var columnsCollection = Object.keys(columnsObj);
					
					// Access property of a row
					var Name = this.$GridData.get(this.$ActiveRow).$Name
					var Email = this.$GridData.get(this.$ActiveRow).$Email
				}				
				this.showInformationDialog("Button clicked identified by tag: "+ tag);
			},

			onActionClick: function(){
				this.showInformationDialog();
			},

			/**
				 * @inheritdoc Terrasoft.BaseSection#getSectionActions
				 * @overriden
				 */
			getSectionActions: function() {
				var actionMenuItems = this.callParent(arguments);
				actionMenuItems.addItem(this.getButtonMenuItem({Type: "Terrasoft.MenuSeparator",Caption: ""}));
				actionMenuItems.addItem(this.getButtonMenuItem({
					"Caption": "Section Action Item One",
					"Click": {bindTo: "onActionClick"},
					"Enabled": true,
					"Tag": "Item1",
					ImageConfig: this.get("Resources.Images.CreatioSquare"),
				}));
				actionMenuItems.addItem(this.getButtonMenuItem({
					"Caption": "Section Action Item Two",
					"Click": {bindTo: "onActionClick"},
					"Enabled": true,
					"Tag": "Item2",
					"Items": {"bindTo": "addSubItems"}
				}));
				return actionMenuItems;
			},

			addSubItems: function() {
				var collection = this.Ext.create("Terrasoft.BaseViewModelCollection");
				collection.addItem(this.getButtonMenuItem({
					"Caption": "SubI tem1",
					"Click": {"bindTo": "onActionClick"},
					"Tag": "sub2"
				}));
				collection.addItem(this.getButtonMenuItem({
					"Caption": "SubI tem1",
					"Click": {"bindTo": "onActionClick"},
					"Tag": "sub1"
				}));
				return collection;
			}
		}
	};
});
