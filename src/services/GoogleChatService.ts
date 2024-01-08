import { chat_v1, google } from 'googleapis';
import { JWT } from 'google-auth-library';
import { GaxiosPromise } from 'googleapis-common';

export class GoogleChatService {
  private gJwt: JWT;
  private chat: chat_v1.Chat;

  constructor(gServiceAccountKey: string, gServiceAccountEmail: string) {
    this.chat = google.chat('v1');
    this.gJwt = new JWT({
      email: gServiceAccountEmail,
      key: gServiceAccountKey,
      scopes: [
        'https://www.googleapis.com/auth/chat.bot',
        'https://www.googleapis.com/auth/chat.messages',
        'https://www.googleapis.com/auth/chat.messages.create',
      ],
    });
    google.options({ auth: this.gJwt });
  }

  public sendCardMessage(
    spaceName: string,
    cardObject: chat_v1.Schema$Card
  ): GaxiosPromise<chat_v1.Schema$Message> {
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
    } catch (e) {
      console.error('Error sending chat message:', e);
      throw new Error('Failed to send message.');
    }
  }

  public sendTextMessage(
    spaceName: string,
    text: string
  ): GaxiosPromise<chat_v1.Schema$Message> {
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
    } catch (e) {
      console.error('Error sending chat message:', e);
      throw new Error('Failed to send message.');
    }
  }
}
