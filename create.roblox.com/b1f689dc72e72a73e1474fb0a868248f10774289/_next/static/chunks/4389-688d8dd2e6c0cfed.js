! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8e657d48-bd16-4db3-a3bf-34fcccdf5f43", e._sentryDebugIdIdentifier = "sentry-dbid-8e657d48-bd16-4db3-a3bf-34fcccdf5f43")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4389], {
        47810: function(e, n, t) {
            t.d(n, {
                _: function() {
                    return u
                }
            });
            var r = t(86098),
                i = t(41057);

            function a(e, n) {
                return null == e ? e : {
                    placeId: (0, i.Gg)(e, "placeId") ? e.placeId : void 0
                }
            }

            function s(e, n) {
                return null == e ? e : {
                    versionNumber: (0, i.Gg)(e, "versionNumber") ? e.versionNumber : void 0
                }
            }

            function o(e) {
                return null == e ? e : {
                    placeId: (0, i.Gg)(e, "placeId") ? e.placeId : void 0,
                    placeName: (0, i.Gg)(e, "placeName") ? e.placeName : void 0,
                    universeName: (0, i.Gg)(e, "universeName") ? e.universeName : void 0,
                    isRootPlace: (0, i.Gg)(e, "isRootPlace") ? e.isRootPlace : void 0,
                    universeId: (0, i.Gg)(e, "universeId") ? e.universeId : void 0
                }
            }

            function c(e) {
                if (void 0 !== e) return null === e ? null : {
                    templatePlaceId: e.templatePlaceId
                }
            }
            var u = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0, r._)(n, e), n.prototype.placesAddPlaceToUniverseRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling placesAddPlaceToUniverse.");
                                    if (null === e.placeId || void 0 === e.placeId) throw new i.IC("placeId", "Required parameter requestParameters.placeId was null or undefined when calling placesAddPlaceToUniverse.");
                                    return t = {}, a = {}, [4, this.request({
                                        path: "/v1/universes/{universeId}/places/{placeId}/add-place".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))).replace("{".concat("placeId", "}"), encodeURIComponent(String(e.placeId))),
                                        method: "POST",
                                        headers: a,
                                        query: t
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.dl(s)]
                            }
                        })
                    })
                }, n.prototype.placesAddPlaceToUniverse = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesAddPlaceToUniverseRaw(e, n)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, n.prototype.placesClearJoinRestrictionsOverridesRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling placesClearJoinRestrictionsOverrides.");
                                    return t = {}, a = {}, [4, this.request({
                                        path: "/v1/universes/{universeId}/clear-join-restrictions-overrides".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "POST",
                                        headers: a,
                                        query: t
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.dl(s)]
                            }
                        })
                    })
                }, n.prototype.placesClearJoinRestrictionsOverrides = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesClearJoinRestrictionsOverridesRaw(e, n)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, n.prototype.placesCreatePlaceApiKeyRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, s, o;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling placesCreatePlaceApiKey.");
                                    return t = {}, (s = {})["Content-Type"] = "application/json-patch+json", [4, this.request({
                                        path: "/v1/apiKey/universes/{universeId}/places".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "POST",
                                        headers: s,
                                        query: t,
                                        body: c(e.placesCreatePlaceApiKeyRequest)
                                    }, n)];
                                case 1:
                                    return o = r.sent(), [2, new i.QG(o, function(e) {
                                        return a(e)
                                    })]
                            }
                        })
                    })
                }, n.prototype.placesCreatePlaceApiKey = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesCreatePlaceApiKeyRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n.prototype.placesCreatePlaceFromPlaceRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.placeId || void 0 === e.placeId) throw new i.IC("placeId", "Required parameter requestParameters.placeId was null or undefined when calling placesCreatePlaceFromPlace.");
                                    return t = {}, (a = {})["Content-Type"] = "application/json-patch+json", [4, this.request({
                                        path: "/v1/places/{placeId}/create".replace("{".concat("placeId", "}"), encodeURIComponent(String(e.placeId))),
                                        method: "POST",
                                        headers: a,
                                        query: t,
                                        body: function(e) {
                                            if (void 0 !== e) return null === e ? null : {
                                                templatePlaceId: e.templatePlaceId,
                                                placeName: e.placeName,
                                                description: e.description
                                            }
                                        }(e.placesCreatePlaceFromPlaceRequest)
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            placeId: (0, i.Gg)(e, "placeId") ? e.placeId : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, n.prototype.placesCreatePlaceFromPlace = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesCreatePlaceFromPlaceRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n.prototype.placesCreatePlaceUserAuthRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, s, o;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling placesCreatePlaceUserAuth.");
                                    return t = {}, (s = {})["Content-Type"] = "application/json-patch+json", [4, this.request({
                                        path: "/v1/user/universes/{universeId}/places".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "POST",
                                        headers: s,
                                        query: t,
                                        body: c(e.placesCreatePlaceApiKeyRequest)
                                    }, n)];
                                case 1:
                                    return o = r.sent(), [2, new i.QG(o, function(e) {
                                        return a(e)
                                    })]
                            }
                        })
                    })
                }, n.prototype.placesCreatePlaceUserAuth = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesCreatePlaceUserAuthRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n.prototype.placesCreatePlaceVersionApiKeyRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, o;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling placesCreatePlaceVersionApiKey.");
                                    if (null === e.placeId || void 0 === e.placeId) throw new i.IC("placeId", "Required parameter requestParameters.placeId was null or undefined when calling placesCreatePlaceVersionApiKey.");
                                    return t = {}, void 0 !== e.versionType && (t.versionType = e.versionType), void 0 !== e.isOldVersionAllowed && (t.isOldVersionAllowed = e.isOldVersionAllowed), void 0 !== e.shouldForceRestart && (t.shouldForceRestart = e.shouldForceRestart), a = {}, [4, this.request({
                                        path: "/v1/apiKey/universe/{universeId}/place/{placeId}/version".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))).replace("{".concat("placeId", "}"), encodeURIComponent(String(e.placeId))),
                                        method: "POST",
                                        headers: a,
                                        query: t
                                    }, n)];
                                case 1:
                                    return o = r.sent(), [2, new i.QG(o, function(e) {
                                        return s(e)
                                    })]
                            }
                        })
                    })
                }, n.prototype.placesCreatePlaceVersionApiKey = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesCreatePlaceVersionApiKeyRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n.prototype.placesCreatePlaceVersionUserAuthRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, o;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling placesCreatePlaceVersionUserAuth.");
                                    if (null === e.placeId || void 0 === e.placeId) throw new i.IC("placeId", "Required parameter requestParameters.placeId was null or undefined when calling placesCreatePlaceVersionUserAuth.");
                                    return t = {}, void 0 !== e.versionType && (t.versionType = e.versionType), void 0 !== e.isOldVersionAllowed && (t.isOldVersionAllowed = e.isOldVersionAllowed), void 0 !== e.shouldForceRestart && (t.shouldForceRestart = e.shouldForceRestart), a = {}, [4, this.request({
                                        path: "/v1/user/universe/{universeId}/place/{placeId}/version".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))).replace("{".concat("placeId", "}"), encodeURIComponent(String(e.placeId))),
                                        method: "POST",
                                        headers: a,
                                        query: t
                                    }, n)];
                                case 1:
                                    return o = r.sent(), [2, new i.QG(o, function(e) {
                                        return s(e)
                                    })]
                            }
                        })
                    })
                }, n.prototype.placesCreatePlaceVersionUserAuth = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesCreatePlaceVersionUserAuthRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n.prototype.placesCreateUniverseRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = {}, void 0 !== e.groupId && (t.groupId = e.groupId), (a = {})["Content-Type"] = "application/json-patch+json", [4, this.request({
                                        path: "/v1/universes/create",
                                        method: "POST",
                                        headers: a,
                                        query: t,
                                        body: function(e) {
                                            if (void 0 !== e) return null === e ? null : {
                                                templatePlaceId: e.templatePlaceId,
                                                isPublish: e.isPublish
                                            }
                                        }(e.placesCreateUniverseRequest)
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            universeId: (0, i.Gg)(e, "universeId") ? e.universeId : void 0,
                                            rootPlaceId: (0, i.Gg)(e, "rootPlaceId") ? e.rootPlaceId : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, n.prototype.placesCreateUniverse = function(e, n) {
                    return void 0 === e && (e = {}), (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesCreateUniverseRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n.prototype.placesGetJoinRestrictionsRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling placesGetJoinRestrictions.");
                                    return t = {}, a = {}, [4, this.request({
                                        path: "/v1/universes/{universeId}/join-restrictions".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "GET",
                                        headers: a,
                                        query: t
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            isSpecificJoinToNonRootPlacesAllowed: (0, i.Gg)(e, "isSpecificJoinToNonRootPlacesAllowed") ? e.isSpecificJoinToNonRootPlacesAllowed : void 0,
                                            hasPlaceOverrides: (0, i.Gg)(e, "hasPlaceOverrides") ? e.hasPlaceOverrides : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, n.prototype.placesGetJoinRestrictions = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesGetJoinRestrictionsRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n.prototype.placesGetOwnedPlacesByCreationContextRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = {}, void 0 !== e.creatorTargetId && (t.creatorTargetId = e.creatorTargetId), void 0 !== e.creatorTargetType && (t.creatorTargetType = e.creatorTargetType), void 0 !== e.creationContext && (t.creationContext = e.creationContext), void 0 !== e.universeId && (t.universeId = e.universeId), void 0 !== e.nextPageToken && (t.nextPageToken = e.nextPageToken), void 0 !== e.maxPageSize && (t.maxPageSize = e.maxPageSize), a = {}, [4, this.request({
                                        path: "/v2/owned-places-by-creation-context",
                                        method: "GET",
                                        headers: a,
                                        query: t
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            places: (0, i.Gg)(e, "places") ? null === e.places ? null : e.places.map(o) : void 0,
                                            nextPageToken: (0, i.Gg)(e, "nextPageToken") ? e.nextPageToken : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, n.prototype.placesGetOwnedPlacesByCreationContext = function(e, n) {
                    return void 0 === e && (e = {}), (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesGetOwnedPlacesByCreationContextRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n.prototype.placesGetPlaceJoinRestrictionsRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.placeId || void 0 === e.placeId) throw new i.IC("placeId", "Required parameter requestParameters.placeId was null or undefined when calling placesGetPlaceJoinRestrictions.");
                                    return t = {}, a = {}, [4, this.request({
                                        path: "/v1/places/{placeId}/join-restrictions".replace("{".concat("placeId", "}"), encodeURIComponent(String(e.placeId))),
                                        method: "GET",
                                        headers: a,
                                        query: t
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            isSpecificJoinToNonRootPlacesAllowed: (0, i.Gg)(e, "isSpecificJoinToNonRootPlacesAllowed") ? e.isSpecificJoinToNonRootPlacesAllowed : void 0,
                                            hasPlaceOverride: (0, i.Gg)(e, "hasPlaceOverride") ? e.hasPlaceOverride : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, n.prototype.placesGetPlaceJoinRestrictions = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesGetPlaceJoinRestrictionsRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n.prototype.placesGetUniverseContainingPlaceRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.placeId || void 0 === e.placeId) throw new i.IC("placeId", "Required parameter requestParameters.placeId was null or undefined when calling placesGetUniverseContainingPlace.");
                                    return t = {}, a = {}, [4, this.request({
                                        path: "/v1/places/{placeId}/universe".replace("{".concat("placeId", "}"), encodeURIComponent(String(e.placeId))),
                                        method: "GET",
                                        headers: a,
                                        query: t
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            universeId: (0, i.Gg)(e, "universeId") ? e.universeId : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, n.prototype.placesGetUniverseContainingPlace = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesGetUniverseContainingPlaceRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n.prototype.placesMigrateUniverseRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling placesMigrateUniverse.");
                                    return t = {}, a = {}, [4, this.request({
                                        path: "/v1/universes/{universeId}/migrate-universe".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "POST",
                                        headers: a,
                                        query: t
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.dl(s)]
                            }
                        })
                    })
                }, n.prototype.placesMigrateUniverse = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesMigrateUniverseRaw(e, n)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, n.prototype.placesRemovePlaceFromUniverseRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling placesRemovePlaceFromUniverse.");
                                    if (null === e.placeId || void 0 === e.placeId) throw new i.IC("placeId", "Required parameter requestParameters.placeId was null or undefined when calling placesRemovePlaceFromUniverse.");
                                    return t = {}, a = {}, [4, this.request({
                                        path: "/v1/universes/{universeId}/places/{placeId}/remove-place".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))).replace("{".concat("placeId", "}"), encodeURIComponent(String(e.placeId))),
                                        method: "POST",
                                        headers: a,
                                        query: t
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.dl(s)]
                            }
                        })
                    })
                }, n.prototype.placesRemovePlaceFromUniverse = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesRemovePlaceFromUniverseRaw(e, n)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, n.prototype.placesUpdateJoinRestrictionsRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling placesUpdateJoinRestrictions.");
                                    return t = {}, (a = {})["Content-Type"] = "application/json-patch+json", [4, this.request({
                                        path: "/v1/universes/{universeId}/set-join-restrictions".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "POST",
                                        headers: a,
                                        query: t,
                                        body: function(e) {
                                            if (void 0 !== e) return null === e ? null : {
                                                isSpecificJoinToNonRootPlacesAllowed: e.isSpecificJoinToNonRootPlacesAllowed
                                            }
                                        }(e.placesUpdateJoinRestrictionsRequest)
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.dl(s)]
                            }
                        })
                    })
                }, n.prototype.placesUpdateJoinRestrictions = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesUpdateJoinRestrictionsRaw(e, n)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, n.prototype.placesUpdatePlaceJoinRestrictionsRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.placeId || void 0 === e.placeId) throw new i.IC("placeId", "Required parameter requestParameters.placeId was null or undefined when calling placesUpdatePlaceJoinRestrictions.");
                                    return t = {}, (a = {})["Content-Type"] = "application/json-patch+json", [4, this.request({
                                        path: "/v1/places/{placeId}/set-join-restrictions".replace("{".concat("placeId", "}"), encodeURIComponent(String(e.placeId))),
                                        method: "POST",
                                        headers: a,
                                        query: t,
                                        body: function(e) {
                                            if (void 0 !== e) return null === e ? null : {
                                                isSpecificJoinToNonRootPlacesAllowed: e.isSpecificJoinToNonRootPlacesAllowed
                                            }
                                        }(e.placesUpdatePlaceJoinRestrictionsRequest)
                                    }, n)];
                                case 1:
                                    return s = r.sent(), [2, new i.dl(s)]
                            }
                        })
                    })
                }, n.prototype.placesUpdatePlaceJoinRestrictions = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.placesUpdatePlaceJoinRestrictionsRaw(e, n)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, n
            }(i.T2)
        },
        33484: function(e, n, t) {
            t.d(n, {
                W: function() {
                    return s
                }
            });
            var r = t(86098),
                i = t(41057);

            function a(e) {
                return null == e ? e : {
                    id: (0, i.Gg)(e, "id") ? e.id : void 0,
                    name: (0, i.Gg)(e, "name") ? e.name : void 0,
                    description: (0, i.Gg)(e, "description") ? e.description : void 0,
                    isArchived: (0, i.Gg)(e, "isArchived") ? e.isArchived : void 0,
                    rootPlaceId: (0, i.Gg)(e, "rootPlaceId") ? e.rootPlaceId : void 0,
                    privacyType: (0, i.Gg)(e, "privacyType") ? e.privacyType : void 0,
                    creatorType: (0, i.Gg)(e, "creatorType") ? e.creatorType : void 0,
                    creatorTargetId: (0, i.Gg)(e, "creatorTargetId") ? e.creatorTargetId : void 0,
                    creatorName: (0, i.Gg)(e, "creatorName") ? e.creatorName : void 0,
                    created: (0, i.Gg)(e, "created") ? new Date(e.created) : void 0,
                    updated: (0, i.Gg)(e, "updated") ? new Date(e.updated) : void 0
                }
            }
            var s = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0, r._)(n, e), n.prototype.searchSearchUniversesRaw = function(e, n) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, s, o;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = {}, void 0 !== e.search && (t.Search = e.search), void 0 !== e.creatorType && (t.CreatorType = e.creatorType), void 0 !== e.creatorTargetId && (t.CreatorTargetId = e.creatorTargetId), void 0 !== e.isArchived && (t.IsArchived = e.isArchived), void 0 !== e.isPublic && (t.IsPublic = e.isPublic), void 0 !== e.isTeamCreateEnabled && (t.IsTeamCreateEnabled = e.isTeamCreateEnabled), void 0 !== e.pageIndex && (t.PageIndex = e.pageIndex), void 0 !== e.pageSize && (t.PageSize = e.pageSize), void 0 !== e.sortParam && (t.SortParam = e.sortParam), void 0 !== e.sortOrder && (t.SortOrder = e.sortOrder), s = {}, [4, this.request({
                                        path: "/v1/search",
                                        method: "GET",
                                        headers: s,
                                        query: t
                                    }, n)];
                                case 1:
                                    return o = r.sent(), [2, new i.QG(o, function(e) {
                                        return null == e ? e : {
                                            data: (0, i.Gg)(e, "data") ? null === e.data ? null : e.data.map(a) : void 0,
                                            totalResults: (0, i.Gg)(e, "totalResults") ? e.totalResults : void 0,
                                            totalHits: (0, i.Gg)(e, "totalHits") ? e.totalHits : void 0,
                                            nextResultIndex: (0, i.Gg)(e, "nextResultIndex") ? e.nextResultIndex : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, n.prototype.searchSearchUniverses = function(e, n) {
                    return void 0 === e && (e = {}), (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.searchSearchUniversesRaw(e, n)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, n
            }(i.T2)
        }
    }
]);
//# sourceMappingURL=4389-688d8dd2e6c0cfed.js.map