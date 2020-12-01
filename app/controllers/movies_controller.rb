class MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :edit, :update, :destroy]

  # GET /movies
  # GET /movies.json
  def index
    @movies = Movie.all
    render json: @movies
  end
  
  # GET /movies/1
  # GET /movies/1.json
  def show
    render json: @movie
  end

  # POST /movies
  # POST /movies.json
  def create
    @movie = Movie.create!(movie_params)
    render json: Movie.all
  end

  # PATCH/PUT /movies/1
  # PATCH/PUT /movies/1.json
  def update
    @movie.update(movie_params)
      render json: @movie
  end

  private
  def set_movie
    @movie = Movie.where(api_id: params[:id])
  end

  def movie_params
    params.require(:movie).permit(:title, 
                                  :thumbs_up,
                                  :thumbs_down,
                                  :api_id,
                                  :id,
                                  :created_at,
                                  :updated_at)
  end
end