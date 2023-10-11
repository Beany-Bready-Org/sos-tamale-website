const maxParagragphLength = 150
const truncate = (string) => {
    if (string.length > maxParagragphLength) {
        return string = `${string.slice(0, maxParagragphLength)}...`
    } else {
        return string
    }
}

export default {truncate}