import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoteBoardService } from '../../services/note-board.service';
import { Note } from '../../models/note';

@Component({
  selector: 'app-show-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-notes.component.html',
  styleUrl: './show-notes.component.css'
})
export class ShowNotesComponent {
  public notes: Note[];

  public constructor (private noteBorderService: NoteBoardService) {
    this.notes = noteBorderService.notes;
  }

  public deleteNote(i:number){
    this.noteBorderService.deleteNote(i);
  }

}
