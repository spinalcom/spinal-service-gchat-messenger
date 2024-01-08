# spinal-service-gchat-messenger
This service provides a way to send messages to a google chat room.

## Installation
```sh
npm install --save https://github.com/spinalcom/spinal-service-gchat-messenger
```
## Usage

To use the service you need to import it and create an instance of the class GoogleChatService. The constructor takes an object with the following properties:
- `email` : the email of the google service account
- `key` : the key of the google service account


```js
import { GoogleChatService } from "spinal-service-gchat-messenger";
...
const googleChatService = new GoogleChatService(email,key);
...
googleChatService.sendMessage(spaceName, message);
```


To find the spaceName you either need to get it from the web url of the room ( using google chat web app )
https://mail.google.com/chat/u/0/#chat/space/XXXXXXXXXXX
where XXXXXXXXXXX is the spaceName

Or you can go to a room on the desktop app, then go to parameters -> applications -> webhooks and extract the spaceName from the url of the webhook.
 /spaces/XXXXXXXXXXX/.....
