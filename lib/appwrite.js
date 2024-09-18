import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.karthikdev.aora',
    projectID: '66e92724001bc6307419',
    databaseID: '66e929a1002ef06009e5',
    userCollectionID: '66e929db002e4270780a',
    videosCollectionID: '66e92a11002cd863bce3',
    storageID: '66e92bb00001421faed2'
}

const client = new Client(); 

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectID)
    .setPlatform(appwriteConfig.platform)

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

//creating user//
export async function createUser (email, password, username){
    try{
        const newAccout = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccout) throw Error;

        const avatarURL = avatars.getInitials(username)

        //calling the sign in//
        await signIn(email, password)

        const newUser = await databases.createDocument(
            ID.unique(),
            appwriteConfig.databaseID,
            appwriteConfig.userCollectionID,
            {
                accountID: newAccout.$id,
                email,
                username,
                avatar: avatarURL
            }
        )
        return newUser;
    }
    catch(error){
        console.log(error);
        throw new Error(error)
    }
}

//Sign in method//
export async function signIn (email, password) {
    try {
        await account.deleteSession('current');
        const session = await account.createEmailPasswordSession(email, password);
        return session;
      } catch (retryError) {
        console.error('Retry error during sign-in:', retryError.message);
        throw new Error(retryError);
      }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseID,
            appwriteConfig.userCollectionID,
            [Query.equal('accountID', currentAccount.$id)]
        )
        if(!currentUser) throw Error;

        return currentUser.documents[0];
    }
    catch (error){
        console.log(error);
        
    }
}