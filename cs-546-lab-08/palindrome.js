module.exports = {
    async is_pal(text) {
        if (!text) throw "No text passed"
        if (!(typeof text == 'string')) throw "input of invalid type"
        const stripped = text.split(/[^a-zA-Z0-9]| /).join('').toLowerCase()
        return stripped === stripped.split('').reverse().join('')
    }
}
