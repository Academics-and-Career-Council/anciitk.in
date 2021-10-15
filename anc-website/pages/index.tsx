import type { NextPage } from 'next'
import img from '../public/1.png'
const Home: NextPage = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center vw-100"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          height: '100vh',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        <div className="card text-center  bg-dark text-light rounded" style={{ width: '18rem' }}>
          <div className="card-body">
            <h3 className="card-title">About Us</h3>
            <p className="card-text text-wrap text-start">The Academics and Career Council of the Indian Institute of Technology, Kanpur is a council directly placed under the Student's Gymkhana, that aims to foster all needs related to academics and research for the campus dwellers.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center my-1"
        style={{
          backgroundColor: '#F2F2F2',
        }}
      >
        <h1>Goals</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col my-2">
          <div className="card text-light rounded-4 h-100" style={{
            backgroundColor: 'black',
            }}>
            <div className="card-body">
              <h4 className="card-title text-decoration-underline">UG/PG Academics</h4>
              <p className="card-text text-start">The UG/PG Academics Wing takes up the responsibility of the academics related work of the Academic and Career Council. It acts as an interface between the institute policy makers and the students on matters related to academia.</p>
            </div>
          </div>
          </div>
          <div className="col my-2">
          <div className="card text-light rounded-4 h-100" style={{
            backgroundColor: 'black',
            }}>
            <div className="card-body">
              <h4 className="card-title text-decoration-underline">Research</h4>
              <p className="card-text text-start">The Research Wing of the council aims at cultivating and promoting research interests in the student community, by providing the freedom and opportunities to work upon diverse areas of research.</p>
            </div>
          </div>
          </div>
          <div className="col my-2">
          <div className="card text-light rounded-4 h-100" style={{
            backgroundColor: 'black',
            }}>
            <div className="card-body">
              <h4 className="card-title text-decoration-underline">Int. Relations</h4>
              <p className="card-text text-start">The International Relations Wing works in close association with the Office of International Relations (OIR), IIT Kanpur to improve collaborations of the Institute and its foreign counterparts.</p>
            </div>
          </div>
          </div>
          <div className="col my-2">
          <div className="card text-light rounded-4 h-100" style={{
            backgroundColor: 'black',
            }}>
            <div className="card-body">
              <h4 className="card-title text-decoration-underline">Career Development</h4>
              <p className="card-text text-start">The Career Development Wing of the Council, with the mandate of Career Development of students, shall provide an extraordinary boost in regard to Career Aspects.</p>
            </div>
          </div>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default Home
