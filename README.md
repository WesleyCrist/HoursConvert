# Time converter

- Convert minutes to hours and hours to minutes
- Convert 24h format to AM PM

## Functions

### Conversion hour examples


- .converter('1439') -> '23:59'
- .converter('23:59') -> 1439

- Code for now limited to the values shown above

### Conversion PM to AM examples

- .pmToAm('23:59') -> '11:59 PM'
- .pmToAm('11:59') -> '11:59 AM'

## Examples with code

```

import HoursConvert from "hoursconvert"

console.log(HoursConvert.converter('12:12', 732))
console.log(HoursConvert.pmToAm('11:50', '22:22'))

```

## observation

- acessando as funcções pela classe *HoursConvert* poderá ser convertido mais de uma entrada

## links

[Github project](https://github.com/WesleyCrist/HoursConvert)