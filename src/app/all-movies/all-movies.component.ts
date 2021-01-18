import { Component, OnInit } from '@angular/core';
import { groupBy } from 'lodash';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MovieRecommendationService } from '../_services/movie-recommendation.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  genreWiseProduct;
  keys = [];
  currentUser;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 20,
    keyboard: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  constructor(private token: TokenStorageService, private _movie: MovieRecommendationService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    if (this.currentUser) {
      this._movie.getMovies().subscribe((data) => {
        this.genreWiseProduct = groupBy(data, "gerne");
        this.keys = Object.keys(this.genreWiseProduct);

      });
    }
  }

  addMovieToWatchlist(movie) {
    const payload = {
      "movie": movie,
      "timestamp": new Date().getTime(),
      "username": this.currentUser.username
    }
    this._movie.addToWatchList(payload).subscribe((data: any) => {
      console.log(data);
    });
  }


}
