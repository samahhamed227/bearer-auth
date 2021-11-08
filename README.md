# bearer-auth

### Deployment Test

**Author: samah Hamed**

- [tests report](https://github.com/samahhamed227/bearer-auth/actions).
- [back-end]().
- [pull request](https://github.com/samahhamed227/bearer-auth).

**Setup**

`.env` **requirements**

- `PORT` - Port Number

- `DATABASE_URL` = Postgres DB

- `SECRET` = JWT SECRET

**Running the app**

- `npm start`

- Endpoint: `/signup`

> `{"username": "Basic","password": "test321"}`


- Endpoint: `/signin`

> - Username `Basic`
> - Password `test321`


- Endpoint: `/users`

> - Token `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhbWltIiwiaWF0IjoxNjM2MzY2MDgwfQ.OhHLD4yRWs1LlTloBjIs0j-QYzi8LdoQDXUfPaO0BSg`

### whiteboard 
![](samahuml.png)


**Tests**

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`