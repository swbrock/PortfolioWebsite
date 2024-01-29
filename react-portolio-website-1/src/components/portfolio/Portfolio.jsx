import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/temple.jpg'
import IMG2 from '../../assets/byu.jpg'
import IMG3 from '../../assets/jazz.jpg'
import IMG4 from '../../assets/utes.jpg'
import IMG5 from '../../assets/temple1.jpg'
import IMG6 from '../../assets/dolphins.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Temple',
        github: 'https://github.com/swbrock',
        demo: 'https://espn.go.com'

    },
    {
        id: 2,
        image: IMG2,
        title: 'BYU',
        github: 'https://github.com/swbrock',
        demo: 'https://espn.go.com'

    },
    {
        id: 3,
        image: IMG3,
        title: 'Jazz',
        github: 'https://github.com/swbrock',
        demo: 'https://espn.go.com'

    },
    {
        id: 4,
        image: IMG4,
        title: 'Utes',
        github: 'https://github.com/swbrock',
        demo: 'https://espn.go.com'

    },
    {
        id: 5,
        image: IMG5,
        title: 'Temple 1',
        github: 'https://github.com/swbrock',
        demo: 'https://espn.go.com'

    },
    {
        id: 6,
        image: IMG6,
        title: 'Dolphins',
        github: 'https://github.com/swbrock',
        demo: 'https://espn.go.com'

    },

]

const Portfolio = () => {
    return (
        <section id='portfolio' className='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio