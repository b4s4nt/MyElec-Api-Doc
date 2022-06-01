interface GetImagesReturn {
    //Returns a Images dataset containing customer image information.
    "Image": {
        //Image details
        "KeyID": string,
        "AttachmentID": string,
        "PrimaryImage": boolean,
        "ImageFileLarge": string,
        "ImageFileSmall": string,
    }
}
