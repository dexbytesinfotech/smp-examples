// Importing necessary modules and enums from the social-media-plugin package
import { SMPFactory } from "social-media-plugin";
import { Actions, Repositories, Resources } from "social-media-plugin/lib/enums/generals";
import { MetaCredentials } from "./env.config";

// Class definition for managing Instagram account operations
class InstagramAccountManager {
    // Method to fetch Instagram account details
    public async getAccountDetails() {
        // Retrieving user ID and access token from MetaCredentials
        const userId = MetaCredentials.userId;
        const accessToken = MetaCredentials.longLivedAccessToken;
        // Defining parameters for the request
        const params = { followersCount: true, followsCount: true, mediaCount: true, profilePicture: true };
        
        // Creating a factory instance for the Instagram account details operation
        const factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.instagram,
            action: Actions.instagramDetails,
            payload: {
                accessToken,
                userId,
                params
            }
        });
        try {
            // Performing the operation and returning the data
            const data = await factory.operate();
            return data;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error", error);
        }
    }

    // Method to fetch Instagram media
    public async getMedia() {
        // Retrieving user ID and access token from MetaCredentials
        const userId = MetaCredentials.userId;
        const accessToken = MetaCredentials.longLivedAccessToken;
        // Defining parameters for the request
        const params = { likeCount: true, id: true, username: true, mediaUrl: true };
        
        // Creating a factory instance for the Instagram media operation
        const factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.instagram,
            action: Actions.instagramMedia,
            payload: {
                accessToken,
                userId,
                params
            }
        });
        try {
            // Performing the operation and returning the data
            const data = await factory.operate();
            return data;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error", error);
        }
    }

    // Method to fetch Instagram stories
    public async getStories() {
        // Retrieving user ID and access token from MetaCredentials
        const userId = MetaCredentials.userId;
        const accessToken = MetaCredentials.longLivedAccessToken;
        // Defining parameters for the request
        const params = { mediaUrl: true, id: true, commentsCount: true };
        
        // Creating a factory instance for the Instagram stories operation
        const factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.instagram,
            action: Actions.instagramMedia,
            payload: {
                accessToken,
                userId,
                params
            }
        });
        try {
            // Performing the operation and returning the data
            const data = await factory.operate();
            return data;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error", error);
        }
    }
}

// Exporting the InstagramAccountManager class for use in other modules
export default InstagramAccountManager;
