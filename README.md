# openapi-utils-defaults

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Defaults api parts into an openapi definition.

# Installation

```
npm install -g openapi-utils-defaults
```

# Usage

Given the example files displayed below (api.yaml and x-a127.yaml), the following command

`openapi-utils-defaults -s x-a127.yaml -t api.yaml > api.json`

Will result in the api.json, also displayed below :)

## Example api.yaml

```yaml
swagger: "2.0"
info:
  version: 1.0.0
  title: openapi example
basePath: /v1
paths:
  /pets:
x-a127-services:
  - name: add-cors
    provider: x-cors
    options:
      displayName: Add CORS
      includeInErrorResponse: true
      headers:
        Access-Control-Allow-Methods:
          type: array
          collectionFormat: csv
          default: GET
```

## Example x-a127.yaml

```yaml
x-a127-services:
  - name: add-cors
    provider: x-cors
    options:
      displayName: Add CORS
      includeInErrorResponse: true
      headers:
        Access-Control-Allow-Origin:
          type: string
          default: "*"
        Access-Control-Allow-Methods:
          type: array
          collectionFormat: csv
          default: GET, PUT, POST, DELETE
```

## Result api.json

```json
{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "openapi example"
  },
  "basePath": "/v1",
  "paths": {
    "/pets": null
  },
  "x-a127-services": [
    {
      "name": "add-cors",
      "provider": "x-cors",
      "options": {
        "displayName": "Add CORS",
        "includeInErrorResponse": true,
        "headers": {
          "Access-Control-Allow-Origin": {
            "type": "string",
            "default": "*"
          },
          "Access-Control-Allow-Methods": {
            "type": "array",
            "collectionFormat": "csv",
            "default": "GET"
          }
        }
      }
    }
  ]
}
```

[npm-badge]: https://badge.fury.io/js/openapi-utils-defaults.svg
[npm-url]: https://badge.fury.io/js/openapi-utils-defaults
[travis-badge]: https://travis-ci.org/orangewise/openapi-utils-defaults.svg?branch=master
[travis-url]: https://travis-ci.org/orangewise/openapi-utils-defaults
