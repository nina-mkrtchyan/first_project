import {User} from '../user/user';

export class Message {
    text: string;
    senderId: number;
    receiverId: number;

    constructor(data: Message) {
        this.text = data.text;
        this.senderId = data.senderId;
        this.receiverId = data.receiverId;
    }
}


export class UserMessages {
    user: User;
    messages: Message[];
    hasNewMessage: boolean;


    constructor(user: User) {
        this.user = user;
        this.messages = [];
        this.hasNewMessage = false;
    }
}
