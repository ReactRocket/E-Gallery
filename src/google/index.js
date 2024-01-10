import { GoogleLogin } from 'react-google-login';

const clientId = '900035660240-obuuj63a7qgtq8er89363t06epu89sfe.apps.googleusercontent.com'; // Replace with your client ID

const onSuccess = (response) => {
    const token = response.accessToken;
    const auth = new google.auth.OAuth2(clientId, null, token);
    return auth;
};

async function getAuth() {
    const auth = await new Promise((resolve, reject) => {
        const btn = document.createElement('button');
        btn.style.display = 'none';
        const login = new GoogleLogin(btn, {
            clientId,
            buttonText: 'Login with Google',
            onSuccess,
            onFailure: (error) => {
                console.error(error);
                reject(error);
            },
        });
        document.body.appendChild(btn);
        login.render();
    });
    return auth;
}



async function fetchPhotos(albumId) {
    const auth = await getAuth();
    const photos = google.photos({ version: 'v1', auth });
    const results = await photos.albums.list({ albumId });
    return results.data.mediaItems;
}

export default fetchPhotos
