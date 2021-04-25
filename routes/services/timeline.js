const express = require("express")
const app = express.Router()

const checkToken = require(`${__dirname}/../../middleware/checkToken`)

app.get('/api/calendar/v1/timeline', /*checkToken,*/ async (req, res) => {

    var season
    if (req.headers["user-agent"]) {
        try {
            season = req.headers["user-agent"].split("-")[1].split(".")[0]
        } catch {
            season = 2
        }
    } else season = 2

    res.json({
        channels: {
            "standalone-store": {},
            "client-matchmaking": {},
            tk: {},
            "featured-islands": {},
            "community-votes": {},
            "client-events": {
                states: [{
                    validFrom: "2020-05-21T18:36:38.383Z",
                    activeEvents: [
                        {
                            eventType: `EventFlag.LobbySeason${season}`,
                            activeUntil: "9999-12-31T23:59:59.999Z",
                            activeSince: "2019-12-31T23:59:59.999Z"
                        }
                    ],
                    state: {
                        activeStorefronts: [],
                        eventNamedWeights: {},
                        activeEvents: [],
                        seasonNumber: 10,
                        seasonTemplateId: `AthenaSeason:athenaseason${season}`,
                        matchXpBonusPoints: 0,
                        eventPunchCardTemplateId: "",
                        seasonBegin: "9999-12-31T23:59:59.999Z",
                        seasonEnd: "9999-12-31T23:59:59.999Z",
                        seasonDisplayedEnd: "9999-12-31T23:59:59.999Z",
                        weeklyStoreEnd: "9999-12-31T23:59:59.999Z",
                        stwEventStoreEnd: "9999-12-31T23:59:59.999Z",
                        stwWeeklyStoreEnd: "9999-12-31T23:59:59.999Z",
                        dailyStoreEnd: "9999-12-31T23:59:59.999Z"
                    }
                }],
                cacheExpire: "9999-12-31T23:59:59.999Z"
            }
        },
"client-matchmaking":{
         "states":[
            {
               "validFrom":"2020-12-16T00:29:34.857Z",
               "activeEvents":[
                  
               ],
               "state":{
                  "region":{
                     "NAE":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "NAW":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "EU":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "BR":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "OCE":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ],
                        "eventFlagsForcedOff":[
                           "Playlist_DefaultDuo"
                        ]
                     },
                     "ASIA":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ],
                        "eventFlagsForcedOff":[
                           "Playlist_DefaultDuo"
                        ]
                     },
                     "NA":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "ME":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "CN":{
                        "eventFlagsForcedOff":[
                           "Playlist_DefaultDuo",
                           "Playlist_Bots_DefaultDuo",
                           "Playlist_Deimos_DuoCN"
                        ]
                     },
                     "REGIONID":{
                        "eventFlagsForcedOff":[
                           "Playlist_Deimos_Duo_WinterCN"
                        ]
                     }
                  }
               }
            },
            {
               "validFrom":"2020-12-16T00:30:00.000Z",
               "activeEvents":[
                  
               ],
               "state":{
                  "region":{
                     "NAE":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "NAW":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "EU":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "BR":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "OCE":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "ASIA":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ],
                        "eventFlagsForcedOff":[
                           "Playlist_DefaultDuo"
                        ]
                     },
                     "NA":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "ME":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "CN":{
                        "eventFlagsForcedOff":[
                           "Playlist_DefaultDuo",
                           "Playlist_Bots_DefaultDuo",
                           "Playlist_Deimos_DuoCN"
                        ]
                     },
                     "REGIONID":{
                        "eventFlagsForcedOff":[
                           "Playlist_Deimos_Duo_WinterCN"
                        ]
                     }
                  }
               }
            },
            {
               "validFrom":"2020-12-16T01:00:00.000Z",
               "activeEvents":[
                  
               ],
               "state":{
                  "region":{
                     "NAE":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "NAW":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "EU":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "BR":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "OCE":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "ASIA":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "NA":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "ME":{
                        "eventFlagsForcedOn":[
                           "Playlist_Creative_LTM_Pit",
                           "Playlist_Creative_LTM_Spy_Gold"
                        ]
                     },
                     "CN":{
                        "eventFlagsForcedOff":[
                           "Playlist_DefaultDuo",
                           "Playlist_Bots_DefaultDuo",
                           "Playlist_Deimos_DuoCN"
                        ]
                     },
                     "REGIONID":{
                        "eventFlagsForcedOff":[
                           "Playlist_Deimos_Duo_WinterCN"
                        ]
                     }
                  }
               }
            }
         ],
         "cacheExpire":"2020-12-16T02:29:34.857Z"
      },
        cacheIntervalMins: 15,
        currentTime: new Date()
    })
})

module.exports = app
