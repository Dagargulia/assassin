import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'] // Fix to 'styleUrls' for Angular
})
export class CharactersComponent {
  characters = [
    { name: 'Altaïr Ibn-La', description: 'legendary Master Assassin from the Assassin’s Creed series, known for his role during the Third Crusade.', image: 'https://freepngimg.com/thumb/assassins_creed/20436-5-altair-assassins-creed-file-thumb.png' },
    { name: 'Ezio Auditore', description: 'one of the most iconic characters in the Assassin’s Creed series. Born in 1459 during the Italian Renaissance', image: 'https://www.pngplay.com/wp-content/uploads/12/Assassins-Creed-PNG-Clip-Art-HD-Quality.png' },
    { name: 'Conor Ratonhnhaké', description: 'the main protagonist of Assassin’s Creed III. He is a half-Mohawk, half-British Assassin who fights for freedom', image: 'https://www.pngplay.com/wp-content/uploads/12/Assassins-Creed-No-Background-Clip-Art.png' },
    { name: 'Edward Kenway', description: 'is the main character of Assassin’s Creed IV: Black Flag. He is a Welsh pirate-turned-privateer who sails the Caribbean during the Golden Age of Piracy in the early 18th century.', image: 'https://www.pngplay.com/wp-content/uploads/12/Assassins-Creed-Background-PNG-Clip-Art-Image.png' },
    { name: 'Adéwalé', description: 'former slave who becomes a skilled and loyal Assassin, as well as Edward Kenway’s trusted quartermaster aboard the Jackdaw in Assassin’s Creed IV: Black Flag', image: 'https://www.pngplay.com/wp-content/uploads/12/Assassins-Creed-PNG-HD-Photos.png' },
    { name: 'Jacob Lydia Frye', description: 'is one of the twin protagonists of Assassin’s Creed Syndicate. is Jacob Frye’s granddaughter, featured in Assassin’s Creed Syndicate:', image: 'https://www.pngplay.com/wp-content/uploads/12/Assassins-Creed-Background-PNG.png' },
    { name: 'Alexios', description: 'one of the two main protagonists in Assassin’s Creed Odyssey. A fierce Spartan mercenary with a strong warrior’s spirit,', image: 'https://www.pngplay.com/wp-content/uploads/12/Assassins-Creed-PNG-HD-Images.png' },
    { name: 'Bayok', description: 'the main protagonist of Assassin’s Creed Origins. He is a Medjay, a protector of the people in ancient Egypt,', image: 'https://www.pngplay.com/wp-content/uploads/12/Assassins-Creed-PNG-Free-File-Download.png' },
    { name: 'Élise', description: 'key character in Assassin’s Creed: Unity. She is a noblewoman and the childhood friend of protagonist Arno Dorian. ÉLise is passionate, headstrong, and fiercely loyal to her beliefs', image: 'https://www.pngplay.com/wp-content/uploads/11/Assassins-Creed-Free-PNG-Clip-Art.png' },
    { name: 'Assassin Creed', description: 'A modern-day descendant of several key Assassins, including Altair and Ezio, Desmond is initially captured by Abstergo Industries, a front for the Templar Order.', image: 'https://www.pngplay.com/wp-content/uploads/11/Assassins-Creed-PNG-Photos.png' },
    { name: 'Ezio Auditorre', description: 'one of the most iconic characters in the Assassin’s Creed series. Born in 1459 during the Italian Renaissance', image: 'https://www.pngplay.com/wp-content/uploads/11/Assassins-Creed-No-Background-Clip-Art.png' },
    { name: 'Ezio Auditoree', description: 'one of the most iconic characters in the Assassin’s Creed series. Born in 1459 during the Italian Renaissance', image: 'https://freepngimg.com/thumb/assassins_creed/20744-9-ezio-auditore-picture-thumb.png' },
    { name: 'Arno Dorian', description: 'protagonist of Assassins Creed: Unity, set during the tumultuous times of the French Revolution.', image: 'https://freepngimg.com/thumb/assassins_creed/132153-creed-assassins-download-free-image-thumb.png' },
  ];

  activeCharacter: string | null = null;
  selectedCharacter: any | null = null; // Property to hold the selected character

  onHover(characterName: string) {
    this.activeCharacter = characterName;
  }

  onLeave() {
    this.activeCharacter = null;
  }

  onCharacterClick(character: any) {
    this.selectedCharacter = character; // Set the selected character for the modal
  }

  closeModal() {
    this.selectedCharacter = null; // Close the modal
  }
}
