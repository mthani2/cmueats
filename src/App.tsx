import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DateTime } from 'luxon';

import Navbar from './components/Navbar';
import ListPage from './pages/ListPage';
import MapPage from './pages/MapPage';
import NotFoundPage from './pages/NotFoundPage';
<<<<<<< HEAD
import ReviewFormPage from './pages/ReviewFormPage'; // Import the ReviewFormPage
import RatingPage from './pages/RatingFormPage'; // Import the new RatingPage
=======
import ReviewFormPage from './pages/ReviewFormPage'; // Import the new page
>>>>>>> 4c404a598afa7d19b57b8b0b504e4b2ef9b40649
import { queryLocations, getLocationStatus } from './util/queryLocations';
import './App.css';
import {
  IReadOnlyExtendedLocation,
  IReadOnlyLocation,
} from './types/locationTypes';

const CMU_EATS_API_URL = 'https://dining.apis.scottylabs.org/locations';

function App() {
<<<<<<< HEAD
  // Load locations
  const [locations, setLocations] = useState<IReadOnlyLocation[]>();
  const [extendedLocationData, setExtendedLocationData] =
    useState<IReadOnlyExtendedLocation[]>();

  useEffect(() => {
    queryLocations(CMU_EATS_API_URL).then((parsedLocations) => {
      setLocations(parsedLocations);
    });
  }, []);
=======
	// Load locations
	const [locations, setLocations] = useState<IReadOnlyLocation[]>();
	const [extendedLocationData, setExtendedLocationData] =
		useState<IReadOnlyExtendedLocation[]>();

	useEffect(() => {
		queryLocations(CMU_EATS_API_URL).then((parsedLocations) => {
			setLocations(parsedLocations);
		});
	}, []);

	useEffect(() => {
		const intervalId = setInterval(
			(function updateExtendedLocationData() {
				if (locations !== undefined) {
					const now = DateTime.now().setZone('America/New_York');
					setExtendedLocationData(
						locations.map((location) => ({
							...location,
							...getLocationStatus(location.times, now), // populate location with more detailed info relevant to current time
						})),
					);
				}
				return updateExtendedLocationData;
			})(),
			1 * 1000, // updates every second
		);
		return () => clearInterval(intervalId);
	}, [locations]);
>>>>>>> 4c404a598afa7d19b57b8b0b504e4b2ef9b40649

  useEffect(() => {
    const intervalId = setInterval(
      (function updateExtendedLocationData() {
        if (locations !== undefined) {
          const now = DateTime.now().setZone('America/New_York');
          setExtendedLocationData(
            locations.map((location) => ({
              ...location,
              ...getLocationStatus(location.times, now), // populate location with more detailed info relevant to current time
            }))
          );
        }
        return updateExtendedLocationData;
      })(),
      1 * 1000, // updates every second
    );
    return () => clearInterval(intervalId);
  }, [locations]);

  // Auto-refresh the page when the user goes online after previously being offline
  useEffect(() => {
    function handleOnline() {
      if (navigator.onLine) {
        // Refresh the page
        window.location.reload();
      }
    }

    window.addEventListener('online', handleOnline);

<<<<<<< HEAD
    return () => window.removeEventListener('online', handleOnline);
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <div className="AdBanner">
            Pre-register for{' '}
            <a
              href="https://go.scottylabs.org/tartanhacks-cmueats"
              style={{ color: 'white' }}
            >
              <strong>TartanHacks</strong>
            </a>
            , Pittsburgh&apos;s LARGEST hackathon! 🖥️
          </div>
          <div className="MainContent">
            <Routes>
              <Route
                path="/"
                element={
                  <ListPage
                    locations={extendedLocationData}
                  />
                }
              />
              <Route
                path="/map"
                element={
                  <MapPage locations={extendedLocationData} />
                }
              />
              <Route
                path="/review-restaurant"
                element={<ReviewFormPage />} // Add the new ReviewFormPage route
              />
              <Route
                path="/rate-restaurant"
                element={<RatingPage />} // New route for RatingPage
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Navbar />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
=======
	return (
		<React.StrictMode>
			<BrowserRouter>
				<div className="App">
					<div className="AdBanner">
						Pre-register for{' '}
						<a
							href="https://go.scottylabs.org/tartanhacks-cmueats"
							style={{ color: 'white' }}
						>
							<strong>TartanHacks</strong>
						</a>
						, Pittsburgh&apos;s LARGEST hackathon! 🖥️
					</div>
					<div className="MainContent">
						<Routes>
							<Route
								path="/"
								element={
									<ListPage
										locations={extendedLocationData}
									/>
								}
							/>
							<Route
								path="/map"
								element={
									<MapPage locations={extendedLocationData} />
								}
							/>
							<Route
								path="/rate-restaurant"
								element={<ReviewFormPage />} // Add the new route
							/>
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</div>
					<Navbar />
				</div>
			</BrowserRouter>
		</React.StrictMode>
	);
>>>>>>> 4c404a598afa7d19b57b8b0b504e4b2ef9b40649
}

export default App;

