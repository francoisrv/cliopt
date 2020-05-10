clipop
===

Utility to parse terminal input into a JSON object

```bash
my-app --name "john doe" --is-admin
```

Options will be parsed like this:

```json
{
  "name": "john doe",
  "is-admin": true
}
```

You can also use notations:

```bash
my-app --names.firstname joe --hobbies[0].name hockey 
```
```json
{
  "names": {
    "firstname": "jo"
  },
  "hobbies": [
    {
      "name": "hockey"
    }
  ]
}
```

This utility only returns options and other arguments are ignored:

```bash
my-app connect --uri localhost --ssl 
```
```json
{
  "uri": "localhost",
  "ssl": true
}
```

## Usage

```bash
npm install clipop
```

```ts
import clipop from 'clipop'

const [,, ...params] = process.argv

const options = clipop(...params) // clipop accepts a spread array of strings
```

## Value declarations

```bash
--foo     hello       # "hello"
--foo     22          # "22"
--foo     true        # "true"
--foo     false       # "false"
--foo     null        # "null"
--foo                 # true
--foo     ---22       # 22
--foo     ---true     # true
--foo     ---false    # false
--foo     ---null     # null
```

## Typescript suppor

```ts
clipop<{ name: string }>(...params) // my-app --name joe
```