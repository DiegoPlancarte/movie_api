class MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :edit, :update, :destroy]

  def index
    @movies = Movie.all
    render json: @movies
  end

  def show
    render json: @movie
  end

  private
    def set_movie
      @movie = Movie.find(params[:id])
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