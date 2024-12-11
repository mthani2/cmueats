import axios from 'axios';
import { performance } from 'perf_hooks';

const API_URL = 'http://localhost:5000/api/ratings'; // Replace with your API base URL
const TOTAL_REQUESTS = 100; // Number of requests to send
const CONCURRENT_REQUESTS = 10; // Number of concurrent requests

const generatePayload = () => ({
  userEmail: `testuser${Math.random().toString(36).substring(2, 8)}@example.com`,
  restaurantName: 'Test Restaurant',
  foodRating: Math.floor(Math.random() * 5) + 1,
  locationRating: Math.floor(Math.random() * 5) + 1,
  cleanlinessRating: Math.floor(Math.random() * 5) + 1,
  serviceRating: Math.floor(Math.random() * 5) + 1,
  valueForMoneyRating: Math.floor(Math.random() * 5) + 1,
  menuVarietyRating: Math.floor(Math.random() * 5) + 1,
  waitTimeRating: Math.floor(Math.random() * 5) + 1,
  staffRating: Math.floor(Math.random() * 5) + 1,
  overallSatisfactionRating: Math.floor(Math.random() * 5) + 1,
});

const sendRequests = async () => {
  const start = performance.now();
  const promises = [];
  let successCount = 0;
  let failureCount = 0;

  for (let i = 0; i < TOTAL_REQUESTS; i++) {
    const payload = generatePayload();

    promises.push(
      axios
        .post(API_URL, payload)
        .then(() => {
          successCount++;
        })
        .catch(() => {
          failureCount++;
        })
    );

    if (i % CONCURRENT_REQUESTS === 0 || i === TOTAL_REQUESTS - 1) {
      await Promise.all(promises); // Wait for current batch to complete
    }
  }

  const end = performance.now();

  console.log('--- Stress Test Results ---');
  console.log(`Total Requests: ${TOTAL_REQUESTS}`);
  console.log(`Success: ${successCount}`);
  console.log(`Failures: ${failureCount}`);
  console.log(`Time Taken: ${(end - start).toFixed(2)} ms`);
};

sendRequests();
