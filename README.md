# at-commands-parser
A library for parsing AT commands input. 

The technical specification this parser is build on can be found in specification/huawei.pdf

Original TS: AT command set for User Equipment (UE) (3GPP TS 27.007 version 3.14.0 Release 1999)
http://www.etsi.org/deliver/etsi_ts/127000_127099/127007/03.14.00_60/ts_127007v031400p.pdf

# Usage:
    See example/test.js 
    
# Example:

```javaScript
input "ATE0; +CMEE=\"MM\"; +CPMS=,122,,\"ABC\";I S3=35;^CVOICE=1\r"
output: {
  "commands": [
    {
      "type": "basic",
      "name": "E",
      "argument": 0,
      "raw": "E0"
    },
    {
      "type": "general",
      "subtype": "setOrExex",
      "name": {
        "prefix": "+",
        "value": "CMEE"
      },
      "arguments": [
        "MM"
      ],
      "raw": "+CMEE=\"MM\""
    },
    {
      "type": "general",
      "subtype": "setOrExex",
      "name": {
        "prefix": "+",
        "value": "CPMS"
      },
      "arguments": [
        null,
        122,
        null,
        "ABC"
      ],
      "raw": "+CPMS=, 122, , \"ABC\""
    },
    {
      "type": "basic",
      "name": "I",
      "raw": "I"
    },
    {
      "type": "sRegister",
      "subtype": "set",
      "regNumber": "3",
      "argument": {
        "code": 35,
        "char": "\"#\""
      },
      "raw": "S3=35"
    },
    {
      "type": "general",
      "subtype": "setOrExex",
      "name": {
        "prefix": "^",
        "value": "CVOICE"
      },
      "arguments": [
        1
      ],
      "raw": "^CVOICE=1"
    }
  ],
  "raw": "ATE0 +CMEE=\"MM\"; +CPMS=, 122, , \"ABC\"; I S3=35 ^CVOICE=1\r"
}
```
