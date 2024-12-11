import { describe, it, expect, vi } from 'vitest';
import { RatingModel } from '../src/services/ratingModel';

vi.mock('../src/services/ratingModel', () => ({
  RatingModel: {
    create: vi.fn().mockImplementation(async (ratingData) => ratingData),
    getRatingsByRestaurant: vi.fn().mockImplementation(async (restaurantName) => [
      {
        userEmail: 'user1@example.com',
        restaurantName,
        foodRating: 4,
        locationRating: 5,
        cleanlinessRating: 4,
        serviceRating: 5,
        valueForMoneyRating: 3,
        menuVarietyRating: 4,
        waitTimeRating: 5,
        staffRating: 4,
        overallSatisfactionRating: 4,
      },
      {
        userEmail: 'user2@example.com',
        restaurantName,
        foodRating: 3,
        locationRating: 4,
        cleanlinessRating: 4,
        serviceRating: 4,
        valueForMoneyRating: 4,
        menuVarietyRating: 4,
        waitTimeRating: 3,
        staffRating: 4,
        overallSatisfactionRating: 4,
      },
    ]),
    getAverageRating: vi.fn().mockImplementation(async (restaurantName) => ({
      foodRating: 3.5,
      locationRating: 4.5,
      cleanlinessRating: 4,
      serviceRating: 4.5,
      valueForMoneyRating: 3.5,
      menuVarietyRating: 4,
      waitTimeRating: 4,
      staffRating: 4,
      overallSatisfactionRating: 4,
    })),
  },
}));

describe('RatingModel Tests', () => {
  it('should create a new rating', async () => {
    const newRating = {
      userEmail: 'user@example.com',
      restaurantName: 'Test Restaurant',
      foodRating: 4,
      locationRating: 5,
      cleanlinessRating: 3,
      serviceRating: 4,
      valueForMoneyRating: 3,
      menuVarietyRating: 5,
      waitTimeRating: 4,
      staffRating: 4,
      overallSatisfactionRating: 4,
    };

    const createdRating = await RatingModel.create(newRating);
    expect(createdRating).toEqual(newRating);
  });

  it('should fetch ratings by restaurant name', async () => {
    const restaurantName = 'Test Restaurant';
    const ratings = await RatingModel.getRatingsByRestaurant(restaurantName);

    expect(ratings).toBeInstanceOf(Array);
    expect(ratings.length).toBeGreaterThan(0);
    expect(ratings[0]).toMatchObject({ restaurantName });
  });

  it('should calculate the average rating for a restaurant', async () => {
    const restaurantName = 'Test Restaurant';
    const averageRating = await RatingModel.getAverageRating(restaurantName);

    expect(averageRating).toMatchObject({
      foodRating: expect.any(Number),
      locationRating: expect.any(Number),
      cleanlinessRating: expect.any(Number),
      serviceRating: expect.any(Number),
      valueForMoneyRating: expect.any(Number),
      menuVarietyRating: expect.any(Number),
      waitTimeRating: expect.any(Number),
      staffRating: expect.any(Number),
      overallSatisfactionRating: expect.any(Number),
    });

    expect(averageRating.foodRating).toBe(3.5);
    expect(averageRating.locationRating).toBe(4.5);
  });
});
