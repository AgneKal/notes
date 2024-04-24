import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteBoardService } from '../../services/note-board.service';
import { Note } from '../../models/note';

@Component({
  selector: 'app-write-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './write-note.component.html',
  styleUrl: './write-note.component.css'
})
export class WriteNoteComponent {
  public message: string|null = null;

  public notes: Note[];


  public constructor(private noteBoardService:NoteBoardService) {
    this.notes = noteBoardService.notes;
  }

  public addNote() {
    if (this.message != null){
      this.noteBoardService.addNote({
        message: this.message
      })
    }
    this.message = null;
  }
}
