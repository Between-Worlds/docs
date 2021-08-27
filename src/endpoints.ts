import { API_BASE_URL_V1 } from './constants';

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
}

export const endpoints: { [key: string]: Endpoint } = {
  ['v1/users']: {
    allowedMethods: ['GET'],
    requiredParameters: [],
    optionalParameters: ['name', 'equipment', 'biography'],
    examples: [
      {
        description: 'To get all users',
        url: `${API_BASE_URL_V1}users/`,
        response: `[
  {
    "createdAt": "2021-01-01T00:00:00.000Z",
    "loggedIn": true,
    "roles": ["user", "supporter"],
    "name": "A",
    "banned": false
  },
  {
    "createdAt": "2021-01-01T00:00:00.000Z",
    "loggedIn": false,
    "roles": ["user"],
    "name": "B",
    "banned": false
  },
  {
    "createdAt": "2021-01-01T00:00:00.000Z",
    "loggedIn": false,
    "roles": ["user"],
    "name": "C",
    "banned": true
  }
]`,
      },
      {
        description: 'To get a specific user with the name PlayerName',
        url: `${API_BASE_URL_V1}users?name=PlayerName`,
        response: `{
  "createdAt": "2021-01-01T00:00:00.000Z",
  "loggedIn": true,
  "roles": ["user", "admin", "supporter"],
  "name": "PlayerName",
  "banned": false
}`,
      },
      {
        description: 'To get a specific user with the name PlayerName and their equipment',
        url: `${API_BASE_URL_V1}users?name=PlayerName&equipment`,
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
  "banned": false
}`,
      },
    ],
  },
  ['v1/items']: {
    allowedMethods: ['GET'],
    requiredParameters: [],
    optionalParameters: ['name'],
    examples: [
      {
        description: 'To get all items',
        url: `${API_BASE_URL_V1}items/`,
        response: `[
  {
    "qualityAdjectives": ["Lowest", "Low", "Middle", "High", "Highest"],
    "min": 1,
    "max": 2,
    "imageUrl": "https://example.com/image.webp",
    "type": "Equipment",
    "name": "Shirt",
    "description": "A description",
    "worthMultiplier": 20,
    "equipmentType": "Torso",
    "consumeEffects": [],
    "createdAt": "2021-01-01T00:00:00.000Z",
    "updatedAt": "2021-01-01T00:00:00.000Z",
  },
  {
    "qualityAdjectives": ["Lowest", "Low", "Middle", "High", "Highest"],
    "min": 1,
    "max": 3,
    "imageUrl": "https://example.com/image.webp",
    "type": "Equipment",
    "name": "Stick",
    "description": "A description",
    "worthMultiplier": 20,
    "equipmentType": "Mainhand",
    "consumeEffects": [],
    "createdAt": "2021-01-01T00:00:00.000Z",
    "updatedAt": "2021-01-01T00:00:00.000Z",
  }
]`,
      },
      {
        description: 'To get a specific item with the name ItemName',
        url: `${API_BASE_URL_V1}items?name=ItemName`,
        response: `{
  "qualityAdjectives": ["Lowest", "Low", "Middle", "High", "Highest"],
  "level": 1,
  "imageUrl": "https://example.com/image.webp",
  "type": "Material",
  "name": "ItemName",
  "description": "A description",
  "worthMultiplier": 15,
  "consumeEffects": [],
  "skillEffects": [],
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
  "equipmentType": "Unknown"
}`,
      },
    ],
  },
  ['v1/npcs']: {
    allowedMethods: ['GET'],
    requiredParameters: [],
    optionalParameters: ['name'],
    examples: [
      {
        description: 'To get all npcs',
        url: `${API_BASE_URL_V1}npcs/`,
        response: `[
{
  "skills": [],
  "name": "Big Enemy",
  "level": 10,
  "description": "A description",
  "damageMin": 36,
  "damageMax": 40,
  "armour": 15,
  "healthMin": 200,
  "healthMax": 300,
  "imageUrl": "https://example.com/image.webp",
  "loot": [
    {
      "item": {
        "qualityAdjectives": [
          "Lowest",
          "Low",
          "Middle",
          "High",
          "Highest"
        ],
        "level": 1,
        "imageUrl": "https://example.com/image.webp",
        "type": "Material",
        "name": "Metal",
        "description": "A description",
        "worthMultiplier": 15,
        "skillEffects": [],
        "equipmentType": "Unknown"
      },
      "chance": 30,
      "quantityMin": 2,
      "quantityMax": 5,
      "qualityMin": 2,
      "qualityMax": 4
    }
  ],
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
},
{
  "skills": ["Roar"],
  "name": "Little Enemy",
  "level": 1,
  "description": "A description",
  "damageMin": 4,
  "damageMax": 8,
  "armour": 3,
  "healthMin": 50,
  "healthMax": 60,
  "imageUrl": "https://example.com/image.webp",
  "loot": [
    {
      "item": {
        "qualityAdjectives": [
          "Lowest",
          "Low",
          "Middle",
          "High",
          "Highest"
        ],
        "level": 1,
        "imageUrl": "https://example.com/image.webp",
        "type": "Material",
        "name": "Metal",
        "description": "A description",
        "worthMultiplier": 15,
        "skillEffects": [],
        "equipmentType": "Unknown"
      },
      "chance": 50,
      "quantityMin": 1,
      "quantityMax": 2,
      "qualityMin": 0,
      "qualityMax": 3
    }
  ],
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
}
]`,
      },
      {
        description: 'To get a specific npc',
        url: `${API_BASE_URL_V1}npcs?name=Little%20Enemy`,
        response: `{
  "skills": ["Scratch"],
  "name": "Little Enemy",
  "level": 1,
  "description": "A description",
  "damageMin": 4,
  "damageMax": 8,
  "armour": 3,
  "healthMin": 50,
  "healthMax": 60,
  "imageUrl": "https://example.com/image.webp",
  "loot": [
    {
      "item": {
        "qualityAdjectives": ["Lowest", "Low", "Middle", "High", "Highest"],
        "level": 1,
        "imageUrl": "https://example.com/image.webp",
        "type": "Material",
        "name": "Metal",
        "description": "A description",
        "worthMultiplier": 15,
        "skillEffects": [],
        "equipmentType": "Unknown"
      },
      "chance": 50,
      "quantityMin": 1,
      "quantityMax": 2,
      "qualityMin": 0,
      "qualityMax": 3
    }
  ],
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
}`,
      },
    ],
  },
  ['v1/skills']: {
    allowedMethods: ['GET'],
    requiredParameters: [],
    optionalParameters: ['name'],
    examples: [
      {
        description: 'To get all skills',
        url: `${API_BASE_URL_V1}skills/`,
        response: `[
{
  "name": "Attack",
  "description": "A description",
  "type": "Attack",
  "cooldown": 0,
  "passive": false,
  "imageUrl": "https://example.com/image.webp",
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
},
{
  "name": "Heal",
  "description": "A description",
  "type": "Heal",
  "cooldown": 3,
  "passive": false,
  "imageUrl": "https://example.com/image.webp",
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
},
]`,
      },
      {
        description: 'To get a specific skill',
        url: `${API_BASE_URL_V1}skills?name=Attack`,
        response: `{
  "name": "Attack",
  "description": "A description",
  "type": "Attack",
  "cooldown": 0,
  "passive": false,
  "imageUrl": "https://example.com/image.webp",
  "createdAt": "2021-01-01T00:00:00.000Z",
  "updatedAt": "2021-01-01T00:00:00.000Z",
}`,
      },
    ],
  },
  ['v1/leaderboards']: {
    allowedMethods: ['GET'],
    requiredParameters: ['credits', 'highestLevels', 'combatsWon', 'itemsCrafted', 'jobsPerformed', 'overdoses', 'missionsCompleted'],
    optionalParameters: ['name'],
    examples: [
      {
        description: 'To get credits leaderboards',
        url: `${API_BASE_URL_V1}leaderboards?credits`,
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
        url: `${API_BASE_URL_V1}leaderboards?credits&highestLevels`,
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
        url: `${API_BASE_URL_V1}leaderboards?name=PlayerName&credits`,
        response: `{ "credits": [{ "name": "PlayerName", "rank": 12, "credits": 33787 }] }`,
      },
    ],
  },
};
