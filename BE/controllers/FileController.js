const { checkCreateUploadsFolder, checkAcceptedExtensions } = require('../utility/FileUtility');
var cloudinary = require('cloudinary');
var {join} = require('path');
const Formidable = require('formidable')
const bluebird = require('bluebird')
var fs = require('fs');
const UserService = require('../services/UserService');
var fs = bluebird.promisifyAll(require('fs'))

cloudinary.config({ 
    cloud_name: 'ai2021strficek', //reemplazar con sus credenciales
    api_key: '457458812147342', 
    api_secret: 'w1aErdpyvu_Cs5pUzkNgSMWleWc'
});

exports.uploadFile = async function(req, res) {
    let form = Formidable.IncomingForm()
    const uploadsFolder = process.env.UPLOAD_DIR

    form.multiples = false
    form.uploadDir = uploadsFolder
    form.maxFileSize = 50 * 1024 * 1024 // 50 MB

    // Check if folder exists
    const folderCreationResult = await checkCreateUploadsFolder(uploadsFolder)
    if (!folderCreationResult) {
        return res.json({ok: false, msg: "The uploads folder couldn't be created"})
    }

    form.parse(req, async (err, fields, files) => {
		let myUploadedFiles = []
		if (err) {
			console.log('Error parsing the incoming form',err)
			return res.json({ok: false, msg: 'Error passing the incoming form'})
		}

		const file = files.files
        if (!checkAcceptedExtensions(file)) {
            console.log('The received file is not a valid type')
            return res.json({ok: false, msg: 'The sent file is not a valid type'})
        }

        const fileName = encodeURIComponent(file.name.replace(/&. *;+/g, '-'))
        myUploadedFiles.push(fileName)
        try {
            await fs.renameAsync(file.path, join(uploadsFolder, fileName))
        } catch (e) {
            console.log('Error uploading the file')
            try { await fs.unlinkAsync(file.path) } catch (e) {}
            return res.json({ok: false, msg: 'Error uploading the file'})
        }	
        
        try{
            // Upload to Cludinary
            let imagen = process.env.UPLOAD_DIR + fileName;
            cloudinary.uploader.upload(imagen, function(result) { 
                console.log("Resultado",result);
                UserService.updateImage(result.url, fields.id)
                res.json({ok: true, msg: 'Files uploaded succesfully!', files: result.url})
            });

        } catch {
            return res.json({ok: false, msg: 'Error uploading to cloudinary'})
        }    
	})    
}

exports.uploadStudyFile = async function(req, res) {
    let form = Formidable.IncomingForm()
    const uploadsFolder = process.env.UPLOAD_DIR

    form.multiples = false
    form.uploadDir = uploadsFolder
    form.maxFileSize = 50 * 1024 * 1024 // 50 MB

    // Check if folder exists
    const folderCreationResult = await checkCreateUploadsFolder(uploadsFolder)
    if (!folderCreationResult) {
        return res.json({ok: false, msg: "The uploads folder couldn't be created"})
    }

    form.parse(req, async (err, fields, files) => {
        let myUploadedFiles = []
        if (err) {
            console.log('Error parsing the incoming form',err)
            return res.json({ok: false, msg: 'Error passing the incoming form'})
        }

        const file = files.files
        if (!checkAcceptedExtensions(file)) {
            console.log('The received file is not a valid type')
            return res.json({ok: false, msg: 'The sent file is not a valid type'})
        }

        const fileName = encodeURIComponent(file.name.replace(/&. *;+/g, '-'))
        myUploadedFiles.push(fileName)
        try {
            await fs.renameAsync(file.path, join(uploadsFolder, fileName))
        } catch (e) {
            console.log('Error uploading the file')
            try { await fs.unlinkAsync(file.path) } catch (e) {}
            return res.json({ok: false, msg: 'Error uploading the file'})
        }	
        
        try{
            // Upload to Cludinary
            let imagen = process.env.UPLOAD_DIR + fileName;

            try{
                cloudinary.uploader.upload(imagen, function(result) {                                
                    res.json({ok: true, msg: 'Files uploaded succesfully!', files: result.url})
                });
            } catch(errror) {
                console.log(errror)
            }            

        } catch {
            return res.json({ok: false, msg: 'Error uploading to cloudinary'})
        }    
    })
}
