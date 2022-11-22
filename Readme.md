## Description

Door Dash Clone - [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Problem Statement

1. It's a system for multiple restaurants, similar to Yelp or Door dash.
2. The user can preorder a specific dish option in the menu.
3. The user can view info with text, images and/or videos about a restaurant/dish.
4. The user can post a review about a restaurant/dish.
5. The review contains texts, images and/or videos.
6. The User can view other reviews.

Deliverable: Give me the UML, abstract interfaces, or whatever that can reflect the backend models/structures.

Also, discuss all the potential challenging parts you can think of as well as potential solutions for the indicated challenges.

## UML

### REQUEST LIFECYCLE

```
_
CLIENT SIDE (REACT)
|
GQL / REST HTTP CALLS
|
API
| GET_USER
| GET RESTAURANTS
| GET RESTAURANT DISHES
| CREATE USER_REVIEW
| CREATE RESTAURANT REVIEW
| CREATE USER_ORDER
| UPDATE USER_ORDER
ORM - DATABASE - MYSQL
```

### DATE BASE SCHEMA

```
| TENANT
| GROUP
| ROLE
| USER
| RESTAURANT
| DISH
| USER_REVIEW
| USER_ORDER
| FILE
```

## Challenges

1. File upload anti viral scan and isolation.
2. Preordering scheduling to restaurant notification, specifically variable hours of operation time window maximum? (assume only same day ordering)
3. Profanity / pornography filtering client & server side.
4. Scaled search / geographic suggestions
5. Point of sale integration for restaurants
6. Restaurant specific API endpoints (flagging / curating reviews & content - menu)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
