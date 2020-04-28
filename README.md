# react-custom-flag-select
[![npm version](https://badge.fury.io/js/react-custom-flag-select.svg)](https://badge.fury.io/js/react-custom-flag-select) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![react-custom-flag-select](http://img.shields.io/npm/dm/react-custom-flag-select.svg)](https://www.npmjs.com/package/react-custom-flag-select) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-custom-flag-select.svg) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/edwardfhsiao/react-custom-flag-select/master/LICENSE)

A react component for custom flag (country code) select.
# <img src="https://raw.githubusercontent.com/edwardfhsiao/react-custom-flag-select/master/react-custom-flag-select.jpg" />

# Online Demo
<a href="https://edwardfhsiao.github.io/react-custom-flag-select/">Live demo</a>

# Codesandbox Examples
* <a href="https://codesandbox.io/s/jvw9nvyzv">Live demo playground</a>

###  :tada: For version >= 2.0.0, please update react and react-dom to at least ```16.8.6```, since it is rewrited with hooks.
```js
  "peerDependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
```

# Thanks
#### This project is inspired by <a href="https://github.com/ekwonye-richard/react-flags-select">ekwonye-richard/react-flags-select</a>
#### Flag images: <a href="https://github.com/ekwonye-richard/react-flags-select/tree/master/flags">https://github.com/ekwonye-richard/react-flags-select/tree/master/flags</a>

# Why another flag select?
**Area Code is Area Code, Phone Number is Phone Number, Flag is Flag. Easy for you to handle when they are separated.**

This component supports fully customized html. It focuses on the data you provided and handles the **country code** or **area code** only. Not like <a href="https://github.com/mukeshsoni/react-telephone-input">react-telephone-input</a> validate whole value along with the phone number without separation from 'area code' and 'phone number', which sometimes could be really painful when you are trying to handle them in your own way. 

In case the **country code** or the **area code** or even the **flags** might be wrong inside a library, why don't provide them yourself?

# Installation
```sh
npm install react-custom-flag-select --save
```
# Donate
<a href="https://www.paypal.me/XIAOMENGXIAO/0.99" target="_blank" alt="PayPal Donate">Thanks for donating me a donut!&nbsp;&nbsp;⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄</a>

# Browser support
Tested on IE9+ and Chrome and Safari(10.0.3)

# Docs Link
[ReactCustomFlagSelect](#ReactCustomFlagSelect)

### <a name="ReactCustomFlagSelect"></a>ReactCustomFlagSelect

|Props                             |       |Type    |Description                                  |Default     |
|---                               |---    |---     |---                                          |  ---       |
|tabIndex                          |**Req**|**Str &#124; Num**|**If its not provided, the keydown may not working**|**none**|
|id                                |  Opt  |  Str   |                                             |  none      |
|name                              |  Opt  |  Str   |                                             |  ""        |
|type                              |  Opt  |  Str   |                                             |  "text"    |
|value                             |  Opt  |  Str   |                                             |  ""        |
|disabled                          |  Opt  |  Bool  |                                             |  false     |
|showSearch                        |  Opt  |  Bool  |Show a search box in order to find option quickly. | false |
|keyword                           |  Opt  |  Str   |Show a keyword for search box.               |  ''        |
|showArrow                         |  Opt  |  Bool  |                                             |  true      |
|animate                           |  Opt  |  Bool  |                                             |  false     |
|**optionList**                    |**Req**|**Array**|**[{id: "1", name: "United States", displayText: "US(1)", flag: "us.svg"}, {id: "86", name: "中国", displayText: "中国(86)", flag: "cn.svg"}]**              |**[]**          |
|classNameSelect                   |  Opt  |  Str   |                                             |  ""        |
|classNameWrapper                  |  Opt  |  Str   |                                             |  ""        |
|classNameContainer                |  Opt  |  Str   |                                             |  ""        |
|classNameButton                   |  Opt  |  Str   |                                             |  ""        |
|classNameOptionListContainer      |  Opt  |  Str   |                                             |  ""        |
|classNameOptionListItem           |  Opt  |  Str   |                                             |  ""        |
|customStyleSelect                 |  Opt  |  Obj   |                                             |  {}        |
|customStyleButton                 |  Opt  |  Obj   |                                             |  {}        |
|customStyleWrapper                |  Opt  |  Obj   |                                             |  {}        |
|customStyleContainer              |  Opt  |  Obj   |                                             |  {}        |
|customStyleOptionListContainer    |  Opt  |  Obj   |                                             |  {}        |
|customStyleOptionListItem         |  Opt  |  Obj   |                                             |  {}        |
|**onChange**                      |**Req**|**Func**|                                             |**(val, e) => {}**|
|**onBlur**                        |**Opt**|**Func**|                                             |**none**    |
|onFocus                           |  Opt  |  Func  |                                             |  none      |
|onClick                           |  Opt  |  Func  |                                             |  none      |
|**selectHtml**                    |**Opt**|**Html**|**The custom html that will display when user choose. Use it if you think the default html is ugly.**|**none**    |
|**selectOptionListItemHtml**      |**Opt**|**Html**|**The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.**|**none**    |

```js
import ReactCustomFlagSelect from 'react-custom-flag-select';
import "react-custom-flag-select/lib/react-custom-flag-select.min.css";

const find = (arr, obj) => {
  const res = [];
  arr.forEach(o => {
    let match = false;
    Object.keys(obj).forEach(i => {
      if (obj[i] == o[i]) {
        match = true;
      }
    });
    if (match) {
      res.push(o);
    }
  });
  return res;
};

const FLAG_SELECTOR_OPTION_LIST = [
  { id: '1', name: 'US', displayText: 'US(1)', locale: 'en-US', flag: require('../src/image/flags/us.svg') },
  { id: '86', name: '中国', displayText: '中国(86)', locale: 'zh-CN', flag: require('../src/image/flags/cn.svg') }
];

const { areaCode, phone, validate } = this.state;
const currentItem = find(FLAG_SELECTOR_OPTION_LIST, { id: areaCode })[0];

 <ReactCustomFlagSelect
   tabIndex={'1'} //Optional.[String or Number].Default: -1.
   id={'areaCode'} //Optional.[String].Default: "". Input ID.
   name={'areaCode'} //Optional.[String].Default: "". Input name.
   value={currentItem.id} //Optional.[String].Default: "".
   disabled={false} //Optional.[Bool].Default: false.
   showArrow={true} //Optional.[Bool].Default: true.
   animate={true} //Optional.[Bool].Default: false.
   optionList={FLAG_SELECTOR_OPTION_LIST} //Required.[Array of Object(s)].Default: [].
   // selectOptionListItemHtml={<div>us</div>} //Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
   // selectHtml={<div>us</div>} //Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
   classNameWrapper="" //Optional.[String].Default: "".
   classNameContainer="" //Optional.[String].Default: "".
   classNameOptionListContainer="" //Optional.[String].Default: "".
   classNameOptionListItem="" //Optional.[String].Default: "".
   classNameDropdownIconOptionListItem={''} //Optional.[String].Default: "".
   customStyleWrapper={{}} //Optional.[Object].Default: {}.
   customStyleContainer={{ border: 'none', fontSize: '12px' }} //Optional.[Object].Default: {}.
   customStyleSelect={{ width: '100px' }} //Optional.[Object].Default: {}.
   customStyleOptionListItem={{}} //Optional.[Object].Default: {}.
   customStyleOptionListContainer={{ maxHeight: '100px', overflow: 'auto', width: '120px', marginTop: '11px' }} //Optional.[Object].Default: {}.
   onChange={areaCode => {
     this.setState({ areaCode: areaCode }, () => {
       this.handlePhoneChange(phone);
     });
   }}
   // onBlur={() => {}} //Optional.[Func].Default: none.
   // onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
   // onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
 />
```
