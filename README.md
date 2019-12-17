# Nasa Smart API for node.js

This library make friendly access to NASA API

## Installation

Via npm : 

`$ npm install @samuelcalegari/nasa-smart-api`

## Usage

```
// Importation
const NasaSmartAPI = require("@samuelcalegari/nasa-api")

// Declaration
const n = new NasaSmartAPI({key :'dDgtANyo4HGKNbBI1LgPLN5fvzZ2UERCffeu4nHR'});

// Make a simple query to search images from NASA
const search =  n.searchImage({'query': 'mars'})
    .then((items)=>{
        items.forEach(item => {
            
            // Print Image Title
            console.log(item.title);
            
            //Print Image URL : GetImageUrl function support format parameter ('orig', 'large', 'medium', 'small' or 'thumb')
            console.log(item.getImgUrl());
        });
    })
    .catch((e)=> {
        console.log(e);
    })
```

## Bugs and Issues

If you encounter any bugs or issues, feel free to open an issue at [github](https://github.com/samuelcalegari/nasa-smart-api).


## Licence

```
Copyright © 2019, Samuel Calegari.

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.
* Neither the name nasa-smart-api nor the names of its contributor(s) may be used to
  endorse or promote products derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.