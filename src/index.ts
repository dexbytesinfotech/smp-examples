// Importing the necessary managers for each social media platform
import FacebookPageManager from "./facebookPageManager";
import InstagramAccountManager from "./instagramAccountManager";
import YoutubeChannelManager from "./youtubeChannelManager";

// Creating an instance of the YoutubeChannelManager to interact with YouTube
const youtubeManager = new YoutubeChannelManager();

// Function to run YouTube related tasks
function runYT() {
    // Fetching YouTube channel activities
    youtubeManager.getYoutubeChannelActivities()
        .then(data => {
            if (data) {
                console.log("Channel activities:", data.data.items);
                // Here you can use the channel activities as needed
            } else {
                console.log("Failed to retrieve channel activities.");
            }
        })
        .catch(error => {
            console.error("An unexpected error occurred:", error);
        });

    // Fetching YouTube channel subscriptions
    youtubeManager.getYoutubeChannelSubscriptions()
        .then(data => {
            if (data) {
                console.log("Channel subscriptions:", data.data.items);
                // Here you can use the channel subscriptions as needed
            } else {
                console.log("Failed to retrieve channel subscriptions.");
            }
        })
        .catch(error => {
            console.error("An unexpected error occurred:", error);
        });

    // Fetching YouTube channel details
    youtubeManager.getYoutubeChannelDetails()
        .then(data => {
            if (data) {
                console.log("Channel details:", data.data.items);
                // Here you can use the channel details as needed
            } else {
                console.log("Failed to retrieve channel details.");
            }
        })
        .catch(error => {
            console.error("An unexpected error occurred:", error);
        });

    // Fetching Google access token
    youtubeManager.getGoogleAccessToken()
        .then(data => {
            if (data) {
                console.log("Access token:", data);
                // Here you can use the access token as needed
            } else {
                console.log("Failed to retrieve access token.");
            }
        })
        .catch(error => {
            console.error("An unexpected error occurred:", error);
        });

    // Fetching Google access token with refresh token
    youtubeManager.getGoogleAccessTokenWithRefreshToken()
        .then(data => {
            if (data) {
                console.log("Access token with refresh token:", data);
                // Here you can use the access token with refresh token as needed
            } else {
                console.log("Failed to retrieve access token with refresh token.");
            }
        })
        .catch(error => {
            console.error("An unexpected error occurred:", error);
        });

    // Fetching YouTube channel videos
    youtubeManager.getYoutubeChannelVideos()
        .then(videos => {
            if (videos) {
                console.log("YouTube channel videos:", videos.data.items);
                // Here you can use the channel videos as needed
            } else {
                console.log("Failed to retrieve YouTube channel videos.");
            }
        })
        .catch(error => {
            console.error("An unexpected error occurred:", error);
        });

    // Fetching YouTube channel video details
    youtubeManager.getYoutubeChannelVideoDetails()
        .then(videoDetails => {
            if (videoDetails) {
                console.log("Video details:", videoDetails.data.items);
                // Here you can use the video details as needed
            } else {
                console.log("Failed to retrieve video details.");
            }
        })
        .catch(error => {
            console.error("An unexpected error occurred:", error);
        });
}

// Creating an instance of the FacebookPageManager to interact with Facebook
const facebookPage = new FacebookPageManager();

// Function to run Facebook related tasks
function runFacebook() {
    // Fetching Meta authentication URL
    facebookPage.getMetaAuthUrl()
        .then(url => {
            if (url) {
                console.log("URL:", url);
            } else {
                console.log("Failed to get URL");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });

    // Fetching long-lived access token
    facebookPage.getLongLivedAccessToken()
        .then(accessToken => {
            if (accessToken) {
                console.log("Access Token:", accessToken);
            } else {
                console.log("Failed to get access token");
            }
        });

    // Fetching user ID
    facebookPage.getUserId()
        .then(userId => {
            if (userId) {
                console.log("User ID:", userId);
            } else {
                console.log("Failed to get user ID");
            }
        });

    // Fetching basic details of the page
    facebookPage.getPageBasicDetails()
        .then(details => {
            if (details) {
                console.log("Page Basic Details:", details);
            } else {
                console.log("Failed to get page details");
            }
        });

    // Fetching page access token
    facebookPage.getPageAccessToken()
        .then(accessToken => {
            if (accessToken) {
                console.log("Page Access Token:", accessToken);
            } else {
                console.log("Failed to get page access token");
            }
        });

    // Fetching page events
    facebookPage.getPageEvents()
        .then(events => {
            if (events) {
                console.log("Page Events:", events.data.events);
            } else {
                console.log("Failed to get page events");
            }
        });

    // Fetching page posts
    facebookPage.getPagePosts()
        .then(posts => {
            if (posts) {
                console.log("Page Posts:", posts.data);
            } else {
                console.log("Failed to get page posts");
            }
        });
}

// Creating an instance of the InstagramAccountManager to interact with Instagram
const instagram = new InstagramAccountManager();

// Function to run Instagram related tasks
function runInstagram(){
    // Fetching Instagram account details
    instagram.getAccountDetails().then(data=>{
        if(data){
            console.log("data",data)
        }else{
            console.log("failed to data")
        }
    })

    // Fetching Instagram media
    instagram.getMedia().then(data=>{
        if(data){
            console.log("data",data.data)
        }else{
            console.log("failed to data")
        }
    })

    // Fetching Instagram stories
    instagram.getStories().then(data=>{
        if(data){
            console.log("data",data.data)
        }else{
            console.log("failed to data")
        }
    })
}

// Uncomment the following line to run Facebook related tasks
// runFacebook();
