const express = require('express')
const router = express.Router()

const story = {
    "storyTitle": "The Time I Biked From Hoboken to Montclair",
    "story": "Once upon a time, a childhood friend invited me to go see a Fetty Wap concert. Now, though I harbor little respect for an artist like Fetty Wap, I seldom got the chance to hang out with this childhood friend, and it provided me an opportunity to get out of Hoboken for a while and mix up my otherwise stale lifestyle. Thus, I agreed. But the concert was in Montclair, and I was in Hoboken. I checked public transportation first, but it involved three separate transfers, and I would have to take a bus instead of a train, and I abhor buses. I checked rideshare apps like Lyft and Uber, but both yielded prices that my wallet was not worthy of. Hence, I decided to hop on my trusty Brompton and bike all the way there. I was relatively new to biking at the time, but I was excited to put my new expensive bicycle to a true test of endurance and I couldn't think of a better way to get to Montclair. So I set off!\nI trusted Google Maps would take me on a scenic, idyllic route, from whence I could listen to the birds chirp and feel the pebbles bounce off my tires as I rode along. However, this was not the case. Google Maps leaves lots of critical information out for bikers. Nevertheless, I powered through the pain and the discomfort and the tripping, and arrived in Montclair in one piece! As I arrived at my friend's home, he shined a flashlight in my face and recorded my arrival for his Snapchat followers. He showered both surprise and ridicule and respect at my cyclical adventure."
}

router.get("/", (req, res) => {
    try {
        res.json(story)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
