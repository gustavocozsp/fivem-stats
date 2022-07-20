const fetch = require('node-fetch');

class Status {
	constructor(ip) {
		if (!ip) throw Error('Please provide an IP.');

		this.ip = ip;
	}

	getPlayers() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/players.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let players = body;
					send(players.length);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getPlayersAll() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/players.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let players = body;
					send(players);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getServerStatus() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let server_status = {
						online: true,
					}
					send(server_status);
				})
				.catch(function (error) {
					let server_status = {
						online: false
					}
					if (error.response == undefined) send(server_status)
				});
		});
	}

	getResources() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let resources = body.resources;
					send(resources);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getOnesync() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let onesync = body.vars.onesync_enabled;
					send(onesync);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getMaxPlayers() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let maxClients = body.vars.sv_maxClients;
					send(maxClients);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getLocale() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let locale = body.vars.locale;
					send(locale);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getGamename() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let gamename = body.vars.gamename;
					send(gamename);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getEnhancedHostSupport() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let enhancedHostSupport = body.vars.sv_enhancedHostSupport;
					send(enhancedHostSupport);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getlicenseKeyToken() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let licenseKeyToken = body.vars.sv_licenseKeyToken;
					send(licenseKeyToken);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getScriptHookAllowed() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let scriptHookAllowed = body.vars.sv_scriptHookAllowed;
					send(scriptHookAllowed);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getTags() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let tags = body.vars.tags;
					send(tags);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getServer() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let server = body;
					send(server);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getBannerConnecting() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let server = body.vars.banner_connecting;
					send(server);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getBannerDetail() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let server = body.vars.banner_detail;
					send(server);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}

	getServerDesc() {
		return new Promise((send, err) => {
			fetch(`http://${this.ip}/info.json`, {
				"method": "GET",
				"timeout": '1000'
			})
				.then(res => res.json())
				.then(body => {
					let server = body.vars.sv_projectDesc;
					send(server);
				})
				.catch(function (error) {
					err(error);
				});
		});
	}
}

module.exports.Status = Status;