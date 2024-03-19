import dotenv from 'dotenv';
dotenv.config();

export const GoogleCredentials ={
    clientID:process.env.GOOGLE_CLIENT_ID,
    redirectUri:process.env.GOOGLE_REDIRECT_URI,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    scope:process.env.GOOGLE_SCOPE,
    refreshToken:process.env.GOOGLE_REFRESH_TOKEN,
    accessToken:process.env.GOOGLE_ACCESS_TOKEN,
    channelId :process.env.YOUTUBE_CHANNEL_ID,
    playlistId:process.env.PLAYLIST_ID,
    videoId:process.env.VIDEO_ID
}

export const MetaCredentials={
    clientId:process.env.META_CLIENT_ID,
    redirectUri:process.env.META_REDIRECT_URI,
    clientSecret:process.env.META_CLIENT_SECRET,
    accessToken:process.env.META_ACCESS_TOKEN,
    longLivedAccessToken:process.env.META_LONG_LIVED_ACCESSTOKEN,
    pageId:process.env.META_PAGE_ID,
    pageAccessToken:process.env.META_FACEBOOK_PAGE_ACCESS_TOKEN,
    userId:process.env.META_INSTAGRAM_ID

}

export const MetaPermissions = [
    "email",
    "manage_fundraisers",
    "read_insights",
    "publish_video",
    "catalog_management",
    "pages_manage_cta",
    "pages_manage_instant_articles",
    "pages_show_list",
    "read_page_mailboxes",
    "ads_management",
    "ads_read",
    "business_management",
    "pages_messaging",
    "pages_messaging_subscriptions",
    "instagram_basic",
    "instagram_manage_comments",
    "instagram_manage_insights",
    "instagram_content_publish",
    "leads_retrieval",
    "whatsapp_business_management",
    "instagram_manage_messages",
    "page_events",
    "pages_read_engagement",
    "pages_manage_metadata",
    "pages_read_user_content",
    "pages_manage_ads",
    "pages_manage_posts",
    "pages_manage_engagement",
    "whatsapp_business_messaging",
    "instagram_shopping_tag_products",
    "instagram_manage_events"
];
