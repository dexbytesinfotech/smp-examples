// Importing necessary modules and enums from the social-media-plugin package
import { SMPFactory } from "social-media-plugin";
import { Actions, Repositories, Resources } from "social-media-plugin/lib/enums/generals";
import { MetaCredentials, MetaPermissions } from "./env.config";

// Class definition for managing Facebook page operations
class FacebookPageManager {

    // Method to generate Meta authentication URL
    public async getMetaAuthUrl() {
        // Retrieving client ID and redirect URI from MetaCredentials
        const clientId = MetaCredentials.clientId;
        const redirectUri = MetaCredentials.redirectUri;
        // Retrieving permissions from MetaPermissions
        const permissions = MetaPermissions;
        
        // Creating a factory instance for generating the authentication URL
        const authUrlFactory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.auth,
            action: Actions.generateAuthUrl,
            payload: {
                clientId,
                redirectUri,
                permissions
            }
        });
        try {
            // Performing the operation and returning the authentication URL
            const authUrl = await authUrlFactory.operate();
            return authUrl;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error generating Auth URL:", error);
        }
    }

    // Method to generate a long-lived access token
    public async getLongLivedAccessToken() {
        // Retrieving client ID, client secret, and mock user access token from MetaCredentials
        const clientId = MetaCredentials.clientId;
        const clientSecret = MetaCredentials.clientSecret;
        const mockUserAccessToken = MetaCredentials.accessToken;
        
        // Creating a factory instance for generating the long-lived access token
        const factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.auth,
            action: Actions.generateToken,
            payload: {
                clientId,
                clientSecret,
                userAccessToken: mockUserAccessToken
            }
        });
        try {
            // Performing the operation and returning the long-lived access token
            const accessToken = await factory.operate();
            return accessToken;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error", error);
        }
    }

    // Method to fetch the user ID associated with the access token
    public async getUserId() {
        // Retrieving the long-lived access token from MetaCredentials
        const accessToken = MetaCredentials.longLivedAccessToken;
        
        // Creating a factory instance for fetching the user ID
        const factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookPageId,
            payload: {
                accessToken
            }
        });
        try {
            // Performing the operation and returning the user ID
            const userId = await factory.operate();
            return userId;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error", error);
        }
    }

    // Method to fetch basic details of the Facebook page
    public async getPageBasicDetails() {
        // Retrieving the long-lived access token and page ID from MetaCredentials
        const accessToken = MetaCredentials.longLivedAccessToken;
        const pageId = MetaCredentials.pageId;
        
        // Creating a factory instance for fetching the page basic details
        const factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookPageDetails,
            payload: {
                accessToken,
                pageId
            }
        });
        try {
            // Performing the operation and returning the page basic details
            const BasicDetails = await factory.operate();
            return BasicDetails;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error", error);
        }
    }

    // Method to fetch the page access token
    public async getPageAccessToken() {
        // Retrieving the long-lived access token and page ID from MetaCredentials
        const accessToken = MetaCredentials.longLivedAccessToken;
        const pageId = MetaCredentials.pageId;
        
        // Creating a factory instance for fetching the page access token
        const factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookPageToken,
            payload: {
                accessToken,
                pageId
            }
        });
        try {
            // Performing the operation and returning the page access token
            const data = await factory.operate();
            return data;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error", error);
        }
    }

    // Method to fetch events associated with the Facebook page
    public async getPageEvents() {
        // Retrieving the page access token and page ID from MetaCredentials
        const accessToken = MetaCredentials.pageAccessToken;
        const pageId = MetaCredentials.pageId;
        // Defining parameters for the request
        const params = { category: true, id: true, picture: true };
        
        // Creating a factory instance for fetching the page events
        const factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookEvents,
            payload: {
                accessToken,
                pageId,
                params
            }
        });
        try {
            // Performing the operation and returning the page events
            const data = await factory.operate();
            return data;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error", error);
        }
    }
    
    // Method to fetch posts associated with the Facebook page
    public async getPagePosts() {
        // Retrieving the page access token and page ID from MetaCredentials
        const accessToken = MetaCredentials.pageAccessToken;
        const pageId = MetaCredentials.pageId;
        // Defining parameters for the request
        const params = { id: true };
        
        // Creating a factory instance for fetching the page posts
        const factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookPosts,
            payload: {
                accessToken,
                pageId,
                params
            }
        });
        try {
            // Performing the operation and returning the page posts
            const data = await factory.operate();
            return data;
        } catch (error) {
            // Logging any errors that occur during the operation
            console.error("Error", error);
        }
    }
}

// Exporting the FacebookPageManager class for use in other modules
export default FacebookPageManager;
