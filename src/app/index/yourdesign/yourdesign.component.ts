import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { AuthGuard } from '../../shared/services/auth_gaurd';

@Component({ 
  selector: 'app-yourdesign',
  templateUrl: './yourdesign.component.html',
  styleUrls: ['./yourdesign.component.scss']
})
export class YourdesignComponent implements OnInit {
	ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private afStorage: AngularFireStorage) { }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
  }


  ngOnInit() {
  }

   
}
