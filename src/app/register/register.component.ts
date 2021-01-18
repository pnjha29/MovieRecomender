import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { find, remove } from 'lodash';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isOpen = false;
  movieList = [];
  watchList = [];

  constructor(private authService: AuthService,private _http:HttpClient) { }

  ngOnInit(): void {
    this._http.get('/api/auth/movie/list').subscribe((list: any[]) => {
      this.movieList = list;
    });
  }

  change(event, item) {
    const mappedData = find(this.movieList, (entity) => {
      return entity.name == item.name
    })
    if (event.checked) {
      const obj = {
        "movie": item,
        "timestamp": new Date().getTime(),
        "username" : this.form.username
      }
      this.watchList.push(obj);
      mappedData["checked"] = true;
    } else {
      remove(this.watchList, (entity) => {
        return entity.movie == item;
      });
      mappedData["checked"] = false;
    }
  }

  onSubmit(): void {
    this.watchList.map((entity) => {
      entity.username = this.form.username;
    });
    this.authService.register(this.form,this.watchList).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
