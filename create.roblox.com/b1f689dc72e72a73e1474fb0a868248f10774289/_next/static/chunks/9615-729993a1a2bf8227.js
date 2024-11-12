! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4dd805c3-9750-4dd9-9cf8-357c0ae9d5ef", e._sentryDebugIdIdentifier = "sentry-dbid-4dd805c3-9750-4dd9-9cf8-357c0ae9d5ef")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9615], {
        68545: function(e, t, n) {
            n.d(t, {
                Hh: function() {
                    return i
                },
                Lj: function() {
                    return o
                },
                T6: function() {
                    return c
                },
                Zs: function() {
                    return a
                }
            });
            let i = ["flagForUnitTest", "flagRuntimeOverrideControlEnabled", "datastoresDashboardEnabled", "avatarGenerationsDashboardEnabled", "thumbnailPersonalizationEnabled", "splineChartPeriodOverPeriodComparisonEnabled", "funnelsBySessionAndUserEnabled", "customEventsPagePublicEnabled", "customEventsPageBetaEnabled", "lowEndAndroidCrashRateInsightsEnabled", "snoozeV2Enabled", "liveEventAnnotationPerformancePageAllowlist", "qualitySignalCardsEnabled", "legendDoubleClickEnabled", "analyticsAssistantEnabled", "acquisitionMigrationMetricsEnabled", "thumbnailL7QualifiedPTREnabled"],
                a = ["flagForUnitTest", "flagRuntimeOverrideControlEnabled"],
                r = Object.freeze(["experienceHasPerformanceMonitoringAccess", "userCanViewAnalyticsForUniverse"].reduce((e, t) => (e[t] = !1, e), {})),
                s = Object.freeze(i.reduce((e, t) => (e[t] = !1, e), {})),
                o = Object.freeze({
                    showMemoryStoresDashboard: !1,
                    ...r,
                    ...s
                }),
                l = e => {
                    var t;
                    return "fulfilled" === e.status && null !== (t = e.value.showMemoryStoresDashboard) && void 0 !== t && t
                },
                d = e => {
                    if ("fulfilled" !== e.status) return { ...r,
                        ...s
                    };
                    let t = i.reduce((t, n) => (t[n] = e.value.flags[n], t), { ...s
                        }),
                        {
                            flags: n,
                            ...a
                        } = e.value;
                    return { ...a,
                        ...t,
                        thumbnailPersonalizationEnabled: t.thumbnailPersonalizationEnabled || !!e.value.experienceHasPersonalizationAccess
                    }
                },
                c = e => {
                    let {
                        featurePermissions: t,
                        userIXPParams: n
                    } = e;
                    return { ...d(t),
                        showMemoryStoresDashboard: l(n)
                    }
                }
        },
        48921: function(e, t) {
            t.Z = [3533517436, 5703373185, 3876150506, 1070980505, 5744922424, 204387960, 5518683179, 4430449940, 290999714, 2239430935, 3249295527, 1859597048, 1091907805, 63951305, 3234331887, 5694335531, 1831550657, 985731078, 4093155512, 245662005, 4475973568, 4457345586, 5560922112, 4985598398, 5565014026, 4475511846, 3906287814, 5560922112, 4457345586, 3837114739, 5830247545, 5964044106, 5930383604, 5917040893, 3954166644, 1325411718, 4765561827, 3365197759, 3929033413, 8813012, 2992873140, 613788824, 4417008516, 1994317693, 2152417643, 2799591695, 3401332743, 4513918148, 533435040, 3889680363, 6057596147, 1070980505, 1527252839, 3539082945, 5639479940, 2051069997, 2014214472, 5210666193, 4529461190, 4014729424, 5529067985, 5225909867, 5561276101, 5662532378, 5964312895, 4201418016, 5208051158, 5417229205, 6170003007, 434430531, 6183229612, 1484369645, 6143226737, 4109163554, 148952528, 2119141857]
        },
        40550: function(e, t, n) {
            var i = n(2012),
                a = n(12399),
                r = n(69710);
            let s = {
                [a.Z.ItemMonetizationDeveloperProducts]: (0, r.Bv)("Label.DeveloperProducts", i.Z.Navigation),
                [a.Z.ItemMonetizationPasses]: (0, r.Bv)("Label.GamePasses", i.Z.Navigation),
                [a.Z.ItemMonetizationAvatarItems]: (0, r.Bv)("Label.AvatarItems", i.Z.Navigation),
                [a.Z.ImmersiveAds]: (0, r.Bv)("Heading.ImmersiveAds", i.Z.Navigation),
                [a.Z.Subscriptions]: (0, r.Bv)("Heading.Subscriptions", i.Z.Navigation),
                [a.Z.MemoryStores]: (0, r.Bv)("Heading.MemoryStores", i.Z.Navigation),
                [a.Z.DataStores]: (0, r.Bv)("Heading.DataStores", i.Z.Navigation),
                [a.Z.AvatarGenerations]: (0, r.Bv)("Heading.AvatarGenerations", i.Z.Navigation),
                [a.Z.EngagementBasedPayouts]: (0, r.Bv)("Heading.EngagementBasedPayouts", i.Z.Navigation),
                [a.Z.Performance]: (0, r.Bv)("Heading.Performance", i.Z.Navigation),
                [a.Z.ErrorReport]: (0, r.Bv)("Heading.ErrorReport", i.Z.Navigation),
                [a.Z.Audience]: (0, r.Bv)("Heading.Audience", i.Z.Navigation),
                [a.Z.RecommendedEventsEconomy]: (0, r.Bv)("Heading.Economy", i.Z.Navigation),
                [a.Z.RecommendedEventsFunnels]: (0, r.Bv)("Heading.Funnels", i.Z.Navigation),
                [a.Z.Explore]: (0, r.Bv)("Heading.Explore", i.Z.Navigation),
                [a.Z.Retention]: (0, r.Bv)("Heading.Retention", i.Z.Navigation),
                [a.Z.Engagement]: (0, r.Bv)("Heading.Engagement", i.Z.Navigation),
                [a.Z.UserAcquisition]: (0, r.Bv)("Heading.Acquisition", i.Z.Navigation),
                [a.Z.CustomEvents]: (0, r.Bv)("Heading.CustomEvents", i.Z.Navigation),
                [a.Z.CreationOverview]: (0, r.Bv)("Heading.Overview", i.Z.Navigation),
                [a.Z.Monetization]: (0, r.Bv)("Heading.Monetization", i.Z.Analytics),
                [a.Z.Assistant]: (0, r.Bv)("Heading.Assistant", i.Z.Analytics)
            };
            t.Z = s
        },
        12399: function(e, t) {
            var n, i;
            (i = n || (n = {})).UserAcquisition = "UserAcquisition", i.Engagement = "Engagement", i.Retention = "Retention", i.Monetization = "Monetization", i.ItemMonetizationDeveloperProducts = "ItemMonetizationDeveloperProducts", i.ItemMonetizationPasses = "ItemMonetizationPasses", i.ItemMonetizationAvatarItems = "ItemMonetizationAvatarItems", i.ImmersiveAds = "ImmersiveAds", i.Subscriptions = "Subscriptions", i.MemoryStores = "MemoryStores", i.DataStores = "DataStores", i.EngagementBasedPayouts = "EngagementBasedPayouts", i.Performance = "Performance", i.ErrorReport = "ErrorReport", i.Audience = "Audience", i.RecommendedEventsEconomy = "RecommendedEventsEconomy", i.RecommendedEventsFunnels = "RecommendedEventsFunnels", i.Explore = "Explore", i.AvatarGenerations = "AvatarGenerations", i.CreationOverview = "CreationOverview", i.CustomEvents = "CustomEvents", i.Assistant = "Assistant", t.Z = n
        },
        69710: function(e, t, n) {
            n.d(t, {
                Bv: function() {
                    return r
                },
                IY: function() {
                    return a
                },
                hO: function() {
                    return i
                }
            });
            let i = e => {
                    let {
                        translate: t
                    } = e;
                    return (e, n) => {
                        let {
                            key: i
                        } = e;
                        return t(i, n)
                    }
                },
                a = e => {
                    let {
                        translateHTML: t
                    } = e;
                    return (e, n, i) => {
                        let {
                            key: a
                        } = e;
                        return t(a, n, i)
                    }
                },
                r = (e, t) => ({
                    key: e,
                    namespace: t
                })
        },
        18765: function(e, t, n) {
            n.d(t, {
                _R: function() {
                    return U
                },
                dw: function() {
                    return F
                },
                Qo: function() {
                    return L
                },
                xw: function() {
                    return R
                },
                ri: function() {
                    return H
                },
                xC: function() {
                    return a
                },
                ZP: function() {
                    return G
                }
            });
            var i, a, r = n(41057),
                s = n(77592),
                o = n(21535),
                l = n(89425),
                d = n(14578),
                c = n(19914),
                u = n(34081),
                m = n(69290),
                g = n(9036),
                p = n(67618),
                v = n(20134),
                h = n(21967),
                b = n(78349),
                y = n(28285),
                f = n(65887),
                A = n(34214),
                C = n(40373);
            let x = {
                    [C.R.GameshopItem]: A.DC.DevProduct,
                    [C.R.GamePass]: A.DC.GamePass,
                    [C.R.AffiliateFeeAvatar]: A.DC.AvatarCommission
                },
                Z = (0, f.N)("developer-analytics-aggregations"),
                w = new r.VK({
                    robloxSiteDomain: "roblox.com",
                    basePath: Z,
                    credentials: "include",
                    unifiedLogger: s.Z
                }),
                I = new o.J(w),
                P = new l.d(w),
                k = new d._(w),
                S = new c.q(w),
                E = new u.m(w),
                T = new m.J(w),
                N = new g.M(w),
                j = new p.i(w),
                M = new v.s(w),
                D = e => e || null;
            h.Ro.AgeGroup, h.Ro.AgeGroup, h.Ro.Locale, h.Ro.Locale, h.Ro.OperatingSystem, h.Ro.OperatingSystem, h.Ro.Platform, h.Ro.Platform, h.Ro.Country, h.Ro.Country, h.Ro.Gender, h.Ro.Gender, h.Ro.TopLocales, h.Ro.TopLocales, h.Ro.TopCountries, h.Ro.TopCountries, h.Ro.IsNewUser, h.Ro.IsNewUser, h.Ro.SessionTimeBucket, h.Ro.SessionTimeBucket;
            let U = {
                    [h.Ro.Product]: h.Ro.Product
                },
                L = {
                    [h.Ro.Product]: h.Ro.Product,
                    [h.Ro.RevenueSource]: h.Ro.RevenueSource
                };
            (i = a || (a = {})).OnboardInviteUsers = "OnboardInviteUsers", i.OnboardImproveCoreLoop = "OnboardImproveCoreLoop", i.OnboardRegularUpdates = "OnboardRegularUpdates";
            let F = { ...b.dw,
                ...a
            };
            y.oo.Arppu, y.oo.Arpu, y.oo.AveragePlayTime, y.oo.ConversionRate, y.oo.D1Retention, y.oo.D1Stickyness, y.oo.D30Retention, y.oo.D30Stickyness, y.oo.D7Retention, y.oo.D7Stickyness, y.oo.DailyActiveUsers, y.oo.EndToEndCvr, y.oo.MonthlyActiveUsers, y.oo.NewUsers, y.oo.PayingUsers, y.oo.QualifiedEndToEndCvr, y.oo.Robux, y.oo.TotalHours, y.oo.Visits, y.oo.W1Retention;
            let R = y.oo;
            y.oo.DailyActiveUsers, y.oo.NewUsers, y.oo.AveragePlayTime, y.oo.D1Retention, y.oo.Robux;
            let H = y.oo;
            var G = {
                getUniverseAnalyticsAggregations: e => I.universeAnalyticsAggregationsGetAggregations(e),
                getUniverseAnalyticsAggregationsMetadata: () => I.universeAnalyticsAggregationsGetMetadata(),
                getfeaturePermissionsGetFeaturePermission: e => k.featurePermissionsGetFeaturePermission(e),
                getfeaturePermissionsGetFeatureFlags: e => k.featurePermissionsGetFeatureFlags(e),
                getBenchmarksV2: e => S.benchmarkAggregationsGetBenchmarksV2(e),
                getSimilarBenchmarks: e => S.benchmarkAggregationsGetSimilarBenchmarksV2(e),
                getInsights: e => P.universeInsightsGetUniverseInsights(e),
                snoozeInsight: e => P.universeInsightsSnoozeInsightRaw(e),
                getAvatarItemDetails: e => E.avatarMonetizationDetailsGetTopAvatarItems({
                    ownerId: e.ownerId,
                    ownerType: e.ownerType,
                    avatarMonetizationDetailsGetTopAvatarItemsRequest: { ...e
                    }
                }).then(e => {
                    var t;
                    return { ...e,
                        values: null == e ? void 0 : null === (t = e.values) || void 0 === t ? void 0 : t.map(e => ({ ...e,
                            targetType: D(e.targetType)
                        }))
                    }
                }),
                getAvatarItemMetrics: e => T.avatarMonetizationMetricsQueryMetric({
                    ownerId: e.ownerId,
                    ownerType: e.ownerType,
                    avatarMonetizationMetricsQueryMetricRequest: { ...e
                    }
                }),
                getAnalyticsHomeTabOrder: e => N.analyticsHomeGetAnalyticsHomeTabOrder(e),
                getItemMonetizationDetails: e => j.monetizationDetailsGetTopItems({
                    universeId: e.universeId,
                    monetizationDetailsGetTopItemsRequest: { ...e,
                        monetizationDetailType: x[e.productType]
                    }
                }).then(e => {
                    var t, n;
                    return { ...e,
                        values: null !== (n = null == e ? void 0 : null === (t = e.values) || void 0 === t ? void 0 : t.map(e => ({ ...e,
                            targetType: D(e.targetType)
                        }))) && void 0 !== n ? n : null
                    }
                }),
                getMonetizationMetricsV2(e) {
                    let {
                        universeId: t
                    } = e;
                    return M.monetizationMetricsControllerV2QueryMetric({
                        universeId: t,
                        monetizationMetricsControllerV2QueryMetricRequest: e
                    })
                }
            }
        },
        40373: function(e, t, n) {
            var i, a;
            n.d(t, {
                R: function() {
                    return i
                }
            }), (a = i || (i = {})).Total = "Total", a.GamePass = "GamePass", a.PrivateServer = "PrivateServer", a.GameshopItem = "GameshopItem", a.PayToPlay = "PayToPlay", a.AffiliateFeeGamePass = "AffiliateFeeGamePass", a.AffiliateFeeAvatar = "AffiliateFeeAvatar"
        },
        86531: function(e, t, n) {
            var i = n(41057),
                a = n(77592),
                r = n(14999);
            let s = (0, n(65887).N)("asset-permissions-api"),
                o = new i.VK({
                    robloxSiteDomain: "roblox.com",
                    basePath: s,
                    credentials: "include",
                    unifiedLogger: a.Z
                }),
                l = new r.V(o);
            t.Z = {
                async batchCheckAssetPermissions(e) {
                    let t = {
                        requests: e.map(e => ({
                            action: e.permissionType,
                            assetId: e.assetId,
                            subject: {
                                subjectId: e.subjectId,
                                subjectType: e.subject
                            }
                        }))
                    };
                    return (await l.assetPermissionsBatchCheckAssetPermissions({
                        assetPermissionsBatchCheckAssetPermissionsRequest: t
                    })).results
                },
                getAssetPermissions: async e => (await l.assetPermissionsGetAssetPermissions({
                    assetId: e
                })).results,
                grantAssetPermissions(e, t) {
                    let n = {
                        assetId: e
                    };
                    return t && (n.assetPermissionsRevokeAssetPermissionsRequest = {
                        requests: t
                    }), l.assetPermissionsGrantAssetPermissions(n)
                },
                listUniverseAssetPermissions: (e, t, n) => l.assetPermissionsListUniverseAssetPermissions({
                    universeId: e,
                    maxPageSize: t,
                    pageToken: n
                }),
                batchGrantAssetPermissions: (e, t, n, i) => l.assetPermissionsBatchGrantPermissions({
                    assetPermissionsBatchGrantPermissionsRequest: {
                        assetIds: e,
                        subjectId: n,
                        subjectType: t,
                        action: i
                    }
                }),
                revokeAssetPermissions(e, t) {
                    let n = {
                        assetId: e
                    };
                    return t && (n.assetPermissionsRevokeAssetPermissionsRequest = {
                        requests: t
                    }), l.assetPermissionsRevokeAssetPermissions(n)
                },
                getCreatorPermissionSettings: async e => await l.assetPermissionsGetUserSettings({
                    userId: e
                }),
                updateCreatorPermissionSettings: async (e, t) => l.assetPermissionsUpdateUserSettings({
                    userId: e,
                    assetPermissionsUpdateUserSettingsRequest: t
                })
            }
        },
        20112: function(e, t, n) {
            var i = n(41057),
                a = n(77592),
                r = n(13417),
                s = n(34395),
                o = n(65887),
                l = n(80689);
            let d = (0, o.G)("badges"),
                c = new i.VK({
                    robloxSiteDomain: "roblox.com",
                    basePath: d,
                    credentials: "include",
                    unifiedLogger: a.Z,
                    enableBoundAuthToken: !0,
                    boundAuthTokenLoadTimeout: 6e3,
                    boundAuthTokenDataTimeout: 3e3
                }),
                u = new r.jP(c);
            t.ZP = {
                async getBadges(e, t, n, i, a) {
                    let s = {
                            universeId: e,
                            sortOrder: t && r.Yo[t],
                            limit: n,
                            cursor: i,
                            sortBy: a
                        },
                        o = await u.v1UniversesUniverseIdBadgesGet(s);
                    return { ...o,
                        data: o.data ? o.data.filter(e => ![e.id, e.name].includes(void 0)) : []
                    }
                },
                getBadgeDetails: e => u.v1BadgesBadgeIdGet({
                    badgeId: e
                }),
                async patchBadgeDetails(e, t, n, i) {
                    try {
                        await u.v1BadgesBadgeIdPatch({
                            badgeId: e,
                            request: {
                                name: t,
                                description: i,
                                enabled: n
                            }
                        })
                    } catch (t) {
                        let e = await (0, l.Z)(t);
                        if (e) throw new s.Z(e.code, e.message);
                        throw t
                    }
                },
                getBadgesMetadata: () => u.v1BadgesMetadataGet(),
                getFreeBadgesQuota: e => u.v1UniversesUniverseIdFreeBadgesQuotaGet({
                    universeId: e
                }),
                async postNewBadge(e, t, n, i, a, o, d) {
                    try {
                        let s;
                        if (i && !(s = r.Kx[i])) throw Error("Invalid payment source type");
                        let l = {
                            universeId: e,
                            requestName: t,
                            requestDescription: n,
                            requestPaymentSourceType: s,
                            requestExpectedCost: a,
                            requestIsActive: o,
                            requestFiles: d
                        };
                        return await u.v1UniversesUniverseIdBadgesPost(l)
                    } catch (t) {
                        let e = await (0, l.Z)(t);
                        if (e) throw new s.Z(e.code, e.message);
                        throw t
                    }
                },
                async updateBadgesOrder(e, t) {
                    try {
                        return await u.v1UniversesUniverseIdBadgesPatch({
                            universeId: e,
                            request: {
                                orderingBins: t
                            }
                        })
                    } catch (t) {
                        let e = await (0, l.Z)(t);
                        if (e) throw new s.Z(e.code, e.message);
                        throw t
                    }
                },
                getIsUniverseEnrolledInBadgesReordering: e => u.v1UniversesUniverseIdBadgesIsAuthorizedToReorderGet({
                    universeId: e
                })
            }
        },
        13984: function(e, t, n) {
            var i = n(65887),
                a = n(41057),
                r = n(77592),
                s = n(35871);
            class o {
                async listCommerceItems(e, t, n, i) {
                    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 10;
                    return this.commerceApi.commerceListCommerceItems({
                        experienceId: e,
                        merchantType: t,
                        ownerType: n,
                        cursor: i,
                        limit: a
                    })
                }
                async createCommerceItem(e, t, n) {
                    return this.commerceApi.commerceCreateCommerceItem({
                        experienceId: e,
                        commerceCreateCommerceItemRequest: {
                            merchantType: t,
                            merchantItemId: n
                        }
                    })
                }
                async archiveCommerceItem(e, t) {
                    return this.commerceApi.commerceArchiveCommerceItem({
                        experienceId: e,
                        commerceItemId: t
                    })
                }
                async listCommerceProducts(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                    return this.commerceApi.commerceListCommerceProducts({
                        experienceId: e,
                        cursor: t,
                        limit: n
                    })
                }
                async createCommerceProduct(e, t, n) {
                    return this.commerceApi.commerceCreateCommerceProduct({
                        experienceId: e,
                        commerceCreateCommerceProductRequest: {
                            commerceItemId: t,
                            commerceGrantables: n
                        }
                    })
                }
                async getVirtualBenefit(e, t, n) {
                    return this.commerceApi.commerceGetVirtualBenefit({
                        assetId: t,
                        experienceId: e,
                        benefitType: n
                    })
                }
                async updateCommerceProductStatus(e, t, n) {
                    return this.commerceApi.commerceUpdateCommerceProductStatus({
                        experienceId: e,
                        commerceProductId: t,
                        commerceUpdateCommerceProductStatusRequest: {
                            newStatus: n
                        }
                    })
                }
                async archiveCommerceProduct(e, t) {
                    return this.commerceApi.commerceArchiveCommerceProduct({
                        experienceId: e,
                        commerceProductId: t
                    })
                }
                async getCommerceExperienceConfiguration(e) {
                    return this.commerceApi.commerceGetCommerceExperienceConfiguration({
                        experienceId: e
                    })
                }
                constructor(e = (0, i.N)("commerce")) {
                    let t = new a.VK({
                        robloxSiteDomain: "roblox.com",
                        basePath: e,
                        credentials: "include",
                        unifiedLogger: r.Z
                    });
                    this.commerceApi = new s.j(t)
                }
            }
            let l = new o;
            t.ZP = l
        },
        79437: function(e, t, n) {
            n.d(t, {
                ZP: function() {
                    return P
                }
            });
            var i, a, r = n(41057),
                s = n(77592),
                o = n(3681),
                l = n(23847),
                d = n(23549),
                c = n(72839),
                u = n(49640),
                m = n(48959),
                g = n(84769),
                p = n(75641),
                v = n(86296),
                h = n(28866),
                b = n(23489),
                y = n(15249),
                f = n(91693),
                A = n(76922);
            (i = a || (a = {})).User = "User", i.Group = "Group", i.Team = "Team";
            var C = a,
                x = n(65887),
                Z = n(80689),
                w = n(34395);
            class I {
                async isUserEmailVerified() {
                    return !!(await this.userApi.v1UserIsVerifiedCreatorGet()).isVerifiedCreator
                }
                getGroups() {
                    return this.userApi.v1UserGroupsCanmanageGet()
                }
                getGroupsPlusManageItems() {
                    return this.userApi.v1UserGroupsCanmanagegamesoritemsGet()
                }
                getGroupUniverses(e, t, n, i, a) {
                    let r = {
                        groupId: e,
                        isArchived: t,
                        sortOrder: n && o.U4[n],
                        limit: i,
                        cursor: a
                    };
                    return this.groupsApi.v1GroupsGroupIdUniversesGet(r)
                }
                getUserUniverses(e, t, n, i) {
                    let a = {
                        isArchived: e,
                        sortOrder: t && l.gs[t],
                        limit: n,
                        cursor: i
                    };
                    return this.userApi.v1UserUniversesGet(a)
                }
                getStatMetadata() {
                    return this.statisticsApi.v1StatsCreatorDashboardMetadataGet()
                }
                getUniverseDetails(e) {
                    return this.universesApi.v1UniversesUniverseIdGet({
                        universeId: e
                    })
                }
                async getUniversesDetails(e) {
                    return 0 === e.length ? {
                        data: []
                    } : {
                        data: (await this.universesApi.v1UniversesMultigetGet({
                            ids: e
                        })).data || []
                    }
                }
                getUniversePermissions(e) {
                    return this.universesApi.v1UniversesUniverseIdPermissionsGet({
                        universeId: e
                    })
                }
                getPlaceMedia(e) {
                    return this.placesApi.v1PlacesPlaceIdMediaGet({
                        placeId: e
                    })
                }
                getPlacesOfUniverse(e, t, n, i) {
                    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return this.universesApi.v1UniversesUniverseIdPlacesGet({
                        universeId: e,
                        sortOrder: t,
                        limit: n,
                        cursor: i,
                        isUniverseCreation: a
                    })
                }
                getFilteredDevices(e) {
                    return this.placesApi.v1PlacesPlaceIdCompatibilitiesGet({
                        placeId: e
                    })
                }
                getLiveStats(e) {
                    return this.universesApi.v1UniversesUniverseIdLiveStatsGet({
                        universeId: e
                    })
                }
                getHistoricalData(e, t, n, i) {
                    return this.statisticsApi.v1PlacesPlaceIdStatsTypeGet({
                        placeId: e,
                        type: t,
                        granularity: n,
                        divisionType: i
                    })
                }
                getHistoricalDataAgeAvailable(e) {
                    return this.statisticsApi.v1PlacesPlaceIdStatsIsAgeDataAvailableGet({
                        placeId: e
                    })
                }
                getUniverseConfiguration(e) {
                    return this.universeSettingsApi.v1UniversesUniverseIdConfigurationGet({
                        universeId: e
                    })
                }
                getUniverseConfigurationV2(e) {
                    return this.universeSettingsApi.v1UniversesUniverseIdConfigurationGet({
                        universeId: e
                    })
                }
                setUniverseConfiguration(e, t) {
                    return this.universeSettingsApi.v1UniversesUniverseIdConfigurationPatch({
                        universeId: e,
                        model: {
                            isArchived: t
                        }
                    })
                }
                setUniverseConfigurationV2(e, t, n, i, a, r, s, o, l, d, c) {
                    return this.universeSettingsApiV2.v2UniversesUniverseIdConfigurationPatch({
                        universeId: e,
                        model: {
                            name: t,
                            description: n,
                            studioAccessToApisAllowed: i,
                            isMeshTextureApiAccessAllowed: a,
                            allowPrivateServers: r,
                            privateServerPrice: s,
                            isFriendsOnly: o,
                            playableDevices: l,
                            isForSale: d,
                            price: c
                        }
                    })
                }
                async shutDownAllServers(e) {
                    try {
                        await this.universesApiV2.v2UniversesUniverseIdShutdownPost({
                            universeId: e
                        })
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async archiveAsset(e) {
                    await this.assetsApi.v1AssetsAssetIdArchivePost({
                        assetId: e
                    })
                }
                async restoreAsset(e) {
                    await this.assetsApi.v1AssetsAssetIdRestorePost({
                        assetId: e
                    })
                }
                async activateGame(e) {
                    await this.universesApi.v1UniversesUniverseIdActivatePost({
                        universeId: e
                    })
                }
                async deactivateGame(e) {
                    await this.universesApi.v1UniversesUniverseIdDeactivatePost({
                        universeId: e
                    })
                }
                getDeveloperProductAggregationByTimeFrame(e, t) {
                    return this.statisticsApi.v1PlacesPlaceIdStatsDeveloperProductAggregationGet({
                        placeId: e,
                        timeFrame: d.QA[t]
                    })
                }
                searchUniverses(e, t, n, i, a, r, s, o, l) {
                    let d = "";
                    void 0 !== t && (d += t), void 0 !== i && (d += " archived:".concat(i ? "True" : "False")), void 0 !== a && (d += " active:".concat(a ? "True" : "False")), d += " creator:".concat(e), e === C.Group && void 0 !== n && (d += " groups:".concat(n));
                    let u = [];
                    if (void 0 !== r) {
                        let e = s === c.T1.Desc ? "-" : "+";
                        u.push(e + r)
                    }
                    return this.searchApi.v1SearchUniversesGet({
                        q: d,
                        sort: u,
                        sortOrder: s && c.T1[s],
                        limit: o,
                        cursor: l
                    })
                }
                async getAssetDetails(e) {
                    return 0 === e.length ? {
                        data: []
                    } : this.assetsApi.v1AssetsGet({
                        assetIds: e
                    })
                }
                async updateAsset(e, t) {
                    try {
                        await this.assetsApi.v1AssetsAssetIdPatch({
                            assetId: e,
                            request: t
                        })
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                getSocialLinkMetadata(e) {
                    return this.socialLinksApi.v1UniversesUniverseIdSocialLinksMetadataGet({
                        universeId: e
                    })
                }
                deleteSocialLink(e, t) {
                    return this.socialLinksApi.v1UniversesUniverseIdSocialLinksSocialLinkIdDelete({
                        universeId: e,
                        socialLinkId: t
                    })
                }
                saveSocialLink(e, t, n, i) {
                    return this.socialLinksApi.v1UniversesUniverseIdSocialLinksPost({
                        universeId: e,
                        request: {
                            type: t,
                            url: n,
                            title: i
                        }
                    })
                }
                updateSocialLink(e, t, n, i, a) {
                    return this.socialLinksApi.v1UniversesUniverseIdSocialLinksSocialLinkIdPatch({
                        universeId: e,
                        socialLinkId: t,
                        request: {
                            type: n,
                            url: i,
                            title: a
                        }
                    })
                }
                async getPlaceDetailInfo(e, t) {
                    try {
                        return this.placesApiV2.v2PlacesPlaceIdGet(e, t)
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async patchPlaceConfigurationInfo(e, t) {
                    try {
                        return this.placesApiV2.v2PlacesPlaceIdPatch(e, t)
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async uploadAutoGeneratedThumbnail(e) {
                    return this.thumbnailsApi.v1UniversesUniverseIdThumbnailsAutoGeneratedPost({
                        universeId: e
                    })
                }
                async uploadVideoThumbnail(e, t) {
                    return this.thumbnailsApi.v1UniversesUniverseIdThumbnailsVideoPost({
                        universeId: e,
                        request: {
                            url: t
                        }
                    })
                }
                async updateThumbnailAltText(e, t, n) {
                    return this.thumbnailsApi.v1UniversesUniverseIdThumbnailsAltTextPost({
                        universeId: e,
                        request: {
                            mediaAssetId: t,
                            mediaAssetAltText: n
                        }
                    })
                }
                async getGenresList(e) {
                    try {
                        return this.assetsApi.v1AssetsGenresGet(e)
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async setUniverseIcon(e, t) {
                    try {
                        await this.iconApi.v1UniversesUniverseIdIconPost({
                            universeId: e,
                            request: {
                                iconType: t
                            }
                        })
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async reorderThumbnails(e, t) {
                    return this.thumbnailsApi.v1UniversesUniverseIdThumbnailsOrderPost({
                        universeId: e,
                        request: {
                            thumbnailIds: t
                        }
                    })
                }
                async deleteThumbnail(e, t) {
                    return this.thumbnailsApi.v1UniversesUniverseIdThumbnailsThumbnailIdDelete({
                        universeId: e,
                        thumbnailId: t
                    })
                }
                async getUniverseConfigurationVIPServer(e, t) {
                    try {
                        return await this.universeSettingsApi.v1UniversesUniverseIdConfigurationVipServersGet({
                            universeId: e
                        }, t)
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async getAssetPublishedVersions(e, t, n, i) {
                    try {
                        return await this.assetsApi.v1AssetsAssetIdPublishedVersionsGet({
                            assetId: e,
                            sortOrder: t,
                            limit: n,
                            cursor: i
                        })
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async postAssetPublishedVersions(e, t) {
                    try {
                        return await this.assetsApi.v1AssetsAssetIdRevertVersionPost({
                            assetId: e,
                            assetVersionNumber: t
                        })
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async patchAssetConfiguration(e, t) {
                    try {
                        return await this.assetsApi.v1AssetsAssetIdPatch({
                            assetId: e,
                            request: t
                        })
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async getAssetSavedVersions(e, t, n, i) {
                    try {
                        return await this.assetsApi.v1AssetsAssetIdSavedVersionsGet({
                            assetId: e,
                            sortOrder: t,
                            limit: n,
                            cursor: i
                        })
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async postAssetRevertVersion(e, t) {
                    try {
                        return await this.assetsApi.v1AssetsAssetIdRevertVersionPost({
                            assetId: e,
                            assetVersionNumber: t
                        })
                    } catch (t) {
                        let e = await (0, Z.Z)(t);
                        if (e) throw new w.Z(e.code, e.message);
                        throw t
                    }
                }
                async getUserUniversePermissions(e) {
                    return this.universesApi.v1UniversesMultigetPermissionsGet({
                        ids: e
                    })
                }
                constructor(e = (0, x.G)("develop")) {
                    let t = new r.VK({
                        robloxSiteDomain: "roblox.com",
                        basePath: e,
                        credentials: "include",
                        unifiedLogger: s.Z
                    });
                    this.assetsApi = new u.lO(t), this.groupsApi = new o.wB(t), this.placesApi = new m._(t), this.searchApi = new c.Wq(t), this.statisticsApi = new d.LU(t), this.universesApi = new g.fv(t), this.universesApiV2 = new y.fv(t), this.universeSettingsApi = new p.l(t), this.universeSettingsApiV2 = new f.l(t), this.userApi = new l.Wj(t), this.socialLinksApi = new v.F(t), this.placesApiV2 = new A._(t), this.thumbnailsApi = new h.o(t), this.iconApi = new b.I(t)
                }
            }
            var P = new I
        },
        80977: function(e, t, n) {
            var i = n(41057),
                a = n(77592),
                r = n(81999);
            let s = (0, n(65887).N)("developer-ads-stats-api"),
                o = new i.VK({
                    robloxSiteDomain: "roblox.com",
                    basePath: s,
                    credentials: "include",
                    unifiedLogger: a.Z
                }),
                l = new r.M(o);
            t.ZP = l
        },
        34395: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            class i extends Error {
                constructor(e, t = "") {
                    super("Generic BEDEV1 Error"), this.code = e, this.message = t, Error.captureStackTrace && Error.captureStackTrace(this, i)
                }
            }
        },
        45258: function(e, t, n) {
            var i = n(41057),
                a = n(77592),
                r = n(99875),
                s = n(46061),
                o = n(57801),
                l = n(59970);
            let d = (0, n(65887).G)("games"),
                c = new i.VK({
                    robloxSiteDomain: "roblox.com",
                    basePath: d,
                    credentials: "include",
                    unifiedLogger: a.Z
                }),
                u = new r.l(c),
                m = new s.DX(c),
                g = new o.F(c),
                p = new l.K(c);
            t.ZP = {
                getDetails: e => u.v1GamesGet({
                    universeIds: e
                }),
                async getGamePasses(e, t, n, i) {
                    let a = {
                            universeId: e,
                            sortOrder: t && s.lm[t],
                            limit: n,
                            cursor: i
                        },
                        r = await m.v1GamesUniverseIdGamePassesGet(a);
                    return r.data ? { ...r,
                        data: r.data.filter(e => ![e.id, e.name].includes(void 0))
                    } : { ...r,
                        data: []
                    }
                },
                async getSocialLinks(e) {
                    var t, n;
                    let i = await g.v1GamesUniverseIdSocialLinksListGet({
                        universeId: e
                    });
                    return { ...i,
                        data: null !== (n = null === (t = i.data) || void 0 === t ? void 0 : t.filter(e => ![e.id, e.title, e.type, e.url].includes(void 0)).map(e => ({
                            linkId: e.id,
                            title: e.title,
                            url: e.url,
                            linkType: e.type
                        }))) && void 0 !== n ? n : []
                    }
                },
                getGameMedia: e => u.v1GamesUniverseIdMediaGet({
                    universeId: e
                }),
                multigetPlaceDetails: e => u.v1GamesMultigetPlaceDetailsGet({
                    placeIds: e
                }),
                multigetGameVotes: e => p.v1GamesVotesGet({
                    universeIds: e
                })
            }
        },
        10696: function(e, t, n) {
            n.d(t, {
                ZP: function() {
                    return w
                }
            });
            var i, a, r = n(41057),
                s = n(77592),
                o = n(95232),
                l = n(13477),
                d = n(54625),
                c = n(91929),
                u = n(44454),
                m = n(56209),
                g = n(27534),
                p = n(50437),
                v = n(77134),
                h = n(77012),
                b = n(8126),
                y = n(81296),
                f = n(80689),
                A = n(34395),
                C = n(65887);
            class x extends A.Z {
                constructor(e, t, n) {
                    super(t, n), this.httpStatus = e, this.code = t, this.message = n
                }
            }(i = a || (a = {}))[i.INVALID_FILE = 7] = "INVALID_FILE", i[i.ASSET_TEXT_MODERATED = 16] = "ASSET_TEXT_MODERATED";
            class Z {
                checkItemConfigurationAccess(e, t) {
                    let n = {
                        targetType: e ? o.$0.NUMBER_1 : o.$0.NUMBER_0,
                        targetId: t
                    };
                    return this.collectiblesApi.v1CollectiblesCheckItemConfigurationAccessGet(n)
                }
                checkItemPublishAccess(e, t, n) {
                    let i = {
                        targetType: e ? o.NA.NUMBER_1 : o.NA.NUMBER_0,
                        targetId: t,
                        publishingType: n ? o.VK.NUMBER_1 : o.VK.NUMBER_2
                    };
                    return this.collectiblesApi.v1CollectiblesCheckItemPublishAccessGet(i)
                }
                delistItem(e, t) {
                    let n = {
                        targetType: e ? l.s.NUMBER_1 : l.s.NUMBER_0,
                        targetId: t
                    };
                    return this.delistingApi.v1DelistItemPost(n)
                }
                getCollectiblesMetadata() {
                    return this.collectiblesApi.v1CollectiblesMetadataGet()
                }
                getDynamicPriceConfiguration(e) {
                    return this.collectiblesApi.v1CollectiblesItemConfigurationCollectibleItemIdGet({
                        collectibleItemId: e
                    })
                }
                getCollectibleItemId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = {
                            targetType: t ? o.yI.NUMBER_1 : o.yI.NUMBER_0,
                            id: e
                        };
                    return this.collectiblesApi.v1CollectiblesTargetTypeIdGet(n)
                }
                getCollectibleCommissionRates() {
                    return this.collectiblesApi.v1CollectiblesCommissionRatesGet()
                }
                getCollectiblePublishingMetadata() {
                    return this.collectiblesApi.v1CollectiblesMetadataGet()
                }
                getCollectiblePublishingFees(e, t, n, i, a, r, s) {
                    let l = {
                        targetType: e ? o.v8.NUMBER_1 : o.v8.NUMBER_0,
                        targetID: t,
                        quantity: n,
                        publishingType: 1 === i ? o.SQ.NUMBER_1 : o.SQ.NUMBER_2
                    };
                    return void 0 !== a && (l.saleLocation = a), void 0 !== r && (l.resaleRestriction = r ? o.YW.NUMBER_1 : o.YW.NUMBER_2), void 0 !== s && (l.isFree = s), this.collectiblesApi.v1CollectiblesPublishingFeesGet(l)
                }
                updateCollectibleItemDisplayInfo(e, t, n, i) {
                    let a = {
                        targetType: e ? d.pO.NUMBER_1 : d.pO.NUMBER_0,
                        targetId: t.toString(),
                        name: n,
                        description: i
                    };
                    return this.collectiblesApi.v1CollectiblesUpdateItemDisplayInformationPatch({
                        request: a
                    })
                }
                publishCollectible(e, t, n, i, a, r, s, o, l, d, u, m, g, p, v, h, b) {
                    let y = {
                        idempotencyToken: e,
                        targetId: t,
                        targetType: n ? c.rv.NUMBER_1 : c.rv.NUMBER_0,
                        publishingType: i ? c.qN.NUMBER_1 : c.qN.NUMBER_2,
                        agreedPublishingFee: a,
                        creatorUserId: r,
                        creatorGroupId: s,
                        publisherUserId: o,
                        quantity: l,
                        quantityLimitPerUser: d,
                        resaleRestriction: u ? c.Ko.NUMBER_1 : c.Ko.NUMBER_2,
                        priceInRobux: m,
                        priceOffset: g,
                        isFree: p,
                        saleLocationConfiguration: v,
                        name: h,
                        description: b
                    };
                    return this.collectiblesApi.v1CollectiblesPost({
                        request: y
                    })
                }
                updateCollectibleInformation(e, t, n, i, a, r, s, o) {
                    let l = {
                        saleLocationConfiguration: t,
                        saleStatus: n ? u.dt.NUMBER_0 : u.dt.NUMBER_1,
                        quantityLimitPerUser: i,
                        resaleRestriction: a ? u.Zl.NUMBER_1 : u.Zl.NUMBER_2,
                        priceInRobux: r,
                        priceOffset: s,
                        isFree: o
                    };
                    return this.collectiblesApi.v1CollectiblesCollectibleItemIdPatch({
                        collectibleItemId: e,
                        updateCollectibleItemRequest: l
                    })
                }
                getCreations(e, t, n, i, a) {
                    return this.itemConfigurationApi.v1CreationsGetAssetsGet({
                        assetType: e,
                        isArchived: t,
                        groupId: n,
                        limit: i,
                        cursor: a
                    })
                }
                getBundlesByUser(e, t, n, i) {
                    let a = {
                        limit: e
                    };
                    return t && (a.bundleType = t), n && (a.avatarCreationTokenId = n), i && (a.cursor = i), this.bundlesApi.v1BundlesGet(a)
                }
                getBundleMetadata() {
                    return this.bundlesApi.v1BundlesMetadataGet()
                }
                getBundleById(e) {
                    return this.bundlesApi.v1BundlesBundleIdGet({
                        bundleId: e
                    })
                }
                async releaseBundle(e, t) {
                    try {
                        return await this.bundlesApi.v1BundlesBundleIdReleasePost({
                            bundleId: e,
                            request: {
                                price: t
                            }
                        })
                    } catch (t) {
                        let e = await (0, f.Z)(t);
                        if (e) throw new A.Z(e.code, e.message);
                        throw t
                    }
                }
                async unreleaseBundle(e) {
                    try {
                        return await this.bundlesApi.v1BundlesBundleIdUnreleasePost({
                            bundleId: e
                        })
                    } catch (t) {
                        let e = await (0, f.Z)(t);
                        if (e) throw new A.Z(e.code, e.message);
                        throw t
                    }
                }
                async updateBundleDisplayInformation(e, t, n) {
                    try {
                        return await this.bundlesApi.v1BundlesBundleIdUpdateDisplayInformationPost({
                            bundleId: e,
                            request: {
                                name: t,
                                description: n
                            }
                        })
                    } catch (t) {
                        let e = await (0, f.Z)(t);
                        if (e) throw new A.Z(e.code, e.message);
                        throw t
                    }
                }
                async updateBundleSaleInformation(e, t) {
                    try {
                        return await this.bundlesApi.v1BundlesBundleIdUpdateSaleInformationPost({
                            bundleId: e,
                            request: {
                                price: t
                            }
                        })
                    } catch (t) {
                        let e = await (0, f.Z)(t);
                        if (e) throw new A.Z(e.code, e.message);
                        throw t
                    }
                }
                async getAssetUploadFee(e, t, n, i, a, r) {
                    let s = m.jQ[e],
                        o = new Blob([JSON.stringify({
                            name: n,
                            description: i,
                            creatorId: a,
                            creatorType: r
                        })], {
                            type: "application/json"
                        });
                    try {
                        return await this.avatarAssetsUploadApi.v1AvatarAssetsAssetTypeGetUploadFeePost({
                            assetType: s,
                            content: t,
                            config: o
                        })
                    } catch (t) {
                        let e = await (0, f.Z)(t);
                        if (e) throw new x(e.status, e.code, e.message);
                        throw t
                    }
                }
                getDetails(e) {
                    return this.itemConfigurationApi.v1CreationsGetAssetDetailsPost({
                        request: {
                            assetIds: e
                        }
                    })
                }
                getMetadata(e, t) {
                    let n = t ? g.WY.Group : g.WY.User;
                    return this.itemConfigurationApi.v1MetadataGet({
                        ipOwnerId: e,
                        ipOwnerType: n
                    })
                }
                getItemTagsForItems(e) {
                    return this.itemTagsConfigurationApi.v1ItemTagsGet({
                        itemIds: e
                    })
                }
                removeItemTagFromItem(e) {
                    return this.itemTagsConfigurationApi.v1ItemTagsItemTagIdDelete({
                        itemTagId: e
                    })
                }
                addItemTagToItem(e, t) {
                    return this.itemTagsConfigurationApi.v1ItemTagsPost({
                        request: {
                            itemId: e,
                            tagId: t
                        }
                    })
                }
                getTagsByPrefix(e, t) {
                    return this.tagsConfigurationApi.v1TagsPrefixSearchGet({
                        prefix: e,
                        numberOfResults: t
                    })
                }
                getHistoricalData(e, t, n, i, a) {
                    let r = {
                        assetId: e,
                        granularity: t,
                        dataType: n,
                        startTime: i ? new Date(i) : void 0,
                        endTime: a ? new Date(a) : void 0
                    };
                    return this.statisticsApi.v1AssetsAssetIdStatsGet(r)
                }
                async updateAssetPrice(e, t, n, i, a) {
                    try {
                        return await this.itemConfigurationReleaseApi.v1AssetsAssetIdUpdatePricePost({
                            assetId: e,
                            updatePriceForAssetRequest: {
                                priceConfiguration: {
                                    priceInRobux: t,
                                    premiumDiscountPercentage: n,
                                    premiumPriceInRobux: i,
                                    priceOffset: a
                                }
                            }
                        })
                    } catch (t) {
                        let e = await (0, f.Z)(t);
                        if (e) throw new A.Z(e.code, e.message);
                        throw t
                    }
                }
                async releaseAsset(e, t, n, i, a, r, s) {
                    try {
                        return await this.itemConfigurationReleaseApi.v1AssetsAssetIdReleasePost({
                            assetId: e,
                            releaseAssetRequest: {
                                priceConfiguration: {
                                    priceInRobux: n,
                                    premiumDiscountPercentage: i,
                                    premiumPriceInRobux: a,
                                    priceOffset: r
                                },
                                saleStatus: t,
                                releaseConfiguration: s
                            }
                        })
                    } catch (t) {
                        let e = await (0, f.Z)(t);
                        if (e) throw new A.Z(e.code, e.message);
                        throw t
                    }
                }
                getSellingFee(e) {
                    return this.itemConfigurationReleaseApi.v1AssetsAssetIdGetSellingFeeGet({
                        assetId: e
                    })
                }
                getCommissionRate(e) {
                    return this.itemConfigurationApi.v1GetCommissionRatesGet(e)
                }
                postAssetPrice(e, t, n) {
                    return this.itemConfigurationReleaseApi.v1AssetsAssetIdReleasePost({
                        assetId: e,
                        releaseAssetRequest: {
                            price: t,
                            priceConfiguration: {
                                priceInRobux: t
                            },
                            saleStatus: n
                        }
                    })
                }
                updateSaleLocation(e, t) {
                    return this.itemConfigurationReleaseApi.v1AssetsAssetIdUpdatePost({
                        assetId: e,
                        updateAssetRequest: t
                    })
                }
                constructor(e = (0, C.G)("itemconfiguration")) {
                    let t = new r.VK({
                        robloxSiteDomain: "roblox.com",
                        basePath: e,
                        credentials: "include",
                        unifiedLogger: s.Z
                    });
                    this.bundlesApi = new p.f(t), this.collectiblesApi = new o._L(t), this.delistingApi = new l.X(t), this.itemConfigurationApi = new g.rj(t), this.itemTagsConfigurationApi = new v.P(t), this.tagsConfigurationApi = new h.v(t), this.itemConfigurationReleaseApi = new b.o(t), this.statisticsApi = new y.LU(t), this.avatarAssetsUploadApi = new m.tw(t)
                }
            }
            var w = new Z
        },
        89481: function(e, t, n) {
            n.d(t, {
                Q7: function() {
                    return p
                },
                ky: function() {
                    return v
                },
                eV: function() {
                    return h
                },
                Jb: function() {
                    return Z
                },
                ox: function() {
                    return w
                }
            });
            var i, a, r, s, o, l, d, c, u, m, g, p, v, h, b, y = n(65887);

            function f(e, t) {
                return e.every((e, n) => e === t[n])
            }
            var A = n(53035);
            (i = d || (d = {})).ShowVrDeviceOption = "showVrDeviceOption", i.ShowIXPClientTest = "showIXPClientTest", i.ShowMemoryStoresDashboard = "showMemoryStoresDashboard", i.ShowAdvancedSettingsPage = "showAdvancedSettingsPage", i.EnableIA = "enableIA", i.EnableSubscriptionActivationTest = "enableSubscriptionActivationTest", i.EnableDevexEarnedRobux = "enableDevexEarnedRobux", i.EnableExperienceGenre = "enableExperienceGenre", i.EnableExperienceEventsM3 = "enableExperienceEventsM3", (a = c || (c = {})).EnableRightsManager = "enableRightsManager", a.EnableBulkFiling = "enableBulkFiling", a.EnableOnDemandSearch = "enableOnDemandSearch", a.EnableEditRegistration = "enableEditRegistration", a.EnableImageSearch = "enableImageSearch", a.EnableClaimsAndDisputes = "enableClaimsAndDisputes", (r = u || (u = {})).enableTour = "enableTour", r.enableVideoOnboarding = "enableVideoOnboarding", m || (m = {}), (g || (g = {})).EnableIA = "enableIA", (s = p || (p = {})).IsOrganizationsEnabled = "isOrganizationsEnabled", s.IsOrganizationsPayoutsEnabled = "isOrganizationsPayoutsEnabled", (o = v || (v = {})).CreatorDashboard = "CreatorDashboard", o.CreatorHubHomePage = "CreatorHub.HomePage.UserId", o.CreatorHubLandingPage = "CreatorHub.LandingPage", o.CreatorHubNavigationUser = "CreatorHub.Navigation.User", o.CreatorSuccessOrganizations = "CreatorSuccess.Organizations", o.RightsManager = "CreatorDashboard.RightsManager", (h || (h = {})).CreatorDashboardUniverses = "CreatorDashboardUniverses", (l = b || (b = {})).ShowMemoryStoresDashboard = "showMemoryStoresDashboard", l.EnableSubscriptionActivationTest = "enableSubscriptionActivationTest", l.ShowSecrets = "showSecrets", l.ShowQualitySignalCards = "showQualitySignalCards";
            let C = {
                CreatorDashboard: d,
                "CreatorHub.HomePage.UserId": u,
                "CreatorHub.LandingPage": m,
                "CreatorHub.Navigation.User": g,
                "CreatorSuccess.Organizations": p,
                "CreatorDashboard.RightsManager": c
            };
            async function x(e) {
                let t = (0, y.N)("product-experimentation-platform"),
                    n = Object.values(C[e]).join(","),
                    i = "".concat(t, "/v1/projects/1/layers/").concat(e, "/values?parameters=").concat(n);
                return (await fetch(i, {
                    credentials: "include"
                })).json()
            }
            let Z = (0, A.Z)(x),
                w = function(e, t) {
                    let n = null != t ? t : f,
                        i = [],
                        a = function() {
                            for (var t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                            let s = i.find(e => {
                                let [t] = e;
                                return n(t, a)
                            });
                            if (s) return s[1];
                            let o = e(...a);
                            return i.push([a, o]), o
                        };
                    return a.reset = () => {
                        i.splice(0, i.length)
                    }, a
                }(async function(e, t) {
                    let n = (0, y.N)("product-experimentation-platform"),
                        i = await fetch("".concat(n, "/v1/projects/1/values"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                layers: {
                                    [e]: {
                                        universeid: t
                                    }
                                }
                            }),
                            credentials: "include"
                        }),
                        {
                            layers: a
                        } = await i.json(),
                        {
                            parameters: r
                        } = a[e];
                    return r
                })
        },
        78386: function(e, t, n) {
            var i = n(41057),
                a = n(77592),
                r = n(70995);
            let s = (0, n(65887).N)("price-experimentation-api"),
                o = new i.VK({
                    robloxSiteDomain: "roblox.com",
                    basePath: s,
                    credentials: "include",
                    unifiedLogger: a.Z
                }),
                l = new r.w(o);
            t.Z = l
        },
        95516: function(e, t, n) {
            n.d(t, {
                dg: function() {
                    return h
                },
                jY: function() {
                    return i
                }
            });
            var i, a = n(41057),
                r = n(77592),
                s = n(12448),
                o = n(47106),
                l = n(68075),
                d = n(96980),
                c = n(24793),
                u = n(38543),
                m = n(34395),
                g = n(65887),
                p = n(80689);
            let v = (0, g.G)("publish");
            (i || (i = {})).Month = "Month";
            let h = {
                    Month: "30"
                },
                b = new a.VK({
                    robloxSiteDomain: "roblox.com",
                    basePath: v,
                    credentials: "include",
                    unifiedLogger: r.Z
                }),
                y = new s.j(b),
                f = new o.o(b),
                A = new l.o(b),
                C = new d.m(b),
                x = new c.E(b),
                Z = new u.C(b);
            t.ZP = {
                async patchBadgeIcon(e, t) {
                    try {
                        return await y.v1BadgesBadgeIdIconPost({
                            badgeId: e,
                            requestFiles: t
                        })
                    } catch (t) {
                        let e = await (0, p.Z)(t);
                        if (e) throw new m.Z(e.code, e.message);
                        throw t
                    }
                },
                async patchPluginIcon(e, t) {
                    try {
                        return await x.v1PluginsPluginIdIconPost({
                            pluginId: e,
                            requestFiles: t
                        })
                    } catch (t) {
                        let e = await (0, p.Z)(t);
                        if (e) throw new m.Z(e.code, e.message);
                        throw t
                    }
                },
                uploadThumbnailImage: async (e, t) => f.v1GamesGameIdThumbnailImagePost({
                    gameId: e,
                    requestFiles: t
                }),
                async patchUniverseIcon(e, t) {
                    try {
                        return await A.v1GamesGameIdIconPost({
                            gameId: e,
                            requestFiles: t
                        })
                    } catch (t) {
                        let e = await (0, p.Z)(t);
                        if (e) throw new m.Z(e.code, e.message);
                        throw t
                    }
                },
                async getAssetQuotas(e, t) {
                    try {
                        return await C.v1AssetQuotasGet({
                            resourceType: e,
                            assetType: t
                        })
                    } catch (t) {
                        let e = await (0, p.Z)(t);
                        if (e) throw new m.Z(e.code, e.message);
                        throw t
                    }
                },
                async getAssetMedia(e) {
                    try {
                        return await Z.v1AssetsAssetIdMediaGet({
                            assetId: e
                        })
                    } catch (t) {
                        let e = await (0, p.Z)(t);
                        if (e) throw new m.Z(e.code, e.message);
                        throw t
                    }
                },
                async postAssetMedia(e, t) {
                    try {
                        return await Z.v1AssetsAssetIdMediaPost({
                            assetId: e,
                            requestFiles: t
                        })
                    } catch (t) {
                        let e = await (0, p.Z)(t);
                        if (e) throw new m.Z(e.code, e.message);
                        throw t
                    }
                },
                async deleteAssetMedia(e, t) {
                    try {
                        await Z.v1AssetsAssetIdMediaMediaAssetIdDelete({
                            assetId: e,
                            mediaAssetId: t
                        })
                    } catch (t) {
                        let e = await (0, p.Z)(t);
                        if (e) throw new m.Z(e.code, e.message);
                        throw t
                    }
                },
                async postOrderAssetMedia(e, t) {
                    try {
                        await Z.v1AssetsAssetIdMediaOrderPost({
                            assetId: e,
                            mediaAssetIds: t
                        })
                    } catch (t) {
                        let e = await (0, p.Z)(t);
                        if (e) throw new m.Z(e.code, e.message);
                        throw t
                    }
                }
            }
        },
        18245: function(e, t, n) {
            var i = n(41057),
                a = n(77592),
                r = n(76972),
                s = n(48770),
                o = n(1715),
                l = n(65887);
            class d {
                createDocument(e) {
                    return this.rightsApi.createDocument({
                        createDocumentRequest: {
                            name: e
                        }
                    })
                }
                createSearchImage() {
                    return this.rightsApi.createSearchImage()
                }
                getAccount(e) {
                    return this.rightsApi.getAccount({
                        accountId: e
                    })
                }
                getCurrentAccount() {
                    return this.rightsApi.getCurrentAccount({
                        associatedEntityId: "",
                        associatedEntityType: "RobloxUser"
                    })
                }
                getCurrentAccountDetails() {
                    return this.rightsApi.getCurrentAccountDetails({
                        associatedEntityId: "",
                        associatedEntityType: "RobloxUser"
                    })
                }
                checkAssetPermissions(e) {
                    return this.rightsApi.checkAssetPermissions({
                        checkAssetPermissionsRequest: {
                            assetIds: e
                        }
                    })
                }
                checkAssetType(e) {
                    return this.rightsApi.checkAssetType({
                        checkAssetTypeRequest: {
                            assetIds: e
                        }
                    })
                }
                checkAge() {
                    return this.rightsApi.checkAge()
                }
                checkContentPermissions(e, t) {
                    return this.rightsApi.checkContentPermissions({
                        checkContentPermissionsRequest: {
                            contentType: t,
                            contentIds: e
                        }
                    })
                }
                listAccounts(e, t, n) {
                    return this.rightsApi.listAccounts({
                        namePrefix: e,
                        pageSize: null != t ? t : 10,
                        pageToken: n
                    })
                }
                applyAccount(e, t) {
                    return this.rightsApi.applyAccount({
                        applyAccountRequest: {
                            account: e,
                            user: t
                        }
                    })
                }
                updateAccount(e) {
                    if (!e.id) throw Error("The given account must have an id");
                    let t = {
                        accountId: e.id,
                        account: e
                    };
                    return this.rightsApi.updateAccount(t)
                }
                deleteAccount(e) {
                    return this.rightsApi.deleteAccount({
                        accountId: e
                    })
                }
                getEligibility() {
                    return this.rightsApi.eligibility()
                }
                getClaim(e, t) {
                    return this.rightsApi.getClaim({
                        accountId: e,
                        claimId: t
                    })
                }
                getClaimItem(e, t, n) {
                    return this.rightsApi.getClaimItem({
                        accountId: e,
                        claimId: t,
                        claimItemId: n
                    })
                }
                getIncomingClaimItem(e, t) {
                    return this.rightsApi.getIncomingClaimItem({
                        accountId: e,
                        claimItemId: t
                    })
                }
                listClaims(e, t, n) {
                    return this.rightsApi.listClaims({
                        accountId: e,
                        pageSize: null != t ? t : 10,
                        pageToken: n
                    })
                }
                listIncomingClaimItems(e, t) {
                    return this.rightsApi.listIncomingClaimItems({
                        accountId: e,
                        contentGrouped: t
                    }).then(e => e)
                }
                listClaimItemsByAccount(e, t, n) {
                    return this.rightsApi.listClaimItemsByAccount({
                        accountId: e,
                        pageSize: t,
                        pageToken: n
                    })
                }
                listClaimItems(e, t) {
                    return this.rightsApi.listClaimItems({
                        accountId: e,
                        claimId: t
                    })
                }
                listClaimItemsByContent(e, t, n) {
                    return this.rightsApi.listClaimItemsByContent({
                        accountId: e,
                        contentType: t,
                        contentId: n
                    })
                }
                createClaim(e, t, n, i, a) {
                    let s = {
                        accountId: e,
                        claim: {
                            accountId: e,
                            userId: t,
                            description: n,
                            documentIds: i,
                            status: r.LN.Creating,
                            claimItems: a
                        }
                    };
                    return this.rightsApi.createClaim(s)
                }
                createClaimItem(e, t, n, i, a, r, o) {
                    let l = {
                        accountId: e,
                        claimId: t,
                        claimItem: {
                            source: o,
                            claimId: t,
                            contents: r,
                            originalDocumentIds: n,
                            notes: i,
                            status: s.uf.Pending,
                            ...a && {
                                content: a
                            }
                        }
                    };
                    return this.rightsApi.createClaimItem(l)
                }
                acceptClaimItem(e, t, n) {
                    return this.rightsApi.acceptClaimItem({
                        accountId: e,
                        claimId: t,
                        claimItemId: n
                    })
                }
                dropClaimItem(e, t, n) {
                    return this.rightsApi.dropClaimItem({
                        accountId: e,
                        claimId: t,
                        claimItemId: n
                    })
                }
                submitClaim(e, t) {
                    return this.rightsApi.submitClaim({
                        accountId: e,
                        claimId: t
                    })
                }
                getDisputeByClaimItem(e, t) {
                    return this.rightsApi.getDisputeByClaimItem({
                        accountId: e,
                        claimItemId: t
                    })
                }
                disputeClaimItem(e, t, n, i) {
                    return this.rightsApi.disputeClaimItem({
                        accountId: e,
                        claimId: t,
                        claimItemId: n,
                        disputeClaimItemRequest: i
                    })
                }
                escalateClaimItem(e, t, n, i) {
                    return this.rightsApi.escalateClaimItem({
                        accountId: e,
                        claimId: t,
                        claimItemId: n,
                        escalateClaimItemRequest: i
                    })
                }
                search(e, t, n, i, a, r) {
                    let s = {
                        searchRequest: {
                            filter: r ? 'search_source = "'.concat(a, '" AND search_category = "').concat(r, '"') : 'search_source= "'.concat(a, '"'),
                            query: {
                                text: t,
                                imageId: n
                            },
                            pageToken: i,
                            type: e
                        }
                    };
                    return this.rightsApi.search(s)
                }
                constructor(e = (0, l.N)("rights-management-api/rights/v1")) {
                    let t = new i.VK({
                        robloxSiteDomain: "roblox.com",
                        basePath: e,
                        credentials: "include",
                        unifiedLogger: a.Z
                    });
                    this.rightsApi = new o.M2(t)
                }
            }
            let c = new d;
            t.Z = c
        },
        6919: function(e, t, n) {
            var i = n(65887),
                a = n(41057),
                r = n(77592),
                s = n(69468);
            let o = new a.VK({
                    robloxSiteDomain: "roblox.com",
                    basePath: (0, i.N)("service-efficiency-api"),
                    credentials: "include",
                    unifiedLogger: r.Z
                }),
                l = new s.a(o);
            t.Z = l
        },
        66691: function(e, t, n) {
            n.d(t, {
                OL: function() {
                    return m
                },
                Z2: function() {
                    return c
                }
            });
            var i = n(42654),
                a = n(41057),
                r = n(77592),
                s = n(50778),
                o = n(10982),
                l = n(83212),
                d = n(65887);
            let c = 30,
                u = {
                    [i.Z.Model]: s.a9.Model,
                    [i.Z.Plugin]: s.a9.Plugin
                },
                m = {
                    3: i.Z.Audio,
                    10: i.Z.Model,
                    13: i.Z.Decal,
                    38: i.Z.Plugin,
                    40: i.Z.MeshPart,
                    62: i.Z.Video
                };
            class g {
                async getItemDetails(e) {
                    return {
                        items: (await this.toolboxServiceApi.toolboxServiceGetItemsDetails({
                            assetIds: e.join(",")
                        })).data || []
                    }
                }
                async getCreatorInsightTable(e) {
                    return this.toolboxServiceApi.toolboxServiceGetCreatorInsights({
                        assetType: e
                    })
                }
                async getCreations(e, t, n, i, a, r) {
                    return n ? this.toolboxServiceApi.toolboxServiceGetCreationAssets({
                        ownerId: n,
                        assetType: u[t],
                        limit: i,
                        cursor: a,
                        separateModelsAndPackages: r
                    }) : this.toolboxServiceApi.toolboxServiceGetUserCreationAssets({
                        userId: e,
                        assetType: u[t],
                        limit: i,
                        cursor: a
                    })
                }
                async getMarketplaceAssets(e) {
                    return this.toolboxServiceApi.toolboxServiceGetMarketplaceAssets(e)
                }
                getFrontendFlagsValues(e) {
                    return this.frontendFlagsApi.frontendFlagsGetValues(e)
                }
                constructor(e = (0, d.N)("toolbox-service")) {
                    let t = new a.VK({
                        robloxSiteDomain: "roblox.com",
                        basePath: e,
                        credentials: "include",
                        unifiedLogger: r.Z
                    });
                    this.frontendFlagsApi = new o.n(t), this.toolboxServiceApi = new l.F(t)
                }
            }
            let p = new g;
            t.ZP = p
        },
        53035: function(e, t) {
            t.Z = function(e) {
                let t = new Map;
                return n => {
                    if (t.has(n)) return t.get(n);
                    let i = e(n);
                    return t.set(n, i), i
                }
            }
        },
        80689: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var i = n(79166);
            async function a(e) {
                try {
                    let t = (0, i.Z)(e);
                    if (t) {
                        let e = await t.json();
                        if (e.errors.length > 0) {
                            let n = e.errors[0];
                            if (n) return {
                                status: t.status,
                                code: n.code,
                                message: n.message
                            }
                        }
                    }
                    return null
                } catch (e) {
                    return null
                }
            }
        },
        6153: function(e, t, n) {
            let i = (0, n(2784).createContext)({
                assetDetails: void 0,
                itemConfigurationDetails: void 0,
                itemOriginalTagDetails: void 0,
                isLoadingAsset: !1,
                refreshAssetDetails: () => {
                    throw Error("function is not implemented")
                },
                assetSalesData: void 0,
                collectiblesMetadata: void 0
            });
            i.displayName = "AssetDetails", t.Z = i
        },
        27946: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                a = n(6153);

            function r() {
                return (0, i.useContext)(a.Z)
            }
        },
        68343: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                a = n(34789);

            function r() {
                return (0, i.useContext)(a.Z)
            }
        },
        34789: function(e, t, n) {
            let i = (0, n(2784).createContext)({
                isBadgeRefreshRequired: !1,
                badgeDetails: void 0,
                refreshBadgeDetails: () => ({}),
                isBadgeLoading: !1
            });
            i.displayName = "Badge", t.Z = i
        },
        60472: function(e, t, n) {
            let i = (0, n(2784).createContext)({
                bundleDetails: void 0,
                bundleMetadata: void 0,
                itemConfigurationDetails: void 0,
                isLoadingBundle: !1,
                itemOriginalTagDetails: void 0,
                refreshBundleDetails: () => {
                    throw Error("function is not implemented")
                }
            });
            i.displayName = "BundleDetails", t.Z = i
        },
        97533: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                a = n(60472);

            function r() {
                return (0, i.useContext)(a.Z)
            }
        },
        88695: function(e, t, n) {
            var i = n(52322),
                a = n(2784),
                r = n(1868),
                s = n(33045),
                o = n(84499),
                l = n(3074),
                d = n(77592);
            t.Z = e => {
                let {
                    textToCopy: t,
                    itemName: n,
                    actionKey: c,
                    actionName: u
                } = e, {
                    translate: m
                } = (0, o.$G)(), {
                    enqueue: g,
                    close: p
                } = (0, r.D)(), v = (0, a.useCallback)(e => {
                    g({
                        message: (0, i.jsx)("span", {
                            "data-testid": "success-message",
                            children: e
                        }),
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        autoHideDuration: l.JH,
                        autoHide: !0,
                        onClose: p
                    })
                }, [g, p]), h = (0, a.useCallback)(e => {
                    e.preventDefault(), navigator.clipboard.writeText(null != t ? t : "").then(() => {
                        v(m("Message.CopySuccess", {
                            item: n
                        }))
                    }), d.Z.logClickEvent({
                        eventName: "clickActionMenuItem.".concat(c)
                    })
                }, [t, c, v, m, n]);
                return (0, i.jsx)(s.Z, {
                    onClick: h,
                    children: u
                })
            }
        },
        62339: function(e, t, n) {
            var i = n(52322);
            n(2784);
            var a = n(33045),
                r = n(7275),
                s = n(35358),
                o = n(84499),
                l = n(5884),
                d = n(77592);
            t.Z = e => {
                let {
                    universeId: t,
                    placeId: n,
                    openStudio: c
                } = e, {
                    translate: u
                } = (0, o.$G)();
                return (0, i.jsxs)(a.Z, {
                    onClick: () => {
                        c({
                            task: l.Hc.EditPlace,
                            universeId: (null == t ? void 0 : t.toString()) || "",
                            placeId: (null == n ? void 0 : n.toString()) || ""
                        }), d.Z.logClickEvent({
                            eventName: "clickActionMenuItem.editInStudio"
                        })
                    },
                    children: [(0, i.jsx)(r.Z, {
                        children: (0, i.jsx)(s.GIL, {})
                    }), u("Heading.EditInStudio")]
                })
            }
        },
        17952: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return Q
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(5632),
                s = n(84499),
                o = n(82222),
                l = n(17306),
                d = n(21884),
                c = n(48826),
                u = n(2012),
                m = n(26321),
                g = n(86658),
                p = n(33782),
                v = n(99346),
                h = n(5884),
                b = n(90702),
                y = n(67319),
                f = n(67957),
                A = n(5257),
                C = n(67357),
                x = n(35358),
                Z = n(74867),
                w = () => {
                    let {
                        translate: e
                    } = (0, s.$G)(), {
                        gameDetails: t,
                        canConfigure: n
                    } = (0, A.I)(), {
                        classes: r
                    } = (0, o.Z)(), l = (0, a.useMemo)(() => {
                        var e;
                        return n && (null == t ? void 0 : null === (e = t.creator) || void 0 === e ? void 0 : e.type) === "Group" ? "/dashboard/creations?groupId=".concat(t.creator.id) : "/dashboard/creations"
                    }, [n, t]);
                    return (0, i.jsx)(Z.Z, {
                        className: r.backButton,
                        href: l,
                        "data-testid": "back-to-experiences-button",
                        children: (0, i.jsx)(C.Z, {
                            color: "primary",
                            size: "small",
                            startIcon: (0, i.jsx)(x.xhZ, {}),
                            children: e("Action.BackToGames")
                        })
                    })
                },
                I = n(69835),
                P = n(2585),
                k = n(66646),
                S = n(5770),
                E = n(40550),
                T = n(12399);
            let {
                www: {
                    getAdvertiseAssetUrl: N,
                    getSponsorExperienceUrl: j
                }
            } = k, M = [void 0, "Heading.Content", "Heading.Access", "Heading.Community", "Heading.RealtimeMonitoring", "Heading.Analytics", "Heading.Monetization", "Heading.Advertisements", "Heading.Other"];

            function D(e, t) {
                return e.some(e => {
                    let {
                        isEnabledOnSettings: n
                    } = e;
                    return !n || n(t)
                })
            }
            let U = new P.Z("/dashboard/creations/experiences/[id]"),
                L = {
                    key: "custom",
                    nameKey: E.Z[T.Z.CustomEvents].key,
                    path: "/analytics/custom",
                    sectionTitleKey: "Heading.Analytics",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && ((null == e ? void 0 : e.customEventsPagePublicEnabled) || (null == e ? void 0 : e.customEventsPageBetaEnabled) && (null == e ? void 0 : e.isExperienceRecommendedEventsBetaEnrolled))) && void 0 !== t && t
                    }
                },
                F = {
                    adornment: (0, i.jsx)(x._jy, {
                        fontSize: "small"
                    }),
                    getExternalPath: j,
                    key: "sponsor",
                    nameKey: "Heading.Sponsor",
                    path: "",
                    sectionTitleKey: "Heading.Advertisements",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                };
            U.addFeature({
                key: "overview",
                nameKey: "Heading.Overview",
                path: "/overview"
            });
            let R = {
                key: "configureCategory",
                nameKey: "Heading.Configure",
                subFeatures: [{
                    key: "contentSettings",
                    nameKey: "Heading.ContentSettings",
                    path: "/configure",
                    sectionTitleKey: "Heading.Content",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    },
                    nameKey: "Heading.Settings"
                }, {
                    key: "places",
                    nameKey: "Heading.Places",
                    path: "/places",
                    subPath: "/places/manage",
                    sectionTitleKey: "Heading.Content",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                }, {
                    key: "permissions",
                    nameKey: "Heading.Permissions",
                    path: "/permissions",
                    sectionTitleKey: "Heading.Content",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                }, {
                    key: "secrets",
                    nameKey: "Heading.Secrets",
                    path: "/secrets",
                    sectionTitleKey: "Heading.Access",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                }],
                isEnabledOnSettings: e => !!R.subFeatures && D(R.subFeatures, e)
            };
            U.addFeature(R);
            let H = {
                key: "analyticsCategory",
                nameKey: "Heading.Analytics",
                subFeatures: [{
                    key: "retention",
                    nameKey: "Heading.Retention",
                    path: "/analytics/retention",
                    sectionTitleKey: "Heading.Analytics",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && void 0 !== t && t
                    }
                }, {
                    key: "engagement",
                    nameKey: "Heading.Engagement",
                    path: "/analytics/engagement",
                    sectionTitleKey: "Heading.Analytics",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && void 0 !== t && t
                    }
                }, {
                    key: "userAcquisition",
                    nameKey: "Heading.Acquisition",
                    path: "/analytics/acquisition",
                    sectionTitleKey: "Heading.Analytics",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && void 0 !== t && t
                    }
                }, {
                    key: "audience",
                    nameKey: "Heading.Audience",
                    path: "/analytics/audience",
                    sectionTitleKey: "Heading.Analytics",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && void 0 !== t && t
                    }
                }, {
                    key: "economy",
                    nameKey: "Heading.Economy",
                    path: "/analytics/economy",
                    sectionTitleKey: "Heading.Analytics",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && void 0 !== t && t
                    }
                }, {
                    key: "funnels",
                    nameKey: "Heading.Funnels",
                    path: "/analytics/funnels",
                    sectionTitleKey: "Heading.Analytics",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && void 0 !== t && t
                    }
                }, L],
                isEnabledOnSettings: e => !!H.subFeatures && D(H.subFeatures, e)
            };
            U.addFeature(H);
            let G = {
                key: "monetizationCategory",
                nameKey: "Heading.Monetization",
                subFeatures: [{
                    key: "monetizationOverview",
                    nameKey: "Heading.Overview",
                    path: "/monetization/overview",
                    sectionTitleKey: "Heading.Monetization",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && void 0 !== t && t
                    }
                }, {
                    key: "monetizationPriceOptimization",
                    nameKey: "Heading.PriceOptimization",
                    path: "/monetization/price-optimization",
                    sectionTitleKey: "Heading.Monetization",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.canConfigure) && (null == e ? void 0 : e.isPriceOptimizationEnabled)) && void 0 !== t && t
                    }
                }, {
                    key: "monetizationDevProduct",
                    nameKey: "Label.DeveloperProducts",
                    path: "/monetization/developer-products",
                    sectionTitleKey: "Heading.Monetization",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.canConfigure) || (null == e ? void 0 : e.userCanViewAnalyticsForUniverse)) && void 0 !== t && t
                    }
                }, {
                    key: "monetizationGamePasses",
                    nameKey: "Label.GamePasses",
                    path: "/monetization/passes",
                    sectionTitleKey: "Heading.Monetization",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.canConfigure) || (null == e ? void 0 : e.userCanViewAnalyticsForUniverse)) && void 0 !== t && t
                    }
                }, {
                    key: "monetizationAvatarItems",
                    nameKey: "Label.AvatarItems",
                    path: "/monetization/avatar-items",
                    sectionTitleKey: "Heading.Monetization",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.canConfigure) || (null == e ? void 0 : e.userCanViewAnalyticsForUniverse)) && void 0 !== t && t
                    }
                }, {
                    key: "monetizationCommerce",
                    nameKey: "Heading.Commerce",
                    path: "/monetization/commerce",
                    sectionTitleKey: "Heading.Monetization",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.isCommerceEnabled) && void 0 !== t && t
                    }
                }, {
                    key: "monetizationImmersiveAds",
                    nameKey: "Heading.ImmersiveAds",
                    path: "/monetization/immersive-ads",
                    sectionTitleKey: "Heading.Monetization",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && (null == e ? void 0 : e.isImmersiveAdsDashboardEnabled)) && void 0 !== t && t
                    }
                }, {
                    key: "monetizationExperienceSubscriptions",
                    nameKey: "Heading.Subscriptions",
                    path: "/monetization/subscriptions",
                    sectionTitleKey: "Heading.Monetization",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.canConfigure) || (null == e ? void 0 : e.userCanViewAnalyticsForUniverse)) && void 0 !== t && t
                    }
                }, {
                    key: "monetizationEngagementBasedPayouts",
                    nameKey: "Heading.EngagementBasedPayouts",
                    path: "/monetization/engagement-payouts",
                    sectionTitleKey: "Heading.Monetization",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && void 0 !== t && t
                    }
                }, {
                    key: "monetizationAvatarCreationTokens",
                    nameKey: "Heading.AvatarCreationTokens",
                    path: "/monetization/avatar-creation-tokens",
                    sectionTitleKey: "Heading.Monetization",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.isAvatarCreationTokensEnabled) && void 0 !== t && t
                    }
                }],
                isEnabledOnSettings: e => !!G.subFeatures && D(G.subFeatures, e)
            };
            U.addFeature(G);
            let O = {
                key: "monitorCategory",
                nameKey: "Heading.Monitoring",
                subFeatures: [{
                    key: "performance",
                    nameKey: "Heading.Performance",
                    path: "/analytics/performance",
                    sectionTitleKey: "Heading.RealtimeMonitoring",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && void 0 !== t && t
                    }
                }, {
                    key: "errorReport",
                    nameKey: "Heading.ErrorReport",
                    path: "/analytics/errors",
                    sectionTitleKey: "Heading.RealtimeMonitoring",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && void 0 !== t && t
                    }
                }, {
                    key: "memoryStores",
                    nameKey: "Heading.MemoryStores",
                    path: "/analytics/memory-stores",
                    sectionTitleKey: "Heading.RealtimeMonitoring",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && (null == e ? void 0 : e.showMemoryStoresDashboard)) && void 0 !== t && t
                    }
                }, {
                    key: "dataStores",
                    nameKey: "Heading.DataStores",
                    path: "/analytics/data-stores",
                    sectionTitleKey: "Heading.RealtimeMonitoring",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && (null == e ? void 0 : e.datastoresDashboardEnabled)) && void 0 !== t && t
                    }
                }, {
                    key: "avatarGenerations",
                    nameKey: "Heading.AvatarGenerations",
                    path: "/analytics/avatar-generations",
                    sectionTitleKey: "Heading.RealtimeMonitoring",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && (null == e ? void 0 : e.avatarGenerationsDashboardEnabled)) && void 0 !== t && t
                    }
                }],
                isEnabledOnSettings: e => !!O.subFeatures && D(O.subFeatures, e)
            };
            U.addFeature(O), U.addFeature({
                key: "activityFeed",
                nameKey: "Heading.ActivityFeed",
                path: "/activity-history"
            });
            let B = {
                key: "audienceCategory",
                nameKey: "Heading.Audience",
                subFeatures: [{
                    key: "access",
                    nameKey: "Heading.AccessSettings",
                    path: "/access",
                    sectionTitleKey: "Heading.Access",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                }, {
                    key: "communication-settings",
                    nameKey: "Heading.CommunicationSettings",
                    path: "/communication-settings",
                    sectionTitleKey: "Heading.Access",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                }, {
                    key: "experienceQuestionnaire",
                    nameKey: "Heading.ExperienceQuestionnaire",
                    path: "/experience-questionnaire",
                    sectionTitleKey: "Heading.Access",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t && !(null == e ? void 0 : e.isContentMaturityRenameEnabled)
                    }
                }, {
                    key: "maturityAndCompliance",
                    nameKey: "Heading.MaturityAndCompliance",
                    path: "/experience-questionnaire",
                    sectionTitleKey: "Heading.Access",
                    isEnabledOnSettings: e => {
                        var t, n;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t && null !== (n = null == e ? void 0 : e.isContentMaturityRenameEnabled) && void 0 !== n && n
                    }
                }, {
                    key: "localization",
                    nameKey: "Heading.Localization",
                    path: "/localization",
                    sectionTitleKey: "Heading.Content",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                }],
                isEnabledOnSettings: e => !!B.subFeatures && D(B.subFeatures, e)
            };
            U.addFeature(B);
            let K = {
                key: "engagementCategory",
                nameKey: "Heading.Engagement",
                subFeatures: [{
                    key: "events",
                    nameKey: "Heading.Events",
                    path: "/events",
                    sectionTitleKey: "Heading.Community",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.canConfigure) && (null == e ? void 0 : e.enableEventsUnderExperiences) && (null == e ? void 0 : e.isExperienceCreatedByCurrentUserOrGroup)) && void 0 !== t && t
                    }
                }, {
                    key: "community",
                    nameKey: "Heading.CommunityLink",
                    path: "/community",
                    sectionTitleKey: "Heading.Community",
                    isEnabledOnSettings: e => {
                        var t, n, i;
                        return null !== (n = null == e ? void 0 : e.canConfigure) && void 0 !== n && n && null !== (i = null == e ? void 0 : null === (t = e.locale) || void 0 === t ? void 0 : t.startsWith("en-")) && void 0 !== i && i
                    }
                }, {
                    key: "socialLinks",
                    nameKey: "Heading.SocialLinks",
                    path: "/social-links",
                    sectionTitleKey: "Heading.Community",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                }, {
                    key: "updates",
                    nameKey: "Heading.Updates",
                    path: "/updates",
                    sectionTitleKey: "Heading.Community",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                }, {
                    key: "notifications",
                    nameKey: "Heading.Notifications",
                    path: "/notifications",
                    sectionTitleKey: "Heading.Community",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                }, {
                    key: "badges",
                    nameKey: "Label.Badges",
                    path: "/associated-items",
                    query: {
                        activeTab: S.Z.Badge
                    },
                    sectionTitleKey: "Heading.Content",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.canConfigure) && void 0 !== t && t
                    }
                }],
                isEnabledOnSettings: e => !!K.subFeatures && D(K.subFeatures, e)
            };
            U.addFeature(K);
            let z = {
                key: "moderationCategory",
                nameKey: "Heading.Moderation",
                subFeatures: [{
                    key: "bans",
                    nameKey: "Heading.Bans",
                    path: "/moderation/bans",
                    subPath: "/moderation/bans/add",
                    sectionTitleKey: "Heading.Moderation",
                    isEnabledOnSettings: e => {
                        var t;
                        return null !== (t = (null == e ? void 0 : e.userCanViewAnalyticsForUniverse) && (null == e ? void 0 : e.enableSafetyControls)) && void 0 !== t && t
                    }
                }],
                isEnabledOnSettings: e => !!z.subFeatures && D(z.subFeatures, e)
            };
            U.addFeature(z);
            let V = {
                key: "promotionCategory",
                nameKey: "Heading.Promotion",
                subFeatures: [F],
                isEnabledOnSettings: e => !!V.subFeatures && D(V.subFeatures, e)
            };
            U.addFeature(V);
            let q = (e, t) => {
                    let n = e => e.reduce((e, i) => {
                        var a, r;
                        if (null === (r = null === (a = i.isEnabledOnSettings) || void 0 === a ? void 0 : a.call(i, t)) || void 0 === r || r) {
                            let t = i;
                            i.subFeatures && (t = { ...i,
                                subFeatures: n([...i.subFeatures])
                            }), e.push(t)
                        }
                        return e
                    }, []);
                    return n(e)
                },
                _ = (e, t, n) => {
                    let {
                        path: i,
                        query: a = {}
                    } = e, r = i && t.endsWith(i), s = !0;
                    return Object.keys(a).forEach(e => {
                        s = s && !!(n && n[e] === a[e])
                    }), !!(r && s)
                },
                W = () => {
                    let e = (0, r.useRouter)(),
                        {
                            translate: t
                        } = (0, s.$G)(),
                        {
                            locale: n
                        } = (0, s.ql)(),
                        {
                            classes: u
                        } = (0, o.Z)(),
                        {
                            open: C,
                            dialog: x,
                            isCompatible: Z
                        } = (0, v.ZP)(),
                        {
                            gameDetails: P,
                            canConfigure: k
                        } = (0, A.I)(),
                        {
                            user: S
                        } = (0, y.je)(),
                        E = (0, f.Z)(),
                        {
                            settings: T,
                            isFetched: N
                        } = (0, c.rV)(),
                        j = (0, b.A)(),
                        D = (0, d.Z)(),
                        L = U.getAllFeatures(),
                        F = (0, a.useMemo)(() => {
                            var e, t, i, a;
                            let r = (null == P ? void 0 : null === (e = P.creator) || void 0 === e ? void 0 : e.type) === "User" && (null == P ? void 0 : null === (t = P.creator) || void 0 === t ? void 0 : t.id) === (null == S ? void 0 : S.id),
                                s = (null == P ? void 0 : null === (i = P.creator) || void 0 === i ? void 0 : i.type) === "Group" && (null == P ? void 0 : null === (a = P.creator) || void 0 === a ? void 0 : a.id) === (null == E ? void 0 : E.id),
                                o = q(L, !1 === N && null !== k ? void 0 : { ...T,
                                    ...j,
                                    ...D,
                                    isStudioCompatible: Z,
                                    canConfigure: k,
                                    locale: n,
                                    isExperienceCreatedByCurrentUserOrGroup: r || s
                                }),
                                l = e => {
                                    switch (e.key) {
                                        case "editInStudio":
                                            return { ...e,
                                                onSelectFeature: () => {
                                                    var e, t;
                                                    return C({
                                                        task: h.Hc.EditPlace,
                                                        universeId: (null == P ? void 0 : null === (e = P.id) || void 0 === e ? void 0 : e.toString()) || "",
                                                        placeId: (null == P ? void 0 : null === (t = P.rootPlaceId) || void 0 === t ? void 0 : t.toString()) || ""
                                                    })
                                                }
                                            };
                                        case "sponsor":
                                            return { ...e,
                                                getExternalPath: () => {
                                                    var t, n;
                                                    return (null == P ? void 0 : P.id) && null !== (n = null === (t = e.getExternalPath) || void 0 === t ? void 0 : t.call(e, P.id)) && void 0 !== n ? n : ""
                                                }
                                            };
                                        case "viewOnRobloxLink":
                                            return { ...e,
                                                getExternalPath: () => {
                                                    var t, n;
                                                    return (null == P ? void 0 : P.rootPlaceId) && null !== (n = null === (t = e.getExternalPath) || void 0 === t ? void 0 : t.call(e, P.rootPlaceId)) && void 0 !== n ? n : ""
                                                }
                                            };
                                        default:
                                            return e
                                    }
                                };
                            return o.map(e => {
                                let t = e;
                                return null != e.subFeatures && (t = { ...e,
                                    subFeatures: e.subFeatures.map(l)
                                }), l(t)
                            }, [])
                        }, [P, null == S ? void 0 : S.id, null == E ? void 0 : E.id, N, k, T, j, D, Z, n, L, C]),
                        R = U.getAllFeaturesFlatten(),
                        H = (0, a.useMemo)(() => R.find(t => _(t, e.pathname, e.query) || t.subPath && e.pathname.endsWith(t.subPath)), [R, e.pathname, e.query]);
                    return (0, i.jsxs)(a.Fragment, {
                        children: [(0, i.jsxs)(m.Z, {
                            item: !0,
                            container: !0,
                            direction: "column",
                            children: [(0, i.jsx)(w, {}), (0, i.jsx)(g.Z, {
                                className: u.sidebarHeaderText,
                                variant: "overline",
                                children: t("Heading.Experience")
                            }), (0, i.jsx)(I.Z, {}), (0, i.jsx)(p.Z, {
                                className: u.divider
                            })]
                        }), M.map(e => F.some(t => t.sectionTitleKey === e) && (0, i.jsx)(m.Z, {
                            item: !0,
                            container: !0,
                            direction: "column",
                            children: (0, i.jsx)(l.Z, {
                                features: F.filter(t => t.sectionTitleKey === e),
                                activeFeature: H,
                                title: e && t(e),
                                defaultExpanded: R.filter(e => !!e.subFeatures).map(e => "parent-".concat(e.key)),
                                name: "game"
                            }, "feature-".concat(e))
                        }, "navigation-section-".concat(e))), x]
                    })
                };
            var Q = (0, s.Zh)(() => (0, i.jsx)(b.P, {
                children: (0, i.jsx)(W, {})
            }), [u.Z.Creations, u.Z.AssetTypes, u.Z.Navigation])
        },
        84528: function(e, t, n) {
            var i = n(52322);
            n(2784);
            var a = n(33045),
                r = n(7275),
                s = n(35358),
                o = n(77592);
            t.Z = e => {
                let {
                    url: t,
                    actionKey: n,
                    actionName: l
                } = e;
                return (0, i.jsxs)(a.Z, {
                    onClick: () => {
                        var e;
                        o.Z.logClickEvent({
                            eventName: "clickActionMenuItem.".concat(n)
                        }), null === (e = window.open(t || "", "_blank")) || void 0 === e || e.focus()
                    },
                    children: [(0, i.jsx)(r.Z, {
                        children: (0, i.jsx)(s.GIL, {})
                    }), l]
                })
            }
        },
        20599: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var i = n(52322);
            n(2784);
            var a = n(86658),
                r = n(84499),
                s = n(74867);
            let o = (0, n(71565).Z)()({
                awardingGameName: {
                    display: "inline-block"
                }
            });
            var l = e => {
                let {
                    translationKey: t,
                    opening: n,
                    closing: l,
                    anchorTargetName: d,
                    anchorTargetUrl: c,
                    typographyColorOverride: u = "secondary",
                    typographyVariantOverride: m,
                    linkVariantOverride: g
                } = e, {
                    classes: {
                        awardingGameName: p
                    }
                } = o(), {
                    translateHTML: v
                } = (0, r.$G)();
                return (0, i.jsx)(a.Z, {
                    color: u,
                    variant: m || "body1",
                    children: v(t, [{
                        opening: n,
                        closing: l,
                        content: e => c ? (0, i.jsx)(s.Z, {
                            variant: g || "h6",
                            className: p,
                            href: c,
                            target: "_blank",
                            children: void 0 !== d ? d : e
                        }) : d
                    }])
                })
            }
        },
        3324: function(e, t, n) {
            var i = n(52322),
                a = n(2784),
                r = n(90472),
                s = n(35358),
                o = n(76159),
                l = n(77592);
            t.Z = e => {
                let {
                    menuItems: t
                } = e, n = (0, a.useRef)(null), [d, c] = (0, a.useState)(!1), u = (0, a.useCallback)(() => {
                    c(!1)
                }, []), m = (0, a.useCallback)(() => {
                    l.Z.logClickEvent({
                        eventName: "clickStatusCardMoreButton"
                    }), c(!0)
                }, []);
                return (0, i.jsxs)(a.Fragment, {
                    children: [(0, i.jsx)(r.Z, {
                        "aria-label": "more",
                        color: "secondary",
                        ref: n,
                        onClick: m,
                        children: (0, i.jsx)(s.v7d, {})
                    }), (0, i.jsx)(o.Z, {
                        open: d,
                        anchorEl: n.current,
                        onClose: u,
                        onClick: u,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        },
                        children: t
                    })]
                })
            }
        },
        90702: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return f
                },
                A: function() {
                    return A
                }
            });
            var i = n(2784),
                a = n(5632),
                r = n(33120),
                s = n(18765),
                o = n(6919),
                l = n(10696),
                d = n(20112),
                c = n(80977),
                u = n(78386),
                m = n(13984),
                g = n(81418),
                p = n(89481),
                v = n(68545),
                h = n(48921);
            class b {
                async getSettings(e) {
                    var t, n, i, a, r, s, o, l, d, c, u, m, b, y, f;
                    if (void 0 === e) throw new g.Z;
                    let A = v.Hh.length ? [...v.Hh] : void 0,
                        [C, x, Z, w, I, P, k, S, E] = await Promise.allSettled([this.developerAnalyticsAggregationsClient.getfeaturePermissionsGetFeaturePermission({
                            universeId: e,
                            flags: A
                        }), this.developerAdsStatsApi.getImmersiveAdsPermissions({
                            universeId: e
                        }), this.developerAdsStatsApi.getPublisherEligibilityEnabled(), (0, p.Jb)(p.ky.CreatorDashboard), this.serviceEfficiencyClient.serviceEfficiencyApiIsAllowed({
                            universeId: e
                        }), this.priceExperimentationClient.priceExperimentationApiGetExperimentEligibility({
                            universeId: e
                        }), this.badgesClient.getIsUniverseEnrolledInBadgesReordering(e), this.itemConfigurationClient.getCollectiblePublishingMetadata(), this.commerceApiClient.getCommerceExperienceConfiguration(e)]);
                    return { ...(0, v.T6)({
                            featurePermissions: C,
                            userIXPParams: w
                        }),
                        isImmersiveAdsDashboardEnabled: "fulfilled" === x.status && null !== (s = x.value.isImmersiveAdsDashboardEnabled) && void 0 !== s && s,
                        isCloudServicesEnabled: "fulfilled" === I.status && null !== (o = I.value) && void 0 !== o && o,
                        showVrDeviceOption: "fulfilled" === w.status && null !== (l = w.value.showVrDeviceOption) && void 0 !== l && l,
                        isImmersiveAdsDashboardV2Enabled: "fulfilled" === x.status && null !== (d = x.value.isImmersiveAdsDashboardV2Enabled) && void 0 !== d && d,
                        isPublisherEligibilityEnabled: "fulfilled" === Z.status && null !== (c = null === (t = Z.value) || void 0 === t ? void 0 : t.isPublisherEligibilityEnabled) && void 0 !== c && c,
                        isExperienceRecommendedEventsBetaEnrolled: h.Z.includes(e),
                        isPriceOptimizationEnabled: "fulfilled" === P.status && null !== (u = null === (n = P.value) || void 0 === n ? void 0 : n.isEligible) && void 0 !== u && u,
                        isExperienceCreatedByCurrentUserOrGroup: !0,
                        isUniverseEnrolledInBadgesReordering: "fulfilled" === k.status && null !== (m = k.value) && void 0 !== m && m,
                        isAvatarCreationTokensEnabled: "fulfilled" === S.status && null !== (b = null === (i = S.value) || void 0 === i ? void 0 : i.isAvatarCreationTokensUIEnabled) && void 0 !== b && b,
                        isCommerceEnabled: "fulfilled" === E.status && (null !== (y = null === (a = E.value) || void 0 === a ? void 0 : a.isShopifyEnabled) && void 0 !== y && y || null !== (f = null === (r = E.value) || void 0 === r ? void 0 : r.isAmazonEnabled) && void 0 !== f && f)
                    }
                }
                constructor(e, t, n, i, a, r, s) {
                    this.developerAnalyticsAggregationsClient = e, this.developerAdsStatsApi = t, this.serviceEfficiencyClient = n, this.priceExperimentationClient = i, this.badgesClient = a, this.itemConfigurationClient = r, this.commerceApiClient = s, this.name = "CreationsCustomSettings", this.defaultSettings = Object.freeze({
                        isImmersiveAdsDashboardEnabled: !1,
                        isCloudServicesEnabled: !1,
                        showVrDeviceOption: !1,
                        isImmersiveAdsDashboardV2Enabled: !1,
                        isPublisherEligibilityEnabled: !1,
                        isExperienceRecommendedEventsBetaEnrolled: !1,
                        isPriceOptimizationEnabled: !1,
                        isExperienceCreatedByCurrentUserOrGroup: !1,
                        isUniverseEnrolledInBadgesReordering: !1,
                        isAvatarCreationTokensEnabled: !1,
                        isCommerceEnabled: !1,
                        ...v.Lj
                    })
                }
            }
            let y = new b(s.ZP, c.ZP, o.Z, u.Z, d.ZP, l.ZP, m.ZP),
                {
                    CustomSettingsProvider: f,
                    useCustomSettings: A
                } = (0, r.K)(y, function() {
                    let e = (0, a.useRouter)();
                    return [(0, i.useMemo)(() => {
                        let {
                            id: t
                        } = e.query;
                        return void 0 === t ? t : parseInt(t, 10)
                    }, [e.query])]
                })
        },
        56820: function(e, t, n) {
            n.d(t, {
                I6: function() {
                    return p
                },
                lL: function() {
                    return v
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(79437),
                s = n(42654),
                o = n(3074),
                l = n(5632),
                d = n(28057),
                c = n(67319),
                u = n(91424),
                m = n(68317);
            let g = (0, a.createContext)({
                canConfigureDeveloperItem: void 0,
                developerItemDetails: null,
                developerItemId: void 0,
                developerItemImage: "no image",
                isLoadingDeveloperItem: !0,
                refreshDeveloperItemDetails: () => {
                    throw Error("function is not implemented")
                }
            });
            g.displayName = "DeveloperItemDetail";
            let p = e => {
                let {
                    children: t
                } = e, [n, p] = (0, a.useState)(!1), [v, h] = (0, a.useState)(void 0), [b, y] = (0, a.useState)(null), {
                    user: f
                } = (0, c.je)(), {
                    query: A,
                    isReady: C
                } = (0, l.useRouter)(), x = (0, a.useMemo)(() => {
                    if (C) {
                        let {
                            id: e
                        } = A;
                        if (e) {
                            let t = parseInt(e, 10);
                            return t > 0 ? t : void 0
                        }
                    }
                }, [A, C]), {
                    thumbnailImage: Z,
                    refreshThumbnail: w
                } = (0, d.Z)({
                    targetId: null != x ? x : 0,
                    targetType: u.Ij.assetThumbnail,
                    fontColor: "dark"
                }), I = (0, a.useCallback)(e => {
                    var t, n;
                    let i = e.type && Object.values(s.Z).includes(e.type);
                    return e.id && i && e.name && (null === (t = e.creator) || void 0 === t ? void 0 : t.targetId) && (null === (n = e.creator) || void 0 === n ? void 0 : n.type) && void 0 !== e.enableComments && void 0 !== e.isCopyingAllowed
                }, []), P = (0, a.useCallback)(async (e, t) => {
                    p(!0);
                    let [n, i] = await Promise.allSettled([r.ZP.getAssetDetails([e]), (0, m.s7)(t, e)]);
                    if (n.status === o.M1 && i.status === o.M1) {
                        var a, s;
                        let e = null === (a = n.value.data) || void 0 === a ? void 0 : a[0];
                        e && I(e) ? y({
                            id: e.id.toString(),
                            type: e.type,
                            name: e.name,
                            creator: {
                                id: e.creator.targetId,
                                type: e.creator.type
                            },
                            enableComments: e.enableComments,
                            isCopyingAllowed: e.isCopyingAllowed,
                            isVersioningEnabled: null !== (s = e.isVersioningEnabled) && void 0 !== s && s,
                            description: e.description
                        }) : y(null), h(i.value)
                    } else y(null);
                    p(!1)
                }, [I]), k = (0, a.useCallback)(async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return (e && w(), x && (null == f ? void 0 : f.id)) ? P(x, f.id) : Promise.resolve()
                }, [f, x, P, w]);
                (0, a.useEffect)(() => {
                    k()
                }, [k]);
                let S = (0, a.useMemo)(() => ({
                    canConfigureDeveloperItem: v,
                    developerItemId: x,
                    isLoadingDeveloperItem: n,
                    developerItemDetails: b,
                    refreshDeveloperItemDetails: k,
                    developerItemImage: Z
                }), [v, b, x, n, k, Z]);
                return (0, i.jsx)(g.Provider, {
                    value: S,
                    children: t
                })
            };

            function v() {
                return (0, a.useContext)(g)
            }
        },
        75349: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return a
                },
                Z: function() {
                    return S
                }
            });
            var i, a, r = n(52322),
                s = n(2784),
                o = n(63955),
                l = n(57889),
                d = n(26321),
                c = n(78749),
                u = n(77011),
                m = n(86658),
                g = n(84499),
                p = n(66646),
                v = n(95516);
            let h = (0, n(71565).Z)()(e => ({
                formContainer: {
                    gridGap: 24,
                    marginLeft: 12
                },
                switchContainer: {
                    alignItems: "flex-start"
                },
                distributionAlertContainer: {
                    marginBottom: 12
                },
                distributionLabel: {
                    display: "block",
                    paddingTop: 8,
                    paddingBottom: 8
                },
                distributionText: {
                    display: "block",
                    paddingTop: 4
                },
                distributionAlert: {
                    color: e.palette.actionV2.primary.fill,
                    borderColor: e.palette.surface.outline
                }
            }));
            var b = n(4013),
                y = n(19742),
                f = n(20599),
                A = n(84951);
            let {
                www: C,
                creatorHub: {
                    dashboard: x,
                    docs: Z
                }
            } = p;
            var w = e => {
                let {
                    distributionState: t,
                    assetId: n
                } = e, {
                    translate: i
                } = (0, g.$G)(), {
                    classes: {
                        distributionAlert: o
                    }
                } = h(), d = "smallLabel2", c = (0, s.useMemo)(() => {
                    switch (t) {
                        case a.NotStarted:
                            return {
                                link: (0, r.jsx)(l.L, {
                                    href: x.getSellerOnboardingUrl(),
                                    color: "inherit",
                                    "data-testid": "fiat-onboarding-link",
                                    children: i("Label.Register")
                                }),
                                message: i("Message.UserNeedsApprovalToPrice"),
                                severity: "info",
                                title: i("Label.CompleteOnboarding")
                            };
                        case a.NotStartedAudioDistribution:
                            return {
                                link: (0, r.jsx)(l.L, {
                                    href: x.getAudioDistributionOnboardingUrl(),
                                    color: "inherit",
                                    whiteSpace: "nowrap",
                                    "data-testid": "audio-distribution-onboarding-link",
                                    children: i("Label.SubmitForReview")
                                }),
                                message: i("Message.UserNeedsApprovalToDistribute"),
                                severity: "success",
                                title: i("Label.GetDistributeApproval")
                            };
                        case a.PotentialPolicyViolation:
                            return {
                                link: (0, r.jsx)(l.L, {
                                    href: C.getAppealsPortalUrl(),
                                    color: "inherit",
                                    "data-testid": "distribution-appeals-link",
                                    children: i("Label.SubmitAppeal")
                                }),
                                message: void 0,
                                translationLabelProps: {
                                    anchorTargetUrl: Z.getCreatorStoreAssetModerationUrl(),
                                    closing: "reqLinkEnd",
                                    typographyVariantOverride: d,
                                    linkVariantOverride: "inherit",
                                    typographyColorOverride: "inherit",
                                    opening: "reqLinkStart",
                                    translationKey: "Message.AssetMayViolateCommunityStandardsVerbose"
                                },
                                severity: "error",
                                title: i("Label.AssetCannotBeDistributed")
                            };
                        case a.InvalidAssetType:
                            return {
                                link: void 0,
                                message: i("Message.AssetTypeNotAvailable"),
                                severity: "error",
                                title: i("Label.AssetCannotBeDistributed")
                            };
                        case a.PackageIneligible:
                            return {
                                link: void 0,
                                message: void 0,
                                translationLabelProps: {
                                    anchorTargetUrl: A.getRoadmapUrl(),
                                    closing: "reqLinkEnd",
                                    typographyVariantOverride: d,
                                    linkVariantOverride: "inherit",
                                    typographyColorOverride: "inherit",
                                    opening: "reqLinkStart",
                                    translationKey: "Message.IneligiblePackageDistributor"
                                },
                                severity: "error",
                                title: i("Label.AssetCannotBeDistributed")
                            };
                        case a.Unauthorized:
                            return {
                                link: void 0,
                                message: i("Message.NoPermissionToDistributeAsset"),
                                severity: "error",
                                title: i("Label.AssetCannotBeDistributed")
                            };
                        case a.IneligibleFiatSeller:
                            return {
                                link: void 0,
                                message: void 0,
                                translationLabelProps: {
                                    anchorTargetUrl: x.getSellerOnboardingUrl(),
                                    closing: "reqLinkEnd",
                                    typographyVariantOverride: d,
                                    linkVariantOverride: "inherit",
                                    typographyColorOverride: "inherit",
                                    opening: "reqLinkStart",
                                    translationKey: "Message.UserIneligilbleForFiatPricing"
                                },
                                severity: "error",
                                title: i("Label.AssetCannotBeDistributed")
                            };
                        case a.RightsClaim:
                            return {
                                link: (0, r.jsx)(l.L, {
                                    href: x.getRightsManagerAssetUrl(n.toString()),
                                    color: "inherit",
                                    whiteSpace: "nowrap",
                                    "data-testid": "review-claims-link",
                                    children: i("Action.ReviewClaims")
                                }),
                                message: i("Message.CreationClaimed"),
                                severity: "error",
                                title: i("Label.CreationClaimed")
                            };
                        case a.Other:
                            return {
                                link: void 0,
                                message: void 0,
                                severity: "error",
                                title: i("Label.AssetCannotBeDistributed")
                            };
                        case a.Approved:
                            return {
                                link: (0, r.jsx)(l.L, {
                                    href: x.getAudioDistributionOnboardingUrl(),
                                    color: "inherit",
                                    whiteSpace: "nowrap",
                                    "data-testid": "audio-distribution-onboarding-link",
                                    children: i("Label.View")
                                }),
                                message: void 0,
                                severity: "success",
                                title: i("Label.ApprovedToDistribute")
                            };
                        default:
                            return {
                                link: void 0,
                                message: void 0,
                                severity: void 0,
                                title: void 0
                            }
                    }
                }, [t, i]), u = (0, s.useMemo)(() => {
                    switch (t) {
                        case a.NotStartedAudioDistribution:
                        case a.Approved:
                            return {
                                alertStyle: o
                            };
                        default:
                            return {
                                alertStyle: void 0
                            }
                    }
                }, [t, o]);
                return (0, r.jsxs)(b.A, {
                    action: c.link,
                    severity: c.severity,
                    variant: "standard",
                    className: u.alertStyle,
                    children: [(0, r.jsx)(y.A, {
                        children: c.title
                    }), c.translationLabelProps ? (0, r.jsx)(f.Z, {
                        anchorTargetUrl: c.translationLabelProps.anchorTargetUrl,
                        closing: c.translationLabelProps.closing,
                        typographyVariantOverride: d,
                        linkVariantOverride: "inherit",
                        typographyColorOverride: "inherit",
                        opening: c.translationLabelProps.opening,
                        translationKey: c.translationLabelProps.translationKey
                    }) : (0, r.jsx)(m.Z, {
                        variant: d,
                        component: "span",
                        children: c.message
                    })]
                })
            };
            let {
                www: I,
                terms: P,
                creatorHub: {
                    docs: k
                }
            } = p;
            (i = a || (a = {})).AssetNotPublic = "AssetNotPublic", i.UserNotVerified = "UserNotVerified", i.InvalidAssetType = "InvalidAssetType", i.PotentialPolicyViolation = "PotentialPolicyViolation", i.IneligibleFiatSeller = "IneligibleFiatSeller", i.Other = "Other", i.Unauthorized = "Unauthorized", i.NotStarted = "NotStarted", i.NotStartedAudioDistribution = "NotStartedAudioDistribution", i.Approved = "Approved", i.PackageIneligible = "PackageIneligible", i.RightsClaim = "RightsClaim";
            var S = e => {
                let {
                    distributionErrorState: t,
                    isDistributed: n,
                    isDistributionAvailable: i = !0,
                    quota: a,
                    assetId: p
                } = e, {
                    translate: b,
                    translateHTML: y
                } = (0, g.$G)(), {
                    locale: f
                } = (0, g.ql)(), {
                    classes: {
                        distributionAlertContainer: A,
                        distributionLabel: C,
                        distributionText: x,
                        formContainer: Z,
                        switchContainer: S
                    }
                } = h(), {
                    control: E
                } = (0, o.Gc)(), T = (0, s.useMemo)(() => "NotStarted" !== t && "Approved" !== t && !!t || a && a.usage >= a.capacity && !n, [t, n, a]), N = (0, s.useMemo)(() => {
                    switch (t) {
                        case "UserNotVerified":
                            return y("Message.UserNotVerified", [{
                                opening: "linkStart",
                                closing: "linkEnd",
                                content: e => (0, r.jsx)(l.L, {
                                    href: I.getAccountSettingsUrl(),
                                    target: "_blank",
                                    children: e
                                })
                            }]);
                        case "AssetNotPublic":
                            return b("Message.AssetNotPublic");
                        default:
                            return y("Message.DistributionCaption", [{
                                opening: "linkStart",
                                closing: "linkEnd",
                                content: e => (0, r.jsx)(l.L, {
                                    href: P.getAssetDistributionUrl(),
                                    target: "_blank",
                                    children: e
                                })
                            }])
                    }
                }, [t, b, y]), j = (0, s.useMemo)(() => new Intl.DateTimeFormat(null != f ? f : g.go.English, {
                    dateStyle: "medium",
                    timeStyle: "short"
                }).format, [f]), M = (0, s.useMemo)(() => a ? 0 === a.usage ? b("Message.ShareLimit", {
                    capacity: a.capacity.toString(),
                    duration: v.dg[a.duration]
                }) : a.usage > 0 && a.usage < a.capacity ? b("Message.SharedCount", {
                    number: (a.capacity - a.usage).toString(),
                    date: a.expirationTime ? j(a.expirationTime) : ""
                }) : b("Message.ShareExceed", {
                    date: j(a.expirationTime)
                }) : null, [a, b, j]);
                return (0, r.jsx)(d.Z, {
                    container: !0,
                    item: !0,
                    XSmall: 12,
                    classes: {
                        root: Z
                    },
                    children: i && (0, r.jsxs)(d.Z, {
                        container: !0,
                        item: !0,
                        XSmall: 12,
                        direction: "row",
                        children: [void 0 !== t && ["NotStarted", "NotStartedAudioDistribution", "InvalidAssetType", "PotentialPolicyViolation", "Unauthorized", "Other", "Approved", "IneligibleFiatSeller", "PackageIneligible", "RightsClaim"].includes(t) && (0, r.jsx)(d.Z, {
                            item: !0,
                            XSmall: 12,
                            classes: {
                                root: A
                            },
                            children: (0, r.jsx)(w, {
                                distributionState: t,
                                assetId: p
                            })
                        }), (0, r.jsx)(o.Qr, {
                            name: "isItemDistributed",
                            control: E,
                            render: e => {
                                let {
                                    field: t
                                } = e;
                                return (0, r.jsx)(c.F, {
                                    classes: {
                                        root: S
                                    },
                                    control: (0, r.jsx)(u.S, {
                                        "data-testid": "distribution-switch",
                                        "aria-label": b("Label.DistributeOnCreatorStore"),
                                        onChange: e => t.onChange(e.target.checked),
                                        checked: !!t.value
                                    }),
                                    disabled: T,
                                    label: (0, r.jsxs)(s.Fragment, {
                                        children: [(0, r.jsxs)(m.Z, {
                                            variant: "body1",
                                            color: T ? "disabled" : "primary",
                                            classes: {
                                                root: C
                                            },
                                            children: [b("Label.DistributeOnCreatorStore"), " "]
                                        }), (0, r.jsx)(m.Z, {
                                            variant: "smallLabel2",
                                            color: T ? "disabled" : "secondary",
                                            classes: {
                                                root: x
                                            },
                                            children: N
                                        }), a && (0, r.jsxs)(s.Fragment, {
                                            children: [(0, r.jsx)("br", {}), (0, r.jsxs)(m.Z, {
                                                variant: "smallLabel2",
                                                color: T ? "disabled" : "primary",
                                                children: [M, (0, r.jsx)("span", {
                                                    children: " "
                                                }), (0, r.jsx)(l.L, {
                                                    href: k.getCreatorStorePublishingUrl(),
                                                    target: "_blank",
                                                    children: b("Message.WhatIsMyLimit")
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            }
                        })]
                    })
                })
            }
        },
        68317: function(e, t, n) {
            n.d(t, {
                Ag: function() {
                    return g
                },
                bf: function() {
                    return p
                },
                cZ: function() {
                    return h
                },
                hS: function() {
                    return v
                },
                nY: function() {
                    return A
                },
                s7: function() {
                    return b
                },
                tu: function() {
                    return y
                },
                vp: function() {
                    return f
                }
            });
            var i = n(79437),
                a = n(95516),
                r = n(86531),
                s = n(45258),
                o = n(3854),
                l = n(60648),
                d = n(37702),
                c = n(93909),
                u = n(44698),
                m = n(75349);
            let g = (e, t) => i.ZP.updateAsset(parseInt(e, 10), { ...t
                }),
                p = async e => {
                    var t;
                    let n = null === (t = (await a.ZP.getAssetQuotas("RateLimitCreatorMarketplaceDistribute", e)).quotas) || void 0 === t ? void 0 : t[0];
                    if (n && void 0 !== n.usage && void 0 !== n.capacity && void 0 !== n.duration && n.duration in a.jY) return {
                        capacity: n.capacity,
                        duration: n.duration,
                        expirationTime: n.expirationTime ? new Date(n.expirationTime) : void 0,
                        usage: n.usage
                    };
                    throw Error("empty quota")
                },
                v = async e => await r.Z.getAssetPermissions(e),
                h = async (e, t) => await r.Z.batchCheckAssetPermissions(t.map(t => ({
                    assetId: e,
                    subject: o.EW.Universe,
                    subjectId: t.toString(),
                    permissionType: l.T.Use
                }))),
                b = async (e, t) => {
                    var n, i, a, s;
                    let c = await r.Z.batchCheckAssetPermissions([{
                        assetId: t,
                        subject: o.EW.User,
                        subjectId: e.toString(),
                        permissionType: l.T.Edit
                    }]);
                    if (!c || c.length < 1 || c[0].error) throw Error(null !== (s = null == c ? void 0 : null === (a = c[0]) || void 0 === a ? void 0 : null === (i = a.error) || void 0 === i ? void 0 : i.message) && void 0 !== s ? s : "Something went wrong fetching asset edit permissions");
                    return (null === (n = c[0].value) || void 0 === n ? void 0 : n.status) === d.vH.HasPermission
                },
                y = async e => {
                    if (0 === e.length) return null;
                    let t = await s.ZP.getDetails(e);
                    return t.data && t.data.length > 0 ? t.data.filter(e => e && e.id && e.name && e.creator && e.creator.name).map(e => {
                        var t;
                        return {
                            universeId: e.id,
                            experienceName: e.name,
                            creatorName: null === (t = e.creator) || void 0 === t ? void 0 : t.name
                        }
                    }) : null
                },
                f = e => {
                    let t = "/dashboard/creations";
                    return (null == e ? void 0 : e.type) && ((null == e ? void 0 : e.creator.type) === c.Z.Group ? t += "?activeTab=".concat(e.type, "&groupId=").concat(e.creator.id) : t += "?activeTab=".concat(e.type)), t
                },
                A = (e, t, n, i, a, r) => e.includes(u.g6.SafetyStatus) ? m.x.PotentialPolicyViolation : e.includes(u.g6.AssetType) ? m.x.InvalidAssetType : e.includes(u.g6.Authorization) ? m.x.Unauthorized : e.includes(u.g6.Packages) ? m.x.PackageIneligible : t ? a && n.includes(u.g6.SellerAccountNotOnboarded) ? m.x.NotStarted : r && (n.includes(u.g6.Moderation) || n.includes(u.g6.ModerationHistory) || n.includes(u.g6.Verification)) ? m.x.IneligibleFiatSeller : e.includes(u.g6.RightsClaim) || n.includes(u.g6.RightsClaim) ? m.x.RightsClaim : !i && r ? m.x.Other : void 0 : m.x.Other
        },
        91055: function(e, t, n) {
            let i = (0, n(2784).createContext)({
                developerProductDetails: void 0,
                isDeveloperProductLoading: !1,
                isDeveloperProductRefreshRequired: !1,
                isProductPregameSaleEligible: !1,
                isEligibilityCheckDone: !1,
                refreshDeveloperProductDetails: () => ({})
            });
            i.displayName = "DeveloperProduct", t.Z = i
        },
        62645: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                a = n(91055);

            function r() {
                return (0, i.useContext)(a.Z)
            }
        },
        26107: function(e, t, n) {
            let i = (0, n(2784).createContext)({
                isLoading: !1,
                eventDetails: null,
                refreshEventDetails: () => {
                    throw Error("Cannot refresh event details prior to fetching for the first time")
                }
            });
            t.Z = i
        },
        7615: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                a = n(26107);

            function r() {
                return (0, i.useContext)(a.Z)
            }
        },
        47578: function(e, t, n) {
            let i = (0, n(2784).createContext)({
                experienceSubscriptionDetails: void 0,
                usedSubscriptionNames: [],
                isExperienceSubscriptionLoading: !1,
                isExperienceSubscriptionRefreshRequired: !1,
                priceTierMap: void 0,
                revshareStatModelMap: void 0,
                canAccessExperienceSubscription: !1,
                refreshExperienceSubscriptionDetails: () => ({})
            });
            i.displayName = "experienceSubscriptions", t.Z = i
        },
        17921: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                a = n(47578);

            function r() {
                return (0, i.useContext)(a.Z)
            }
        },
        69835: function(e, t, n) {
            var i = n(52322);
            n(2784);
            var a = n(91424),
                r = n(66646),
                s = n(3074),
                o = n(5770),
                l = n(3324),
                d = n(88695),
                c = n(84528),
                u = n(62339),
                m = n(5257),
                g = n(82133),
                p = n(79062),
                v = n(91204),
                h = n(33308),
                b = n(66384),
                y = n(97678),
                f = n(86357),
                A = n(84499),
                C = n(6093),
                x = n(99346);
            let {
                getUrlForItemType: Z,
                creatorHub: {
                    dashboard: w
                }
            } = r;
            t.Z = () => {
                var e, t, n, r, I, P;
                let {
                    isLoadingGame: k,
                    gameDetails: S,
                    canConfigure: E
                } = (0, m.I)(), {
                    classes: {
                        fullWidth: T,
                        overflowText: N
                    }
                } = (0, C.Z)(), {
                    open: j,
                    dialog: M
                } = (0, x.ZP)(), {
                    translate: D
                } = (0, A.$G)();
                return (0, i.jsxs)(g.L, {
                    disablePadding: !0,
                    classes: {
                        root: T
                    },
                    children: [M, null !== S ? (0, i.jsxs)(p.Z, {
                        disableGutters: !0,
                        children: [(0, i.jsx)(v.L, {
                            children: (0, i.jsx)(h.Z, {
                                variant: "rounded",
                                alt: "icon",
                                children: (0, i.jsx)(a.ef, {
                                    targetId: null !== (n = S.id) && void 0 !== n ? n : 0,
                                    type: s.U6[o.Z.Game],
                                    alt: null !== (r = S.name) && void 0 !== r ? r : "",
                                    returnPolicy: E ? a.O7.AutoGenerated : a.O7.PlaceHolder
                                })
                            })
                        }), (0, i.jsx)(b.Z, {
                            primary: S.name,
                            classes: {
                                primary: N
                            }
                        }), (0, i.jsx)(y.L, {
                            children: (0, i.jsx)(l.Z, {
                                menuItems: [(0, i.jsx)(d.Z, {
                                    actionName: D("Action.CopyUniverseID"),
                                    itemName: D("Label.UniverseID"),
                                    actionKey: "copyUniverseId",
                                    textToCopy: null == S ? void 0 : null === (e = S.id) || void 0 === e ? void 0 : e.toString()
                                }, "copy-universe-id"), (0, i.jsx)(d.Z, {
                                    actionName: D("Action.CopyStartPlaceID"),
                                    itemName: D("Label.StartPlaceID"),
                                    actionKey: "copyPlaceId",
                                    textToCopy: null == S ? void 0 : null === (t = S.rootPlaceId) || void 0 === t ? void 0 : t.toString()
                                }, "copy-start-place-id"), (0, i.jsx)(d.Z, {
                                    actionName: D("Action.CopyURL"),
                                    itemName: D("Label.URL"),
                                    actionKey: "copyURL",
                                    textToCopy: w.getExperienceOverviewUrl(null !== (I = null == S ? void 0 : S.id) && void 0 !== I ? I : 0)
                                }, "copy-url"), (0, i.jsx)(c.Z, {
                                    actionKey: "viewOnRoblox",
                                    url: Z(o.Z.Game, null !== (P = null == S ? void 0 : S.rootPlaceId) && void 0 !== P ? P : 0) || "",
                                    actionName: D("Action.OpenExperienceDetails")
                                }, "view-on-roblox"), (0, i.jsx)(u.Z, {
                                    universeId: null == S ? void 0 : S.id,
                                    placeId: null == S ? void 0 : S.rootPlaceId,
                                    openStudio: j
                                }, "edit-in-studio")]
                            })
                        })]
                    }) : k && (0, i.jsx)(f.C, {
                        color: "secondary"
                    })]
                })
            }
        },
        14742: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                a = n(25588);

            function r() {
                return (0, i.useContext)(a.Z)
            }
        },
        25588: function(e, t, n) {
            let i = (0, n(2784).createContext)({
                isPassRefreshRequired: !1,
                passDetails: void 0,
                refreshPassDetails: () => ({}),
                isPassLoading: !1
            });
            i.displayName = "Pass", t.Z = i
        },
        82588: function(e, t, n) {
            let i = (0, n(2784).createContext)({
                placeDetails: void 0,
                refreshPlaceDetails: () => Promise.reject(Error("not implemented")),
                canConfigurePlace: !1,
                containingUniverse: 0,
                isPlaceLoading: !1,
                placeIcon: void 0,
                refreshPlaceIcon: () => Promise.reject(Error("not implemented"))
            });
            i.displayName = "PlaceDetails", t.Z = i
        },
        54661: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                a = n(82588);

            function r() {
                return (0, i.useContext)(a.Z)
            }
        },
        74867: function(e, t, n) {
            var i = n(52322);
            n(2784);
            var a = n(39097),
                r = n.n(a),
                s = n(57889);
            t.Z = e => {
                let {
                    onClick: t,
                    href: n,
                    ...a
                } = e;
                return (0, i.jsx)(r(), { ...a,
                    href: n || "/",
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, i.jsx)(s.L, { ...a,
                        onClick: t
                    })
                })
            }
        },
        28057: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(91424),
                s = n(84499),
                o = n(12769),
                l = n(35358),
                d = n(26321),
                c = n(86658),
                u = n(71565),
                m = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return (0, u.Z)()(t => ({
                        imageStatusContainer: {
                            backgroundColor: e ? t.palette.surface.outline : t.palette.components.input.filled.enableFill,
                            color: e ? t.palette.content.inverse : t.palette.content.muted,
                            width: "100%",
                            height: "100%"
                        },
                        statusTextContainer: {
                            display: "block",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            color: e ? t.palette.content.inverse : t.palette.content.muted
                        },
                        imageContainer: {
                            width: "100%",
                            height: 0,
                            paddingTop: "100%",
                            position: "relative",
                            borderRadius: e ? 4 : 8,
                            overflow: "hidden",
                            backgroundColor: t.palette.components.input.filled.enableFill
                        },
                        imageWrapper: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            textAlign: "center"
                        },
                        image: {
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            left: "0",
                            bottom: "0",
                            objectFit: "contain"
                        },
                        bottomRightAdornmentContainer: {
                            position: "absolute",
                            bottom: 8,
                            right: 8,
                            padding: 4,
                            borderRadius: 4,
                            background: t.palette.surface[200],
                            display: "flex"
                        },
                        skeleton: {
                            height: "100%"
                        }
                    }))
                },
                g = e => {
                    let {
                        targetId: t,
                        targetType: n,
                        returnPolicy: u = r.O7.AutoGenerated,
                        isStatusTextShown: g = !1,
                        alt: p,
                        fontColor: v = "light",
                        bottomRightAdornment: h
                    } = e, {
                        classes: {
                            imageStatusContainer: b,
                            statusTextContainer: y,
                            imageWrapper: f,
                            imageContainer: A,
                            image: C,
                            bottomRightAdornmentContainer: x,
                            skeleton: Z
                        }
                    } = m("light" !== v)(), {
                        translate: w
                    } = (0, s.$G)(), [I, P] = (0, a.useState)(!1), [k, S] = (0, a.useState)(), E = (0, a.useCallback)(async function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if (t && e) {
                            P(!0);
                            try {
                                let a = i ? r.ThumbnailClient.reloadThumbnailImage : r.ThumbnailClient.getThumbnailImage,
                                    s = await a(e, t, n);
                                S(s)
                            } catch (e) {
                                S({
                                    state: r.vi.TemporarilyUnavailable
                                })
                            } finally {
                                P(!1)
                            }
                        }
                    }, []), T = (0, a.useMemo)(() => {
                        if (I) return (0, i.jsx)(o.S, {
                            classes: {
                                root: Z
                            },
                            variant: "rectangular",
                            animate: !0
                        });
                        let e = "",
                            t = null;
                        switch (null == k ? void 0 : k.state) {
                            case r.vi.InReview:
                                e = w("Label.InReview"), t = (0, i.jsx)(l.Cfe, {
                                    fontSize: "large",
                                    color: "dark" === v ? void 0 : "secondary"
                                });
                                break;
                            case r.vi.Blocked:
                                e = w("Label.Moderated"), t = (0, i.jsx)(l.OEM, {
                                    fontSize: "large",
                                    color: "dark" === v ? void 0 : "secondary"
                                });
                                break;
                            case r.vi.Error:
                            case r.vi.TemporarilyUnavailable:
                                e = w("Label.Unavailable"), t = (0, i.jsx)(l.rGW, {
                                    fontSize: "large",
                                    color: "dark" === v ? void 0 : "secondary"
                                });
                                break;
                            default:
                                return null
                        }
                        return (0, i.jsx)(d.Z, {
                            container: !0,
                            classes: {
                                root: b
                            },
                            justifyContent: "center",
                            alignItems: "center",
                            children: g ? (0, i.jsxs)("div", {
                                children: [t, (0, i.jsx)(c.Z, {
                                    variant: "smallLabel1",
                                    classes: {
                                        root: y
                                    },
                                    children: e
                                })]
                            }) : t
                        })
                    }, [I, null == k ? void 0 : k.state, b, g, y, Z, w, v]);
                    return (0, a.useEffect)(() => {
                        E(n, t, u)
                    }, [t, n, u, E]), {
                        thumbnailImage: (0, i.jsx)(d.Z, {
                            item: !0,
                            container: !0,
                            XSmall: 12,
                            justifyContent: "center",
                            alignItems: "center",
                            children: (0, i.jsxs)("div", {
                                className: A,
                                children: [(null == k ? void 0 : k.state) === r.vi.Completed ? (0, i.jsx)("img", {
                                    className: C,
                                    src: null == k ? void 0 : k.imageUrl,
                                    alt: p
                                }) : (0, i.jsx)("div", {
                                    className: f,
                                    children: T
                                }), h ? (0, i.jsx)("div", {
                                    className: x,
                                    children: h
                                }) : null]
                            })
                        }),
                        thumbnailData: k,
                        refreshThumbnail: (0, a.useCallback)(async () => E(n, t, u, !0), [E, n, t, u])
                    }
                }
        },
        28566: function(e, t, n) {
            var i = n(52322);
            n(2784);
            var a = n(91424),
                r = n(33308),
                s = n(93909);
            t.Z = e => {
                var t, n;
                let {
                    creator: o,
                    className: l
                } = e;
                return (0, i.jsx)(r.Z, {
                    className: l,
                    variant: o.creatorType === s.Z.Group ? "rounded" : "circular",
                    alt: "avatar",
                    children: (0, i.jsx)(a.ef, {
                        targetId: null !== (t = o.creatorId) && void 0 !== t ? t : 0,
                        type: o.creatorType === s.Z.Group ? a.Ij.groupIcon : a.Ij.avatarHeadshot,
                        alt: null !== (n = o.creatorName) && void 0 !== n ? n : "avatar"
                    })
                })
            }
        },
        70529: function(e, t, n) {
            n.d(t, {
                ZP: function() {
                    return o
                },
                iv: function() {
                    return r
                }
            });
            var i = n(89481),
                a = n(2784);
            let r = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        let n = window.localStorage.getItem(e);
                        return n ? JSON.parse(n) : t
                    } catch (e) {
                        return t
                    }
                },
                s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        window.localStorage.setItem(e, JSON.stringify(t))
                    } catch (e) {}
                };

            function o(e) {
                let [t, n] = (0, a.useState)({
                    params: {},
                    status: "initial",
                    isFetched: !1
                });
                return (0, a.useEffect)(() => {
                    "initial" === t.status && (async () => {
                        let t, a = {};
                        try {
                            n({
                                params: a,
                                cachedParams: t,
                                status: "loading",
                                isFetched: !1
                            }), t = r(e), n({
                                params: a,
                                cachedParams: t,
                                status: "loading",
                                isFetched: !1
                            }), a = await (0, i.Jb)(e), n({
                                params: a,
                                cachedParams: t,
                                isFetched: !0,
                                status: "success"
                            }), s(e, a)
                        } catch (e) {
                            n({
                                params: a,
                                cachedParams: t,
                                isFetched: !0,
                                status: "error"
                            })
                        }
                    })()
                }, [t.status, e]), t
            }
        },
        15733: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return a
                }
            });
            let i = "".concat("https://apis.roblox.com", "/oauth/.well-known/openid-configuration"),
                a = async function() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = null !== (e = t.redirectUri) && void 0 !== e ? e : window.location.href,
                        a = await fetch(i),
                        {
                            authorization_endpoint: r
                        } = await a.json(),
                        s = new URL(r),
                        o = {
                            client_id: "4273917941353191905",
                            response_type: "none",
                            redirect_uri: n,
                            scope: "openid",
                            prompt: "none"
                        };
                    void 0 !== t.state && (o.state = t.state);
                    let l = new URLSearchParams(o);
                    return s.search = l.toString(), s.href
                }
        },
        67957: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var i = n(35734),
                a = n(40907),
                r = n(24428);

            function s() {
                let {
                    groups: e
                } = (0, i.XY)(), t = (0, r.Z)(), {
                    currentItemGroupId: n
                } = (0, a.Z)();
                if (!t && n) {
                    var s;
                    return null !== (s = null == e ? void 0 : e.find(e => e.id === n)) && void 0 !== s ? s : null
                }
                return t
            }
        },
        2585: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            class i {
                getMainFeature(e) {
                    if (0 === this.allFeatures.length) return null;
                    let t = this.allFeatures.find(t => {
                        var n, i;
                        return null === (i = null === (n = t.isEnabledOnSettings) || void 0 === n ? void 0 : n.call(t, e)) || void 0 === i || i
                    });
                    return null != t ? t : null
                }
                getAllFeatures() {
                    return this.allFeatures
                }
                getAllFeaturesFlatten() {
                    return this.allFeatures.reduce((e, t) => (e.push(t), t.subFeatures && t.subFeatures.length > 0) ? e.concat(t.subFeatures) : e, [])
                }
                filterDisabledFeatures(e, t) {
                    return e.reduce((e, n) => {
                        var i;
                        let a = null === (i = n.isEnabledOnSettings) || void 0 === i ? void 0 : i.call(n, t);
                        if (a || void 0 === a) {
                            let i = n;
                            n.subFeatures && (i = { ...n,
                                subFeatures: this.filterDisabledFeatures([...n.subFeatures], t)
                            }), e.push(i)
                        }
                        return e
                    }, [])
                }
                overrideFeatures(e, t) {
                    return e.reduce((e, n) => {
                        let i = n;
                        return n.subFeatures && (i = { ...n,
                            subFeatures: this.overrideFeatures(n.subFeatures, t)
                        }), n.getQuery ? i = { ...n,
                            getQuery: () => n.getQuery ? n.getQuery(t || 0) : {}
                        } : n.getExternalPath && (i = { ...n,
                            getExternalPath: () => n.getExternalPath ? n.getExternalPath(t || 0) : ""
                        }), e.push(i), e
                    }, [])
                }
                addFeature(e) {
                    void 0 !== e.subFeatures && e.subFeatures.forEach(e => (null != e.subFeatures && e.subFeatures.forEach(e => Object.assign(e, {
                        path: e.path ? this.basePath + e.path : void 0
                    })), Object.assign(e, {
                        path: e.path ? this.basePath + e.path : void 0
                    }))), this.allFeatures.push({ ...e,
                        path: e.path ? this.basePath + e.path : void 0
                    })
                }
                constructor(e = "") {
                    this.basePath = e, this.allFeatures = []
                }
            }
            i.matchFeaturePath = (e, t, n) => {
                let {
                    path: i,
                    query: a = {}
                } = e, r = i && t.endsWith(i), s = Object.keys(a).every(e => !!(n && n[e] === a[e]));
                return !!(r && s)
            }
        },
        73868: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return A
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(99414),
                s = n(57889),
                o = n(86658),
                l = n(26321),
                d = n(18481),
                c = n(5632),
                u = n(39097),
                m = n.n(u),
                g = n(47889),
                p = n(97729),
                v = n.n(p);
            let h = (0, n(71565).Z)()(e => ({
                linkStyle: {
                    fontWeight: e.typography.fontWeightRegular,
                    color: e.palette.content.muted
                },
                breadcrumb: {
                    [e.breakpoints.down("Medium")]: {
                        display: "none"
                    }
                },
                breadcrumbBottomSpace: {
                    marginBottom: 48
                },
                compactBreadCrumb: {
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingBottom: 24,
                    paddingTop: 12
                }
            }));
            var b = n(33471),
                y = n(62395),
                f = n(40907),
                A = () => {
                    let {
                        pathname: e
                    } = (0, c.useRouter)(), {
                        classes: {
                            linkStyle: t,
                            breadcrumb: n,
                            breadcrumbBottomSpace: u,
                            compactBreadCrumb: p
                        }
                    } = h(), {
                        insideTopNavigationDrawer: A
                    } = (0, y.Z)(), C = (0, r.Z)(e => e.breakpoints.down("Medium")), x = (0, a.useMemo)(() => e.split("/").filter(e => !!e), [e]), {
                        itemNameMapping: Z,
                        pathLinkParams: w,
                        displayNameParam: I
                    } = (0, f.Z)(), P = (0, a.useCallback)((e, n) => A ? n ? (0, i.jsx)(m(), {
                        href: n,
                        passHref: !0,
                        legacyBehavior: !0,
                        children: (0, i.jsx)(s.L, {
                            underline: "always",
                            color: "inherit",
                            children: (0, i.jsx)(o.Z, {
                                color: "primary",
                                variant: "largeLabel1",
                                children: e
                            })
                        })
                    }, e) : (0, i.jsx)(o.Z, {
                        color: "primary",
                        variant: "largeLabel1",
                        children: e
                    }, e) : n ? (0, i.jsx)(m(), {
                        href: n,
                        passHref: !0,
                        legacyBehavior: !0,
                        children: (0, i.jsx)(s.L, {
                            classes: {
                                root: t
                            },
                            children: e
                        })
                    }, e) : (0, i.jsx)(o.Z, {
                        color: "secondary",
                        children: e
                    }, e), [A, t]), k = (e, t) => t && e.replace(/\[[^\]]*?\]/g, "") === (null == t ? void 0 : t.replace(/\d+/g, "")) ? void 0 : t, S = (0, a.useCallback)(t => {
                        var n, i;
                        let a = t.parentItemTypeName ? b.I[t.parentItemTypeName] : null,
                            r = Z[t.breadcrumbType],
                            s = null === (n = t.getLinkPath) || void 0 === n ? void 0 : n.call(t, w),
                            o = null === a || t.breadcrumbType !== a.breadcrumbType;
                        return [a ? P(a.displayName(I), k(e, null === (i = a.getLinkPath) || void 0 === i ? void 0 : i.call(a, w))) : null, r ? P(r, o ? k(e, s) : void 0) : null]
                    }, [Z, w, P, I, e]), E = (0, a.useMemo)(() => {
                        let e = [];
                        x.filter(e => b.I[e]).forEach(t => {
                            let n = b.I[t];
                            if (e.push(n.displayName(I)), n.withId) {
                                let t = Z[n.breadcrumbType];
                                t && e.push(t)
                            }
                        });
                        let [t, n] = e.reverse();
                        if (t && n) return "".concat(n, " / ").concat(t)
                    }, [x, I, Z]), T = E && (0, i.jsxs)(v(), {
                        children: [(0, i.jsx)("title", {
                            children: E
                        }), (0, i.jsx)("meta", {
                            property: "og:title",
                            content: E
                        }, "og:title")]
                    }), N = (0, a.useMemo)(() => x.reduce((e, t, n) => {
                        var a, r;
                        let s = b.I[t];
                        if (!s) return e;
                        if (n === x.length - 1) {
                            let n = s.displayName(I);
                            return s.withId && (n = null !== (r = Z[s.breadcrumbType]) && void 0 !== r ? r : s.displayName(I)), [...e, (0, i.jsx)(o.Z, {
                                color: "primary",
                                "aria-current": "page",
                                children: n
                            }, t)]
                        }
                        return s.withId ? e.concat(S(s)) : s.displayName(I) ? [...e, P(s.displayName(I), null === (a = s.getLinkPath) || void 0 === a ? void 0 : a.call(s, w))] : e
                    }, []), [x, I, P, w, Z, S]);
                    return C ? (0, i.jsxs)(l.Z, {
                        className: p,
                        children: [T, (0, i.jsx)(d.B, {
                            id: "navigation-breadcrumbs",
                            maxItems: 3,
                            "aria-label": "breadcrumb",
                            children: N.length > 1 && N
                        })]
                    }) : A ? (0, i.jsxs)(l.Z, {
                        children: [T, (0, i.jsxs)(d.B, {
                            maxItems: 3,
                            "aria-label": "breadcrumb",
                            children: [(0, i.jsx)(o.Z, {
                                color: "primary",
                                variant: "largeLabel1",
                                children: (0, i.jsx)(g.WJ, {})
                            }, "product-name"), N.slice(0, -1)]
                        })]
                    }) : (0, i.jsxs)(l.Z, {
                        className: "".concat(n, " ").concat(N.length > 1 ? u : ""),
                        children: [T, (0, i.jsx)(d.B, {
                            id: "navigation-breadcrumbs",
                            maxItems: 8,
                            "aria-label": "breadcrumb",
                            children: N.length > 1 && N
                        }), " "]
                    })
                }
        },
        19615: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return L
                },
                Z: function() {
                    return F
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(73025),
                s = n(84499),
                o = n(2012),
                l = n(67319),
                d = n(99414),
                c = n(26321),
                u = n(8793),
                m = n(53368),
                g = n(43733),
                p = n(47889),
                v = n(67357),
                h = n(35358),
                b = n(85612),
                y = n(33782),
                f = n(94545),
                A = n(62395),
                C = n(40907),
                x = n(13868),
                Z = n(61),
                w = n(27110),
                I = n(71565);
            let P = (0, I.Z)()((e, t, n) => ({
                root: {
                    height: "100%",
                    position: "relative"
                },
                primaryLeftNavCollapsedContainer: {
                    position: "absolute",
                    zIndex: 1,
                    borderRight: "1px solid ".concat(e.palette.components.input.outlined.enabledBorder)
                },
                primaryLeftNav: {
                    height: "100%",
                    backgroundColor: e.palette.navigation.default,
                    width: 64,
                    paddingLeft: 12,
                    paddingTop: 32,
                    paddingBottom: 32,
                    paddingRight: 12,
                    transition: "width 200ms ease-out"
                },
                primaryLeftNavExpanded: {
                    width: 282,
                    paddingLeft: 24,
                    paddingRight: 24
                },
                leftNavExpanded: {
                    paddingLeft: 24,
                    paddingTop: 32,
                    paddingBottom: 32,
                    paddingRight: 12,
                    [e.breakpoints.down("XLarge")]: {
                        padding: 24
                    }
                },
                secondaryLeftNavContainer: {
                    paddingLeft: 64,
                    transition: "opacity 200ms ease"
                },
                secondaryLeftNavOverlay: {
                    opacity: .3
                },
                secondaryLeftNav: {
                    paddingTop: 48,
                    width: 330
                },
                primaryLeftNavContent: {
                    minWidth: 40,
                    [".".concat(n.primaryLeftNavExpanded, " &")]: {
                        minWidth: 234
                    }
                },
                parentLeftNavDrawer: {
                    paddingTop: 24 + w.EA.large,
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingBottom: 24,
                    width: 340,
                    height: "100%",
                    backgroundColor: e.palette.surface[0]
                },
                leftNavDrawer: {
                    paddingTop: 20,
                    paddingBottom: 8,
                    width: "100%"
                },
                backButton: {
                    paddingLeft: 0,
                    marginBottom: 36,
                    justifyContent: "flex-start",
                    color: e.palette.actionV2.primary.fill,
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }
            }));
            var k = e => {
                    let {
                        primarySidebarExpanded: t,
                        setPrimarySidebarExpanded: n = () => {},
                        secondaryleftNavigationContents: r
                    } = e, {
                        classes: {
                            root: o,
                            primaryLeftNav: l,
                            primaryLeftNavCollapsedContainer: d,
                            secondaryLeftNavContainer: u,
                            secondaryLeftNavOverlay: m,
                            primaryLeftNavExpanded: g,
                            secondaryLeftNav: I,
                            leftNavExpanded: k,
                            primaryLeftNavContent: S,
                            parentLeftNavDrawer: E,
                            leftNavDrawer: T,
                            backButton: N
                        },
                        cx: j
                    } = P(), {
                        classes: {
                            scrollableY: M
                        }
                    } = (0, w.ZP)(), {
                        insideTopNavigationDrawer: D
                    } = (0, A.Z)(), {
                        parentBreadcrumbLevels: U
                    } = (0, C.Z)(), {
                        translate: L
                    } = (0, s.$G)(), {
                        toggleHomeDrawerOpen: F
                    } = (0, p.iK)(), [R, H] = (0, a.useState)([]), G = (0, a.useCallback)(e => {
                        var t;
                        return e === U.length ? L("Label.CreatorHub") : null !== (t = U[e].sidebarName) && void 0 !== t ? t : L("Action.Back")
                    }, [U, L]), O = (0, a.useCallback)(e => {
                        e === U.length ? F(!0) : H([...R, e])
                    }, [R, U.length, F]), B = (0, a.useMemo)(() => ({
                        primarySidebarExpanded: !0
                    }), []);
                    return ((0, a.useEffect)(() => {
                        function e() {
                            r && n(!1)
                        }
                        return window.addEventListener("blur", e), () => {
                            window.removeEventListener("blur", e)
                        }
                    }, [r, n]), D) ? (0, i.jsxs)(f.Z.Provider, {
                        value: B,
                        children: [(0, i.jsx)(c.Z, {
                            className: o,
                            component: "aside",
                            direction: "row",
                            container: !0,
                            children: (0, i.jsxs)(c.Z, {
                                className: j(M, T),
                                item: !0,
                                component: "nav",
                                children: [(0, i.jsx)(v.Z, {
                                    color: "primary",
                                    size: "small",
                                    startIcon: (0, i.jsx)(h.xhZ, {}),
                                    className: N,
                                    onClick: () => {
                                        O(0)
                                    },
                                    children: G(0)
                                }), r]
                            })
                        }), U.map((e, t) => {
                            let {
                                SidebarComponent: n,
                                pathname: a
                            } = e;
                            return (0, i.jsxs)(b.D, {
                                variant: "persistent",
                                anchor: "left",
                                open: R.includes(t),
                                classes: {
                                    paper: j(E, M)
                                },
                                children: [(0, i.jsx)(v.Z, {
                                    color: "primary",
                                    size: "small",
                                    startIcon: (0, i.jsx)(h.xhZ, {}),
                                    className: N,
                                    onClick: () => {
                                        O(t + 1)
                                    },
                                    children: G(t + 1)
                                }), (0, i.jsx)(n, {})]
                            }, a)
                        })]
                    }) : r ? (0, i.jsxs)(c.Z, {
                        className: o,
                        component: "aside",
                        direction: "row",
                        container: !0,
                        children: [(0, i.jsx)(c.Z, {
                            className: j(d, M),
                            item: !0,
                            component: "nav",
                            children: (0, i.jsx)(c.Z, {
                                className: j(l, {
                                    [g]: t
                                }),
                                container: !0,
                                onMouseEnter: () => {
                                    n(!0)
                                },
                                onMouseLeave: e => {
                                    e.relatedTarget !== window && n(!1)
                                },
                                alignItems: "stretch",
                                wrap: "nowrap",
                                children: (0, i.jsx)(c.Z, {
                                    XSmall: !0,
                                    item: !0,
                                    container: !0,
                                    direction: "column",
                                    className: S,
                                    wrap: "nowrap",
                                    children: (0, i.jsx)(x.ZP, {
                                        children: (0, i.jsx)(Z.Z, {})
                                    })
                                })
                            })
                        }), (0, i.jsx)(c.Z, {
                            className: j({
                                [m]: t
                            }, u, M),
                            item: !0,
                            component: "nav",
                            children: (0, i.jsx)(c.Z, {
                                className: j(k, I),
                                container: !0,
                                direction: "column",
                                children: r
                            })
                        }), (0, i.jsx)(y.Z, {
                            orientation: "vertical",
                            flexItem: !0
                        })]
                    }) : (0, i.jsxs)(c.Z, {
                        className: o,
                        component: "aside",
                        direction: "row",
                        container: !0,
                        children: [(0, i.jsx)(c.Z, {
                            className: M,
                            item: !0,
                            component: "nav",
                            children: (0, i.jsx)(c.Z, {
                                className: j(l, {
                                    [g]: t
                                }),
                                container: !0,
                                alignItems: "stretch",
                                wrap: "nowrap",
                                children: (0, i.jsx)(c.Z, {
                                    XSmall: !0,
                                    item: !0,
                                    container: !0,
                                    direction: "column",
                                    className: S,
                                    wrap: "nowrap",
                                    children: (0, i.jsx)(x.ZP, {
                                        children: (0, i.jsx)(Z.Z, {})
                                    })
                                })
                            })
                        }), (0, i.jsx)(y.Z, {
                            orientation: "vertical",
                            flexItem: !0
                        })]
                    })
                },
                S = n(25060);
            let E = (0, I.Z)()(e => ({
                root: {
                    height: "100vh"
                },
                main: {
                    flexGrow: 1,
                    paddingBottom: 48
                },
                leftNav: {
                    position: "fixed",
                    width: "".concat(w.qU.large, "px"),
                    [e.breakpoints.down("Medium")]: {
                        width: "".concat(w.qU.compact, "px")
                    },
                    top: "".concat(w.EA.large, "px"),
                    bottom: 0,
                    overflowY: "auto"
                }
            }));
            var T = n(73868),
                N = n(38550),
                j = n(70630),
                M = n(69658),
                D = e => {
                    let {
                        leftNavigationContents: t,
                        disableLeftNavigation: n
                    } = e, r = (0, a.useMemo)(() => ({
                        insideTopNavigationDrawer: !0
                    }), []);
                    return (0, i.jsx)(p._g, {
                        rightContent: (0, i.jsxs)(c.Z, {
                            container: !0,
                            justifyContent: "flex-end",
                            wrap: "nowrap",
                            children: [(0, i.jsx)(p.Co, {}), (0, i.jsx)(M.Z, {}), (0, i.jsx)(N.Z, {})]
                        }),
                        compactProductSidbarNavigation: !1 === n ? (0, i.jsx)(j.Z.Provider, {
                            value: r,
                            children: (0, i.jsx)(x.ZP, {
                                children: (0, i.jsx)(k, {
                                    primarySidebarExpanded: !0,
                                    secondaryleftNavigationContents: null != t ? t : (0, i.jsx)(Z.Z, {})
                                })
                            })
                        }) : void 0
                    })
                },
                U = n(94823);
            let L = "applayout-scroll-container";
            var F = (0, s.Zh)(e => {
                let {
                    disableLeftNavigation: t = !1,
                    leftNavigationContents: n,
                    noBreadCrumbs: s = !1,
                    usePublicFooter: o = !1,
                    children: v
                } = e, {
                    user: h
                } = (0, l.je)(), b = (0, d.Z)(e => e.breakpoints.down("Medium")), {
                    classes: {
                        contentV2: y,
                        fullWidthContentV2: f,
                        minHeight: A,
                        fullHeight: C,
                        centerContent: x,
                        scrollableY: Z,
                        positionRelative: I
                    },
                    cx: P
                } = (0, w.ZP)(), {
                    classes: {
                        root: N,
                        main: j
                    }
                } = E(), {
                    toggleProductNavigationDrawer: M
                } = (0, p.iK)(), F = (0, d.Z)(e => e.breakpoints.down("Large")), R = !t && null !== h, H = !F && R, G = (0, a.useCallback)(() => {
                    M && M(!1)
                }, [M]);
                (0, m.Z)(void 0, G);
                let {
                    primarySidebarExpanded: O,
                    setPrimarySidebarExpanded: B
                } = (0, U.Z)();
                return (0, a.useEffect)(() => {
                    B && setTimeout(() => {
                        B(!n)
                    }, 0)
                }, [n, B]), (0, i.jsx)(c.Z, {
                    className: N,
                    container: !0,
                    direction: "column",
                    children: (0, i.jsxs)(u.N, {
                        children: [(0, i.jsx)(D, {
                            disableLeftNavigation: t,
                            leftNavigationContents: R ? n : null
                        }), (0, i.jsxs)(c.Z, {
                            id: S.A,
                            XSmall: !0,
                            container: !0,
                            item: !0,
                            direction: "row",
                            className: P(A, I),
                            children: [(0, i.jsx)(c.Z, {
                                item: !0,
                                className: C,
                                id: "left-navigation",
                                children: !F && (H || b) && (0, i.jsx)(k, {
                                    primarySidebarExpanded: O,
                                    setPrimarySidebarExpanded: B,
                                    secondaryleftNavigationContents: !H && b ? null : n
                                })
                            }), (0, i.jsx)(c.Z, {
                                id: L,
                                item: !0,
                                XSmall: !0,
                                className: P(x, C, Z),
                                children: (0, i.jsxs)(c.Z, {
                                    className: !F && H ? y : f,
                                    container: !0,
                                    direction: "column",
                                    wrap: "nowrap",
                                    children: [(0, i.jsxs)(c.Z, {
                                        className: j,
                                        component: "main",
                                        item: !0,
                                        alignItems: "stretch",
                                        children: [!s && (0, i.jsx)(T.Z, {}), (0, i.jsx)(r.SV, {
                                            fallback: e => {
                                                let {
                                                    resetError: t
                                                } = e;
                                                return (0, i.jsx)(g.AN, {
                                                    onReload: t
                                                })
                                            },
                                            children: v
                                        })]
                                    }), (0, i.jsx)("footer", {
                                        children: (0, i.jsxs)(a.Fragment, {
                                            children: [o && (0, i.jsx)(p.dX, {}), (0, i.jsx)(p.pz, {})]
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }, [o.Z.Navigation, o.Z.Creations, o.Z.Features, o.Z.AssetTypes, o.Z.SendrNotificationPreferences, o.Z.Advanced, o.Z.OpenCloud, o.Z.Error, o.Z.DataCollectionSettings, o.Z.UnifiedNavigation, o.Z.Payouts])
        },
        27110: function(e, t, n) {
            n.d(t, {
                EA: function() {
                    return a
                },
                qU: function() {
                    return r
                }
            });
            var i = n(71565);
            let a = {
                    large: 60,
                    compact: 60
                },
                r = {
                    large: 340,
                    compact: 0
                },
                s = (0, i.Z)()(e => ({
                    header: {
                        width: "100%",
                        height: "".concat(a.large, "px"),
                        position: "fixed",
                        top: "0px",
                        zIndex: e.zIndex.appBar,
                        [e.breakpoints.down("Medium")]: {
                            height: "".concat(a.compact, "px")
                        }
                    },
                    content: {
                        marginLeft: "".concat(r.large, "px"),
                        width: "calc(100% - ".concat(r.large, "px)"),
                        padding: "".concat(48, "px ").concat(48, "px"),
                        backgroundColor: e.palette.navigation.default,
                        [e.breakpoints.down("XLarge")]: {
                            padding: "".concat(48, "px ").concat(24, "px")
                        },
                        [e.breakpoints.down("Large")]: {
                            padding: "".concat(48, "px ").concat(24, "px")
                        },
                        [e.breakpoints.down("Medium")]: {
                            marginLeft: "".concat(r.compact, "px"),
                            width: "calc(100% - ".concat(r.compact, "px)"),
                            padding: "".concat(48, "px ").concat(0, "px")
                        }
                    },
                    fullWidthContent: {
                        width: "100%",
                        backgroundColor: e.palette.navigation.default,
                        [e.breakpoints.down("XLarge")]: {
                            padding: 32
                        },
                        [e.breakpoints.down("Medium")]: {
                            padding: 0
                        }
                    },
                    contentV2: {
                        width: "100%",
                        height: "100%",
                        maxWidth: "1920px",
                        padding: "".concat(48, "px ").concat(48, "px"),
                        backgroundColor: e.palette.navigation.default,
                        [e.breakpoints.down("XLarge")]: {
                            padding: "".concat(48, "px ").concat(24, "px")
                        },
                        [e.breakpoints.down("Large")]: {
                            padding: "".concat(48, "px ").concat(24, "px")
                        },
                        [e.breakpoints.down("Medium")]: {
                            padding: "".concat(48, "px ").concat(0, "px")
                        }
                    },
                    fullWidthContentV2: {
                        width: "100%",
                        height: "100%",
                        maxWidth: "1920px",
                        backgroundColor: e.palette.navigation.default,
                        [e.breakpoints.down("XXLarge")]: {
                            padding: 32
                        },
                        [e.breakpoints.down("Medium")]: {
                            padding: 12
                        }
                    },
                    minHeight: {
                        minHeight: 0
                    },
                    fullHeight: {
                        height: "100%"
                    },
                    centerContent: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    positionRelative: {
                        position: "relative"
                    },
                    scrollableY: {
                        height: "100%",
                        overflowY: "auto",
                        overflowX: "hidden",
                        scrollbarColor: "grey transparent",
                        scrollbarWidth: "thin",
                        "&::-webkit-scrollbar": {
                            width: 6
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "grey",
                            borderRadius: "10rem"
                        },
                        "&::-webkit-scrollbar-track": {
                            background: "transparent"
                        }
                    }
                }));
            t.ZP = s
        },
        33471: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return y
                }
            });
            var i = n(52322),
                a = n(17952),
                r = n(3074),
                s = n(84951),
                o = n(5770);
            n(2784);
            var l = n(67319),
                d = n(35734),
                c = n(26321),
                u = n(86357),
                m = n(67957),
                g = () => {
                    let {
                        user: e
                    } = (0, l.je)(), {
                        groups: t
                    } = (0, d.XY)(), n = (0, m.Z)(), a = null == e ? void 0 : e.name, r = n ? n.name : a;
                    return (0, i.jsx)(c.Z, {
                        container: !0,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        wrap: "nowrap",
                        children: null !== e && null !== t && void 0 !== n ? r : (0, i.jsx)(u.C, {
                            color: "secondary"
                        })
                    })
                },
                p = n(61),
                v = n(48489);
            let h = (e, t) => e.args && e.args.value ? t(e.key, {
                    [e.args.param]: t(e.args.value)
                }) : t(e.key),
                b = e => {
                    var t;
                    let n = parseInt(null !== (t = e.developerItemId) && void 0 !== t ? t : "", 10);
                    return Number.isNaN(n) ? s.dashboard.configureCreatorStoreItemBasePath : s.dashboard.getConfigureCreatorStoreItemUrl(n)
                },
                y = {
                    creations: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Creations"
                            }, t)
                        },
                        breadcrumbType: v.Z.Creations,
                        getLinkPath: e => (null == e ? void 0 : e.groupId) ? "/dashboard/creations?groupId=".concat(null == e ? void 0 : e.groupId) : "/dashboard/creations",
                        SidebarComponentAsParent: p.Z,
                        getSidebarName: () => (0, i.jsx)(g, {})
                    },
                    experiences: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Games"
                            }, t)
                        },
                        breadcrumbType: v.Z.Games,
                        withId: !0,
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/overview")
                    },
                    badges: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Badges"
                            }, t)
                        },
                        breadcrumbType: v.Z.Badge,
                        parentItemTypeName: "associated-items",
                        withId: !0,
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/badges/").concat(e.badgeId, "/overview"),
                        SidebarComponentAsParent: a.Z,
                        getSidebarName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Experience"
                            }, t)
                        }
                    },
                    bundle: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Creations"
                            }, t)
                        },
                        breadcrumbType: v.Z.Bundle,
                        getLinkPath: e => "/dashboard/creations/bundle/".concat(e.bundleId, "/configure"),
                        withId: !0
                    },
                    "experience-subscriptions": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Subscriptions"
                            }, t)
                        },
                        breadcrumbType: v.Z.ExperienceSubscription,
                        parentItemTypeName: "associated-items",
                        withId: !0,
                        SidebarComponentAsParent: a.Z,
                        getSidebarName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Experience"
                            }, t)
                        }
                    },
                    "associated-items": {
                        displayName: e => {
                            let {
                                translate: t,
                                itemType: n
                            } = e;
                            return n ? h({
                                key: r.ZF[n]
                            }, t) : h({
                                key: "Heading.AssociatedItems"
                            }, t)
                        },
                        breadcrumbType: v.Z.AssociatedItems,
                        getLinkPath: e => (null == e ? void 0 : e.associatedItemType) ? "/dashboard/creations/experiences/".concat(e.baseId, "/associated-items?activeTab=").concat(e.associatedItemType) : "/dashboard/creations/experiences/".concat(e.baseId, "/associated-items")
                    },
                    catalog: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Creations"
                            }, t)
                        },
                        breadcrumbType: v.Z.Catalog,
                        getLinkPath: e => "/dashboard/creations/catalog/".concat(e.assetId, "/configure"),
                        withId: !0
                    },
                    store: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Creations"
                            }, t)
                        },
                        breadcrumbType: v.Z.CreatorStore,
                        getLinkPath: b,
                        withId: !0
                    },
                    "version-history": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.VersionHistory"
                            }, t)
                        },
                        breadcrumbType: v.Z.CreatorStore,
                        getLinkPath: b,
                        withId: !1
                    },
                    localization: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Localization"
                            }, t)
                        },
                        breadcrumbType: v.Z.Localization,
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/localization")
                    },
                    activityFeed: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.ActivityFeed"
                            }, t)
                        },
                        breadcrumbType: v.Z.ActivityHistory,
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/activity-history")
                    },
                    notifications: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Notifications"
                            }, t)
                        },
                        breadcrumbType: v.Z.Notifications,
                        getLinkPath: e => e.baseId ? "/dashboard/creations/experiences/".concat(e.baseId, "/notifications") : "/settings/notifications"
                    },
                    update: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Notifications.UpdateContent"
                            }, t)
                        },
                        breadcrumbType: v.Z.Notifications
                    },
                    "social-links": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.SocialLinks"
                            }, t)
                        },
                        breadcrumbType: v.Z.SocialLinks,
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/social-links")
                    },
                    updates: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Updates"
                            }, t)
                        },
                        breadcrumbType: v.Z.Updates,
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/updates")
                    },
                    translation: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Translation"
                            }, t)
                        },
                        breadcrumbType: v.Z.Translation,
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/associated-items")
                    },
                    overview: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Overview"
                            }, t)
                        },
                        breadcrumbType: v.Z.Overview
                    },
                    passes: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.GamePass"
                            }, t)
                        },
                        breadcrumbType: v.Z.GamePass,
                        parentItemTypeName: "associated-items",
                        withId: !0,
                        SidebarComponentAsParent: a.Z,
                        getSidebarName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Experience"
                            }, t)
                        }
                    },
                    "developer-products": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.DeveloperProduct"
                            }, t)
                        },
                        breadcrumbType: v.Z.DeveloperProduct,
                        withId: !0,
                        parentItemTypeName: "associated-items",
                        SidebarComponentAsParent: a.Z,
                        getSidebarName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Experience"
                            }, t)
                        }
                    },
                    "avatar-items": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Label.AvatarItems"
                            }, t)
                        },
                        breadcrumbType: v.Z.AnalyticsMonetization
                    },
                    "avatar-creation-tokens": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.AvatarCreationTokens"
                            }, t)
                        },
                        getLinkPath: e => s.dashboard.getMonetizationAvatarCreationTokensUrl(Number(e.baseId)),
                        breadcrumbType: v.Z.AnalyticsMonetization
                    },
                    subscriptions: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Label.Subscriptions"
                            }, t)
                        },
                        breadcrumbType: v.Z.AnalyticsMonetization
                    },
                    commerce: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Commerce"
                            }, t)
                        },
                        getLinkPath: e => s.dashboard.getMonetizationCommerceUrl(Number(e.baseId)),
                        breadcrumbType: v.Z.Commerce
                    },
                    "create-products": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.CreateProduct"
                            }, t)
                        },
                        getLinkPath: e => s.dashboard.getMonetizationCommerceCreateProductUrl(Number(e.baseId)),
                        breadcrumbType: v.Z.CreateProducts
                    },
                    eligibility: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Eligibility"
                            }, t)
                        },
                        breadcrumbType: v.Z.Eligibility
                    },
                    "priced-assets": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.PricedAssets"
                            }, t)
                        },
                        breadcrumbType: v.Z.PricedAssets
                    },
                    "audio-distribution": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.AudioDistribution"
                            }, t)
                        },
                        breadcrumbType: v.Z.AudioDistribution
                    },
                    "contribution-report": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.ContributionReports"
                            }, t)
                        },
                        breadcrumbType: v.Z.ContributionReport
                    },
                    acquisition: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Acquisition"
                            }, t)
                        },
                        breadcrumbType: v.Z.AnalyticsAcquisition
                    },
                    engagement: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Engagement"
                            }, t)
                        },
                        breadcrumbType: v.Z.AnalyticsEngagement
                    },
                    retention: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Retention"
                            }, t)
                        },
                        breadcrumbType: v.Z.AnalyticsRetention
                    },
                    monetization: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Monetization"
                            }, t)
                        },
                        breadcrumbType: v.Z.AnalyticsMonetization,
                        getLinkPath: e => s.dashboard.getMonetizationOverviewUrl(Number(e.baseId))
                    },
                    explore: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Explore"
                            }, t)
                        },
                        breadcrumbType: v.Z.AnalyticsExploreMode
                    },
                    "price-optimization": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.PriceOptimization"
                            }, t)
                        },
                        breadcrumbType: v.Z.PriceOptimization,
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/monetization/price-optimization")
                    },
                    "price-check": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.DynamicPriceCheck"
                            }, t)
                        },
                        breadcrumbType: v.Z.PriceCheck
                    },
                    "immersive-ads": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.ImmersiveAds"
                            }, t)
                        },
                        breadcrumbType: v.Z.ImmersiveAds
                    },
                    "engagement-payouts": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.EngagementBasedPayouts"
                            }, t)
                        },
                        breadcrumbType: v.Z.AnalyticsMonetization
                    },
                    "experience-questionnaire": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.ExperienceQuestionnaire"
                            }, t)
                        },
                        breadcrumbType: v.Z.Questionnaire
                    },
                    guidelines: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Guidelines"
                            }, t)
                        },
                        breadcrumbType: v.Z.Questionnaire
                    },
                    configure: {
                        displayName: e => {
                            let {
                                translate: t,
                                itemType: n
                            } = e;
                            return n === o.Z.CatalogAsset || n === o.Z.LibraryAsset || n === o.Z.Bundle || n === o.Z.Event || n === o.Z.AvatarCreationToken ? h({
                                key: "Heading.Configure"
                            }, t) : n === o.Z.Game ? h({
                                key: "Heading.ContentSettings"
                            }, t) : n === o.Z.ExperienceSubscription ? h({
                                key: "Heading.UpdateSubscription"
                            }, t) : h({
                                key: "Heading.BasicSettings"
                            }, t)
                        },
                        breadcrumbType: v.Z.Configure
                    },
                    "communication-settings": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.CommunicationSettings"
                            }, t)
                        },
                        breadcrumbType: v.Z.CommunicationSettings,
                        getLinkPath: e => "/creations/experiences/".concat(e.baseId, "/communication-settings")
                    },
                    sales: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Sales"
                            }, t)
                        },
                        breadcrumbType: v.Z.Sales
                    },
                    create: {
                        displayName: e => {
                            let {
                                translate: t,
                                itemType: n
                            } = e;
                            return n ? h({
                                key: "Heading.Create",
                                args: {
                                    param: "itemType",
                                    value: r.MG[n]
                                }
                            }, t) : h({
                                key: "Heading.Create"
                            }, t)
                        },
                        breadcrumbType: v.Z.Create
                    },
                    places: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Places"
                            }, t)
                        },
                        breadcrumbType: v.Z.Places,
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/places"),
                        parentItemTypeName: "places",
                        withId: !0,
                        SidebarComponentAsParent: a.Z,
                        getSidebarName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Experience"
                            }, t)
                        }
                    },
                    manage: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Manage"
                            }, t)
                        },
                        breadcrumbType: v.Z.Manage
                    },
                    icon: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Icon"
                            }, t)
                        },
                        breadcrumbType: v.Z.Icon
                    },
                    events: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Events"
                            }, t)
                        },
                        breadcrumbType: v.Z.Event,
                        withId: !0,
                        parentItemTypeName: "events",
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/events")
                    },
                    thumbnails: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Thumbnails"
                            }, t)
                        },
                        breadcrumbType: v.Z.Thumbnails
                    },
                    access: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.AccessSettings"
                            }, t)
                        },
                        breadcrumbType: v.Z.Access
                    },
                    secrets: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Secrets"
                            }, t)
                        },
                        breadcrumbType: v.Z.Secrets
                    },
                    settings: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Settings"
                            }, t)
                        },
                        breadcrumbType: v.Z.Settings
                    },
                    permissions: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Permissions"
                            }, t)
                        },
                        breadcrumbType: v.Z.Permissions
                    },
                    webhooks: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Webhooks"
                            }, t)
                        },
                        breadcrumbType: v.Z.Webhooks
                    },
                    "data-collection": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.DataSharing"
                            }, t)
                        },
                        breadcrumbType: v.Z.DataSharing
                    },
                    community: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.CommunityLink"
                            }, t)
                        },
                        breadcrumbType: v.Z.Community,
                        getLinkPath: e => "/dashboard/creations/experiences/".concat(e.baseId, "/community")
                    },
                    "[notificationCategory]": {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Notifications"
                            }, t)
                        },
                        withId: !0,
                        breadcrumbType: v.Z.Category
                    },
                    preferences: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Preferences"
                            }, t)
                        },
                        breadcrumbType: v.Z.Preferences
                    },
                    advanced: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Header.Title"
                            }, t)
                        },
                        breadcrumbType: v.Z.Advanced
                    },
                    bans: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.Bans"
                            }, t)
                        },
                        breadcrumbType: v.Z.Bans,
                        getLinkPath: e => s.dashboard.getUserBansUrl(Number(e.baseId))
                    },
                    add: {
                        displayName: e => {
                            let {
                                translate: t
                            } = e;
                            return h({
                                key: "Heading.AddUsersToBan"
                            }, t)
                        },
                        breadcrumbType: v.Z.Add
                    },
                    reorder: {
                        displayName: () => "Reorder",
                        breadcrumbType: v.Z.Reorder
                    }
                }
        },
        48489: function(e, t) {
            var n, i;
            (i = n || (n = {})).Creations = "creations", i.Games = "games", i.GamePass = "passes", i.Badge = "badges", i.Bundle = "bundle", i.DeveloperProduct = "developer-products", i.Catalog = "catalog", i.AssociatedItems = "associated-items", i.Localization = "localization", i.ActivityHistory = "activity-history", i.Notifications = "notifications", i.SocialLinks = "social-links", i.Translation = "translation", i.Overview = "overview", i.ContributionReport = "contribution-report", i.AnalyticsMonetization = "analytics-monetization", i.AnalyticsRetention = "analytics-retention", i.AnalyticsEngagement = "analytics-engagement", i.AnalyticsAcquisition = "analytics-acquisition", i.AnalyticsExploreMode = "analytics-explore-mode", i.ImmersiveAds = "immersive-ads", i.Questionnaire = "experience-questionnaire", i.Guidelines = "guidelines", i.Configure = "configure", i.CommunicationSettings = "communication-settings", i.Sales = "sales", i.Create = "create", i.Updates = "updates", i.Places = "places", i.Manage = "manage", i.Icon = "icon", i.Event = "event", i.Thumbnails = "thumbnails", i.Access = "access", i.Secrets = "secrets", i.CreatorStore = "store", i.Settings = "settings", i.Permissions = "permissions", i.Webhooks = "webhooks", i.Community = "community", i.Category = "category", i.Experiences = "experiences", i.ExperienceSubscription = "experience-subscriptions", i.Commerce = "commerce", i.CreateProducts = "create-products", i.Preferences = "preferences", i.Advanced = "advanced", i.DataSharing = "data-collection", i.PricedAssets = "priced-assets", i.Eligibility = "eligibility", i.AudioDistribution = "audio-distribution", i.PriceOptimization = "price-optimization", i.PriceCheck = "price-check", i.Bans = "bans", i.Add = "add", i.Reorder = "reorder", i.AvatarCreationTokens = "avatar-creation-tokens", t.Z = n
        },
        70630: function(e, t, n) {
            let i = (0, n(2784).createContext)({
                insideTopNavigationDrawer: !1
            });
            i.displayName = "TopNavigationSidebarDrawerContext", t.Z = i
        },
        40907: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return w
                }
            });
            var i = n(97533),
                a = n(14742),
                r = n(27946),
                s = n(54661),
                o = n(7615),
                l = n(56820),
                d = n(17921),
                c = n(5257),
                u = n(68343),
                m = n(62645),
                g = n(5770),
                p = n(93909),
                v = n(70529),
                h = n(89481),
                b = n(60699),
                y = n(84499),
                f = n(5632),
                A = n(2784),
                C = n(99742),
                x = n(33471),
                Z = n(48489);

            function w() {
                var e;
                let {
                    translate: t
                } = (0, y.$G)(), {
                    gameDetails: n
                } = (0, c.I)(), {
                    bundleDetails: w
                } = (0, i.Z)(), {
                    badgeDetails: I
                } = (0, u.Z)(), {
                    developerProductDetails: P
                } = (0, m.Z)(), {
                    passDetails: k
                } = (0, a.Z)(), {
                    assetDetails: S
                } = (0, r.Z)(), {
                    placeDetails: E
                } = (0, s.Z)(), {
                    eventDetails: T
                } = (0, o.Z)(), {
                    developerItemDetails: N
                } = (0, l.lL)(), {
                    experienceSubscriptionDetails: j
                } = (0, d.Z)(), {
                    query: {
                        id: M,
                        badgeId: D,
                        notificationCategory: U,
                        activeTab: L
                    },
                    pathname: F
                } = (0, f.useRouter)(), {
                    isFetched: R,
                    params: H
                } = (0, v.ZP)(h.ky.CreatorDashboard), G = (0, A.useMemo)(() => {
                    var e, t, i;
                    return (null == n ? void 0 : null === (e = n.creator) || void 0 === e ? void 0 : e.type) === "Group" ? null == n ? void 0 : null === (i = n.creator) || void 0 === i ? void 0 : null === (t = i.id) || void 0 === t ? void 0 : t.toString() : null
                }, [n]), O = (0, A.useMemo)(() => {
                    var e;
                    return null == S ? void 0 : null === (e = S.id) || void 0 === e ? void 0 : e.toString()
                }, [S]), B = (0, A.useMemo)(() => {
                    var e;
                    return null == k ? void 0 : null === (e = k.gamePassId) || void 0 === e ? void 0 : e.toString()
                }, [k]), K = (0, A.useMemo)(() => {
                    var e;
                    return null == w ? void 0 : null === (e = w.bundleInfo) || void 0 === e ? void 0 : e.id
                }, [w]), z = (0, A.useMemo)(() => null == j ? void 0 : j.id, [j]), V = (0, A.useMemo)(() => {
                    var e, i, a, r, s;
                    return {
                        [Z.Z.Bundle]: null == w ? void 0 : null === (e = w.bundleInfo) || void 0 === e ? void 0 : e.name,
                        [Z.Z.Games]: null == n ? void 0 : n.name,
                        [Z.Z.Badge]: null == I ? void 0 : I.name,
                        [Z.Z.DeveloperProduct]: null !== (i = null == P ? void 0 : P.name) && void 0 !== i ? i : void 0,
                        [Z.Z.GamePass]: null !== (a = null == k ? void 0 : k.name) && void 0 !== a ? a : void 0,
                        [Z.Z.Catalog]: null == S ? void 0 : S.name,
                        [Z.Z.Places]: null == E ? void 0 : E.name,
                        [Z.Z.Event]: null !== (r = null == T ? void 0 : T.title) && void 0 !== r ? r : void 0,
                        [Z.Z.CreatorStore]: null == N ? void 0 : N.name,
                        [Z.Z.Category]: U ? t("Label.Category".concat(U)) : void 0,
                        [Z.Z.ExperienceSubscription]: null !== (s = null == j ? void 0 : j.name) && void 0 !== s ? s : void 0
                    }
                }, [null == w ? void 0 : null === (e = w.bundleInfo) || void 0 === e ? void 0 : e.name, null == n ? void 0 : n.name, null == I ? void 0 : I.name, null == P ? void 0 : P.name, null == k ? void 0 : k.name, null == S ? void 0 : S.name, null == E ? void 0 : E.name, null == T ? void 0 : T.title, null == N ? void 0 : N.name, U, null == j ? void 0 : j.name, t]), q = (0, A.useMemo)(() => F.includes(Z.Z.ExperienceSubscription) ? g.Z.ExperienceSubscription : F.includes(Z.Z.Badge) ? g.Z.Badge : F.includes(Z.Z.Bundle) ? g.Z.Bundle : F.includes(Z.Z.GamePass) ? g.Z.GamePass : F.includes(Z.Z.DeveloperProduct) ? g.Z.DeveloperProduct : F.includes(Z.Z.Catalog) ? g.Z.CatalogAsset : F.includes(Z.Z.CreatorStore) ? g.Z.LibraryAsset : F.includes(Z.Z.Places) ? g.Z.Places : F.includes(Z.Z.Event) ? g.Z.Event : F.includes(Z.Z.Notifications) ? g.Z.Notifications : F.includes(Z.Z.AssociatedItems) && L ? L : F.includes(Z.Z.AvatarCreationTokens) ? g.Z.AvatarCreationToken : F.includes(Z.Z.Experiences) ? g.Z.Game : F.includes(Z.Z.Advanced) ? g.Z.Advanced : void 0, [L, F]), _ = (0, A.useMemo)(() => {
                    var e, t, i, a, r, s, o, l, d, c, u, m;
                    switch (q) {
                        case g.Z.Game:
                        case g.Z.Badge:
                        case g.Z.GamePass:
                        case g.Z.Places:
                        case g.Z.ExperienceSubscription:
                        case g.Z.AvatarCreationToken:
                            return (null == n ? void 0 : null === (e = n.creator) || void 0 === e ? void 0 : e.type) === p.Z.Group ? null == n ? void 0 : null === (t = n.creator) || void 0 === t ? void 0 : t.id : void 0;
                        case g.Z.DeveloperProduct:
                            return (null == N ? void 0 : null === (i = N.creator) || void 0 === i ? void 0 : i.type) === p.Z.Group ? null == N ? void 0 : null === (a = N.creator) || void 0 === a ? void 0 : a.id : void 0;
                        case g.Z.CatalogAsset:
                            return (null == S ? void 0 : null === (r = S.creator) || void 0 === r ? void 0 : r.type) === C._Y.Group ? null == S ? void 0 : null === (s = S.creator) || void 0 === s ? void 0 : s.targetId : void 0;
                        case g.Z.Event:
                            if (T) return (null == T ? void 0 : null === (d = T.host) || void 0 === d ? void 0 : d.hostType) === b.pV.Group ? null == T ? void 0 : null === (c = T.host) || void 0 === c ? void 0 : c.hostId : void 0;
                            return (null == n ? void 0 : null === (o = n.creator) || void 0 === o ? void 0 : o.type) === p.Z.Group ? null == n ? void 0 : null === (l = n.creator) || void 0 === l ? void 0 : l.id : void 0;
                        case g.Z.LibraryAsset:
                            return (null == N ? void 0 : null === (u = N.creator) || void 0 === u ? void 0 : u.type) === p.Z.Group ? null == N ? void 0 : null === (m = N.creator) || void 0 === m ? void 0 : m.id : void 0
                    }
                }, [N, T, n, S, q]), W = (0, A.useMemo)(() => ({
                    translate: t,
                    itemType: q
                }), [q, t]), Q = (0, A.useMemo)(() => ({
                    baseId: M,
                    badgeId: D,
                    passId: B,
                    groupId: null != G ? G : _ ? _.toString() : void 0,
                    assetId: null != O ? O : void 0,
                    bundleId: K ? K.toString() : void 0,
                    developerItemId: null == N ? void 0 : N.id,
                    associatedItemType: q,
                    experienceSubscriptionId: null != z ? z : void 0
                }), [M, D, B, G, _, O, K, null == N ? void 0 : N.id, q, z]), X = (0, A.useCallback)(e => {
                    let n = e.split("/");
                    return n.reduce((e, i, a) => {
                        var r, s, o;
                        let l = x.I[i],
                            d = (n[a + 1] || "").startsWith("[");
                        if (!l || !l.SidebarComponentAsParent || a === n.length - 1 || l.withId && !d) return e;
                        let c = l.parentItemTypeName ? x.I[l.parentItemTypeName] : null,
                            u = c ? null === (r = c.getLinkPath) || void 0 === r ? void 0 : r.call(c, Q) : null === (s = l.getLinkPath) || void 0 === s ? void 0 : s.call(l, Q),
                            m = null === (o = l.getSidebarName) || void 0 === o ? void 0 : o.call(l, W);
                        return [...e, {
                            item: l,
                            pathname: null != u ? u : "",
                            sidebarName: null != m ? m : t("Action.Back"),
                            SidebarComponent: l.SidebarComponentAsParent
                        }]
                    }, []).reverse()
                }, [W, Q, t]);
                return {
                    itemNameMapping: V,
                    pathLinkParams: Q,
                    displayNameParam: W,
                    currentItemGroupId: _,
                    parentBreadcrumbLevels: (0, A.useMemo)(() => X(F), [X, F])
                }
            }
        },
        21884: function(e, t, n) {
            var i = n(89481),
                a = n(70529);
            t.Z = () => {
                var e, t, n;
                let {
                    isFetched: r
                } = (0, a.ZP)(i.ky.CreatorHubNavigationUser), s = (0, a.iv)(i.ky.CreatorHubNavigationUser);
                return {
                    isFetched: r,
                    enableIASidebar: null !== (e = null == s ? void 0 : s.enableIA) && void 0 !== e && e,
                    enableMergeCreatedPlaces: null !== (t = null == s ? void 0 : s.enableIA) && void 0 !== t && t,
                    enableUpdateAssociateItems: null !== (n = null == s ? void 0 : s.enableIA) && void 0 !== n && n,
                    enableMoveEventsPage: !1,
                    enableMergePlaceSettings: !1
                }
            }
        },
        94823: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                a = n(94545);

            function r() {
                return (0, i.useContext)(a.Z)
            }
        },
        62395: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(2784),
                a = n(70630);

            function r() {
                return (0, i.useContext)(a.Z)
            }
        },
        17306: function(e, t, n) {
            var i = n(52322),
                a = n(2784),
                r = n(5632),
                s = n(84499),
                o = n(62986),
                l = n(802),
                d = n(99957),
                c = n(77592),
                u = n(6814),
                m = n(7942),
                g = n(67319),
                p = n(93570),
                v = n(36961);
            t.Z = function(e) {
                let {
                    title: t,
                    features: n,
                    activeFeature: h,
                    variant: b = "menu",
                    defaultExpanded: y,
                    name: f = "features"
                } = e, {
                    trackerClient: A
                } = (0, o.A)(), C = (0, r.useRouter)(), {
                    translate: x
                } = (0, s.$G)(), {
                    user: Z
                } = (0, g.je)(), w = e => ({
                    eventType: e,
                    context: l.Z.Click,
                    additionalProperties: {
                        Source: d.Z.LeftNavigation
                    }
                }), I = (0, a.useCallback)(e => {
                    var t;
                    return {
                        icon: e.icon,
                        activeIcon: e.activeIcon,
                        key: e.key,
                        title: x(e.nameKey),
                        adornment: e.adornment,
                        subItems: null === (t = e.subFeatures) || void 0 === t ? void 0 : t.map(I),
                        content: e
                    }
                }, [x]), P = (0, a.useMemo)(() => n.map(I), [n, I]), k = (0, a.useCallback)(async e => {
                    let t = e.content,
                        {
                            activeTab: n,
                            ...i
                        } = C.query;
                    if (c.Z.logClickEvent({
                            eventName: "clickLeftNav.".concat(f, ".").concat(t.key)
                        }), t.getExternalPath) window.open(t.getExternalPath(), "_blank");
                    else if (t.onSelectFeature) t.onSelectFeature();
                    else if (t.path) {
                        var a, r, s;
                        let e = null !== (s = null !== (r = null === (a = t.getQuery) || void 0 === a ? void 0 : a.call(t)) && void 0 !== r ? r : t.query) && void 0 !== s ? s : {};
                        await C.push({
                            pathname: t.path,
                            query: { ...i,
                                ...e
                            }
                        })
                    }
                    if ("compute" === t.key && A.sendEvent(u.c3), "localization" === t.key && A.sendEvent(w(m.Z.ViewLocalization)), "translatorPortal" === t.key && A.sendEvent(w(m.Z.ViewTranslatorPortal)), "notifications" === t.key && i.id) {
                        let e = "string" == typeof i.id ? i.id : i.id[0];
                        A.sendEvent((0, u.mo)(null == Z ? void 0 : Z.id, e))
                    }
                }, [C, Z, A, f]);
                return "list" === b || "iconOnlyList" === b ? (0, i.jsx)(v.Z, {
                    header: "list" === b ? t : void 0,
                    onSelectItem: k,
                    items: P,
                    activeKey: null == h ? void 0 : h.key,
                    iconOnly: "iconOnlyList" === b
                }) : (0, i.jsx)(p.Z, {
                    header: t,
                    onSelectItem: k,
                    items: P,
                    activeKey: null == h ? void 0 : h.key,
                    defaultExpanded: y
                })
            }
        },
        82222: function(e, t, n) {
            var i = n(71565),
                a = n(52480),
                r = n(85735),
                s = n(27110),
                o = n(62395);
            let l = (0, i.Z)()((e, t) => {
                let {
                    hideBackButton: n,
                    hideStatusDivider: i,
                    hideSidebarHeaderText: o,
                    newTreeViewStyle: l
                } = t;
                return {
                    root: {
                        width: "100%",
                        paddingLeft: 48,
                        paddingTop: 48,
                        paddingBottom: 48,
                        paddingRight: 24,
                        [e.breakpoints.down("XLarge")]: {
                            paddingLeft: 32,
                            paddingTop: 32,
                            paddingBottom: 32
                        },
                        [e.breakpoints.down("Large")]: {
                            paddingLeft: 24,
                            paddingTop: 24,
                            paddingBottom: 24
                        }
                    },
                    section: {
                        marginBottom: 12
                    },
                    divider: {
                        marginTop: 12,
                        color: e.palette.components.divider,
                        display: i ? "none" : ""
                    },
                    name: {
                        marginRight: 12,
                        marginLeft: 12
                    },
                    logoutButton: {
                        marginBottom: 24
                    },
                    sidebarHeaderText: {
                        color: e.palette.content.disabled,
                        marginBottom: 12,
                        display: o ? "none" : ""
                    },
                    sidebarSubHeaderText: {
                        color: e.palette.content.standard,
                        marginBottom: 12,
                        marginTop: l ? 12 : 32
                    },
                    backButton: {
                        paddingLeft: 0,
                        marginBottom: 32,
                        justifyContent: "flex-start",
                        color: e.palette.actionV2.primary.fill,
                        "&:hover": {
                            backgroundColor: "transparent"
                        },
                        display: n ? "none" : "",
                        textTransform: l ? "none" : "uppercase"
                    },
                    backIcon: {
                        marginRight: 8
                    },
                    backTypography: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        textTransform: "none",
                        textDecoration: "none",
                        "&:hover": {
                            textDecoration: "underline"
                        }
                    },
                    list: {
                        padding: 0
                    },
                    loader: {
                        marginBottom: 48
                    },
                    treeItemContent: l ? {
                        borderRadius: 8,
                        padding: 4,
                        flexDirection: "row-reverse",
                        [".".concat(a.t.group, " & .").concat(a.t.label)]: { ...e.typography.body2,
                            color: e.palette.content.standard
                        },
                        ["&.".concat(a.t.selected, ", .").concat(a.t.group, " &.").concat(a.t.selected, " .").concat(a.t.label)]: {
                            color: e.palette.content.standard,
                            fontWeight: e.typography.fontWeightMedium
                        },
                        "&:hover": {
                            backgroundColor: e.palette.states.focus
                        }
                    } : {
                        padding: 4,
                        transform: "translate(-4px)",
                        ["& .".concat(a.t.iconContainer)]: {
                            width: 0,
                            marginLeft: 0,
                            marginRight: 0
                        },
                        ["& .".concat(a.t.label)]: {
                            padding: 0
                        }
                    },
                    treeParentItemContent: l ? {
                        borderRadius: 8,
                        padding: 4,
                        flexDirection: "row-reverse",
                        ["&.".concat(a.t.selected)]: {
                            color: e.palette.content.standard,
                            fontWeight: e.typography.fontWeightMedium
                        },
                        [".".concat(a.t.group, " & .").concat(a.t.label, " .").concat(r.t.root)]: { ...e.typography.body2
                        },
                        ["& .".concat(a.t.iconContainer, " svg")]: {
                            fontSize: "1.5rem"
                        },
                        ["&.".concat(a.t.focused)]: {
                            backgroundColor: "transparent"
                        },
                        "&:hover": {
                            backgroundColor: e.palette.states.focus
                        }
                    } : {
                        padding: 4,
                        transform: "translate(-4px)",
                        ["& .".concat(a.t.label)]: {
                            padding: 0
                        }
                    },
                    leftNav: {
                        position: "fixed",
                        width: s.qU.large,
                        [e.breakpoints.down("Medium")]: {
                            width: s.qU.compact
                        },
                        top: s.EA.large,
                        bottom: 0,
                        overflowY: "auto",
                        backgroundColor: e.palette.navigation.default
                    },
                    containerDivider: {
                        position: "fixed",
                        left: s.qU.large,
                        color: e.palette.components.divider
                    },
                    statusName: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        color: e.palette.states.disabled,
                        textTransform: "none"
                    },
                    statusContainer: {
                        width: "inherit",
                        justifyContent: "flex-start",
                        padding: "6px 8px"
                    },
                    statusListItem: {
                        paddingTop: 0,
                        paddingBottom: 0
                    },
                    sidebarLink: {
                        color: l ? e.palette.content.standard : e.palette.actionV2.primary.fill,
                        "&:hover": {
                            textDecoration: "none"
                        }
                    }
                }
            });
            t.Z = () => {
                let {
                    insideTopNavigationDrawer: e
                } = (0, o.Z)();
                return l({
                    hideBackButton: e,
                    hideStatusDivider: !0,
                    hideSidebarHeaderText: !0,
                    newTreeViewStyle: !0
                })
            }
        },
        61: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return ev
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(26321),
                s = n(35358),
                o = n(37137),
                l = n(2585);
            let d = "rightsPortal",
                c = new l.Z,
                u = new l.Z;

            function m(e, t) {
                return e.some(e => {
                    let {
                        isEnabledOnSettings: n
                    } = e;
                    return !n || n(t)
                })
            }
            let g = {
                    icon: (0, i.jsx)(s.wZq, {}),
                    key: d,
                    nameKey: "Heading.RightsManager",
                    path: "/dashboard/rights-manager",
                    isEnabledOnSettings: e => !(null == e ? void 0 : e.isGroup) && !!(null == e ? void 0 : e.enableRightsManager)
                },
                p = {
                    key: "transactions",
                    nameKey: "Heading.Transactions",
                    path: "/dashboard/transactions"
                };
            c.addFeature({
                key: "creations",
                nameKey: "Heading.Creations",
                path: "/dashboard/creations"
            }), c.addFeature({
                key: "anallytics",
                nameKey: "Heading.Analytics",
                path: "/dashboard/analytics",
                isEnabledOnSettings: e => !(null == e ? void 0 : e.isGroup) || !!(null == e ? void 0 : e.canViewAnalytics)
            }), c.addFeature({
                key: "credentials",
                nameKey: "Heading.Credentials",
                path: "/dashboard/credentials",
                isEnabledOnSettings: () => !0
            }), c.addFeature({
                key: "translatorPortal",
                nameKey: "Heading.TranslatorPortal",
                path: "/dashboard/translator-portal"
            }), c.addFeature({
                key: "devex",
                nameKey: "Label.DevEx",
                path: "/dashboard/devex",
                isEnabledOnSettings: e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.isUserEligibleForDevEx) && void 0 !== t && t
                },
                adornment: !1
            }), c.addFeature(g), c.addFeature(p);
            let v = {
                    icon: (0, i.jsx)(s._Dd, {}),
                    activeIcon: (0, i.jsx)(s.SK8, {}),
                    key: "home",
                    nameKey: "Heading.Home",
                    path: "/",
                    getQuery: e => e ? {
                        groupId: e
                    } : {}
                },
                h = {
                    icon: (0, i.jsx)(s.F4$, {}),
                    activeIcon: (0, i.jsx)(s.nWP, {}),
                    key: "creations",
                    nameKey: "Heading.Creations",
                    path: "/dashboard/creations",
                    getQuery: e => e ? {
                        groupId: e
                    } : {}
                },
                b = {
                    icon: (0, i.jsx)(s.u$H, {}),
                    activeIcon: (0, i.jsx)(s.u$H, {}),
                    key: "analytics",
                    nameKey: "Heading.Analytics",
                    path: "/dashboard/analytics",
                    getQuery: e => e ? {
                        groupId: e
                    } : {},
                    isEnabledOnSettings: e => !(null == e ? void 0 : e.isGroup) || !!(null == e ? void 0 : e.canViewAnalytics)
                },
                y = {
                    icon: (0, i.jsx)(s.ZDq, {}),
                    activeIcon: (0, i.jsx)(s.oSS, {}),
                    key: "finances",
                    nameKey: "Heading.Finances",
                    subFeatures: [{
                        key: "devex",
                        nameKey: "Label.DevEx",
                        path: "/dashboard/devex",
                        isEnabledOnSettings: e => {
                            var t;
                            return null !== (t = null == e ? void 0 : e.isUserEligibleForDevEx) && void 0 !== t && t
                        },
                        adornment: !1
                    }, p, {
                        key: "payouts",
                        nameKey: "Heading.Payouts",
                        path: "/dashboard/group/payouts",
                        isEnabledOnSettings: e => {
                            if (!e || !(null == e ? void 0 : e.isGroup)) return !1;
                            let t = (null == e ? void 0 : e.isOrganizationsPayoutsEnabled) === !0;
                            return (null == e ? void 0 : e.enableOrganizationPayouts) === !0 || t
                        }
                    }],
                    isEnabledOnSettings: e => !!y.subFeatures && m(y.subFeatures, e)
                },
                f = {
                    icon: (0, i.jsx)(s.J9A, {}),
                    key: "credentials",
                    nameKey: "Heading.OpenCloud",
                    subFeatures: [{
                        key: "apiKeys",
                        nameKey: "Label.ApiKeys",
                        path: "/dashboard/credentials",
                        query: {
                            activeTab: "ApiKeysTab"
                        },
                        isEnabledOnSettings: () => !0
                    }, {
                        key: "oauthApps",
                        nameKey: "Label.OAuthApps",
                        path: "/dashboard/credentials",
                        query: {
                            activeTab: "OAuthTab"
                        },
                        isEnabledOnSettings: () => !0
                    }],
                    isEnabledOnSettings: () => !0
                },
                A = {
                    icon: (0, i.jsx)(s.ZO6, {}),
                    key: "translatorPortal",
                    nameKey: "Heading.Localization",
                    path: "/dashboard/translator-portal"
                },
                C = {
                    key: "profile",
                    nameKey: "Heading.RightsProfile",
                    path: "/dashboard/rights-manager/account",
                    isEnabledOnSettings: e => (null == e ? void 0 : e.rightsAccountStatus) !== o.qW.Unverified
                },
                x = {
                    key: "matches",
                    nameKey: "Heading.Matches",
                    path: "/dashboard/rights-manager/matches",
                    isEnabledOnSettings: e => (null == e ? void 0 : e.enableOnDemandSearch) === !0 && (null == e ? void 0 : e.rightsAccountStatus) === o.qW.Verified
                },
                Z = {
                    icon: (0, i.jsx)(s.wZq, {}),
                    key: d,
                    nameKey: "Heading.RightsManager",
                    subFeatures: [{
                        key: "removal-requests",
                        nameKey: "Heading.RemovalRequests",
                        path: "/dashboard/rights-manager/removal-requests"
                    }, x, C],
                    isEnabledOnSettings: e => (null == e ? void 0 : e.isGroup) === !1 && (null == e ? void 0 : e.rightsAccountStatus) !== void 0 && (null == e ? void 0 : e.enableClaimsAndDisputes) !== !0
                },
                w = {
                    icon: (0, i.jsx)(s.wZq, {}),
                    key: d,
                    nameKey: "Heading.RightsManager",
                    subFeatures: [{
                        key: "claims",
                        nameKey: "Heading.Claims",
                        path: "/dashboard/rights-manager/claims"
                    }, x, C],
                    isEnabledOnSettings: e => (null == e ? void 0 : e.isGroup) === !1 && (null == e ? void 0 : e.rightsAccountStatus) !== void 0 && (null == e ? void 0 : e.enableClaimsAndDisputes) === !0
                },
                I = {
                    icon: (0, i.jsx)(s.wZq, {}),
                    key: d,
                    nameKey: "Heading.RightsManager",
                    path: "/dashboard/rights-manager",
                    isEnabledOnSettings: e => (null == e ? void 0 : e.isGroup) === !1 && (null == e ? void 0 : e.rightsAccountStatus) === void 0
                },
                P = {
                    key: "sponsoredAds",
                    nameKey: "Heading.SponsoredItemAds",
                    adornment: (0, i.jsx)(s.GIL, {
                        fontSize: "small"
                    }),
                    getExternalPath: e => {
                        let t = "https://www.".concat("roblox.com", "/sponsorships/list");
                        return e ? "".concat(t, "/group/").concat(e, "#!/avatar-items") : "".concat(t, "#!/avatar-items")
                    },
                    isEnabledOnSettings: () => !0
                },
                k = {
                    key: "adsManager",
                    nameKey: "Heading.AdsManager",
                    adornment: (0, i.jsx)(s.GIL, {
                        fontSize: "small"
                    }),
                    getExternalPath: () => "https://ads.".concat("roblox.com"),
                    isEnabledOnSettings: () => !0
                },
                S = {
                    icon: (0, i.jsx)(s.kdo, {}),
                    activeIcon: (0, i.jsx)(s.lT5, {}),
                    key: "ads",
                    nameKey: "Heading.Ads",
                    subFeatures: [k, P],
                    isEnabledOnSettings: () => !0
                },
                E = {
                    key: "groupAuditLog",
                    nameKey: "Label.AuditLog",
                    adornment: (0, i.jsx)(s.GIL, {
                        fontSize: "small"
                    }),
                    getExternalPath: e => "https://www.".concat("roblox.com", "/groups/configure?id=").concat(e, "#!/auditLog"),
                    isEnabledOnSettings: e => (null == e ? void 0 : e.enableCollaborationAudit) === !0 && (null == e ? void 0 : e.isOwner) === !0
                },
                T = {
                    icon: (0, i.jsx)(s._b8, {}),
                    activeIcon: (0, i.jsx)(s.BY7, {}),
                    key: "collaboration",
                    nameKey: "Heading.Collaboration",
                    subFeatures: [{
                        key: "groupMembers",
                        nameKey: "Label.Members",
                        path: "/dashboard/group/members",
                        query: {
                            activeTab: "GroupMembersTab"
                        }
                    }, {
                        key: "groupRoles",
                        nameKey: "Label.Roles",
                        path: "/dashboard/group/roles",
                        query: {
                            activeTab: "GroupRolesTab"
                        },
                        isEnabledOnSettings: e => {
                            var t, n;
                            return (null == e ? void 0 : e.isOwner) === !0 || (null == e ? void 0 : e.assignableRoleIds) && (null == e ? void 0 : e.assignableRoleIds.length) > 0 || (null == e ? void 0 : e.permissionEditableRoleIds) !== void 0 && (null == e ? void 0 : null === (t = e.permissionEditableRoleIds) || void 0 === t ? void 0 : t.length) > 0 || (null == e ? void 0 : e.metadataEditableRoleIds) !== void 0 && (null == e ? void 0 : null === (n = e.metadataEditableRoleIds) || void 0 === n ? void 0 : n.length) > 0
                        }
                    }, {
                        key: "groupProfile",
                        nameKey: "Label.GroupProfile",
                        path: "/dashboard/group/profile",
                        query: {
                            activeTab: "GroupProfileTab"
                        },
                        isEnabledOnSettings: e => (null == e ? void 0 : e.canConfigureOrganization) === !0 || (null == e ? void 0 : e.isOwner) === !0
                    }, E],
                    isEnabledOnSettings: e => null != e && !!e.isGroup && !!T.subFeatures && m(T.subFeatures, e)
                };
            u.addFeature(v), u.addFeature(h), u.addFeature(b), u.addFeature(T), u.addFeature(y), u.addFeature(A), u.addFeature(Z), u.addFeature(w), u.addFeature(I), u.addFeature(S), u.addFeature(f);
            var N = n(5632),
                j = n(48826),
                M = n(67319),
                D = n(35734),
                U = n(86357),
                L = n(33045),
                F = n(86658),
                R = n(31330),
                H = n(86760),
                G = n(93909),
                O = n(84951),
                B = n(28566),
                K = n(84499),
                z = n(55041),
                V = n(94823),
                q = n(71565),
                _ = n(17505),
                W = n(74612);
            let Q = (0, q.Z)()((e, t) => {
                    let {
                        width: n
                    } = t;
                    return {
                        name: {
                            marginLeft: e.spacing(1),
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        },
                        dropdownOptionColor: {
                            color: e.palette.content.standard,
                            textTransform: "none"
                        },
                        dropdownMenuList: {
                            width: n
                        },
                        selectDropdown: {
                            width: "100%",
                            ["& .".concat(_.a.root)]: {
                                width: 32,
                                height: 32
                            }
                        },
                        avatarWrapper: {
                            width: 32,
                            height: 32,
                            margin: "12px 4px"
                        },
                        menuItemWrapper: {
                            alignItems: "center",
                            [".".concat(W.s.select, " &")]: {
                                margin: "-4px 0"
                            }
                        },
                        menuIconWrapper: {
                            margin: 2
                        }
                    }
                }),
                X = new Set(["/dashboard/creations", "/credentials", "/dashboard/creations/upload", "/", "/dashboard/analytics"]);
            var $ = n(34865),
                Y = e => {
                    var t, n;
                    let {
                        authenticatedUser: o,
                        groups: l,
                        currentGroup: d
                    } = e, c = (0, N.useRouter)(), {
                        isFetched: u,
                        settings: m
                    } = (0, j.rV)(), [g, p] = (0, z._)($.U, null), v = (0, a.useMemo)(() => ({
                        creatorId: null == o ? void 0 : o.id,
                        creatorName: null == o ? void 0 : o.name,
                        creatorType: G.Z.User
                    }), [o]), h = (0, a.useMemo)(() => d ? {
                        creatorId: d.id,
                        creatorName: d.name,
                        creatorType: G.Z.Group
                    } : v, [d, v]), b = (0, a.useRef)(null), y = (0, a.useRef)(null), f = (0, a.useCallback)(e => {
                        let t = "",
                            n = c.query;
                        if (e.creatorType === G.Z.Group) {
                            var i, a;
                            let t = e.creatorId;
                            n.groupId = null !== (i = null == t ? void 0 : t.toString()) && void 0 !== i ? i : "", p(null !== (a = e.creatorId) && void 0 !== a ? a : null)
                        } else delete n.groupId, p(null);
                        X.has(c.pathname) ? t = c.pathname : (t = O.dashboard.getUrl(), n = n.groupId ? {
                            groupId: n.groupId
                        } : {}), c.push({
                            pathname: t,
                            query: n
                        })
                    }, [c, p]), {
                        classes: {
                            name: A,
                            dropdownOptionColor: C,
                            dropdownMenuList: x,
                            selectDropdown: Z,
                            avatarWrapper: w,
                            menuItemWrapper: I,
                            menuIconWrapper: P
                        },
                        cx: k
                    } = Q({
                        width: (null === (t = b.current) || void 0 === t ? void 0 : t.offsetWidth) || (null === (n = y.current) || void 0 === n ? void 0 : n.offsetWidth)
                    }), {
                        translate: S
                    } = (0, K.$G)(), {
                        primarySidebarExpanded: E
                    } = (0, V.Z)(), T = (0, a.useMemo)(() => [(0, i.jsx)(L.Z, {
                        selected: v.creatorId === h.creatorId,
                        value: v.creatorId,
                        onClick: () => f(v),
                        children: (0, i.jsxs)(r.Z, {
                            container: !0,
                            wrap: "nowrap",
                            className: I,
                            children: [(0, i.jsx)(B.Z, {
                                creator: v
                            }), (0, i.jsx)(F.Z, {
                                className: k(A, C),
                                title: v.creatorName,
                                variant: "largeLabel2",
                                noWrap: !0,
                                children: v.creatorName
                            })]
                        })
                    }, v.creatorId), ...l.map(e => (0, i.jsx)(L.Z, {
                        selected: e.id === h.creatorId,
                        value: e.id,
                        onClick: () => f({
                            creatorId: e.id,
                            creatorName: e.name,
                            creatorType: G.Z.Group
                        }),
                        children: (0, i.jsxs)(r.Z, {
                            container: !0,
                            wrap: "nowrap",
                            className: I,
                            children: [(0, i.jsx)(B.Z, {
                                creator: {
                                    creatorId: e.id,
                                    creatorName: e.name,
                                    creatorType: G.Z.Group
                                }
                            }), (0, i.jsx)(F.Z, {
                                className: k(A, C),
                                title: e.name,
                                variant: "largeLabel2",
                                noWrap: !0,
                                children: e.name
                            })]
                        })
                    }, e.id)), u && m.enableGroupCreation && l.length < 100 && (0, i.jsx)(L.Z, {
                        onClick: () => c.push(O.dashboard.getCreateGroupUrl()),
                        children: (0, i.jsxs)(r.Z, {
                            container: !0,
                            wrap: "nowrap",
                            className: I,
                            children: [(0, i.jsx)(s.mm_, {
                                fontSize: "large",
                                className: P
                            }), (0, i.jsx)(F.Z, {
                                className: k(C, A),
                                title: S("Action.CreateGroup"),
                                variant: "largeLabel2",
                                noWrap: !0,
                                children: S("Action.CreateGroup")
                            })]
                        })
                    }, "create-group")], [u, m.enableGroupCreation, l, h, v, C, P, I, A, f, c, S, k]);
                    return E ? (0, i.jsx)(R.F, {
                        fullWidth: !0,
                        ref: y,
                        children: (0, i.jsx)(H.Z, {
                            classes: {
                                root: Z
                            },
                            SelectProps: {
                                MenuProps: {
                                    PaperProps: {
                                        className: x
                                    }
                                }
                            },
                            label: S("Label.ViewAs"),
                            margin: "none",
                            size: "medium",
                            value: h.creatorId,
                            children: T
                        })
                    }) : (0, i.jsx)(B.Z, {
                        creator: h,
                        className: w
                    })
                },
                J = n(67957),
                ee = () => {
                    let {
                        user: e
                    } = (0, M.je)(), {
                        groups: t
                    } = (0, D.XY)(), n = (0, J.Z)();
                    return (0, i.jsx)(r.Z, {
                        container: !0,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        wrap: "nowrap",
                        children: null !== e && null !== t && void 0 !== n ? (0, i.jsx)(Y, {
                            authenticatedUser: e,
                            groups: t,
                            currentGroup: n
                        }) : (0, i.jsx)(U.C, {
                            color: "secondary"
                        })
                    })
                },
                et = n(70529),
                en = n(89481),
                ei = n(81828),
                ea = n(13868),
                er = n(57356),
                es = n(17306),
                eo = n(99346),
                el = n(5884),
                ed = n(73466),
                ec = n(2178),
                eu = n(77592),
                em = n(43548),
                eg = n(36961),
                ep = () => {
                    let {
                        open: e,
                        dialog: t,
                        isCompatible: n
                    } = (0, eo.ZP)(), {
                        translate: r
                    } = (0, K.$G)(), s = (0, a.useMemo)(() => {
                        let e = [];
                        return !0 === n && e.unshift({
                            icon: (0, i.jsx)(ed.Z, {}),
                            key: "openStudio",
                            nameKey: "Heading.Studio"
                        }), e.unshift({
                            icon: (0, i.jsx)(ec.Z, {}),
                            key: "robloxHome",
                            nameKey: "Heading.Roblox",
                            title: "Roblox.com",
                            getExternalPath: () => (0, em.getHomeUrl)()
                        }), e
                    }, [n]), o = (0, a.useCallback)(async t => {
                        let n = t.content;
                        n.getExternalPath && window.open(n.getExternalPath(), "_blank"), (null == t ? void 0 : t.key) === "openStudio" && e({
                            task: el.Hc.Default
                        }), eu.Z.logClickEvent({
                            eventName: "clickLeftNav.creations.".concat(t.key)
                        })
                    }, [e]), {
                        primarySidebarExpanded: l
                    } = (0, V.Z)();
                    return (0, i.jsxs)(a.Fragment, {
                        children: [(0, i.jsx)(eg.Z, {
                            header: l ? r("Heading.QuickLinks") : void 0,
                            items: s.map(e => ({
                                icon: e.icon,
                                key: e.key,
                                title: e.title || r(e.nameKey),
                                content: e
                            })),
                            onSelectItem: o,
                            iconOnly: !l
                        }), t]
                    })
                },
                ev = () => {
                    let e = (0, N.useRouter)(),
                        {
                            settings: t
                        } = (0, j.rV)(),
                        n = (0, J.Z)(),
                        {
                            permissions: s
                        } = (0, ei.Z)(),
                        o = (0, et.ZP)(en.ky.CreatorDashboard),
                        d = (0, et.ZP)(en.ky.CreatorSuccessOrganizations),
                        c = (0, et.ZP)(en.ky.RightsManager),
                        {
                            frontendFlags: m
                        } = (0, ea.qA)(),
                        {
                            accountStatus: g
                        } = (0, er.ZP)(),
                        p = (0, a.useMemo)(() => {
                            let e = {
                                isGroup: (null == n ? void 0 : n.id) !== void 0
                            };
                            return { ...t,
                                ...o.params,
                                ...d.params,
                                ...c.params,
                                ...s,
                                ...e,
                                rightsAccountStatus: g,
                                ...m
                            }
                        }, [o, null == n ? void 0 : n.id, g, m, d, c, s, t]),
                        v = u.getAllFeatures(),
                        h = u.getAllFeaturesFlatten(),
                        b = u.filterDisabledFeatures(v, p),
                        y = u.overrideFeatures(b, null == n ? void 0 : n.id),
                        {
                            primarySidebarExpanded: f
                        } = (0, V.Z)(),
                        A = (0, a.useMemo)(() => {
                            let t = h.find(t => l.Z.matchFeaturePath(t, e.pathname, e.query));
                            return t || (t = h.sort((e, t) => {
                                var n, i, a, r;
                                return (null !== (a = null === (n = t.path) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0) - (null !== (r = null === (i = e.path) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0)
                            }).find(t => t.path && e.pathname.startsWith(t.path))), t
                        }, [h, e]);
                    return (0, i.jsxs)(a.Fragment, {
                        children: [(0, i.jsx)(r.Z, {
                            item: !0,
                            container: !0,
                            direction: "column",
                            children: (0, i.jsx)(ee, {})
                        }), (0, i.jsx)(r.Z, {
                            XSmall: !0,
                            item: !0,
                            container: !0,
                            direction: "column",
                            alignItems: "stretch",
                            children: (0, i.jsx)(es.Z, {
                                features: y,
                                activeFeature: A,
                                variant: f ? "list" : "iconOnlyList",
                                name: "creations"
                            })
                        }), (0, i.jsx)(r.Z, {
                            item: !0,
                            container: !0,
                            direction: "column",
                            children: (0, i.jsx)(ep, {})
                        })]
                    })
                }
        },
        93570: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return y
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(55388),
                s = n(86658),
                o = n(24061),
                l = n(21045),
                d = n(26321),
                c = n(6752),
                u = n(82222),
                m = n(71565),
                g = n(74867),
                p = n(5632);
            let v = (0, m.Z)()(e => ({
                root: {
                    fontWeight: "inherit",
                    color: e.palette.content.standard
                }
            }));
            var h = e => {
                let {
                    item: t
                } = e, n = (0, p.useRouter)(), {
                    title: r,
                    adornment: s
                } = t, {
                    classes: {
                        root: o
                    }
                } = v(), l = t.content, c = (0, i.jsx)(a.Fragment, {
                    children: s ? (0, i.jsxs)(d.Z, {
                        container: !0,
                        direction: "row",
                        children: [r, "\xa0", s]
                    }) : r
                }), u = null == l ? void 0 : l.path, m = ((null == l ? void 0 : l.getExternalPath) ? l.getExternalPath() : void 0) || {
                    pathname: u,
                    query: n.query
                };
                return u ? (0, i.jsx)(g.Z, {
                    variant: "body1",
                    classes: {
                        root: o
                    },
                    underline: "none",
                    href: m,
                    display: "block",
                    onClick: e => {
                        e.preventDefault()
                    },
                    children: c
                }) : c
            };
            let b = e => {
                let {
                    nodeId: t,
                    header: n,
                    items: a,
                    activeKey: r,
                    onSelectItem: o,
                    parentItem: m
                } = e, g = m ? (0, i.jsx)(d.Z, {
                    onClick: e => {
                        o(m), e.preventDefault()
                    },
                    children: (0, i.jsx)(s.Z, {
                        variant: "body1",
                        color: "primary",
                        children: n
                    })
                }) : (0, i.jsx)(s.Z, {
                    variant: "body1",
                    color: "primary",
                    children: n
                }), {
                    classes: p
                } = (0, u.Z)();
                return (0, i.jsx)(l.Z, {
                    nodeId: t,
                    label: g,
                    collapseIcon: (0, i.jsx)(c.A, {
                        color: "disabled",
                        style: {
                            transform: "rotate(180deg)"
                        }
                    }),
                    expandIcon: (0, i.jsx)(c.A, {
                        color: "disabled"
                    }),
                    classes: {
                        content: p.treeParentItemContent
                    },
                    children: a.map(e => {
                        let {
                            title: t,
                            key: n,
                            subItems: a
                        } = e;
                        return a ? (0, i.jsx)(b, {
                            nodeId: "parent-".concat(n),
                            header: t,
                            items: a,
                            onSelectItem: o,
                            activeKey: r
                        }, "parent-".concat(n)) : (0, i.jsx)(l.Z, {
                            nodeId: e.key,
                            label: (0, i.jsx)(h, {
                                item: e
                            }),
                            onClick: () => o(e),
                            classes: {
                                content: p.treeItemContent
                            }
                        }, e.key)
                    })
                })
            };
            var y = e => {
                let {
                    header: t,
                    items: n,
                    activeKey: d,
                    onSelectItem: c,
                    sidebarSubHeaderClassNameOverride: m,
                    defaultExpanded: g
                } = e, {
                    classes: p
                } = (0, u.Z)();
                return (0, i.jsxs)(a.Fragment, {
                    children: [(0, i.jsx)(s.Z, {
                        className: m || p.sidebarSubHeaderText,
                        variant: "overline",
                        component: "h1",
                        children: t
                    }), (0, i.jsx)(o.T, {
                        selected: null != d ? d : "",
                        defaultExpanded: null != g ? g : [],
                        children: n.map(e => {
                            let {
                                title: t,
                                key: n,
                                subItems: a = null
                            } = e;
                            return a && a.length > 0 ? (0, i.jsx)(b, {
                                nodeId: "parent-".concat(n),
                                header: t,
                                items: a,
                                onSelectItem: c,
                                activeKey: d,
                                parentItem: e.isParentLink ? e : void 0
                            }, n) : (0, i.jsx)(l.Z, {
                                classes: {
                                    content: p.treeParentItemContent
                                },
                                nodeId: n,
                                onClick: t => {
                                    t.preventDefault(), c(e)
                                },
                                onKeyDown: t => {
                                    t.key === r.sr.Enter && (t.preventDefault(), c(e))
                                },
                                label: (0, i.jsx)(s.Z, {
                                    variant: "body1",
                                    color: "primary",
                                    children: (0, i.jsx)(h, {
                                        item: e
                                    })
                                })
                            }, n)
                        })
                    }, t)]
                })
            }
        },
        36961: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return I
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(66957),
                s = n(7275),
                o = n(97678),
                l = n(66384),
                d = n(90472),
                c = n(6752),
                u = n(26321),
                m = n(82133),
                g = n(86348),
                p = n(59056),
                v = n(74867),
                h = n(5632),
                b = n(71565),
                y = n(56178),
                f = n(44155),
                A = n(97612),
                C = n(85735),
                x = n(34009);
            let Z = (0, b.Z)()(e => ({
                    sidebarLink: {
                        fontWeight: "inherit",
                        color: e.palette.actionV2.primary.fill,
                        "&:hover": {
                            textDecoration: "none"
                        }
                    },
                    listItem: {
                        borderRadius: 8,
                        ["& .".concat(y.l.primary, ", & .").concat(y.l.secondary, ", & .").concat(f.l.root, ", & .").concat(o.l.root)]: {
                            color: e.palette.content.standard
                        },
                        ["&.".concat(A.l.selected, ", &.").concat(A.l.selected, ":hover")]: {
                            backgroundColor: e.palette.states.selected,
                            ["& .".concat(C.t.root)]: {
                                fontWeight: e.typography.fontWeightMedium
                            }
                        },
                        ["& .".concat(y.l.dense)]: {
                            marginTop: 6,
                            marginBottom: 6
                        }
                    },
                    listItemAdornment: {
                        display: "flex"
                    },
                    listItemIcon: {
                        minWidth: 40
                    },
                    listSubheader: {
                        backgroundColor: "transparent",
                        paddingTop: 8,
                        paddingBottom: 8
                    },
                    iconOnlyList: {
                        paddingTop: 20
                    },
                    iconOnlyItem: {
                        paddingBottom: 8
                    },
                    iconOnlyItemSelected: {
                        ["& .".concat(x.i.root)]: {
                            backgroundColor: e.palette.states.selected
                        }
                    }
                })),
                w = e => {
                    var t;
                    let {
                        item: n,
                        activeKey: u,
                        onSelectItem: m,
                        parentItem: g,
                        expanded: p
                    } = e, {
                        classes: b
                    } = Z(), y = (0, h.useRouter)(), f = (0, a.useCallback)((e, t, n) => {
                        let a = n || {
                            pathname: t,
                            query: y.query
                        };
                        return (0, i.jsx)(v.Z, {
                            variant: "body1",
                            className: b.sidebarLink,
                            display: "block",
                            href: a,
                            onClick: e => {
                                e.preventDefault()
                            },
                            children: e
                        })
                    }, [y.query, b.sidebarLink]), {
                        title: A,
                        key: C,
                        adornment: x,
                        subItems: w
                    } = n, I = n.content, P = f(A, null == I ? void 0 : I.path, (null == I ? void 0 : I.getExternalPath) ? I.getExternalPath() : void 0), k = C === u && null !== (t = n.activeIcon) && void 0 !== t ? t : n.icon, S = (0, a.useCallback)(e => {
                        e.preventDefault(), m(n)
                    }, [n, m]);
                    return (0, i.jsxs)(r.Z, {
                        selected: C === u,
                        onClick: S,
                        classes: {
                            root: b.listItem
                        },
                        disableRipple: !0,
                        children: [(0, i.jsx)(s.Z, {
                            className: b.listItemIcon,
                            children: k
                        }), (0, i.jsx)(o.L, {
                            className: b.listItemAdornment,
                            children: x
                        }), (0, i.jsx)(l.Z, {
                            primary: g ? void 0 : P,
                            secondary: g ? P : void 0
                        }), w && w.length > 0 ? (0, i.jsx)(o.L, {
                            children: (0, i.jsx)(d.Z, {
                                color: "secondary",
                                onClick: S,
                                "aria-label": "more",
                                disableRipple: !0,
                                children: (0, i.jsx)(c.A, {
                                    color: "disabled",
                                    style: {
                                        transform: p ? "rotate(180deg)" : "none"
                                    }
                                })
                            })
                        }) : null]
                    }, C)
                };
            var I = e => {
                let {
                    header: t,
                    items: n,
                    activeKey: r,
                    onSelectItem: s,
                    defaultExpanded: o,
                    iconOnly: l = !1
                } = e, {
                    classes: c,
                    cx: v
                } = Z(), [h, b] = (0, a.useState)(null != o ? o : []);
                return ((0, a.useEffect)(() => {
                    let e = n.find(e => e.subItems && e.subItems.find(e => e.key === r));
                    e && b([e.key])
                }, [r, n]), l) ? (0, i.jsx)(u.Z, {
                    container: !0,
                    direction: "column",
                    className: c.iconOnlyList,
                    children: n.map(e => {
                        var t;
                        let n = e.key === r || e.subItems && e.subItems.find(e => e.key === r),
                            a = n && null !== (t = e.activeIcon) && void 0 !== t ? t : e.icon;
                        return (0, i.jsx)(u.Z, {
                            item: !0,
                            className: v(c.iconOnlyItem, {
                                [c.iconOnlyItemSelected]: !!n
                            }),
                            children: (0, i.jsx)(d.Z, {
                                "aria-label": e.title,
                                color: "secondary",
                                children: a
                            })
                        }, e.key)
                    })
                }) : (0, i.jsx)(m.L, {
                    subheader: (0, i.jsx)(g.Z, {
                        className: c.listSubheader,
                        children: t
                    }),
                    children: n.map(e => {
                        let {
                            key: t,
                            subItems: n = null
                        } = e, o = h.includes(e.key);
                        return (0, i.jsxs)(a.Fragment, {
                            children: [(0, i.jsx)(w, {
                                item: e,
                                onSelectItem: e => {
                                    e.subItems && (o ? b(h.filter(t => t !== e.key)) : b(h.concat(e.key))), s(e)
                                },
                                activeKey: r,
                                expanded: o
                            }, t), n && n.length > 0 ? (0, i.jsx)(p.C, { in: o,
                                timeout: "auto",
                                unmountOnExit: !0,
                                children: (0, i.jsx)(m.L, {
                                    disablePadding: !0,
                                    dense: !0,
                                    children: n.map(t => (0, i.jsx)(w, {
                                        item: t,
                                        parentItem: e,
                                        onSelectItem: s,
                                        activeKey: r
                                    }, t.key))
                                })
                            }) : null]
                        }, "wrap-".concat(t))
                    })
                })
            }
        },
        6093: function(e, t, n) {
            let i = (0, n(71565).Z)()(() => ({
                fullWidth: {
                    width: "100%"
                },
                overflowText: {
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }
            }));
            t.Z = i
        },
        38550: function(e, t, n) {
            var i = n(52322),
                a = n(2784),
                r = n(47889),
                s = n(67319),
                o = n(15733);
            t.Z = () => {
                let {
                    logout: e,
                    user: t,
                    isFetched: n
                } = (0, s.je)(), [l, d] = (0, a.useState)(!1), c = (0, a.useCallback)(async () => {
                    d(!0);
                    try {
                        await e()
                    } finally {
                        d(!1)
                    }
                }, [e]), u = (0, a.useCallback)(async () => {
                    let e = await (0, o.x)();
                    window.location.assign(e)
                }, []);
                return (0, i.jsx)(r.y_, {
                    user: t,
                    loading: !n || l,
                    onLogout: c,
                    onLogin: u
                })
            }
        },
        69658: function(e, t, n) {
            var i = n(52322);
            n(2784);
            var a = n(5632),
                r = n.n(a),
                s = n(67319),
                o = n(47889);
            let l = () => {
                r().push("/settings/notifications")
            };
            t.Z = () => {
                let {
                    user: e
                } = (0, s.je)();
                return null === e ? null : (0, i.jsx)(o.LE, {
                    user: e,
                    onSettingsClick: l
                })
            }
        },
        25060: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return i
                }
            });
            let i = "app-layout-content-container";
            t.Z = () => document.getElementById(i)
        },
        5257: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return p
                },
                I: function() {
                    return g
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(45258),
                s = n(79437),
                o = n(5632),
                l = n(79166),
                d = n(55388);
            class c {
                async getGameDetail(e, t) {
                    var n, i, a;
                    if (!t && this.gameDetailsMap.has(e)) return null !== (n = this.gameDetailsMap.get(e)) && void 0 !== n ? n : null;
                    try {
                        let t = await this.gamesClient.getDetails([e]),
                            n = null !== (a = null === (i = t.data) || void 0 === i ? void 0 : i[0]) && void 0 !== a ? a : null;
                        return n && this.gameDetailsMap.set(e, n), n
                    } catch (n) {
                        let t = (0, l.Z)(n);
                        if ((null == t ? void 0 : t.status) === d.WC.BAD_REQUEST) return null;
                        throw console.log("Could not fetch game details for universeId ".concat(e)), n
                    }
                }
                async getConfiguration(e, t) {
                    if (!t && this.gameConfigurationMap.has(e)) {
                        var n;
                        return null !== (n = this.gameConfigurationMap.get(e)) && void 0 !== n ? n : null
                    }
                    try {
                        return await this.developClient.getUniverseConfiguration(e), this.gameConfigurationMap.set(e, !0), !0
                    } catch (n) {
                        let t = (0, l.Z)(n);
                        if ((null == t ? void 0 : t.status) === d.WC.FORBIDDEN) return this.gameConfigurationMap.set(e, !1), !1;
                        return console.warn("Could not fetch game details for universeId ".concat(e)), null
                    }
                }
                constructor(e, t) {
                    this.gamesClient = e, this.developClient = t, this.gameDetailsMap = new Map, this.gameConfigurationMap = new Map
                }
            }
            let u = (0, a.createContext)({
                isLoadingGame: !1,
                isErrorLoadingGame: !1,
                canConfigure: !1,
                gameDetails: null,
                refreshGameDetails: () => {
                    throw Error("Not implemented")
                }
            });
            u.displayName = "Game";
            let m = new c(r.ZP, s.ZP);

            function g() {
                let e = (0, a.useContext)(u);
                if (null === e) throw Error("useCurrentGame must be used within a GameProvider");
                return e
            }
            var p = e => {
                let {
                    requestedGameId: t,
                    children: n
                } = e, r = (0, o.useRouter)(), [s, l] = (0, a.useState)(!0), [d, c] = (0, a.useState)(null), [g, p] = (0, a.useState)(null), [v, h] = (0, a.useState)(!1), b = (0, a.useCallback)(async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = m.getConfiguration(e),
                        i = m.getGameDetail(e, t),
                        [a, r] = await Promise.allSettled([n, i]);
                    "fulfilled" === a.status ? c(a.value) : c(null), "fulfilled" === r.status ? (h(!1), p(r.value)) : ("rejected" === r.status ? h(!0) : h(!1), p(null)), l(!1)
                }, []), y = (0, a.useMemo)(() => {
                    let {
                        id: e
                    } = r.query;
                    return t || (e ? parseInt(e, 10) : void 0)
                }, [t, r.query]), f = (0, a.useCallback)(() => y ? b(y, !0) : Promise.reject(Error("Cannot refresh game details without a game ID")), [y, b]);
                (0, a.useEffect)(() => {
                    try {
                        void 0 !== y && !Number.isNaN(y) && y > 0 && b(y)
                    } catch (e) {
                        console.warn("Could not fetch game details for universeId ".concat(y))
                    }
                }, [y, b]);
                let A = (0, a.useMemo)(() => ({
                    isLoadingGame: s,
                    canConfigure: d,
                    gameDetails: g,
                    isErrorLoadingGame: v,
                    refreshGameDetails: f
                }), [s, d, g, v, f]);
                return (0, i.jsx)(u.Provider, {
                    value: A,
                    children: n
                })
            }
        },
        57356: function(e, t, n) {
            n.d(t, {
                VA: function() {
                    return r
                }
            });
            var i = n(58943),
                a = n(18245);
            let r = "rightsClient/currentAccount";
            t.ZP = e => {
                var t, n;
                let s = (0, i.a)([r], async () => a.Z.getCurrentAccount(), {
                        enabled: e
                    }),
                    o = (null === (t = s.data) || void 0 === t ? void 0 : t.account) || {},
                    l = (null === (n = s.data) || void 0 === n ? void 0 : n.user) || {},
                    d = null == o ? void 0 : o.status;
                return {
                    account: o,
                    user: l,
                    accountStatus: d,
                    ...s
                }
            }
        },
        81418: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            class i extends Error {
                constructor() {
                    super(), this.name = this.constructor.name
                }
            }
        },
        33120: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return s
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(81418);

            function s(e, t) {
                let {
                    useCustomSettings: n,
                    CustomSettingsContextProvider: s
                } = function(e, t) {
                    let n = (0, a.createContext)({
                        customSettings: e,
                        status: "initial",
                        isFetched: !1
                    });
                    return n.displayName = null != t ? t : "CustomSettings", {
                        useCustomSettings: () => {
                            let {
                                customSettings: e,
                                status: t,
                                isFetched: i
                            } = (0, a.useContext)(n);
                            return (0, a.useMemo)(() => ({ ...e,
                                status: t,
                                isFetched: i
                            }), [e, i, t])
                        },
                        CustomSettingsContextProvider: n.Provider
                    }
                }(e.defaultSettings, e.name);
                return {
                    CustomSettingsProvider: n => {
                        let {
                            children: o
                        } = n, l = t(), [d, c] = (0, a.useState)(e.defaultSettings), [u, m] = (0, a.useState)("initial"), [g, p] = (0, a.useState)(!1);
                        return (0, a.useEffect)(() => {
                            (async function() {
                                try {
                                    m("loading");
                                    let t = await e.getSettings(...l);
                                    c(t), m("success"), p(!0)
                                } catch (t) {
                                    t instanceof r.Z || (console.warn(void 0 !== e.name ? "Could not fetch custom settings for ".concat(e.name) : "Could not fetch custom settings"), m("error"), p(!0))
                                }
                            })()
                        }, [...l]), (0, i.jsx)(s, {
                            value: {
                                customSettings: d,
                                status: u,
                                isFetched: g
                            },
                            children: o
                        })
                    },
                    useCustomSettings: n
                }
            }
        },
        13868: function(e, t, n) {
            n.d(t, {
                qA: function() {
                    return l
                }
            });
            var i = n(52322),
                a = n(2784),
                r = n(66691),
                s = n(53652);
            let o = (0, a.createContext)(null);

            function l() {
                let e = (0, a.useContext)(o);
                if (null === e) throw Error("useToolboxServiceApiProvider must be used within a ToolboxServiceApiProvider");
                return e
            }
            t.ZP = e => {
                let {
                    children: t
                } = e, [n, l] = (0, a.useState)(s.as), [d, c] = (0, a.useState)(!1), u = (0, a.useCallback)(async e => {
                    try {
                        let t = await r.ZP.getFrontendFlagsValues(e),
                            n = Object.assign({}, ...s.ir.map(e => {
                                var n, i;
                                return {
                                    [e]: null !== (i = null == t ? void 0 : null === (n = t.data) || void 0 === n ? void 0 : n[e]) && void 0 !== i && i
                                }
                            }));
                        l(n)
                    } catch (e) {}
                }, []);
                (0, a.useEffect)(() => {
                    let e = !0,
                        t = {
                            flags: s.ir
                        };
                    return c(!0), (async () => {
                        await u(t), e && c(!1)
                    })(), () => {
                        e = !1
                    }
                }, [u]);
                let m = (0, a.useMemo)(() => ({
                    frontendFlags: n,
                    getFrontendFlags: u,
                    loadingFrontendFlags: d
                }), [n, u, d]);
                return (0, i.jsx)(o.Provider, {
                    value: m,
                    children: t
                })
            }
        },
        53652: function(e, t, n) {
            var i, a;
            n.d(t, {
                Wu: function() {
                    return i
                },
                as: function() {
                    return s
                },
                ir: function() {
                    return r
                }
            }), (a = i || (i = {})).FrontendFlagEnableRichMediaImageExpansion = "PublicFrontendRMI", a.FrontendFlagEnableAudioDistributionOnboarding = "PublicFrontendADO", a.FrontendFlagEnableNonPluginDistributionRestrictions = "PublicFrontendMDR", a.FrontendFlagEnableAssetsUploadApiForRichMedia = "PublicFrontendAUA", a.FrontendFlagEnableModelPricingTransition = "PublicFrontendEMPT", a.FrontendFlagEnableSocialLinkCustomTitles = "PublicFrontendSLCT", a.FrontendFlagEnableAudioWavUpload = "PublicFrontendAWU", a.FrontendFlagEnableAudioFlacUpload = "PublicFrontendAFU", a.FrontendFlagEnableCreatorInsightsPage = "PublicFrontendCIP", a.FrontendFlagEnableCreatorAnalyticsNoResults = "PublicFrontendANR", a.FrontendFlagEnablePermissionPageAssetTypeExpansion = "PublicFrontendPPE", a.FrontendFlagEnableAssetAccessForm = "PublicFrontendAAF", a.FrontendFlagEnableCreatorPrivacyDefault = "PublicFrontendCPD", a.FrontendFlagEnablePermissionPageRedesign = "PublicFrontendPPR";
            let r = Object.values(i),
                s = Object.assign({}, ...r.map(e => ({
                    [e]: !1
                })))
        }
    }
]);
//# sourceMappingURL=9615-729993a1a2bf8227.js.map