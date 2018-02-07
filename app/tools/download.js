import axios from 'axios'
import cheerio from 'cheerio'

let download = async (url, res) => {
    if (!url) return res.status(400).send(`${res.statusCode}: Bad Request.`)

    try {
        let _r = await axios({
            url,
            method: 'GET'
        })

        let array_download = []
        let $ = cheerio.load(_r.data)
        
        $('#downloadlink2 b a').each((i, elem) => {
            let link = $(elem).attr('href')
            let arr = link.split(' ')

            array_download.push({
                link: link.replace(/ /g, '%20'),
                label: arr[1].substring(0, arr[1].indexOf('.')).replace(/\[/g, '').replace(/\]/g, '')
            })
        })

        return res.status(200).send(array_download)
    } catch (_e) {
        return res.status(200).send(_e)
    }
}

export default download