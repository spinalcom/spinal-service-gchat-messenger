import { chat_v1 } from 'googleapis';
import { GaxiosPromise } from 'googleapis-common';
export declare class GoogleChatService {
    private gJwt;
    private chat;
    constructor(gServiceAccountKey: string, gServiceAccountEmail: string);
    sendCardMessage(spaceName: string, cardObject: chat_v1.Schema$Card): GaxiosPromise<chat_v1.Schema$Message>;
    sendTextMessage(spaceName: string, text: string): GaxiosPromise<chat_v1.Schema$Message>;
}
