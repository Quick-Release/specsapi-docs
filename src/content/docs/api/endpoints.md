---
title: API Endpoints
description: A guide to the available API endpoints.
---

Welcome to the API reference. Here you will find all the information needed to interact with our services.

## Authentication

All API requests require a Bearer token in the `Authorization` header.

```http
Authorization: Bearer YOUR_API_KEY
```

## Get Users
Retrieve a list of users

### Request

```http
GET /api/v1/users
```

### Response

```json
[
  {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
]
```
