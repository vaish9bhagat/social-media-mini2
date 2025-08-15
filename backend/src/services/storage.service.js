var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL
});


const uploadfile = async (file, filename) => {

    try {
        const response = await imagekit.upload({
            file: file.buffer,
            fileName: filename,
            folder: "caption-gen"
        })

        return response.url;

    } catch (error) {
        console.log(error);

    }

}

module.exports = uploadfile;