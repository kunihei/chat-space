# README

# chat-space DB設計
## usersテーブル
| Column   | Type   | Options      |
| -------- | ------ | ------------ |
| email    | string | null:  false |
| password | string | null:  false |
| username | string | null:  false |
### Association
- has_many  :groups, through: :groups_users
- has_many  :comments

## groupsテーブル
| Column | Type | Options      |
| ------ | ---- | ------------ |
| title  | text | null:  false |
### Association
- belongs_to :user, through: groups_users
- has_many   :comments

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## commentsテーブル
| Column | Type | Options |
|--------|------|---------|
| text   | text | null: false|
| image  | text | |
### Association
- belongs_to :user
- belongs_to :group