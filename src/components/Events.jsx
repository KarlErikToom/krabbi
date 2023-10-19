import React from 'react'

function Events() {
  return (
    <section id='events'>
        <div className="container">
            <div className="row">
                <h1 className="header">Upcoming Events</h1>
                <div className="events__wrapper">
                    <div className="event">
                        <h2 className="event__title">Event Title</h2>
                        <p className="event__description">Opening event for our new bar, drinks 20%off and bring an animal or something idk</p>
                        <p className="event__time">23.November 2024</p>
                    </div>
                    <div className="event">
                        <h2 className="event__title">Event Title</h2>
                        <p className="event__description">Opening event for our new bar</p>
                        <p className="event__time">23.November 2024</p>
                    </div>
                    <div className="event">
                        <h2 className="event__title">Event Title</h2>
                        <p className="event__description">Opening event for our new bar</p>
                        <p className="event__time">23.November 2024</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Events