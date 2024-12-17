import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
})
export class ChatbotComponent {
  chatbotMessage: string = '';
  conversation: { user: string; bot: string }[] = [];
  isChatbotVisible: boolean = true;
  isBlocked: boolean = false;
  isBotTyping: boolean = false; // Control the "typing" indicator
  blockTimeout: any;
  blockTimeLeft: number = 20;
  blockTimerInterval: any;

  badWords = ['sex', 'pussy', 'fucku', 'offensiveword'];

  questionsList = [
    'What is Assassin’s Creed about?',
    'Tell me about Discovery Tour.',
    'Who are the main characters?',
    'Explain the role of Templars.',
    'How do I start with the Assassin’s Creed series?',
    'What is the Animus?',
    'Tell me about the Assassins.',
    'What are the Templars seeking?',
    'Who is Ezio Auditore?',
    'What is the difference between Assassin’s Creed and other historical games?',
    'Give me a fun fact about Assassin’s Creed.',
  ];

  private responses: { [key: string]: string } = {
    hello: "Hello! I'm here to help you with questions about Assassin's Creed!",
    "what is assassin’s creed about": "Assassin’s Creed is a game series that explores historical events through the lens of a secret war between Assassins and Templars.",
    "tell me about discovery tour": "Discovery Tour is an educational mode by Ubisoft for exploring history without combat.",
    "who are the main characters": "Some main characters are Ezio, Altair, Bayek, and Eivor, each from different historical eras.",
    "explain the role of templars": "The Templars are an organization striving to impose order on the world by controlling knowledge and power.",
    "how do i start with the assassin’s creed series": "You can start with any game, but many fans begin with Assassin’s Creed II to understand the origins of the storyline.",
    "what is the animus": "The Animus is a device in the Assassin’s Creed series that allows the user to experience the memories of their ancestors, typically through the DNA.",
    "tell me about the assassins": "The Assassins are a group dedicated to protecting free will and fighting against the Templars' quest for control. They operate in the shadows to maintain peace and order.",
    "what are the templars seeking": "The Templars seek control over the Pieces of Eden, ancient artifacts that grant immense power. They believe that imposing order through control will bring peace to the world.",
    "who is ezio auditore": "Ezio Auditore da Firenze is one of the most beloved characters in Assassin’s Creed. He is an Italian nobleman who becomes an Assassin to avenge his family's death and uncover the truth about the Templar Order.",
    "what is the difference between assassin’s creed and other historical games": "Unlike other historical games, Assassin’s Creed combines real historical events with a fictional narrative. The series also includes stealth, parkour, and exploration of open-world environments, offering a unique blend of history and gameplay.",
    "give me a fun fact about assassin’s creed": "Did you know? The first Assassin’s Creed game was originally conceived as a spin-off of the Prince of Persia series. It later evolved into its own iconic franchise!",
  };

  constructor() {
    this.handleGreeting();
  }

  askChatbot() {
    if (this.isBlocked) {
      this.conversation.push({
        user: this.chatbotMessage,
        bot: `You have been blocked for using inappropriate language. Please wait for ${this.blockTimeLeft} seconds.`,
      });
      return;
    }

    const question = this.chatbotMessage.trim().toLowerCase();

    if (this.containsBadWords(question)) {
      this.isBlocked = true;
      this.conversation.push({ user: this.chatbotMessage, bot: "Please refrain from using inappropriate language." });
      this.chatbotMessage = '';
      this.startBlockTimer();
      return;
    }

    this.isBotTyping = true; // Show typing indicator
    const responseDelay = 1000; // 1-second delay for the bot to "think"

    setTimeout(() => {
      this.isBotTyping = false;
      let response = "I'm here to answer questions about Assassin's Creed. Try asking about main characters or the Templars!";

      if (this.responses[question]) {
        response = this.responses[question];
      } else {
        for (let key in this.responses) {
          if (question.includes(key)) {
            response = this.responses[key];
            break;
          }
        }
      }

      this.conversation.push({ user: this.chatbotMessage, bot: response });
      this.chatbotMessage = '';
    }, responseDelay);
  }

  toggleChatbot() {
    this.isChatbotVisible = !this.isChatbotVisible;
  }

  handleGreeting() {
    const greetingResponse = this.responses['hello'];
    this.conversation.push({ user: 'Hello', bot: greetingResponse });
  }

  containsBadWords(message: string): boolean {
    return this.badWords.some((word) => message.toLowerCase().includes(word));
  }

  startBlockTimer() {
    this.blockTimerInterval = setInterval(() => {
      if (this.blockTimeLeft > 0) {
        this.blockTimeLeft--;
      } else {
        clearInterval(this.blockTimerInterval);
        this.isBlocked = false;
        this.blockTimeLeft = 20;
      }
    }, 1000);
  }

  // New method to clear the chat
  clearChat() {
    this.conversation = [];
  }
  isQuestionsListVisible: boolean = true; 
  toggleQuestionsList() {
    this.isQuestionsListVisible = !this.isQuestionsListVisible;
  }
}
