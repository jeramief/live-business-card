import Profile from "../assets/images/profile.png"

export default function Info() {
	return (
		<div className="info">
			<img className="profile" src={Profile}  alt="profile photo" />
			<h1>Jeramie Forbes</h1>
			<h3>Software Engineer</h3>
			<a className="portfolio" href="https://jeramieforbes.netlify.app/" target="_blank" rel="noopener noreferrer">Personal Website</a>
			<div className="buttons">
				<a className="email" href="mailto:forbesjeramie@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i> Email</a>
				<a className="linkedin" href="https://www.linkedin.com/in/jeramieforbes/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
			</div>
		</div>
	)
}