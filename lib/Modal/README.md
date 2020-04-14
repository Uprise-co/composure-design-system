## Table of Contents

- [Installation](#installation)
- [Quick Example](#quick-start)

## Installation

```bash
$ yarn add @uprise/modal 
# or
$ npm i @uprise/modal --save
```

## Quick Start

This will render modal inputs :

```javascript
import { Modal, ModalRoot } from '@uprise/modal'
```

Place ModalRoot in your root index.js file 

```javascript
ReactDOM.render(
	<Provider store={store}>
		<App />
		<ModalRoot />
	</Provider>,
	rootElement
)
```