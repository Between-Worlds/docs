import { API_BASE_URL_V1, AUTH_EXAMPLE } from './constants';

interface Example {
  description: string;
  url: string;
  response: string;
}

interface Endpoint {
  allowedMethods: string[];
  requiredParameters: string[];
  optionalParameters: string[];
  examples: Example[];
  notes?: string;
}

export const endpoints: { [key: string]: Endpoint } = {
  ['v1/users']: {
    allowedMethods: ['GET'],
    requiredParameters: ['authId', 'apiKey'],
    optionalParameters: ['name', 'equipment', 'biography', 'inventory'],
    notes: 'inventory is only available if you are the user in question.',
    examples: [
      {
        description: 'To get all users',
        url: `${API_BASE_URL_V1}users?${AUTH_EXAMPLE}`,
        response: `[
  {
    "createdAt": "2022-05-21T17:09:18.537Z",
    "roles": [
      "user",
      "admin",
      "editor"
    ],
    "name": "Athano"
  },
  {
    "createdAt": "2022-06-01T19:22:41.393Z",
    "roles": [
      "user"
    ],
    "name": "Test"
  },
  {
    "createdAt": "2022-06-05T20:03:39.853Z",
    "roles": [
      "user"
    ],
    "name": "Tester"
  }
]`,
      },
      {
        description: 'To get a specific user with the name PlayerName',
        url: `${API_BASE_URL_V1}users?${AUTH_EXAMPLE}&name=PlayerName`,
        response: `{
  "createdAt": "2021-01-01T00:00:00.000Z",
  "loggedIn": true,
  "roles": ["user", "admin", "supporter"],
  "name": "PlayerName",
}`,
      },
      {
        description: 'To get a specific user with the name PlayerName and their equipment',
        url: `${API_BASE_URL_V1}users?${AUTH_EXAMPLE}&name=PlayerName&equipment`,
        response: `{
  "createdAt": "2021-01-01T00:00:00.000Z",
  "loggedIn": false,
  "roles": ["user", "admin", "supporter"],
  "name": "PlayerName",
  "equipment": [
    {
      "itemSchematic": {
        "qualityAdjectives": [
          "Low",
          "Lowest",
          "Middle",
          "High",
          "Highest"
        ],
        "level": 5,
        "imageUrl": "https://example.com/image.webp",
        "type": "Equipment",
        "name": "Hood",
        "description": "A description",
        "worthMultiplier": 50,
        "equipmentType": "Head"
      },
      "quality": 0
    },
    {
      "itemSchematic": {
        "qualityAdjectives": [
          "Low",
          "Lowest",
          "Middle",
          "High",
          "Highest"
        ],
        "level": 5,
        "imageUrl": "https://example.com/image.webp",
        "type": "Equipment",
        "name": "Leggings",
        "description": "A description",
        "worthMultiplier": 50,
        "equipmentType": "Legs"
      },
      "quality": 0
    }
  ],
}`,
      },
    ],
  },
  ['v1/items']: {
    allowedMethods: ['GET'],
    requiredParameters: ['authId', 'apiKey'],
    optionalParameters: ['name'],
    examples: [
      {
        description: 'To get all items',
        url: `${API_BASE_URL_V1}items?${AUTH_EXAMPLE}`,
        response: `[
  {
    "qualityAdjectives": [
      "Tiny",
      "Small",
      "Average",
      "Big",
      "Huge"
    ],
    "level": 1,
    "imageUrl": "",
    "type": 1,
    "name": "Loot Bag",
    "worthMultiplier": 20,
    "consumeEffects": [
      {
        "duration": 0,
        "type": 13,
        "min": 1,
        "max": 1000
      },
      {
        "duration": 0,
        "type": 14,
        "min": 1,
        "max": 1000
      }
    ],
    "skillEffects": [],
    "qualityDescriptions": [
      "It might have loot in it, unless?",
      "It might have loot in it, unless?",
      "It might have loot in it, unless?",
      "It might have loot in it, unless?",
      "It might have loot in it, unless?"
    ]
  },
  {
    "qualityAdjectives": [
      "Tiny",
      "Small",
      "Average",
      "Big",
      "Huge"
    ],
    "level": 1,
    "imageUrl": "",
    "type": 1,
    "name": "Party Bag",
    "worthMultiplier": 20,
    "consumeEffects": [
      {
        "duration": 0,
        "type": 13,
        "min": 1000,
        "max": 2000,
        "worthMultiplier": 1
      }
    ],
    "skillEffects": [],
    "qualityDescriptions": [
      "Thank you for coming to my birthday party!",
      "Thank you for coming to my birthday party!",
      "Thank you for coming to my birthday party!",
      "Thank you for coming to my birthday party!",
      "Thank you for coming to my birthday party!"
    ]
  }
]`,
      },
      {
        description: 'To get a specific item with the name ItemName',
        url: `${API_BASE_URL_V1}items?${AUTH_EXAMPLE}&name=Loot%20Bag`,
        response: `{
  "qualityAdjectives": [
    "Tiny",
    "Small",
    "Average",
    "Big",
    "Huge"
  ],
  "level": 1,
  "imageUrl": "",
  "type": 1,
  "name": "Loot Bag",
  "worthMultiplier": 20,
  "consumeEffects": [
    {
      "duration": 0,
      "type": 13,
      "min": 1,
      "max": 1000
    },
    {
      "duration": 0,
      "type": 14,
      "min": 1,
      "max": 1000
    }
  ],
  "skillEffects": [],
  "qualityDescriptions": [
    "It might have loot in it, unless?",
    "It might have loot in it, unless?",
    "It might have loot in it, unless?",
    "It might have loot in it, unless?",
    "It might have loot in it, unless?"
  ]
},`,
      },
    ],
  },
  ['v1/npcs']: {
    allowedMethods: ['GET'],
    requiredParameters: ['authId', 'apiKey'],
    optionalParameters: ['name'],
    examples: [
      {
        description: 'To get all npcs',
        url: `${API_BASE_URL_V1}npcs?${AUTH_EXAMPLE}`,
        response: `[
  {
    "name": "Slippy Floor",
    "skills": [],
    "level": 10,
    "description": "The floor is aggressively slippy!",
    "damageMin": 36,
    "damageMax": 40,
    "armour": 15,
    "healthMin": 200,
    "healthMax": 300,
    "imageUrl": "",
    "loot": [
      {
        "itemName": "Metal",
        "chance": 30,
        "quantityMin": 2,
        "quantityMax": 5,
        "qualityMin": 2,
        "qualityMax": 4
      }
    ]
  },
  {
    "name": "Cleaning Bot",
    "skills": [],
    "level": 1,
    "description": "It's trying to clean, and you're dirty!",
    "damageMin": 2,
    "damageMax": 4,
    "armour": 3,
    "healthMin": 15,
    "healthMax": 22,
    "imageUrl": "",
    "loot": [
      {
        "itemName": "Metal",
        "chance": 50,
        "quantityMin": 1,
        "quantityMax": 2,
        "qualityMin": 0,
        "qualityMax": 3
      },
      {
        "itemName": "Cog",
        "chance": 25,
        "quantityMin": 1,
        "quantityMax": 2,
        "qualityMin": 0,
        "qualityMax": 4
      },
      {
        "itemName": "Bolt",
        "chance": 25,
        "quantityMin": 1,
        "quantityMax": 2,
        "qualityMin": 0,
        "qualityMax": 4
      }
    ]
  },
]`,
      },
      {
        description: 'To get a specific npc',
        url: `${API_BASE_URL_V1}npcs?${AUTH_EXAMPLE}&name=Slippy%20Floor`,
        response: `{
  "name": "Slippy Floor",
  "skills": [],
  "level": 10,
  "description": "The floor is aggressively slippy!",
  "damageMin": 36,
  "damageMax": 40,
  "armour": 15,
  "healthMin": 200,
  "healthMax": 300,
  "imageUrl": "",
  "loot": [
    {
      "itemName": "Metal",
      "chance": 30,
      "quantityMin": 2,
      "quantityMax": 5,
      "qualityMin": 2,
      "qualityMax": 4
    }
  ]
}`,
      },
    ],
  },
  ['v1/skills']: {
    allowedMethods: ['GET'],
    requiredParameters: ['authId', 'apiKey'],
    optionalParameters: ['name'],
    examples: [
      {
        description: 'To get all skills',
        url: `${API_BASE_URL_V1}skills/`,
        response: `[
  {
    "name": "Attack",
    "description": "Bonk for a bit of damage.",
    "type": 1,
    "cooldown": 0,
    "charges": -1,
    "passive": false,
    "imageUrl": ""
  },
  {
    "name": "Heal",
    "description": "The power of science compels you... to HEAL!",
    "type": 5,
    "cooldown": 3,
    "charges": 3,
    "passive": false,
    "imageUrl": ""
  },
]`,
      },
      {
        description: 'To get a specific skill',
        url: `${API_BASE_URL_V1}skills?name=Attack`,
        response: `{
  "name": "Attack",
  "description": "Bonk for a bit of damage.",
  "type": 1,
  "cooldown": 0,
  "charges": -1,
  "passive": false,
  "imageUrl": ""
}`,
      },
    ],
  },
  ['v1/leaderboards']: {
    allowedMethods: ['GET'],
    requiredParameters: ['authId', 'apiKey'],
    optionalParameters: ['credits', 'highestLevels', 'combatsWon', 'itemsCrafted', 'jobsPerformed', 'overdoses', 'missionsCompleted', 'name'],
    examples: [
      {
        description: 'To get credits leaderboards',
        url: `${API_BASE_URL_V1}leaderboards?${AUTH_EXAMPLE}&credits`,
        response: `{
  "credits": [
    { "name": "B", "rank": 1, "credits": 1011 },
    { "name": "C", "rank": 2, "credits": 883 },
    { "name": "A", "rank": 3, "credits": 304 }
  ]
}`,
      },
      {
        description: 'To get credits and highest level leaderboards',
        url: `${API_BASE_URL_V1}leaderboards?${AUTH_EXAMPLE}&credits&highestLevels`,
        response: `{
  "credits": [
    { "name": "B", "rank": 1, "credits": 1011 },
    { "name": "C", "rank": 2, "credits": 883 },
    { "name": "A", "rank": 3, "credits": 304 }
  ],
  "highestLevels": [
    { "name": "C", "rank": 1, "level": 6 },
    { "name": "B", "rank": 2, "level": 5 },
    { "name": "A", "rank": 3, "level": 4 }
  ]
}`,
      },
      {
        description: 'To get a specific user credits leaderboards position',
        url: `${API_BASE_URL_V1}leaderboards?${AUTH_EXAMPLE}&name=PlayerName&credits`,
        response: `{ "credits": [{ "name": "PlayerName", "rank": 12, "credits": 33787 }] }`,
      },
    ],
  },
};
