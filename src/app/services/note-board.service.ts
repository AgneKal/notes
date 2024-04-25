import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteBoardService {
  public notes: string[]=[];

  constructor() { 
    let s = localStorage.getItem('notes');
    if (s !=null) {
      this.notes = JSON.parse(s);
    }
  }

  private save() {
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }

  public addNote(note: string){
    this.notes.push(note);
    this.save();
  }

  public deleteNote(i:number){
    this.notes.splice(i, 1);
    this.save();
  }

}
