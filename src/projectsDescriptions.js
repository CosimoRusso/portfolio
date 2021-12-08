const projects = [{
    name: 'Foodramble',
    url: 'https://www.foodramble.com/',
    image: 'foodramble.jpg',
    text: 'A website to explore and book hiking experiences in Italy. The fronted is a React website that ' +
        'dynamically loads the information on the several tours available and allows users to pay for the ticket by ' +
        'exploiting a NodeJS API, which stores the data in a Postgres database. The entire project is deployed on a VPS and the ' +
        'several components are isolated inside Docker containers'
},{
    name: 'Menuale',
    url: 'http://menuale.com/',
    image: 'menuale.jpg',
    text: 'A small static website to show the various real estate projects developed by the company. Using Bootstrap, I implemented the mockup ideated by the company designer'
}, {
    name: 'MatchUp',
    url: 'https://pladat.tk/',
    image: 'pladat.png',
    text: 'This website lets students find internships within companies. It is a university project born from a collaboration between Politecnico di Milano (Italy) and Mälardalen University (Sweden). The website was developed by a team of 7 people and consists of a React frontend, a NodeJS API and a Postgres database. We were divided into 2 teams, frontend and backend. I am proud to say that I was the SCRUM master of the amazing group that implemented this project :)'
}
]

export default projects;