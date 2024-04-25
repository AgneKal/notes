import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteBoardService } from '../../services/note-board.service';

@Component({
  selector: 'app-write-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './write-note.component.html',
  styleUrl: './write-note.component.css'
})
export class WriteNoteComponent {
  public message: string|null = null;

  public notes: string[] =[];


  public constructor(private noteBoardService:NoteBoardService) {
    this.notes = noteBoardService.notes;
  }

  public addNote() {
    if (this.message != null){
      this.noteBoardService.addNote(this.message)
    }
    this.message = null;
  }
}
