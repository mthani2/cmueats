import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import app from '../src/app'; // Replace with the correct path to your Express app
import { RatingModel } from '../src/services/ratingModel'; // Mocked model import

vi.mock('../src/services/ratingModel'); // Mock the RatingModel

describe('Rating Routes Tests', () => {
  it('should create a new rating via POST /api/ratings', async () => {
    // Mock the RatingModel.create method
    vi.spyOn(RatingModel, 'create').mockResolvedValue({
      userEmail: 'test@example.com',
      restaurantName: 'Test Restaurant',
      foodRating: 5,
      locationRating: 4,
      cleanlinessRating: 5,
      serviceRating: 5,
      valueForMoneyRating: 4,
      menuVarietyRating: 5,
      waitTimeRating: 4,
      staffRating: 5,
      overallSatisfactionRating: 5,
    });

    const response = await request(app).post('/api/ratings').send({
      userEmail: 'test@example.com',
      restaurantName: 'Test Restaurant',
      foodRating: 5,
      locationRating: 4,
      cleanlinessRating: 5,
      serviceRating: 5,
      valueForMoneyRating: 4,
      menuVarietyRating: 5,
      waitTimeRating: 4,
      staffRating: 5,
      overallSatisfactionRating: 5,
    });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      userEmail: 'test@example.com',
      restaurantName: 'Test Restaurant',
      foodRating: 5,
    });
  });

  it('should fetch ratings via GET /api/ratings/:restaurantName', async () => {
    // Mock the RatingModel.getRatingsByRestaurant method
    vi.spyOn(RatingModel, 'getRatingsByRestaurant').mockResolvedValue([
      {
        userEmail: 'test@example.com',
        restaurantName: 'Test Restaurant',
        foodRating: 5,
        locationRating: 4,
        cleanlinessRating: 5,
        serviceRating: 5,
        valueForMoneyRating: 4,
        menuVarietyRating: 5,
        waitTimeRating: 4,
        staffRating: 5,
        overallSatisfactionRating: 5,
      },
    ]);

    const response = await request(app).get('/api/ratings/Test Restaurant');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('restaurantName', 'Test Restaurant');
  });

  it('should calculate the average rating via GET /api/ratings/average/:restaurantName', async () => {
    // Mock the RatingModel.getAverageRating method
    vi.spyOn(RatingModel, 'getAverageRating').mockResolvedValue({
      foodRating: 4.5,
      locationRating: 4,
      cleanlinessRating: 4.8,
      serviceRating: 5,
      valueForMoneyRating: 4.2,
      menuVarietyRating: 4.7,
      waitTimeRating: 4.3,
      staffRating: 4.9,
      overallSatisfactionRating: 4.6,
    });

    const response = await request(app).get('/api/ratings/average/Test Restaurant');
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      foodRating: 4.5,
      locationRating: 4,
      cleanlinessRating: 4.8,
      serviceRating: 5,
    });
  });

  it('should handle server errors gracefully', async () => {
    // Mock the RatingModel.getRatingsByRestaurant method to throw an error
    vi.spyOn(RatingModel, 'getRatingsByRestaurant').mockImplementation(() => {
      throw new Error('Database error');
    });

    const response = await request(app).get('/api/ratings/Test Restaurant');
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to fetch ratings');
  });
});
