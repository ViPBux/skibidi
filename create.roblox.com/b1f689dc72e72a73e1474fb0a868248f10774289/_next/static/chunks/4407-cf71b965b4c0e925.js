! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "87c96937-bbfc-460a-a3e8-d06e88fb27ab", e._sentryDebugIdIdentifier = "sentry-dbid-87c96937-bbfc-460a-a3e8-d06e88fb27ab")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4407], {
        64037: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return i
                }
            });
            var r = n(52322),
                i = (0, n(57113).c)((0, r.jsx)("path", {
                    d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                }), "NavigateNext")
        },
        2178: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(18645),
                i = n(2784),
                a = n(42156);
            n(52322);
            var s = function(e) {
                var t = e.ref,
                    n = (0, r.a)(e, ["ref"]);
                return i.createElement(a.M, (0, r._)({}, n, {
                    ref: t,
                    viewBox: "0 0 16 16"
                }), i.createElement("path", {
                    d: "M3.38116 0L0 12.6188L12.6188 16L16 3.38116L3.38116 0ZM9.291 10.2363L5.76484 9.291L6.71013 5.76484L10.2377 6.71013L9.291 10.2363Z"
                }))
            }
        },
        73466: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(18645),
                i = n(2784),
                a = n(42156);
            n(52322);
            var s = function(e) {
                var t = e.ref,
                    n = (0, r.a)(e, ["ref"]);
                return i.createElement(a.M, (0, r._)({}, n, {
                    ref: t,
                    viewBox: "0 0 33 33"
                }), i.createElement("path", {
                    d: "M6.78817 0.975342L3.21606 14.3004L12.3069 16.7337L13.4424 12.4994L29.5881 16.8264L32.0247 7.73884L6.78817 0.975342Z"
                }), i.createElement("path", {
                    d: "M18.6069 21.448L2.46124 17.1211L0.0246582 26.2119L25.2611 32.9754L28.8332 19.6504L19.7424 17.2138L18.6069 21.448Z"
                }))
            }
        },
        46061: function(e, t, n) {
            n.d(t, {
                DX: function() {
                    return s
                },
                lm: function() {
                    return o
                }
            });
            var r = n(86098),
                i = n(41057);

            function a(e) {
                return null == e ? e : {
                    id: (0, i.Gg)(e, "id") ? e.id : void 0,
                    name: (0, i.Gg)(e, "name") ? e.name : void 0,
                    displayName: (0, i.Gg)(e, "displayName") ? e.displayName : void 0,
                    productId: (0, i.Gg)(e, "productId") ? e.productId : void 0,
                    price: (0, i.Gg)(e, "price") ? e.price : void 0,
                    sellerName: (0, i.Gg)(e, "sellerName") ? e.sellerName : void 0,
                    sellerId: (0, i.Gg)(e, "sellerId") ? e.sellerId : void 0,
                    isOwned: (0, i.Gg)(e, "isOwned") ? e.isOwned : void 0
                }
            }
            var s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, r._)(t, e), t.prototype.v1GamesUniverseIdGamePassesGetRaw = function(e, t) {
                        return (0, r.a)(this, void 0, void 0, function() {
                            var n, s, o;
                            return (0, r.b)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling v1GamesUniverseIdGamePassesGet.");
                                        return n = {}, void 0 !== e.limit && (n.limit = e.limit), void 0 !== e.cursor && (n.cursor = e.cursor), void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder), s = {}, [4, this.request({
                                            path: "/v1/games/{universeId}/game-passes".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                            method: "GET",
                                            headers: s,
                                            query: n
                                        }, t)];
                                    case 1:
                                        return o = r.sent(), [2, new i.QG(o, function(e) {
                                            return null == e ? e : {
                                                previousPageCursor: (0, i.Gg)(e, "previousPageCursor") ? e.previousPageCursor : void 0,
                                                nextPageCursor: (0, i.Gg)(e, "nextPageCursor") ? e.nextPageCursor : void 0,
                                                data: (0, i.Gg)(e, "data") ? e.data.map(a) : void 0
                                            }
                                        })]
                                }
                            })
                        })
                    }, t.prototype.v1GamesUniverseIdGamePassesGet = function(e, t) {
                        return (0, r.a)(this, void 0, void 0, function() {
                            return (0, r.b)(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.v1GamesUniverseIdGamePassesGetRaw(e, t)];
                                    case 1:
                                        return [4, n.sent().value()];
                                    case 2:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, t
                }(i.T2),
                o = {
                    Asc: "Asc",
                    Desc: "Desc"
                }
        },
        99875: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return w
                }
            });
            var r = n(86098),
                i = n(41057);

            function a(e) {
                return null == e ? e : {
                    creatorId: (0, i.Gg)(e, "creatorId") ? e.creatorId : void 0,
                    creatorName: (0, i.Gg)(e, "creatorName") ? e.creatorName : void 0,
                    creatorType: (0, i.Gg)(e, "creatorType") ? e.creatorType : void 0,
                    creatorHasVerifiedBadge: (0, i.Gg)(e, "creatorHasVerifiedBadge") ? e.creatorHasVerifiedBadge : void 0,
                    totalUpVotes: (0, i.Gg)(e, "totalUpVotes") ? e.totalUpVotes : void 0,
                    totalDownVotes: (0, i.Gg)(e, "totalDownVotes") ? e.totalDownVotes : void 0,
                    universeId: (0, i.Gg)(e, "universeId") ? e.universeId : void 0,
                    name: (0, i.Gg)(e, "name") ? e.name : void 0,
                    placeId: (0, i.Gg)(e, "placeId") ? e.placeId : void 0,
                    playerCount: (0, i.Gg)(e, "playerCount") ? e.playerCount : void 0,
                    imageToken: (0, i.Gg)(e, "imageToken") ? e.imageToken : void 0,
                    isSponsored: (0, i.Gg)(e, "isSponsored") ? e.isSponsored : void 0,
                    nativeAdData: (0, i.Gg)(e, "nativeAdData") ? e.nativeAdData : void 0,
                    isShowSponsoredLabel: (0, i.Gg)(e, "isShowSponsoredLabel") ? e.isShowSponsoredLabel : void 0,
                    price: (0, i.Gg)(e, "price") ? e.price : void 0,
                    analyticsIdentifier: (0, i.Gg)(e, "analyticsIdentifier") ? e.analyticsIdentifier : void 0,
                    gameDescription: (0, i.Gg)(e, "gameDescription") ? e.gameDescription : void 0,
                    genre: (0, i.Gg)(e, "genre") ? e.genre : void 0,
                    minimumAge: (0, i.Gg)(e, "minimumAge") ? e.minimumAge : void 0,
                    ageRecommendationDisplayName: (0, i.Gg)(e, "ageRecommendationDisplayName") ? e.ageRecommendationDisplayName : void 0
                }
            }

            function s(e, t) {
                return null == e ? e : {
                    games: (0, i.Gg)(e, "games") ? e.games.map(a) : void 0,
                    nextPaginationKey: (0, i.Gg)(e, "nextPaginationKey") ? e.nextPaginationKey : void 0
                }
            }

            function o(e) {
                return null == e ? e : {
                    token: (0, i.Gg)(e, "token") ? e.token : void 0,
                    name: (0, i.Gg)(e, "name") ? e.name : void 0,
                    tokenExpiryInSeconds: (0, i.Gg)(e, "tokenExpiryInSeconds") ? e.tokenExpiryInSeconds : void 0
                }
            }

            function d(e) {
                return null == e ? e : {
                    token: (0, i.Gg)(e, "token") ? e.token : void 0,
                    name: (0, i.Gg)(e, "name") ? e.name : void 0,
                    displayName: (0, i.Gg)(e, "displayName") ? e.displayName : void 0,
                    gameSetTypeId: (0, i.Gg)(e, "gameSetTypeId") ? e.gameSetTypeId : void 0,
                    gameSetTargetId: (0, i.Gg)(e, "gameSetTargetId") ? e.gameSetTargetId : void 0,
                    timeOptionsAvailable: (0, i.Gg)(e, "timeOptionsAvailable") ? e.timeOptionsAvailable : void 0,
                    genreOptionsAvailable: (0, i.Gg)(e, "genreOptionsAvailable") ? e.genreOptionsAvailable : void 0,
                    numberOfRows: (0, i.Gg)(e, "numberOfRows") ? e.numberOfRows : void 0,
                    numberOfGames: (0, i.Gg)(e, "numberOfGames") ? e.numberOfGames : void 0,
                    isDefaultSort: (0, i.Gg)(e, "isDefaultSort") ? e.isDefaultSort : void 0,
                    contextUniverseId: (0, i.Gg)(e, "contextUniverseId") ? e.contextUniverseId : void 0,
                    contextCountryRegionId: (0, i.Gg)(e, "contextCountryRegionId") ? e.contextCountryRegionId : void 0,
                    tokenExpiryInSeconds: (0, i.Gg)(e, "tokenExpiryInSeconds") ? e.tokenExpiryInSeconds : void 0
                }
            }

            function u(e) {
                return null == e ? e : {
                    token: (0, i.Gg)(e, "token") ? e.token : void 0,
                    name: (0, i.Gg)(e, "name") ? e.name : void 0,
                    tokenExpiryInSeconds: (0, i.Gg)(e, "tokenExpiryInSeconds") ? e.tokenExpiryInSeconds : void 0
                }
            }

            function l(e) {
                return null == e ? e : {
                    token: (0, i.Gg)(e, "token") ? e.token : void 0,
                    name: (0, i.Gg)(e, "name") ? e.name : void 0,
                    tokenExpiryInSeconds: (0, i.Gg)(e, "tokenExpiryInSeconds") ? e.tokenExpiryInSeconds : void 0
                }
            }

            function v(e) {
                return null == e ? e : {
                    placeId: (0, i.Gg)(e, "placeId") ? e.placeId : void 0,
                    name: (0, i.Gg)(e, "name") ? e.name : void 0,
                    description: (0, i.Gg)(e, "description") ? e.description : void 0,
                    sourceName: (0, i.Gg)(e, "sourceName") ? e.sourceName : void 0,
                    sourceDescription: (0, i.Gg)(e, "sourceDescription") ? e.sourceDescription : void 0,
                    url: (0, i.Gg)(e, "url") ? e.url : void 0,
                    builder: (0, i.Gg)(e, "builder") ? e.builder : void 0,
                    builderId: (0, i.Gg)(e, "builderId") ? e.builderId : void 0,
                    hasVerifiedBadge: (0, i.Gg)(e, "hasVerifiedBadge") ? e.hasVerifiedBadge : void 0,
                    isPlayable: (0, i.Gg)(e, "isPlayable") ? e.isPlayable : void 0,
                    reasonProhibited: (0, i.Gg)(e, "reasonProhibited") ? e.reasonProhibited : void 0,
                    universeId: (0, i.Gg)(e, "universeId") ? e.universeId : void 0,
                    universeRootPlaceId: (0, i.Gg)(e, "universeRootPlaceId") ? e.universeRootPlaceId : void 0,
                    price: (0, i.Gg)(e, "price") ? e.price : void 0,
                    imageToken: (0, i.Gg)(e, "imageToken") ? e.imageToken : void 0
                }
            }

            function c(e) {
                return null == e ? e : {
                    playabilityStatus: (0, i.Gg)(e, "playabilityStatus") ? e.playabilityStatus : void 0,
                    isPlayable: (0, i.Gg)(e, "isPlayable") ? e.isPlayable : void 0,
                    universeId: (0, i.Gg)(e, "universeId") ? e.universeId : void 0
                }
            }

            function m(e) {
                return null == e ? e : {
                    _final: (0, i.Gg)(e, "final") ? e.final : void 0,
                    url: (0, i.Gg)(e, "url") ? e.url : void 0,
                    cdnUrl: (0, i.Gg)(e, "cdnUrl") ? e.cdnUrl : void 0,
                    retryToken: (0, i.Gg)(e, "retryToken") ? e.retryToken : void 0,
                    universeId: (0, i.Gg)(e, "universeId") ? e.universeId : void 0,
                    placeId: (0, i.Gg)(e, "placeId") ? e.placeId : void 0
                }
            }

            function g(e) {
                var t;
                return null == e ? e : {
                    id: (0, i.Gg)(e, "id") ? e.id : void 0,
                    rootPlaceId: (0, i.Gg)(e, "rootPlaceId") ? e.rootPlaceId : void 0,
                    name: (0, i.Gg)(e, "name") ? e.name : void 0,
                    description: (0, i.Gg)(e, "description") ? e.description : void 0,
                    sourceName: (0, i.Gg)(e, "sourceName") ? e.sourceName : void 0,
                    sourceDescription: (0, i.Gg)(e, "sourceDescription") ? e.sourceDescription : void 0,
                    creator: (0, i.Gg)(e, "creator") ? null == (t = e.creator) ? t : {
                        id: (0, i.Gg)(t, "id") ? t.id : void 0,
                        name: (0, i.Gg)(t, "name") ? t.name : void 0,
                        type: (0, i.Gg)(t, "type") ? t.type : void 0,
                        isRNVAccount: (0, i.Gg)(t, "isRNVAccount") ? t.isRNVAccount : void 0,
                        hasVerifiedBadge: (0, i.Gg)(t, "hasVerifiedBadge") ? t.hasVerifiedBadge : void 0
                    } : void 0,
                    price: (0, i.Gg)(e, "price") ? e.price : void 0,
                    allowedGearGenres: (0, i.Gg)(e, "allowedGearGenres") ? e.allowedGearGenres : void 0,
                    allowedGearCategories: (0, i.Gg)(e, "allowedGearCategories") ? e.allowedGearCategories : void 0,
                    isGenreEnforced: (0, i.Gg)(e, "isGenreEnforced") ? e.isGenreEnforced : void 0,
                    copyingAllowed: (0, i.Gg)(e, "copyingAllowed") ? e.copyingAllowed : void 0,
                    playing: (0, i.Gg)(e, "playing") ? e.playing : void 0,
                    visits: (0, i.Gg)(e, "visits") ? e.visits : void 0,
                    maxPlayers: (0, i.Gg)(e, "maxPlayers") ? e.maxPlayers : void 0,
                    created: (0, i.Gg)(e, "created") ? new Date(e.created) : void 0,
                    updated: (0, i.Gg)(e, "updated") ? new Date(e.updated) : void 0,
                    studioAccessToApisAllowed: (0, i.Gg)(e, "studioAccessToApisAllowed") ? e.studioAccessToApisAllowed : void 0,
                    createVipServersAllowed: (0, i.Gg)(e, "createVipServersAllowed") ? e.createVipServersAllowed : void 0,
                    universeAvatarType: (0, i.Gg)(e, "universeAvatarType") ? e.universeAvatarType : void 0,
                    genre: (0, i.Gg)(e, "genre") ? e.genre : void 0,
                    isAllGenre: (0, i.Gg)(e, "isAllGenre") ? e.isAllGenre : void 0,
                    isFavoritedByUser: (0, i.Gg)(e, "isFavoritedByUser") ? e.isFavoritedByUser : void 0,
                    favoritedCount: (0, i.Gg)(e, "favoritedCount") ? e.favoritedCount : void 0
                }
            }

            function G(e) {
                return null == e ? e : {
                    id: (0, i.Gg)(e, "id") ? e.id : void 0,
                    assetTypeId: (0, i.Gg)(e, "assetTypeId") ? e.assetTypeId : void 0,
                    assetType: (0, i.Gg)(e, "assetType") ? e.assetType : void 0,
                    imageId: (0, i.Gg)(e, "imageId") ? e.imageId : void 0,
                    videoHash: (0, i.Gg)(e, "videoHash") ? e.videoHash : void 0,
                    videoTitle: (0, i.Gg)(e, "videoTitle") ? e.videoTitle : void 0,
                    approved: (0, i.Gg)(e, "approved") ? e.approved : void 0,
                    altText: (0, i.Gg)(e, "altText") ? e.altText : void 0
                }
            }

            function h(e) {
                return null == e ? e : {
                    universeId: (0, i.Gg)(e, "universeId") ? e.universeId : void 0,
                    isForSale: (0, i.Gg)(e, "isForSale") ? e.isForSale : void 0,
                    productId: (0, i.Gg)(e, "productId") ? e.productId : void 0,
                    price: (0, i.Gg)(e, "price") ? e.price : void 0,
                    sellerId: (0, i.Gg)(e, "sellerId") ? e.sellerId : void 0
                }
            }

            function p(e) {
                return null == e ? e : {
                    spotlightType: (0, i.Gg)(e, "spotlightType") ? e.spotlightType : void 0,
                    spotlightActionText: (0, i.Gg)(e, "spotlightActionText") ? e.spotlightActionText : void 0,
                    spotlightTypeData: (0, i.Gg)(e, "spotlightTypeData") ? e.spotlightTypeData : void 0,
                    gameInfo: (0, i.Gg)(e, "gameInfo") ? a(e.gameInfo) : void 0
                }
            }
            var w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0, r._)(t, e), t.prototype.v1GamesGameThumbnailGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.imageToken || void 0 === e.imageToken) throw new i.IC("imageToken", "Required parameter requestParameters.imageToken was null or undefined when calling v1GamesGameThumbnailGet.");
                                    return n = {}, void 0 !== e.imageToken && (n.imageToken = e.imageToken), void 0 !== e.height && (n.height = e.height), void 0 !== e.width && (n.width = e.width), a = {}, [4, this.request({
                                        path: "/v1/games/game-thumbnail",
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.dl(s)]
                            }
                        })
                    })
                }, t.prototype.v1GamesGameThumbnailGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesGameThumbnailGetRaw(e, t)];
                                case 1:
                                    return n.sent(), [2]
                            }
                        })
                    })
                }, t.prototype.v1GamesGameThumbnailsGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.imageTokens || void 0 === e.imageTokens) throw new i.IC("imageTokens", "Required parameter requestParameters.imageTokens was null or undefined when calling v1GamesGameThumbnailsGet.");
                                    return n = {}, e.imageTokens && (n.imageTokens = e.imageTokens), void 0 !== e.height && (n.height = e.height), void 0 !== e.width && (n.width = e.width), a = {}, [4, this.request({
                                        path: "/v1/games/game-thumbnails",
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return e.map(m)
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesGameThumbnailsGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesGameThumbnailsGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesGamesProductInfoGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeIds || void 0 === e.universeIds) throw new i.IC("universeIds", "Required parameter requestParameters.universeIds was null or undefined when calling v1GamesGamesProductInfoGet.");
                                    return n = {}, e.universeIds && (n.universeIds = e.universeIds.join(i.Rg.csv)), a = {}, [4, this.request({
                                        path: "/v1/games/games-product-info",
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            data: (0, i.Gg)(e, "data") ? e.data.map(h) : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesGamesProductInfoGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesGamesProductInfoGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeIds || void 0 === e.universeIds) throw new i.IC("universeIds", "Required parameter requestParameters.universeIds was null or undefined when calling v1GamesGet.");
                                    return n = {}, e.universeIds && (n.universeIds = e.universeIds.join(i.Rg.csv)), a = {}, [4, this.request({
                                        path: "/v1/games",
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            data: (0, i.Gg)(e, "data") ? e.data.map(g) : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesListGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, s, o;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.sortToken || void 0 === e.sortToken) throw new i.IC("sortToken", "Required parameter requestParameters.sortToken was null or undefined when calling v1GamesListGet.");
                                    if (null === e.gameFilter || void 0 === e.gameFilter) throw new i.IC("gameFilter", "Required parameter requestParameters.gameFilter was null or undefined when calling v1GamesListGet.");
                                    if (null === e.timeFilter || void 0 === e.timeFilter) throw new i.IC("timeFilter", "Required parameter requestParameters.timeFilter was null or undefined when calling v1GamesListGet.");
                                    if (null === e.genreFilter || void 0 === e.genreFilter) throw new i.IC("genreFilter", "Required parameter requestParameters.genreFilter was null or undefined when calling v1GamesListGet.");
                                    if (null === e.exclusiveStartId || void 0 === e.exclusiveStartId) throw new i.IC("exclusiveStartId", "Required parameter requestParameters.exclusiveStartId was null or undefined when calling v1GamesListGet.");
                                    if (null === e.sortOrder || void 0 === e.sortOrder) throw new i.IC("sortOrder", "Required parameter requestParameters.sortOrder was null or undefined when calling v1GamesListGet.");
                                    if (null === e.gameSetTargetId || void 0 === e.gameSetTargetId) throw new i.IC("gameSetTargetId", "Required parameter requestParameters.gameSetTargetId was null or undefined when calling v1GamesListGet.");
                                    if (null === e.keyword || void 0 === e.keyword) throw new i.IC("keyword", "Required parameter requestParameters.keyword was null or undefined when calling v1GamesListGet.");
                                    if (null === e.startRows || void 0 === e.startRows) throw new i.IC("startRows", "Required parameter requestParameters.startRows was null or undefined when calling v1GamesListGet.");
                                    if (null === e.maxRows || void 0 === e.maxRows) throw new i.IC("maxRows", "Required parameter requestParameters.maxRows was null or undefined when calling v1GamesListGet.");
                                    if (null === e.contextCountryRegionId || void 0 === e.contextCountryRegionId) throw new i.IC("contextCountryRegionId", "Required parameter requestParameters.contextCountryRegionId was null or undefined when calling v1GamesListGet.");
                                    if (null === e.contextUniverseId || void 0 === e.contextUniverseId) throw new i.IC("contextUniverseId", "Required parameter requestParameters.contextUniverseId was null or undefined when calling v1GamesListGet.");
                                    if (null === e.pageContextPageId || void 0 === e.pageContextPageId) throw new i.IC("pageContextPageId", "Required parameter requestParameters.pageContextPageId was null or undefined when calling v1GamesListGet.");
                                    if (null === e.pageContextIsSeeAllPage || void 0 === e.pageContextIsSeeAllPage) throw new i.IC("pageContextIsSeeAllPage", "Required parameter requestParameters.pageContextIsSeeAllPage was null or undefined when calling v1GamesListGet.");
                                    if (null === e.sortPosition || void 0 === e.sortPosition) throw new i.IC("sortPosition", "Required parameter requestParameters.sortPosition was null or undefined when calling v1GamesListGet.");
                                    if (null === e.sessionId || void 0 === e.sessionId) throw new i.IC("sessionId", "Required parameter requestParameters.sessionId was null or undefined when calling v1GamesListGet.");
                                    return n = {}, void 0 !== e.sortToken && (n.SortToken = e.sortToken), void 0 !== e.gameFilter && (n.GameFilter = e.gameFilter), void 0 !== e.timeFilter && (n.TimeFilter = e.timeFilter), void 0 !== e.genreFilter && (n.GenreFilter = e.genreFilter), void 0 !== e.exclusiveStartId && (n.ExclusiveStartId = e.exclusiveStartId), void 0 !== e.sortOrder && (n.SortOrder = e.sortOrder), void 0 !== e.gameSetTargetId && (n.GameSetTargetId = e.gameSetTargetId), void 0 !== e.keyword && (n.Keyword = e.keyword), void 0 !== e.startRows && (n.StartRows = e.startRows), void 0 !== e.maxRows && (n.MaxRows = e.maxRows), void 0 !== e.contextCountryRegionId && (n.ContextCountryRegionId = e.contextCountryRegionId), void 0 !== e.contextUniverseId && (n.ContextUniverseId = e.contextUniverseId), void 0 !== e.pageContextPageId && (n["PageContext.PageId"] = e.pageContextPageId), void 0 !== e.pageContextIsSeeAllPage && (n["PageContext.IsSeeAllPage"] = e.pageContextIsSeeAllPage), void 0 !== e.sortPosition && (n.SortPosition = e.sortPosition), void 0 !== e.sessionId && (n.SessionId = e.sessionId), s = {}, [4, this.request({
                                        path: "/v1/games/list",
                                        method: "GET",
                                        headers: s,
                                        query: n
                                    }, t)];
                                case 1:
                                    return o = r.sent(), [2, new i.QG(o, function(e) {
                                        var t;
                                        return null == e ? e : {
                                            games: (0, i.Gg)(e, "games") ? e.games.map(a) : void 0,
                                            suggestedKeyword: (0, i.Gg)(e, "suggestedKeyword") ? e.suggestedKeyword : void 0,
                                            correctedKeyword: (0, i.Gg)(e, "correctedKeyword") ? e.correctedKeyword : void 0,
                                            filteredKeyword: (0, i.Gg)(e, "filteredKeyword") ? e.filteredKeyword : void 0,
                                            hasMoreRows: (0, i.Gg)(e, "hasMoreRows") ? e.hasMoreRows : void 0,
                                            nextPageExclusiveStartId: (0, i.Gg)(e, "nextPageExclusiveStartId") ? e.nextPageExclusiveStartId : void 0,
                                            featuredSearchUniverseId: (0, i.Gg)(e, "featuredSearchUniverseId") ? e.featuredSearchUniverseId : void 0,
                                            emphasis: (0, i.Gg)(e, "emphasis") ? e.emphasis : void 0,
                                            cutOffIndex: (0, i.Gg)(e, "cutOffIndex") ? e.cutOffIndex : void 0,
                                            algorithm: (0, i.Gg)(e, "algorithm") ? e.algorithm : void 0,
                                            algorithmQueryType: (0, i.Gg)(e, "algorithmQueryType") ? e.algorithmQueryType : void 0,
                                            suggestionAlgorithm: (0, i.Gg)(e, "suggestionAlgorithm") ? e.suggestionAlgorithm : void 0,
                                            relatedGames: (0, i.Gg)(e, "relatedGames") ? e.relatedGames.map(a) : void 0,
                                            esDebugInfo: (0, i.Gg)(e, "esDebugInfo") ? null == (t = e.esDebugInfo) ? t : {
                                                esQuery: (0, i.Gg)(t, "esQuery") ? t.esQuery : void 0
                                            } : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesListGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesListGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesListSpotlightGetRaw = function(e) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var t, n, a;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = {}, n = {}, [4, this.request({
                                        path: "/v1/games/list-spotlight",
                                        method: "GET",
                                        headers: n,
                                        query: t
                                    }, e)];
                                case 1:
                                    return a = r.sent(), [2, new i.QG(a, function(e) {
                                        return null == e ? e : {
                                            data: (0, i.Gg)(e, "data") ? e.data.map(p) : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesListSpotlightGet = function(e) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.v1GamesListSpotlightGetRaw(e)];
                                case 1:
                                    return [4, t.sent().value()];
                                case 2:
                                    return [2, t.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesMultigetPlaceDetailsGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.placeIds || void 0 === e.placeIds) throw new i.IC("placeIds", "Required parameter requestParameters.placeIds was null or undefined when calling v1GamesMultigetPlaceDetailsGet.");
                                    return n = {}, e.placeIds && (n.placeIds = e.placeIds), a = {}, [4, this.request({
                                        path: "/v1/games/multiget-place-details",
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return e.map(v)
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesMultigetPlaceDetailsGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesMultigetPlaceDetailsGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesMultigetPlayabilityStatusGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeIds || void 0 === e.universeIds) throw new i.IC("universeIds", "Required parameter requestParameters.universeIds was null or undefined when calling v1GamesMultigetPlayabilityStatusGet.");
                                    return n = {}, e.universeIds && (n.universeIds = e.universeIds.join(i.Rg.csv)), a = {}, [4, this.request({
                                        path: "/v1/games/multiget-playability-status",
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return e.map(c)
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesMultigetPlayabilityStatusGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesMultigetPlayabilityStatusGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesRecommendationsAlgorithmAlgorithmNameGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, o;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.algorithmName || void 0 === e.algorithmName) throw new i.IC("algorithmName", "Required parameter requestParameters.algorithmName was null or undefined when calling v1GamesRecommendationsAlgorithmAlgorithmNameGet.");
                                    if (null === e.paginationKey || void 0 === e.paginationKey) throw new i.IC("paginationKey", "Required parameter requestParameters.paginationKey was null or undefined when calling v1GamesRecommendationsAlgorithmAlgorithmNameGet.");
                                    if (null === e.maxRows || void 0 === e.maxRows) throw new i.IC("maxRows", "Required parameter requestParameters.maxRows was null or undefined when calling v1GamesRecommendationsAlgorithmAlgorithmNameGet.");
                                    if (null === e.isTruncatedResultsEnabled || void 0 === e.isTruncatedResultsEnabled) throw new i.IC("isTruncatedResultsEnabled", "Required parameter requestParameters.isTruncatedResultsEnabled was null or undefined when calling v1GamesRecommendationsAlgorithmAlgorithmNameGet.");
                                    return n = {}, void 0 !== e.paginationKey && (n.PaginationKey = e.paginationKey), void 0 !== e.maxRows && (n.MaxRows = e.maxRows), void 0 !== e.isTruncatedResultsEnabled && (n.IsTruncatedResultsEnabled = e.isTruncatedResultsEnabled), a = {}, [4, this.request({
                                        path: "/v1/games/recommendations/algorithm/{algorithmName}".replace("{".concat("algorithmName", "}"), encodeURIComponent(String(e.algorithmName))),
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return o = r.sent(), [2, new i.QG(o, function(e) {
                                        return s(e)
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesRecommendationsAlgorithmAlgorithmNameGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesRecommendationsAlgorithmAlgorithmNameGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesRecommendationsGameUniverseIdGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, o;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling v1GamesRecommendationsGameUniverseIdGet.");
                                    if (null === e.paginationKey || void 0 === e.paginationKey) throw new i.IC("paginationKey", "Required parameter requestParameters.paginationKey was null or undefined when calling v1GamesRecommendationsGameUniverseIdGet.");
                                    if (null === e.maxRows || void 0 === e.maxRows) throw new i.IC("maxRows", "Required parameter requestParameters.maxRows was null or undefined when calling v1GamesRecommendationsGameUniverseIdGet.");
                                    if (null === e.isTruncatedResultsEnabled || void 0 === e.isTruncatedResultsEnabled) throw new i.IC("isTruncatedResultsEnabled", "Required parameter requestParameters.isTruncatedResultsEnabled was null or undefined when calling v1GamesRecommendationsGameUniverseIdGet.");
                                    return n = {}, void 0 !== e.paginationKey && (n.PaginationKey = e.paginationKey), void 0 !== e.maxRows && (n.MaxRows = e.maxRows), void 0 !== e.isTruncatedResultsEnabled && (n.IsTruncatedResultsEnabled = e.isTruncatedResultsEnabled), a = {}, [4, this.request({
                                        path: "/v1/games/recommendations/game/{universeId}".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return o = r.sent(), [2, new i.QG(o, function(e) {
                                        return s(e)
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesRecommendationsGameUniverseIdGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesRecommendationsGameUniverseIdGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesSortsGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.gameSortsContext || void 0 === e.gameSortsContext) throw new i.IC("gameSortsContext", "Required parameter requestParameters.gameSortsContext was null or undefined when calling v1GamesSortsGet.");
                                    return n = {}, void 0 !== e.gameSortsContext && (n.GameSortsContext = e.gameSortsContext), a = {}, [4, this.request({
                                        path: "/v1/games/sorts",
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        var t;
                                        return null == e ? e : {
                                            sorts: (0, i.Gg)(e, "sorts") ? e.sorts.map(d) : void 0,
                                            timeFilters: (0, i.Gg)(e, "timeFilters") ? e.timeFilters.map(l) : void 0,
                                            genreFilters: (0, i.Gg)(e, "genreFilters") ? e.genreFilters.map(u) : void 0,
                                            gameFilters: (0, i.Gg)(e, "gameFilters") ? e.gameFilters.map(o) : void 0,
                                            pageContext: (0, i.Gg)(e, "pageContext") ? null == (t = e.pageContext) ? t : {
                                                pageId: (0, i.Gg)(t, "pageId") ? t.pageId : void 0,
                                                isSeeAllPage: (0, i.Gg)(t, "isSeeAllPage") ? t.isSeeAllPage : void 0
                                            } : void 0,
                                            gameSortStyle: (0, i.Gg)(e, "gameSortStyle") ? e.gameSortStyle : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesSortsGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesSortsGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesUniverseIdIconGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling v1GamesUniverseIdIconGet.");
                                    return n = {}, a = {}, [4, this.request({
                                        path: "/v1/games/{universeId}/icon".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            imageId: (0, i.Gg)(e, "imageId") ? e.imageId : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesUniverseIdIconGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesUniverseIdIconGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesUniverseIdMediaGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling v1GamesUniverseIdMediaGet.");
                                    return n = {}, a = {}, [4, this.request({
                                        path: "/v1/games/{universeId}/media".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            data: (0, i.Gg)(e, "data") ? e.data.map(G) : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesUniverseIdMediaGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesUniverseIdMediaGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t
            }(i.T2)
        },
        57801: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return s
                }
            });
            var r = n(86098),
                i = n(41057),
                a = n(26759),
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, r._)(t, e), t.prototype.v1GamesUniverseIdSocialLinksListGetRaw = function(e, t) {
                        return (0, r.a)(this, void 0, void 0, function() {
                            var n, s, o;
                            return (0, r.b)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling v1GamesUniverseIdSocialLinksListGet.");
                                        return n = {}, s = {}, [4, this.request({
                                            path: "/v1/games/{universeId}/social-links/list".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                            method: "GET",
                                            headers: s,
                                            query: n
                                        }, t)];
                                    case 1:
                                        return o = r.sent(), [2, new i.QG(o, function(e) {
                                            return null == e ? e : {
                                                data: (0, i.Gg)(e, "data") ? e.data.map(a.kN) : void 0
                                            }
                                        })]
                                }
                            })
                        })
                    }, t.prototype.v1GamesUniverseIdSocialLinksListGet = function(e, t) {
                        return (0, r.a)(this, void 0, void 0, function() {
                            return (0, r.b)(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.v1GamesUniverseIdSocialLinksListGetRaw(e, t)];
                                    case 1:
                                        return [4, n.sent().value()];
                                    case 2:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, t
                }(i.T2)
        },
        59970: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return s
                }
            });
            var r = n(86098),
                i = n(41057);

            function a(e) {
                return null == e ? e : {
                    id: (0, i.Gg)(e, "id") ? e.id : void 0,
                    upVotes: (0, i.Gg)(e, "upVotes") ? e.upVotes : void 0,
                    downVotes: (0, i.Gg)(e, "downVotes") ? e.downVotes : void 0
                }
            }
            var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0, r._)(t, e), t.prototype.v1GamesUniverseIdUserVotesPatchRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling v1GamesUniverseIdUserVotesPatch.");
                                    if (null === e.requestBody || void 0 === e.requestBody) throw new i.IC("requestBody", "Required parameter requestParameters.requestBody was null or undefined when calling v1GamesUniverseIdUserVotesPatch.");
                                    return n = {}, (a = {})["Content-Type"] = "application/json", [4, this.request({
                                        path: "/v1/games/{universeId}/user-votes".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "PATCH",
                                        headers: a,
                                        query: n,
                                        body: function(e) {
                                            if (void 0 !== e) return null === e ? null : {
                                                vote: e.vote
                                            }
                                        }(e.requestBody)
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s)]
                            }
                        })
                    })
                }, t.prototype.v1GamesUniverseIdUserVotesPatch = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesUniverseIdUserVotesPatchRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesUniverseIdVotesGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, s, o;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling v1GamesUniverseIdVotesGet.");
                                    return n = {}, s = {}, [4, this.request({
                                        path: "/v1/games/{universeId}/votes".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "GET",
                                        headers: s,
                                        query: n
                                    }, t)];
                                case 1:
                                    return o = r.sent(), [2, new i.QG(o, function(e) {
                                        return a(e)
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesUniverseIdVotesGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesUniverseIdVotesGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesUniverseIdVotesUserGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, a, s;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeId || void 0 === e.universeId) throw new i.IC("universeId", "Required parameter requestParameters.universeId was null or undefined when calling v1GamesUniverseIdVotesUserGet.");
                                    return n = {}, a = {}, [4, this.request({
                                        path: "/v1/games/{universeId}/votes/user".replace("{".concat("universeId", "}"), encodeURIComponent(String(e.universeId))),
                                        method: "GET",
                                        headers: a,
                                        query: n
                                    }, t)];
                                case 1:
                                    return s = r.sent(), [2, new i.QG(s, function(e) {
                                        return null == e ? e : {
                                            canVote: (0, i.Gg)(e, "canVote") ? e.canVote : void 0,
                                            userVote: (0, i.Gg)(e, "userVote") ? e.userVote : void 0,
                                            reasonForNotVoteable: (0, i.Gg)(e, "reasonForNotVoteable") ? e.reasonForNotVoteable : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesUniverseIdVotesUserGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesUniverseIdVotesUserGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t.prototype.v1GamesVotesGetRaw = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        var n, s, o;
                        return (0, r.b)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null === e.universeIds || void 0 === e.universeIds) throw new i.IC("universeIds", "Required parameter requestParameters.universeIds was null or undefined when calling v1GamesVotesGet.");
                                    return n = {}, e.universeIds && (n.universeIds = e.universeIds.join(i.Rg.csv)), s = {}, [4, this.request({
                                        path: "/v1/games/votes",
                                        method: "GET",
                                        headers: s,
                                        query: n
                                    }, t)];
                                case 1:
                                    return o = r.sent(), [2, new i.QG(o, function(e) {
                                        return null == e ? e : {
                                            data: (0, i.Gg)(e, "data") ? e.data.map(a) : void 0
                                        }
                                    })]
                            }
                        })
                    })
                }, t.prototype.v1GamesVotesGet = function(e, t) {
                    return (0, r.a)(this, void 0, void 0, function() {
                        return (0, r.b)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.v1GamesVotesGetRaw(e, t)];
                                case 1:
                                    return [4, n.sent().value()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, t
            }(i.T2)
        },
        26759: function(e, t, n) {
            n.d(t, {
                kN: function() {
                    return a
                },
                qU: function() {
                    return i
                }
            });
            var r = n(41057),
                i = {
                    Facebook: "Facebook",
                    Twitter: "Twitter",
                    YouTube: "YouTube",
                    Twitch: "Twitch",
                    GooglePlus: "GooglePlus",
                    Discord: "Discord",
                    RobloxGroup: "RobloxGroup",
                    Amazon: "Amazon",
                    Guilded: "Guilded"
                };

            function a(e) {
                return null == e ? e : {
                    id: (0, r.Gg)(e, "id") ? e.id : void 0,
                    title: (0, r.Gg)(e, "title") ? e.title : void 0,
                    url: (0, r.Gg)(e, "url") ? e.url : void 0,
                    type: (0, r.Gg)(e, "type") ? e.type : void 0
                }
            }
        }
    }
]);
//# sourceMappingURL=4407-cf71b965b4c0e925.js.map