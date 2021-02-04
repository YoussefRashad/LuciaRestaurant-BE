
const router = require('express').Router()

const Slider = ['', '', '', '', '', '', '']
const Gallery = [
    "https://drive.google.com/thumbnail?id=1_FlkANRYkS0bU7Tdl0ZnpL7uaXNWosDs",
    "https://drive.google.com/thumbnail?id=1fL3fKKwFegeysOm6BiusYmi56cm-BkXC",
    "https://drive.google.com/thumbnail?id=1n5eNXip_UUfcqC_nQNGj9Wg2WXmGavKK",
    "https://drive.google.com/thumbnail?id=1PWD32KiwW35f0SI2222Nc8eRcM2DOuTV",
    "https://drive.google.com/thumbnail?id=1FlsjFixsqyxffxlmo7VuXUfuo3Oa8z8B"
]
const AboutUs = {
    images: [
        'https://drive.google.com/thumbnail?id=1eWfnrGMeit_rh-vOi_UOOZDJ6ZEnl8g1', 
        'https://drive.google.com/thumbnail?id=15QhTkiryPwC1rBlxY9yk0O7Qk3ztX24-', 
        'https://drive.google.com/thumbnail?id=1kBYjUJFYyilclpdS5IP-H46L4qAFDOSk'
    ],
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate"
}
const AboutInfo = [
    {
        image: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam quisquam ipsa fuga asperiores! Blanditiis, veritatis cumque? Expedita quidem accusamus iste et rem asperiores! Mollitia perspiciatis pariatur rem blanditiis rerum cum voluptatem earum fugiat possimus, soluta aliquid! Optio sunt consequatur nisi nam corporis iure, ab nobis aliquam, placeat in maxime ad maiores dolorum vel repudiandae consectetur, tempore aspernatur? Quasi qui, praesentium ea quia facilis maiores dolor. Eligendi, blanditiis eum. Sit?'
    },
    {
        image: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed sapiente ut voluptatum doloremque quis voluptatibus. Natus nemo est autem enim repellat. Voluptatibus illum consectetur repudiandae cumque commodi fugiat ducimus amet consequuntur perferendis, dolores autem quaerat sequi ex debitis porro distinctio culpa laudantium, placeat a voluptates eius unde, reprehenderit quo non. Autem sed, facilis a quaerat voluptate officiis ab est debitis corrupti? Animi accusamus provident quasi sed pariatur, eveniet nemo.'
    },
    {
        image: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, esse sint ipsa debitis voluptas doloremque iusto quo ab quis quidem consequatur quisquam! Aliquid necessitatibus omnis neque architecto ea hic voluptates atque veniam commodi dolor consequatur in ipsum eveniet totam nam maiores fugit possimus nemo deleniti dignissimos, iusto ad libero vero! Nesciunt eveniet odit accusantium tempora quae deleniti, aperiam quam fuga dolor consequatur velit quia eius officia exercitationem aliquam quaerat voluptatum!'
    }
]

router.get('/slider', (req, res) => {
    res.send(Slider)
})

router.get('/gallery', (req, res) => {
    res.send(Gallery)
})

router.get('/aboutUs', (req, res) => {
    res.send(AboutUs)
})

router.get('/aboutInfo', (req, res) => {
    res.send(AboutInfo)
})

module.exports = router