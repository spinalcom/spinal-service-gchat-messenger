"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatService = void 0;
const googleapis_1 = require("googleapis");
const google_auth_library_1 = require("google-auth-library");
class GoogleChatService {
    constructor(gServiceAccountKey, gServiceAccountEmail) {
        this.chat = googleapis_1.google.chat('v1');
        this.gJwt = new google_auth_library_1.JWT({
            email: gServiceAccountEmail,
            key: gServiceAccountKey,
            scopes: [
                'https://www.googleapis.com/auth/chat.bot',
                'https://www.googleapis.com/auth/chat.messages',
                'https://www.googleapis.com/auth/chat.messages.create',
            ],
        });
        googleapis_1.google.options({ auth: this.gJwt });
    }
    sendCardMessage(spaceName, cardObject) {
        try {
            if (!this.gJwt) {
                throw new Error('No Google Chat credentials found');
            }
            console.log('Sending message to Google Chat...');
            return this.chat.spaces.messages.create({
                parent: `spaces/${spaceName}`,
                requestBody: {
                    cards: [cardObject],
                },
            });
        }
        catch (e) {
            console.error('Error sending chat message:', e);
            throw new Error('Failed to send message.');
        }
    }
    sendTextMessage(spaceName, text) {
        try {
            if (!this.gJwt) {
                throw new Error('No Google Chat credentials found');
            }
            console.log('Sending message to Google Chat...');
            return this.chat.spaces.messages.create({
                parent: `spaces/${spaceName}`,
                requestBody: {
                    text: text,
                },
            });
        }
        catch (e) {
            console.error('Error sending chat message:', e);
            throw new Error('Failed to send message.');
        }
    }
}
exports.GoogleChatService = GoogleChatService;
//# sourceMappingURL=GoogleChatService.js.map