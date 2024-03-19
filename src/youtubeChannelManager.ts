// Importing necessary modules and enums from the social-media-plugin package
import { SMPFactory } from "social-media-plugin";
import { Actions, Repositories, Resources } from "social-media-plugin/lib/enums/generals";
import { GoogleCredentials } from "./env.config";

// Class definition for managing YouTube channel operations
class YoutubeChannelManager {
    private accessToken;
    private channelId;

    // Constructor to initialize the access token and channel ID
    constructor() {
        this.accessToken = GoogleCredentials.accessToken;
        this.channelId = GoogleCredentials.channelId;
    }

    // Method to generate Google authentication URL
    public async getGoogleAuthUrl(): Promise<string | null> {
        // Retrieving client ID, redirect URI, and scope from GoogleCredentials
        const clientId = GoogleCredentials.clientID;
        const redirectUri = GoogleCredentials.redirectUri;
        const scope = GoogleCredentials.scope;
        
        // Creating a factory instance for generating the authentication URL
        const factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.auth,
            action: Actions.generateAuthUrl,
            payload: {
                clientId,
                redirectUri,
                scope
            }
        });

        try {
            // Performing the operation and returning the authentication URL
            const url: string = await factory.operate();
            return url;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error occurred while getting Google authentication URL:", error);
            return null;
        }
    }

    // Method to generate Google access token
    public async getGoogleAccessToken(): Promise<string | null> {
        // Retrieving client ID, redirect URI, code, and client secret from GoogleCredentials
        const clientId = GoogleCredentials.clientID;
        const redirectUri = GoogleCredentials.redirectUri;
        const code = "4%2F0AeaYSHBdmnfCe5iHHOzXdi0ASFXLzAhpo-PPh5BYTwyEOE0K7Ad7OSrURyZcBBKzRBmLIw";
        const clientSecret = GoogleCredentials.clientSecret;
        
        // Creating a factory instance for generating the access token
        const factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.auth,
            action: Actions.generateToken,
            payload: {
                clientId,
                redirectUri,
                clientSecret,
                code
            }
        });

        try {
            // Performing the operation and returning the access token
            const token: string = await factory.operate();
            return token;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error occurred while getting Google access token:", error);
            return null;
        }
    }

    // Method to refresh Google access token using a refresh token
    public async getGoogleAccessTokenWithRefreshToken(): Promise<string | null> {
        // Retrieving client ID, redirect URI, refresh token, and client secret from GoogleCredentials
        const clientId = GoogleCredentials.clientID;
        const redirectUri = GoogleCredentials.redirectUri;
        const refreshToken = GoogleCredentials.refreshToken;
        const clientSecret = GoogleCredentials.clientSecret;
        
        // Creating a factory instance for refreshing the access token
        const factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.auth,
            action: Actions.refreshAccessToken,
            payload: {
                clientId,
                redirectUri,
                clientSecret,
                refreshToken
            }
        });

        try {
            // Performing the operation and returning the refreshed access token
            const token: string = await factory.operate();
            return token;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error occurred while refreshing Google access token:", error);
            return null;
        }
    }

    // Method to fetch YouTube channel details
    public async getYoutubeChannelDetails() {
        // Using the access token and channel ID to fetch channel details
        const accessToken = this.accessToken;
        const params = { id: true, statistics: true, contentDetails: true, snippet: true, status: true };
        
        // Creating a factory instance for fetching the channel details
        const factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.youtube,
            action: Actions.channelDetails,
            payload: {
                accessToken,
                params
            }
        });

        try {
            // Performing the operation and returning the channel details
            const details = await factory.operate();
            return details;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error occurred while getting YouTube channel details:", error);
            return null;
        }
    }

    // Method to fetch YouTube channel subscriptions
    public async getYoutubeChannelSubscriptions() {
        // Using the channel ID and access token to fetch channel subscriptions
        const channelId = this.channelId;
        const accessToken = this.accessToken;
        const params = { id: true };
        
        // Creating a factory instance for fetching the channel subscriptions
        const factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.youtube,
            action: Actions.channelSubscriptions,
            payload: {
                channelId,
                accessToken,
                params
            }
        });

        try {
            // Performing the operation and returning the channel subscriptions
            const subscriptions = await factory.operate();
            return subscriptions;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error occurred while getting YouTube channel subscriptions:", error);
            return null;
        }
    }

    // Method to fetch YouTube channel playlists
    public async getYoutubeChannelPlaylists() {
        // Using the channel ID and access token to fetch channel playlists
        const channelId = this.channelId;
        const accessToken = this.accessToken;
        const params = { id: true };
        
        // Creating a factory instance for fetching the channel playlists
        const factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.youtube,
            action: Actions.channelPlaylists,
            payload: {
                channelId,
                accessToken,
                params
            }
        });

        try {
            // Performing the operation and returning the channel playlists
            const playlists = await factory.operate();
            return playlists;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error occurred while getting YouTube channel playlists:", error);
            return null;
        }
    }
    
    // Method to fetch YouTube channel videos
    public async getYoutubeChannelVideos() {
        // Using the channel ID and access token to fetch channel videos
        const channelId = GoogleCredentials.channelId;
        const accessToken = GoogleCredentials.accessToken;
        const params = { id: true };
        
        // Creating a factory instance for fetching the channel videos
        const factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.youtube,
            action: Actions.channelVideos,
            payload: {
                channelId,
                accessToken,
                params
            }
        });
        
        try {
            // Performing the operation and returning the channel videos
            const videos = await factory.operate();
            return videos;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error occurred while getting YouTube channel videos:", error);
            return null;
        }
    }
    
    // Method to fetch details of a specific YouTube video
    public async getYoutubeChannelVideoDetails() {
        // Using the video ID and access token to fetch video details
        const videoId = GoogleCredentials.videoId;
        const accessToken = GoogleCredentials.accessToken;
        const params = { fileDetails: true, statistics: true };
        
        // Creating a factory instance for fetching the video details
        const factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.youtube,
            action: Actions.channelVideoDetails,
            payload: {
                videoId,
                accessToken,
                params
            }
        });
        
        try {
            // Performing the operation and returning the video details
            const videoDetails = await factory.operate();
            return videoDetails;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error occurred while getting video details:", error);
            return null;
        }
    }

    // Method to fetch YouTube channel activities
    public async getYoutubeChannelActivities() {
        // Using the channel ID and access token to fetch channel activities
        const channelId = this.channelId;
        const accessToken = this.accessToken;
        const params = { id: true, contentDetails: true };
        
        // Creating a factory instance for fetching the channel activities
        const factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.youtube,
            action: Actions.channelActivities,
            payload: {
                channelId,
                accessToken,
                params
            }
        });

        try {
            // Performing the operation and returning the channel activities
            const activities = await factory.operate();
            return activities;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error occurred while getting channel activities:", error);
            return null;
        }
    }
}

// Exporting the YoutubeChannelManager class for use in other modules
export default YoutubeChannelManager;
