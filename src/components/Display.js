import React, { useState, useEffect } from 'react';
import { google } from 'googleapis'; // Import the necessary Google APIs

const Display = () => {
    const [photos, setPhotos] = useState([]);
    const [albumId, setAlbumId] = useState('');

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const auth = await getAuth(); // Obtain authentication
                const photos = google.photos({ version: 'v1', auth });
                
                const albums = await photos.albums.list();
            
                if (albums.data.albums && albums.data.albums.length > 0) {
                    setAlbumId(albums.data.albums[0].id); // Set the first album ID
                }
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        fetchAlbums();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!albumId) return; // If albumId is not available, return early

                const fetchedPhotos = await fetchPhotos(albumId);
                setPhotos(fetchedPhotos);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchData();
    }, [albumId]); // Run this effect whenever albumId changes

    return (
        <div>
            <h2>Photos</h2>
            <div className="photo-container">
                {photos.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.url} // Assuming the photo object has a 'url' property for the image source
                        alt={photo.description} // You might adjust this based on your data structure
                        className="photo"
                    />
                ))}
            </div>
        </div>
    );
};

export default Display;
