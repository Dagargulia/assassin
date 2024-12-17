import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  standalone: true,
  imports: [CommonModule,]
})
export class QuizComponent {
  // Sample questions array (with additional questions added)
  questions = [
    {
      question: 'Which Assassin are you most like?',
      options: [
        { text: 'Ezio Auditore', value: '' },
        { text: 'Altaïr Ibn-LaʼAhad', value: '' },
        { text: 'Bayek of Siwa', value: '' },
        { text: 'Kassandra', value: '' },
        { text: 'Connor', value: '' },
        { text: 'Eivor', value: '' },
        { text: 'Edward Kenway', value: '' }, // New Assassin
      { text: 'Aveline de Grandpré', value: '' } // New Assassin
      ]
    },
    {
      question: 'Which trait best describes you?',
      options: [
        { text: 'Leader', value: 'Ezio' },
        { text: 'Disciplined', value: 'Altaïr' },
        { text: 'Justice-driven', value: 'Bayek' },
        { text: 'Independent', value: 'Kassandra' },
        { text: 'Brave', value: 'Connor' },
        { text: 'Fearless', value: 'Eivor' },
        { text: 'Adventurous', value: 'Edward' }, // New trait for Edward
        { text: 'Resourceful', value: 'Aveline' } // New trait for Aveline
      ]
    },
    {
      question: 'What is your ideal environment?',
      options: [
        { text: 'A grand city full of intrigue and power', value: 'Ezio' },
        { text: 'A solitary mountain, focused on learning', value: 'Altaïr' },
        { text: 'A desert landscape, fighting for justice', value: 'Bayek' },
        { text: 'A busy port with endless adventure', value: 'Kassandra' },
        { text: 'A cold, rugged wilderness', value: 'Connor' },
        { text: 'A wild Viking settlement with strong ties to family', value: 'Eivor' },
        { text: 'A bustling pirate-infested coast', value: 'Edward' }, // New environment for Edward
        { text: 'The vibrant streets of New Orleans', value: 'Aveline' }
      ]
    },
    {
      question: 'How do you approach challenges?',
      options: [
        { text: 'With careful planning and diplomacy', value: 'Ezio' },
        { text: 'With logic, patience, and perseverance', value: 'Altaïr' },
        { text: 'With strength and determination', value: 'Bayek' },
        { text: 'With curiosity and boldness', value: 'Kassandra' },
        { text: 'With courage and a sense of duty', value: 'Connor' },
        { text: 'With a relentless, fearless spirit', value: 'Eivor' }
      ]
    },
    {
      question: 'Which of the following is your greatest value?',
      options: [
        { text: 'Loyalty and honor', value: 'Ezio' },
        { text: 'Discipline and duty', value: 'Altaïr' },
        { text: 'Justice and freedom', value: 'Bayek' },
        { text: 'Freedom and independence', value: 'Kassandra' },
        { text: 'Honor and family', value: 'Connor' },
        { text: 'Strength and resilience', value: 'Eivor' }
      ]
    },
    {
      question: 'What is your fighting style?',
      options: [
        { text: 'A combination of swordsmanship and stealth', value: 'Ezio' },
        { text: 'Precision and focus with a hidden blade', value: 'Altaïr' },
        { text: 'Brutal, powerful strikes', value: 'Bayek' },
        { text: 'Quick and agile, using the environment to my advantage', value: 'Kassandra' },
        { text: 'A mix of strategic combat and brute force', value: 'Connor' },
        { text: 'Aggressive, fast, and overwhelming', value: 'Eivor' }
      ]
    }
    // Add more questions as needed
  ];

  // Array to store user's answers
  answers: string[] = [];
  
  // Result variables
  result = '';
  resultDescription = '';
  resultImage = '';
  showResult = false;

  showImageModal = true; // Modal visibility
  
  ngOnInit() {
    // Automatically close the modal after 4 seconds
    setTimeout(() => {
      this.showImageModal = false;
    }, 4000);
  }
  

  // Handle selecting an answer
  selectAnswer(questionIndex: number, value: string) {
    this.answers[questionIndex] = value;
  }

  // Handle quiz submission
  submitQuiz() {
    // Count the answers to determine the most frequent answer
    const answerCounts = this.answers.reduce((counts: { [key: string]: number }, answer: string) => {
      counts[answer] = (counts[answer] || 0) + 1;
      return counts;
    }, {});

    // Find the most frequent answer
    this.result = Object.keys(answerCounts).reduce((a, b) =>
      answerCounts[a] > answerCounts[b] ? a : b
    );

    // Set the description and image for the result
    this.resultDescription = this.getResultDescription(this.result);
    this.showResult = true;
  }

  // Get description and image URL based on the result
  getResultDescription(assassin: string): string {
    let description = '';
    let imageUrl = '';

    switch (assassin) {
      case 'Ezio':
        description = 'You are charismatic, loyal, and a natural leader, just like Ezio Auditore.';
        imageUrl = 'https://www.specfictionshop.com/cdn/shop/files/MAIN-EZIO_50dc26b9-fa75-4a25-98ae-59d8aa985d72_2000x.png?v=1721335279';
        break;
      case 'Altaïr':
        description = 'You are disciplined, focused, and driven by duty, much like Altaïr Ibn-LaʼAhad.';
        imageUrl = 'https://images.nightcafe.studio/jobs/0Dc9kY5QureUkmCqKfoU/0Dc9kY5QureUkmCqKfoU--1--dp83j.jpg?tr=w-1600,c-at_max';
        break;
      case 'Bayek':
        description = 'You are passionate, strong-willed, and seek justice, just like Bayek of Siwa.';
        imageUrl = 'https://i.pinimg.com/736x/9f/f2/19/9ff219ef508f11b8d6ef2ac0abf1f95d.jpg';
        break;
      case 'Kassandra':
        description = 'You are adventurous, independent, and resilient, like Kassandra.';
        imageUrl = 'https://blazordiffusion.com/download/artifact/f2f7872a-63c9-4552-a769-7f189bb02a82';
        break;
      case 'Connor':
        description = 'You are brave, determined, and protective of your people, just like Connor.';
        imageUrl = 'https://www.giantbomb.com/a/uploads/scale_medium/15/153552/2143373-cov_228_v2_front.jpg';
        break;
      case 'Eivor':
        description = 'You are bold, fearless, and thrive in the face of challenges, like Eivor.';
        imageUrl = 'https://cdn.webshopapp.com/shops/351143/files/437216164/1652x1652x1/pure-arts-assassins-creed-eivor-animus-statue-pure.jpg';
        break;
      case 'Edward':
        description = 'You are daring, charismatic, and a master of both combat and strategy, much like Edward Kenway.';
        imageUrl = 'https://64.media.tumblr.com/e554a862712a485f84483196ce9456be/tumblr_ofzxnvZoTS1rwq84jo1_1280.jpg';
        break;
      case 'Aveline':
        description = 'You are resourceful, independent, and fight for freedom, just like Aveline de Grandpré.';
        imageUrl = 'https://image.tensorartassets.com/posts/images/613019935106639991/4e6b3811-0803-40ea-83a3-5ec9773495d7.jpg';
        break;
      default:
        description = 'Unknown Assassin.';
    }

    // Return the description for display
    this.resultImage = imageUrl; // Save the image URL
    return description;
  }

  // Restart the quiz
  restartQuiz() {
    this.answers = [];
    this.result = '';
    this.resultDescription = '';
    this.resultImage = '';
    this.showResult = false;
  }
}
