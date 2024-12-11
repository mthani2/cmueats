declare module './RatingModel.js' {
    type Rating = {
      restaurant: string;
      rating: number;
      comment?: string;
    };
  
    export const RatingModel: {
      create: (rating: Rating) => Rating;
      getRatingsByRestaurant: (restaurantName: string) => Rating[];
      getAverageRating: (restaurantName: string) => number | null;
    };
  }
  export interface Rating {
    userEmail: string;
    restaurantName: string;
    foodRating: number;
    locationRating: number;
    cleanlinessRating: number;
    serviceRating: number;
    valueForMoneyRating: number;
    menuVarietyRating: number;
    waitTimeRating: number;
    staffRating: number;
    overallSatisfactionRating: number;
  }
  
  export declare const RatingModel: {
    create(ratingData: Rating): Promise<Rating>;
    getRatingsByRestaurant(restaurantName: string): Promise<Rating[]>;
    getAverageRating(restaurantName: string): Promise<{
      foodRating: number;
      locationRating: number;
      cleanlinessRating: number;
      serviceRating: number;
      valueForMoneyRating: number;
      menuVarietyRating: number;
      waitTimeRating: number;
      staffRating: number;
      overallSatisfactionRating: number;
    } | null>;
  };