# Navigation

Build Navigation using Structures and reuse it from project to project.

``` json
[
  {
    "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\Section",
    "name": "Primary Navigation",
    "handle": "primaryNavigation",
    "type": "structure",
    "hasUrls": false,
    "maxLevels": 1,
    "enableVersioning": false,
    "sites": {
      "default": {
        "enabled": 1,
        "singleUri": "",
        "uriFormat": "news/{slug}",
        "template": "section-one/_entry",
        "enabledByDefault": 1
      },
      "craftUk": {
        "enabled": 1,
        "singleUri": "",
        "uriFormat": "newsuk/{slug}",
        "template": "section-one/_entry",
        "enabledByDefault": 1
      }
    },
    "entryTypes": [
      {
        "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\EntryType",
        "name": "Page",
        "handle": "page",
        "showTitles": true,
        "titleLabel": "Name",
        "fieldLayout": {
          "fieldLayoutTab": {
            "name": "Nav Item",
            "fields": [
              {
                "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\Field",
                "type": "craft\\fields\\Entries",
                "groupId": 1,
                "name": "Page",
                "handle": "page",
                "instructions": "Add an existing Entry to your navigation.",
                "settings": {
                  "limit": 1,
                  "sources": "*",
                  "selectionLabel": "Select an entry"
                }
              }
            ]
          }
        }
      },
      {
        "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\EntryType",
        "name": "Custom URL",
        "handle": "customUrl",
        "showTitles": true,
        "titleLabel": "Name",
        "fieldLayout": {
          "fieldLayoutTab": {
            "name": "Nav Item",
            "fields": [
              {
                "@model": "barrelstrength\\sproutbaseimport\\importers\\settings\\Field",
                "type": "craft\\fields\\PlainText",
                "groupId": 1,
                "name": "Custom URL",
                "handle": "customUrl",
                "instructions": "Link to an off-site resource in your navigation.",
                "settings": {
                  "placeholder": "",
                  "multiline": false
                }
              }
            ]
          }
        }
      }
    ]
  }
]
```