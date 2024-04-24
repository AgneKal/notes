import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WriteNoteComponent } from './components/write-note/write-note.component';
import { ShowNotesComponent } from './components/show-notes/show-notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WriteNoteComponent, ShowNotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes';
}
