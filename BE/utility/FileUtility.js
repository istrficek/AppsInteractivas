const bluebird = require('bluebird')
var fs = require('fs');
var fs = bluebird.promisifyAll(require('fs'))

exports.checkCreateUploadsFolder = async function(uploadsFolder) {
    try 
    {
		await fs.statAsync(uploadsFolder)
    } 
    catch (e) 
    {
        if (e && e.code == 'ENOENT') 
        {
			console.log('The uploads folder doesn\'t exist, creating a new one...')
            try 
            {
				await fs.mkdirAsync(uploadsFolder)
            } 
            catch (err) 
            {
				console.log('Error creating the uploads folder 1')
				return false
			}
        } 
        else 
        {
			console.log('Error creating the uploads folder 2')
			return false
		}
	}
	return true
}

exports.checkAcceptedExtensions = function(file) 
{
	const type = file.type.split('/').pop()
	const accepted = ['jpeg', 'jpg', 'png', 'gif', 'pdf','webp']
	if (accepted.indexOf(type) == -1) {
		return false
	}
	return true
}