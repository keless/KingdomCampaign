"use strict"; //ES6

var bShowDebug = false;

class Config {
	static get areSpritesCentered() {
		return true;
	}
}

var game_create = function()
{
	var app = new Application("Territories", "content");
	window.app = app;
	
	var stateController = Service.Get("state");
	stateController.addState("loading", LoadingState);
	stateController.addState("menu", MenuState);
	stateController.addState("map", MapState);
	
	var resources = [
			"gfx/ui/btn_blue.sprite",
			"gfx/ui/btn_dark.sprite",
			"gfx/ui/btn_white.sprite",
			"gfx/items/arm_cloth.sprite",
			"gfx/items/arm_leather.sprite",
			"gfx/items/arm_metal.sprite",
			"gfx/items/icon_book.sprite",
			"gfx/items/icon_gear.sprite",
			"gfx/items/icon_grind.sprite",
			"gfx/items/icon_map.sprite",
			"gfx/items/icon_rest.sprite",
			"gfx/items/icon_return.sprite",
			"gfx/items/icon_stop.sprite",
			"gfx/items/weap_mace.sprite",
			"gfx/items/weap_bow.sprite",
			"gfx/items/weap_axe.sprite",
			"gfx/items/weap_staff.sprite",
			"gfx/items/weap_dagger.sprite",
			"gfx/items/weap_sword.sprite",
			"gfx/abilities/abilityIcons.sprite",
			"gfx/items/craft_cloth.sprite",
			"gfx/items/craft_leather.sprite",
			"gfx/items/craft_metal.sprite",
			"gfx/avatars/centaur_idle.sprite",
			"gfx/avatars/centaur_attack.sprite",
			"gfx/avatars/avatars.spb",
			"gfx/avatars/avatar.anim",
			"gfx/levels/test.json",
			"gfx/levels/terrain.png",
			"gfx/map.png"
			];
	stateController.gotoState("loading", [resources, "map"]);
	
	/*
	EventBus.ui.addListener("loadingComplete", function(e){
		//app.state.gotoState(GameStateController.STATE_HANGAR); //STATE_FLYING
		//xxx todo
		EventBus.ui.removeListener("loadingComplete", this);
	});
	*/
	
	app.Play();
};
