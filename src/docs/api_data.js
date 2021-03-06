define({ "api": [
  {
    "type": "get",
    "url": "/user",
    "title": "Get User Information",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>User Contact number</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date of User created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n   \"id\": \"02e793a0-10c4-4c45-a0f5-41db0fc6da06\",\n   \"name\": \"rach\",\n   \"email\": \"rach@email.com\",\n   \"password\": \"$2b$10$LH.8dOgMYpZ5EyJvj8bIheIZ3qIf/cXcZ9psUDyS0kSxmHayFR9K6\",\n   \"contact\": \"+91123569789\",\n   \"createdAt\": \"2021-06-04T05:36:49.276Z\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>id of the user was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n    \"error\": \"UserNotFound\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/user/user.controller.ts",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get Users Information",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of all Users</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/user/user.controller.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Reponse:",
          "content": "HTTP/1.1 200 OK\n{\n\"id\": \"02e793a0-10c4-4c45-a0f5-41db0fc6da06\",\n\"name\": \"rach\",\n\"email\": \"rach@email.com\",\n\"password\": \"$2b$10$LH.8dOgMYpZ5EyJvj8bIheIZ3qIf/cXcZ9psUDyS0kSxmHayFR9K6\",\n\"contact\": \"+91123569789\",\n\"createdAt\": \"2021-06-04T05:36:49.276Z\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserCredsIncorrect",
            "description": "<p>Email or password is incorrect</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response:",
          "content": "HTTP/1.1 401 Incorrect\n  {\n    \"error\": \"UserCredsIncorrect\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/user/user.controller.ts",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Register User",
    "name": "RegisterUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>User's contact number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"name\": \"Harry\",\n  \"email\": \"potter@email.com\",\n  \"password\": \"Potter@3841\",\n  \"contact\": \"9121213212\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Success 200",
            "type": "Phone",
            "optional": false,
            "field": "contact",
            "description": "<p>User's Contact number</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date of User created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/user/user.controller.ts",
    "groupTitle": "Users"
  }
] });
