clipop
===

Utility to parse cli options into a JSON object

```bash
my-node-cli-app --name "john doe" --isAdmin
```

Options will be parsed like this:

```json
{
  "name": "john doe",
  "isAdmin": true
}
```

You can also use notations:

```bash
my-node-cli-app --names.firstname joe --hobbies[0].name hockey 
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