// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S: string): string {
    // Parse individual photos from big string
    const photoRows = S.split('\n')

    // Parse photo row text to objects that have all the data that we need
    const photoObjects = photoRows.map((photo) => {
        const photoParts = photo.split(', ')
        const name = photoParts[0]
        const extension = name.split('.')[1]
        const city = photoParts[1]
        const timestamp = photoParts[2]
        return {
            originalName: photo,
            name,
            extension,
            city,
            timestamp: new Date(timestamp)
        }
    })

    // Group the photos by city they were taken
    const photosByCity = new Map<string, Array<Photo>>()
    photoObjects.forEach((photo) => {
        if (photosByCity.has(photo.city)) {
            photosByCity.get(photo.city).push(photo)
        } else {
            photosByCity.set(photo.city, [photo])
        }
    })
    
    // Sort the photos by date within cities and find largest number of photos
    photosByCity.forEach((cityPhotos) => {
        cityPhotos.sort((a,b) => a.timestamp.getTime()-b.timestamp.getTime())
    })

    // Create new array of filenames in original order
    const newPhotoNames = photoObjects.map((photo) => {
        // Get the sorted array for the current city
        const photosForCity = photosByCity.get(photo.city)

        // Find the number for the current photo from its sorting position
        const indexNumber = photosForCity.findIndex((photoByCity) => {
                return photo.originalName == photoByCity.originalName
            }) + 1

        // Find how many digits needed and add leading 0s
        const digitsNeeded = photosForCity.length.toString().length
        let photoNumberString = indexNumber.toString()
        while (photoNumberString.length < digitsNeeded) {
            photoNumberString = 0 + photoNumberString
        }

        // Return formatted filename 
        return `${photo.city}${photoNumberString}.${photo.extension}`
    })

    // Return array of formatted names joined by new lines
    return newPhotoNames.join('\n')
}

/*
Interface for storing and accessing parsed photo data
*/
interface Photo {
    originalName: string,
    name: string,
    extension: string,
    city: string,
    timestamp: Date
}
