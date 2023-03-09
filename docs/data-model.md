# Data models

---

### Accounts

| name       | type   | unique | optional |
| ---------- | ------ | ------ | -------- |
| first_name | string | yes    | yes      |
| last_name  | string | no     | yes      |
| username   | string | yes    | no       |
| email      | string | no     | yes      |
| password   | string | no     | no       |

The `accounts` entity contains the information for
a single user so that they can log in.

### Reviews

| name         | type   | unique | optional |
| ------------ | ------ | ------ | -------- |
| display_name | string | false  | false    |
| comments     | string | false  | false    |
| rating       | float  | false  | false    |
| movie_id     | int    | false  | false    |
